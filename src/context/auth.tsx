import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { LocalStorage } from "../lib";
import { UserResponse } from "../data/response";

export interface UseAuth {
  token: string | null;
  setToken(val: string): void;
  user: UserResponse | null;
  setUser(val: UserResponse): void;
  isLoggedIn: boolean;
  logout(): void;
  login(val: Pick<UseAuth, "user"> & Pick<UseAuth, "token">): void;
}

export const AuthContext = createContext<UseAuth | null>(null);

AuthContext.displayName = "Auth";

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserResponse | null>(
    LocalStorage.getItem("user")
  );
  const [token, setToken] = useState<string | null>(
    LocalStorage.getItem("token")
  );

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        isLoggedIn: !!token,
        login: ({ token, user }) => {
          setToken(token);
          setUser(user);
          LocalStorage.setItem("token", token);
          LocalStorage.setItem("user", user);
        },
        logout: () => {
          setToken(null);
          setUser(null);
          LocalStorage.clear();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const state = useContext(AuthContext);
  if (!state) {
    throw new Error("useAuth should be used within <AuthProvider>");
  }
  return state;
}
