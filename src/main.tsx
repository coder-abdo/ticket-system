import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import App from "./App.tsx";
import "./index.css";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
