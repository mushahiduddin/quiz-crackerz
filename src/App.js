import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Quizes from './Components/Quizes/Quizes';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>,
        },
        {
          path:'/quizes',
          loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
