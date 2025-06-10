
import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Coffee from "../Pages/Coffee/Coffee";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <Error></Error>,
    children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=> fetch('http://localhost:5000/coffee')
        },
        {
            path : 'addCoffee',
            element : <AddCoffee></AddCoffee>
        },
        {
            path : 'coffee/:id',
            element : <Coffee></Coffee>,
            loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
            path : 'updateCoffee/:id',
            element : <UpdateCoffee></UpdateCoffee>,
            loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        }

    ]
  },

]);

export default myRouter;