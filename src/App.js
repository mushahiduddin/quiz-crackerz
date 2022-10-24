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
        },
        

        {
          path:'/*',
          element: <div className='h-screen flex flex-col justify-center items-center'>
            <div className=''>
            <h1 className='text-3xl text-bold'>Oops !!! Route not Found</h1>
            <p>Please provide a valid route</p>
            </div>
          </div>
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
