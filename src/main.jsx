import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import Root from './routes/root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      }

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} /> 
    </QueryClientProvider>
  </React.StrictMode>,
)
