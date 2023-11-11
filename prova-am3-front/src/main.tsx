import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from "./routes/index.tsx";
import './index.css'
import { AppThemeProvider } from "./shared/contexts";
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { Layout } from './shared/layouts/Layout.tsx';

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000 * 60 * 60 * 24,
      },
    },
  }
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>
      <BrowserRouter>
        <React.StrictMode>
          <Layout>
            <Router />
          </Layout>
        </React.StrictMode>
      </BrowserRouter>
    </AppThemeProvider>
  </QueryClientProvider>
)
