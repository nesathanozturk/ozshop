import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Loading from "../loading/Loading";

const Main = () => {
  const [user, loading, error] = useAuthState(auth);

  if (error) return console.log("Error:", error);

  if (loading) return <Loading />;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default Main;
