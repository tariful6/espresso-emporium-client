import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPRovider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
       const navigate = useNavigate();
        const {createUser} = useContext(AuthContext);
        const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createdAt}
            fetch('http://localhost:5000/users', {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    console.log("user created to db",);
                    navigate('/');
                }
            })
        })
        .catch(err => {
            console.log('error', err);
            
        })
        
    }
    return (
         <div className="bg-base-200 ">
            <div className="hero min-h-screen w-2/4 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignUp} className=" space-y-1.5 " action="">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <input className="btn btn-neutral mt-4 w-full" type="submit" value="SignUp" />
                    </form>
                      <span className=" text-red-500"> <Link to="/signIn">Sign In</Link></span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;