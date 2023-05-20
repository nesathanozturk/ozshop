import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Loading from "../../components/loading";

const Main = () => {
  const [user, isLoading] = useAuthState(auth);

  if (isLoading) return <Loading />;

  if (!user) return <Navigate to="/sign-in" replace />;

  return <Outlet />;
};

export default Main;
