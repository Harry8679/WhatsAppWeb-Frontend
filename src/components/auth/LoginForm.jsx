import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../utils/validation';
import AuthInput from './AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router-dom';
import { changeStatus, registerUser } from '../../features/userSlice';
import Picture from './Picture';
import axios from 'axios';


const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const cloud_secret = process.env.REACT_APP_CLOUD_SECRET;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(signUpSchema) });

  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState('');

  const onSubmit = async (data) => {
    try {
      let userData = { ...data };
      dispatch(changeStatus('loading'));
      
      if (picture) {
        const uploadData = await uploadImage(); // Récupère les données de l'upload
        userData.picture = uploadData.secure_url; // Ajoute le lien de l'image si l'upload réussit
      } else {
        userData.picture = ''; // Par défaut, l'image est vide
      }

      const res = await dispatch(registerUser(userData));
      // Vérifie si la réponse contient bien un user avant la navigation
      if (res.payload && res.payload.user) {
        navigate('/');
      } else {
        console.error("Erreur lors de l'enregistrement de l'utilisateur:", res.error || "Réponse inattendue");
      }
    } catch (error) {
      console.error("Erreur dans onSubmit:", error);
    }
  };

  console.log(picture, setPicture);
  console.log('values', watch());
  console.log('errors', errors);

  const uploadImage = async () => {
    try {
      let formData = new FormData();
      formData.append('upload_preset', cloud_secret);
      formData.append('file', picture);
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
      console.log(response.data); // Affiche la réponse pour vérifier les données
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'upload de l'image:", error.response?.data || error.message);
      throw error; // Relance l'erreur pour gestion plus haut si besoin
    }
  };
  

  return (
    <div className='min-h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Container */}
      <div className='w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl'>
        {/* Heading */}
        <div className='text-center dark:text-dark_text_1'>
            <h2 className='mt-6 text-3xl font-bold'>Welcome</h2>
            <p className='mt-2 text-sm'>Sign up</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-6'>
            {/* <input type="text" {...register('name')} /> */}
            <AuthInput name='name' type='text' placeholder='Full Name' register={register} error={errors?.name?.message} />
            <AuthInput name='email' type='email' placeholder='Email' register={register} error={errors?.email?.message} />
            <AuthInput name='status' type='text' placeholder='Status (Optional)' register={register} error={errors?.status?.message} />
            <AuthInput name='password' type='password' placeholder='Password' register={register} error={errors?.password?.message} />
            <Picture readablePicture={readablePicture} setPicture={setPicture} setReadablePicture={setReadablePicture} />
            {/* If we have an error */}
            {error ? (
                <div><p className='text-red-400'>{error}</p></div>
            ): null}
            {/* Submit Button */}
            <button type='submit' className='w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none
            hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300'>
                {status === 'loading' ? <PulseLoader color='#fff' size={16} /> : 'Sign Up'}
            </button>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
                <span>Have an account ?</span>
                <Link to='/login' className='hover:underline cursor-pointer transition ease-in duration-300'>Sign in</Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
