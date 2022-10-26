import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Quizes from './Components/Quizes/Quizes';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>,
        },
        {
          path: '/quizes',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quizes></Quizes>,
        },
        {
          path: '/quizes/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Chart></Chart>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/*',
          element: <div className='h-screen flex flex-col justify-center items-center'>
            <div className=''>
              <i className="fa-regular fa-face-frown text-7xl animate-bounce text-amber-900"></i>
              <h1 className='text-3xl text-bold'>Oops !!! This Route is not Found ...</h1>
              <p>Please go through Menu Link</p>
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
