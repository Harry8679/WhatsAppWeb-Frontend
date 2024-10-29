import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().required('Full name is required')
        .matches(/^[a-zA-Z_ ]*$/, 'No special characters allowed.')
        .min(2, 'Name must be between 2 and 16 characters.')
        .max(16, 'Name must be between 2 and 16 characters.'),

    email: Yup.string().required('Email address is required')
        .email('Invalid email address'),

    status: Yup.string().max(64, 'Status must be less than 64 characters.'),

    
});