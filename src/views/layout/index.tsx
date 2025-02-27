import React from "react";
import HeaderView from "../header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toast } from "../../components";
import { AuthProvider, CreateListProvider } from "../../context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CreateListProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <>
            <Toast />
            <HeaderView />
            <Outlet />
          </>
        </CreateListProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
