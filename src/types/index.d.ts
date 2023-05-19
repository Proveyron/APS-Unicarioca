export {};

declare global {
  namespace Express {
    interface Request {
      user: string;
	  signIn: boolean;
	  signOut: boolean;
	  loading: boolean;
	  couldLogin: boolean;
    }
  }
}