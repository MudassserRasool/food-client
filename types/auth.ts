interface Login {
  email: string;
  password: string;
}

interface Signup {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

interface Otp {
  otp: string;
}
