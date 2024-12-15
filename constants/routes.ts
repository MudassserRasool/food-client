interface Routes {
  LOGIN: string;
  SIGNUP: string;
  FORGET_PASSWORD: string;
  OTP_VERIFICATION: string;
  RESET_PASSWORD: string;
  SELECT_ROLE: string;
}

const ROUTES: Routes = {
  LOGIN: '/auth/Login',
  SIGNUP: '/auth/Signup',
  FORGET_PASSWORD: '/auth/ForgetPassword',
  OTP_VERIFICATION: '/auth/OtpVerification',
  RESET_PASSWORD: '/auth/ResetPassword',
  SELECT_ROLE: '/auth/SelectRole',
};

export default ROUTES;
