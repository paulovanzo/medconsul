import { createContext, ReactNode } from "react";

type Props = {
    children?: ReactNode
}

type ContextData = {
  handleGoBack: () => void,
  handleRegister: (data:any) => Promise<void>,
  handleLogin: (data:any) => Promise<void>,
  handleLogout: () => void,
}

const Context = createContext<ContextData>({} as ContextData);

const AuthProvider = ({ children }: Props) => {
  async function handleRegister(data: any) {
    const { id } = data
    localStorage.setItem("authenticated","true")
    window.history.pushState({},"","/");
    window.location.reload();
  }

  async function handleLogin(data: any) {
    const { id } = data
    localStorage.setItem("authenticated","true")
    window.history.pushState({},"","/");
    window.location.reload();
  }

  const handleLogout = () => {
    localStorage.setItem("authenticated","false");

    localStorage.clear();

    window.history.pushState({},"","/login");
    window.location.reload();
  }

  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <Context.Provider value={{ handleGoBack, handleRegister, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }