import { z } from 'zod';

export const schemas = {
  auth: {
    signin: z.object({
      email: z
        .string()
        .email({ message: 'Please enter a valid email address' }),
      password: z.string().min(1, { message: 'Password is required' }),
      remember: z.boolean().optional(),
    }),

    signup: z
      .object({
        familyName: z
          .string()
          .min(2, { message: 'First name must be at least 2 characters' })
          .max(32, { message: 'First name cannot exceed 32 characters' }),
        givenName: z
          .string()
          .min(2, { message: 'Last name must be at least 2 characters' })
          .max(32, { message: 'Last name cannot exceed 32 characters' }),
        email: z
          .string()
          .email({ message: 'Please enter a valid email address' }),
        password: z
          .string()
          .min(8, { message: 'Password must be at least 8 characters' })
          .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
            message:
              'Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character',
          }),
        passwordConfirm: z.string(),
      })
      .refine((data) => data.password === data.passwordConfirm, {
        path: ['passwordConfirm'],
        message: 'Passwords do not match',
      }),

    verification: z.object({
      otp: z.string().min(6, {
        message: 'Your one-time password must be 6 characters.',
      }),
    }),

    forgotPassword: z.object({
      email: z
        .string()
        .email({ message: 'Please enter a valid email address' }),
    }),

    resetPassword: z
      .object({
        newPassword: z
          .string()
          .min(1, 'Password is required')
          .min(8, 'Password must be at least 8 characters long')
          .regex(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            'Password must include at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.',
          ),
        confirmNewPassword: z.string(),
      })
      .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: 'Passwords do not match',
        path: ['confirmNewPassword'],
      }),

    passwordChange: z
      .object({
        currentPassword: z.string().min(1, 'Current password is required'),
        newPassword: z
          .string()
          .min(1, 'Password is required')
          .min(8, 'Password must be at least 8 characters long')
          .regex(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            'Password must include at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.',
          ),
        confirmNewPassword: z.string(),
      })
      .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: 'Passwords do not match',
        path: ['confirmNewPassword'],
      }),

    updateEmail: z
      .object({
        newEmail: z
          .string()
          .min(1, 'New email is required')
          .email('Enter a valid email address'),
        confirmEmail: z
          .string()
          .min(1, 'Confirm new email is required')
          .email('Enter a valid email address'),
        password: z.string().min(1, 'MUN password is required'),
      })
      .refine((data) => data.newEmail === data.confirmEmail, {
        path: ['confirmEmail'],
        message: 'Emails do not match',
      }),
  },
};
