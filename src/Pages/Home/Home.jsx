import { Link, useLoaderData } from "react-router-dom";
import CoffeeCart from "../../components/CoffeeCart";
import { useState } from "react";
import Swal from "sweetalert2";
import heroBg from '../../assets/Group 68.png'
import coffeeCup1 from '../../assets/cups/Rectangle 10.png'
import coffeeCup2 from '../../assets/cups/Rectangle 11.png'
import coffeeCup3 from '../../assets/cups/Rectangle 12.png'
import coffeeCup4 from '../../assets/cups/Rectangle 13.png'
import coffeeCup5 from '../../assets/cups/Rectangle 14.png'
import coffeeCup6 from '../../assets/cups/Rectangle 15.png'
import coffeeCup7 from '../../assets/cups/Rectangle 16.png'
import coffeeCup8 from '../../assets/cups/Rectangle 16.png'

const Home = () => {
    const coffees = useLoaderData();
    const [coffeeData, setCoffeeData] = useState(coffees);

         const  handleDelete = (id) =>{
            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
      
                console.log("confirem delete");
                fetch(`http://localhost:5000/coffee/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
       
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                        const remaining = coffees.filter(coffee => coffee._id !== id);
                        setCoffeeData(remaining)
                    }
                    
                })
                
            }
            });
     }
    return (
        <div>
            <div style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPositionY : '-100px', backgroundRepeat: 'no-repeat' }} className=' bg-[url]  min-h-[70vh] '></div>
            <div className="container mx-auto py-16">
                <div className="py-9 text-center">
                    <p>--- Sip & Savor ---</p>
                    <h2 className=" text-2xl font-bold py-2 text-amber-900">Our Popular Product</h2>
                    <Link to="/addCoffee">
                       <button className=" btn btn-secondary">Add Coffee</button>
                    </Link>
                    <Link to="/users">
                       <button className=" btn btn-success text-white ml-4">Our Customer</button>
                    </Link>

                </div>
                <div className=" grid grid-cols-2 gap-6">
                    {
                    coffeeData.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee} setCoffeeData={setCoffeeData} handleDelete={handleDelete}></CoffeeCart>) 
                    }
                </div>
                <div className=" py-9">
                    <div className="py-9 text-center">
                        <p>Follow Us Now</p>
                        <h2 className=" text-3xl font-bold py-2 text-amber-900">Follow On Instagram</h2>
                    </div>
                    <div className=" grid grid-cols-4 gap-6">
                        <img className="w-full h-56" src={coffeeCup1} alt="" />
                        <img className="w-full h-56" src={coffeeCup2} alt="" />
                        <img className="w-full h-56" src={coffeeCup3} alt="" />
                        <img className="w-full h-56" src={coffeeCup4} alt="" />
                        <img className="w-full h-56" src={coffeeCup5} alt="" />
                        <img className="w-full h-56" src={coffeeCup6} alt="" />
                        <img className="w-full h-56" src={coffeeCup7} alt="" />
                        <img className="w-full h-56" src={coffeeCup8} alt="" />
                    </div>

                </div>
            </div>

        </div>
);
};

export default Home;