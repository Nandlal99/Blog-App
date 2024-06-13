import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import AddBlog from './components/AddBlog';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/addBlog',
      element: <AddBlog />,
    },
  ]);

  return (
    <div className="flex">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
