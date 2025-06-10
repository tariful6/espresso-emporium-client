import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const previousCoffee = useLoaderData();
    const {name, quantity, supplier, taste, category, details, photo, _id} = previousCoffee || {};
    const navigate = useNavigate();

        const handleUpdateCoffee = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const updateCoffee = {name, quantity, supplier, taste, category, details, photo,} 
            // console.log(updateCoffee);
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: "PUT",
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(updateCoffee)
            })
            .then(res => res.json())
             .then(data => {
                if(data.modifiedCount > 0){
                    Swal.fire({
                    title: "coffee update successful",
                    icon: "success",
                    draggable: true
                    });
                    navigate('/')
                }
                
            })
            
            
        }
    return (
        <div className="">
            <div className=" container mx-auto py-9">
                <div className=" py-6">
                    <Link to="/">
                        <button className=" btn btn-secondary">Back to Home</button>
                    </Link>
                </div>

                <div className="bg-[#F4F3F0] py-9">
                <div className="text-center  w-3/4 mx-auto">
                    <h2 className=" text-2xl py-2">Update Coffee Content</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className="p-9">
                    <form onSubmit={handleUpdateCoffee}>
                        <div className=" flex gap-6 py-3">
                            <div className=" w-1/2">
                                 <label for="name">Coffee Name</label>
                                 <input type="text" defaultValue={name} name="name" id="name" placeholder="Enter coffee name" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required />
                            </div>
                            <div className=" w-1/2">
                                <label for="quantity">Available Quantity</label>
                                <input type="number" defaultValue={quantity} name="quantity" id="quantity" placeholder="Enter coffee chef" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required/>
                            </div>
                        </div>
                        <div className=" flex gap-6 py-3">
                            <div className=" w-1/2">
                                 <label for="supplier">Supplier Name</label>
                                 <input type="text" defaultValue={supplier} name="supplier" id="supplier" placeholder="Enter coffee supplier" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required/>
                            </div>
                            <div className=" w-1/2">
                                <label for="taste">Taste</label>
                                <input type="text" defaultValue={taste} name="taste" id="taste" placeholder="Enter coffee taste" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" />
                            </div>
                        </div>
                        <div className=" flex gap-6 py-3">
                            <div className=" w-1/2">
                                 <label for="category">Category</label>
                                 <input type="text" defaultValue={category} name="category" id="category" placeholder="Enter coffee supplier" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required/>
                            </div>
                            <div className=" w-1/2">
                                <label for="details">Details</label>
                                <input type="text" defaultValue={details} name="details" id="details" placeholder="Enter coffee taste" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required/>
                            </div>
                        </div>

                        <div className="w-full py-3">
                             <label for="photo">Photo URL</label>
                             <input type="text" defaultValue={photo} name="photo" id="photo" placeholder="Enter photo URL" className="p-2 w-full border-[1px] border-t-gray-500  outline-0 rounded-sm" required/>
                        </div>
                        <div className="w-full py-3">
                            <input type="submit" value="Update Coffee" className=" btn btn-secondary w-full" />
                        </div> 
                    </form>
                </div>
                </div>


            </div>
        </div>
    );
};

export default UpdateCoffee;