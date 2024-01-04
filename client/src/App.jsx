import './index.css'
import Navbar from './components/Navbar'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import AllExercises from './pages/AllExercises'
import AllDrills from './pages/AllDrills'
import ExerciseDetail from './pages/ExerciseDetail'
import DrillDetail from './pages/DrillDetail'
import AddNewExercise from './pages/AddNewExercise'
import AddNewDrill from './pages/AddNewDrill'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/exercises",
        element: <AllExercises />
      },
      {
        path: "/exercises/new",
        element: <AddNewExercise />
      },
      {
        path: "/exercises/:id",
        element: <ExerciseDetail />
      },
      {
        path: "/drills",
        element: <AllDrills />
      },
      {
        path: "/drills/new",
        element: <AddNewDrill />
      },
      {
        path: "/drills/:id",
        element: <DrillDetail />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
