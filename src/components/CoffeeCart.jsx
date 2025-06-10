import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({coffee, handleDelete}) => {
     const {name, quantity, supplier, taste, category, details, photo, _id} = coffee;

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-sm">
        <figure>
            <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body ">
            <div>
                <h2 className="card-title">{name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
            </div>
        </div>
         <div className="card-actions flex flex-col p-6">
                <Link to={`coffee/${_id}`}>
                   <button className="btn btn-primary ">View</button>
                </Link>
                <Link to={`updateCoffee/${_id}`}>
                  <button className="btn btn-success text-white px-5">Edit</button>
                </Link>
                <button onClick={()=> handleDelete(_id)} className="btn btn-secondary px-7">X</button>
            </div>
        </div>
    );
};

export default CoffeeCart;