import { createContext, useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type UserType = {
  name: string;
  email: string;
} | null;

type AuthContextType = {
  user: UserType;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

 const login = async (email: string, password: string) => {
   if (email === "dhiraj@gmail.com" && password === "123456") {
     const mockUser = {
       name: "Dhiraj",
       email,
     };

     setUser(mockUser);

     await AsyncStorage.setItem("user", JSON.stringify(mockUser));

     return {
       success: true,
     };
   }

   return {
     success: false,
     message: "Invalid credentials",
   };
 };

  const logout = async () => {
    setUser(null);

    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
