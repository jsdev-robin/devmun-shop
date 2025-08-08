export type Role = 'buyer' | 'seller' | 'admin';

export interface IUser {
  _id: string;
  id: string;
  familyName: string;
  givenName: string;
  avatar: {
    url: string;
  };
  displayName: string;
  email: string;
  twoFA: {
    enabled: boolean;
  };
}

export interface AuthState {
  verifyToken: string | null;
  user: IUser | null;
  isAuth: boolean;
}

export interface SuccessResponse {
  status: 'success';
  message: string;
}

// Sign-up
export interface SignupResponse extends SuccessResponse {
  data: {
    token: string;
  };
}

export interface SingupRequest {
  familyName: string;
  givenName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

// Verify
export interface VerifyEmailRequest {
  token: string;
  otp: number;
}

// Sign-in
export interface SinginResponse extends SuccessResponse {
  data: {
    role: Role;
    enable2fa: boolean;
  };
}

export interface SinginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

// Get Profile
export interface GetProfileResponse extends SuccessResponse {
  data: {
    user: IUser;
  };
}

// Forgot password
export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

// Get session information
export interface GetSessionsResponse extends SuccessResponse {
  data: {
    sessions: {
      token: string;
      deviceInfo: {
        deviceType: string;
        os: string;
        browser: string;
        userAgent: string;
      };
      ip: string;
      location: {
        city: string;
        country: string;
        lat: number;
        lng: number;
      };
      loggedInAt: Date;
      status: boolean;
    }[];
  };
}

export interface Generate2FASetupResponse extends SuccessResponse {
  data: {
    secret: string;
    otpauth_url: string;
    qrCodeDataUrl: string;
  };
}

export interface Verify2FAOnSignRequest {
  token: string;
}

export interface Confirm2FARequest {
  token: string;
  secret?: string;
}
