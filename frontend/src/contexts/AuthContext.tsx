import { createContext, useState, ReactNode } from "react";
import { createBrowserHistory } from "history";

type Props = {
    children?: ReactNode
}

type ContextData = {
  handleGoBack: () => void,
  handleLogin: (data: any) => Promise<void>,
  handleLogout: () => void,
  authenticated: boolean,
}

const initialContext = {
  handleGoBack: () => {},
  handleLogin: async(data: any) => {},
  handleLogout: () => {},
  authenticated: false,
}

const Context = createContext<ContextData>(initialContext);

function AuthProvider({ children }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = createBrowserHistory();

  async function handleLogin(data: any) {
    const { user: { id } } = data
    setAuthenticated(true);
    history.push(`/`);
    window.location.reload();
  }

  const handleLogout = () => {
    setAuthenticated(false);

    localStorage.clear();

    history.push('/login')
    window.location.reload();
  }

  const handleGoBack = () => {
    history.back();
  }

  if (loading) return <p>Loading ...</p>

  return (
    <Context.Provider value={{ handleGoBack,handleLogin,handleLogout, authenticated}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }