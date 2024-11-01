import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../utils/validation';
import AuthInput from './AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router-dom';
import { changeStatus, loginUser } from '../../features/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signInSchema) });

  const onSubmit = async (data) => {
    try {
      dispatch(changeStatus('loading'));

      const res = await dispatch(loginUser(data));
      console.log("Login Response:", res); // Pour vérifier la réponse de l'API

      // Redirection vers la page d'accueil si la connexion est réussie
      if (res.meta.requestStatus === 'fulfilled' && res.payload.access_token) {
        navigate('/');
      } else {
        console.error("Erreur lors de la connexion de l'utilisateur:", res.error || "Réponse inattendue");
      }
    } catch (error) {
      console.error("Erreur dans onSubmit:", error);
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Container */}
      <div className='w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl'>
        {/* Heading */}
        <div className='text-center dark:text-dark_text_1'>
          <h2 className='mt-6 text-3xl font-bold'>Welcome Back</h2>
          <p className='mt-2 text-sm'>Sign in</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-6'>
          <AuthInput name='email' type='email' placeholder='Email' register={register} error={errors?.email?.message} />
          <AuthInput name='password' type='password' placeholder='Password' register={register} error={errors?.password?.message} />
          {/* Error Message */}
          {error && (
            <div><p className='text-red-400'>{error}</p></div>
          )}
          {/* Submit Button */}
          <button type='submit' className='w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none
            hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300'>
            {status === 'loading' ? <PulseLoader color='#fff' size={16} /> : 'Sign In'}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span>You do not have an account ?</span>
            <Link to='/register' className='hover:underline cursor-pointer transition ease-in duration-300'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
