import { Link, useLoaderData } from "react-router-dom";

const Coffee = () => {
    const coffee = useLoaderData();
    const {name, quantity, supplier, taste, category, details, photo, _id} = coffee || {};
    console.log(coffee);
    
    return (
       <div className=" container mx-auto">
         <div className="py-6">
            <Link to="/">
                <button className=" btn btn-secondary">Back to Home</button>
            </Link>
        </div>

        <div className=" w-1/4 mx-auto py-16">
            <img src={photo} className=" w-full" alt="" />
            <p className=" py-6 text-center text-2xl font-bold text-amber-500">{name}</p>
        </div>
          
 

       </div>
      
    );
};

export default Coffee;