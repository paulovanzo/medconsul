import { createContext, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type ContextData = {
  handleGoBack: () => void;
  handleLogin: (data: any) => Promise<void>;
  handleLogout: () => void;
};

const Context = createContext<ContextData>({} as ContextData);

const AuthProvider = ({ children }: Props) => {
  async function handleLogin(data: any) {
    const { username } = data;
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("username", username);
    window.history.pushState({}, "", "/");
    window.location.reload();
  }

  const handleLogout = () => {
    localStorage.clear();

    window.history.pushState({}, "", "/login");
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Context.Provider value={{ handleGoBack, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
