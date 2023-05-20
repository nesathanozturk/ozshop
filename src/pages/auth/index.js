import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Loading from "../../components/loading";

const Auth = () => {
  const [user, isLoading, error] = useAuthState(auth);

  if (error) return console.log("Error:", error);

  if (isLoading) return <Loading />;

  if (user) return <Navigate to="/home" replace />;

  return <Outlet />;
};

export default Auth;
