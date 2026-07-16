import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { getMe } from "../services/authService";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!user;
  useEffect(() => {
    const fetchuser = async () => {
      try {
        console.log("Before render:", {
          user,
          isAuthenticated,
        });
        const response = await getMe();
        setUser(response.user);
        console.log("response= ",response);
        
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchuser();
  }, []);
  useEffect(() => {
  console.log("User changed:", user);
}, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
