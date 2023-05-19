export { };

declare global {
  namespace Express {
    interface Request {
      user: any;
      signIn: any;
      signOut: any;
      loading: any;
      couldLogin: any;
    }
  }
}