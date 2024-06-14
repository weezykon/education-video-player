import React, { useEffect } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { routes } from 'core/router';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// setup react query client and cache
const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

function App() {
  const location = useLocation();

  useEffect(() => {
    // --- scroll to top of page on url change ---
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <React.Fragment>
                <route.Component />
              </React.Fragment>
            }
          ></Route>
        ))}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
