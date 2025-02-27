import React from "react";
import HeaderView from "../header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toast } from "../../components";
import { AuthProvider } from "../../context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1,
    },
  },
});
export default function AppLayout() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toast />
        <HeaderView />
        <Outlet />
      </QueryClientProvider>
    </AuthProvider>
  );
}
