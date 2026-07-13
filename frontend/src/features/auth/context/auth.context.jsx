import { Children } from "react";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading ,error,setError,message,setMessage}}>
      {children}
    </AuthContext.Provider>
  );
};
