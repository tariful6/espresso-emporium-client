
import { createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Coffee from "../Pages/Coffee/Coffee";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import Users from "../Pages/Users/Users";

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
        },
        {
            path : 'signIn',
            element : <SignIn></SignIn>
        },
        {
            path : 'signUp',
            element : <SignUp></SignUp>
        },
        {
            path : 'users',
            element : <Users></Users>,
            loader : ()=> fetch('http://localhost:5000/users')
        },

    ]
  },

]);

export default myRouter;