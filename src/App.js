import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Quizes from './Components/Quizes/Quizes';
import QuizDetails from './Components/QuizDetails/QuizDetails';



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
          path:'/quizes/:quizId',
          loader: async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path:'/*',
          element: <div className='h-screen flex flex-col justify-center items-center'>
            <div className=''>
            <h1 className='text-3xl text-bold'>Oops !!! This Route is not Found ...</h1>
            <p>Please go through Link</p>
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
