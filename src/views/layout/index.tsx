import React from "react";
import HeaderView from "../header";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <HeaderView />
      <Outlet />
    </QueryClientProvider>
  );
}
