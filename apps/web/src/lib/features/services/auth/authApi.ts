import { apiSlice } from '../../api/api';
import {
  Confirm2FARequest,
  ForgotPasswordRequest,
  Generate2FASetupResponse,
  GetProfileResponse,
  GetSessionsResponse,
  ResetPasswordRequest,
  SignupResponse,
  SinginRequest,
  SinginResponse,
  SingupRequest,
  SuccessResponse,
  Verify2FAOnSignRequest,
  VerifyEmailRequest,
} from '../../types';
import { signup } from './authSlice';

export const userAuthApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<SignupResponse, SingupRequest>({
      query: (body) => ({
        url: '/hub/auth/signup',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(signup({ token: data.data.token }));
        } catch (error) {
          console.log('Signup error:', error);
        }
      },
    }),

    verifyEmail: builder.mutation<SuccessResponse, VerifyEmailRequest>({
      query: ({ token, otp }) => ({
        url: '/hub/auth/verify-email',
        method: 'POST',
        body: { token, otp },
      }),
    }),

    signin: builder.mutation<SinginResponse, SinginRequest>({
      query: ({ email, password, remember }) => ({
        url: '/hub/auth/signin',
        method: 'POST',
        body: { email, password, remember },
      }),
      invalidatesTags: ['User'],
    }),

    signout: builder.mutation<SuccessResponse, void>({
      query: () => ({
        url: '/hub/auth/signout',
        method: 'POST',
      }),
      invalidatesTags: ['User', 'Sessions'],
    }),

    signoutSession: builder.mutation<SuccessResponse, string>({
      query: (token) => ({
        url: `/hub/auth/sessions/${token}/revoke`,
        method: 'POST',
      }),
      invalidatesTags: ['Sessions'],
    }),

    signoutAllSession: builder.mutation<SuccessResponse, void>({
      query: () => ({
        url: '/hub/auth/sessions/revoke-all',
        method: 'POST',
      }),
      invalidatesTags: ['Sessions'],
    }),

    refreshToken: builder.mutation<SuccessResponse, void>({
      query: () => ({
        url: '/hub/auth/refresh-token',
        method: 'POST',
      }),
    }),

    getProfile: builder.query<GetProfileResponse, void>({
      query: () => '/hub/auth/me',
      providesTags: ['User'],
      keepUnusedDataFor: 300,
    }),

    forgotPassword: builder.mutation<SinginResponse, ForgotPasswordRequest>({
      query: ({ email }) => ({
        url: '/hub/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),

    resetPassword: builder.mutation<SinginResponse, ResetPasswordRequest>({
      query: ({ token, newPassword, confirmNewPassword }) => ({
        url: `/hub/auth/reset-password/${token}`,
        method: 'PUT',
        body: { newPassword, confirmNewPassword },
      }),
    }),

    getSessions: builder.query<GetSessionsResponse, void>({
      query: () => '/hub/auth/sessions',
      providesTags: ['Sessions'],
    }),

    generate2FASetup: builder.query<Generate2FASetupResponse, void>({
      query: () => '/hub/auth/setup-2fa',
    }),

    verify2FAOnSign: builder.mutation<SuccessResponse, Verify2FAOnSignRequest>({
      query: ({ token }) => ({
        url: `/hub/auth/verify-2fa/${token}`,
        method: 'POST',
      }),
    }),

    confirm2FASetup: builder.mutation<SinginResponse, Confirm2FARequest>({
      query: ({ token, secret }) => ({
        url: '/hub/auth/enable-2fa',
        method: 'PUT',
        body: { token, secret },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useSignupMutation,
  useVerifyEmailMutation,
  useSigninMutation,
  useSignoutMutation,
  useSignoutSessionMutation,
  useSignoutAllSessionMutation,
  useRefreshTokenMutation,
  useGetProfileQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetSessionsQuery,
  useGenerate2FASetupQuery,
  useVerify2FAOnSignMutation,
  useConfirm2FASetupMutation,
} = userAuthApi;
