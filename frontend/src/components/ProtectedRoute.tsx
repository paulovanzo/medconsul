import { Navigate } from "react-router-dom";
import { Context } from '../contexts/AuthContext';
import { useContext } from "react"

type Props = {
    children: React.ReactComponentElement<any,any>
}

export const ProtectedRoute = ({ children } : Props) => {
  const { authenticated } = useContext(Context);
  if (!authenticated) {
    return <Navigate to="/login" />;
  }else{
    return children;
  }
};