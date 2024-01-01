import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { loader as homeLoader } from './pages/Home';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import TrackPage from './pages/Track';
import ErrorPage from './pages/Error';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
        children: [
          {
            path: ':id',
            element: <TrackPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
