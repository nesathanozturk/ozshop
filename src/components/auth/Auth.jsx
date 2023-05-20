import { auth } from "../../firebase";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../loading/Loading";

const Auth = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) return console.log("Error:", error);

  if (loading) return <Loading />;

  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default Auth;
