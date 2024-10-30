import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../utils/validation';
import AuthInput from './AuthInput';
import { useSelector } from 'react-redux';

const RegisterForm = () => {
  const { status } = useSelector((state) => state.user);
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(signUpSchema) });
  const onSubmit = (data) => console.log(data);
  console.log('values', watch());
  console.log('errors', errors);
  return (
    <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Container */}
      <div className='max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl'>
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
            <AuthInput name='status' type='text' placeholder='Status' register={register} error={errors?.status?.message} />
            <AuthInput name='password' type='password' placeholder='Password' register={register} error={errors?.password?.message} />
            <button type='submit' className='w-full flex justify-center bg-green_1 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none
            hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300'>{status === 'loading' ? 'Loading ...' : 'Sign Up'}</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
