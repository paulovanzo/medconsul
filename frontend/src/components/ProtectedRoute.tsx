import { Navigate } from "react-router-dom";

type Props = {
    children: React.ReactComponentElement<any,any>
}

export const ProtectedRoute = ({ children } : Props) => {
  if (localStorage.getItem("authenticated") !== "true") {
    return <Navigate to="/login" />;
  }else{
    return children;
  }
};