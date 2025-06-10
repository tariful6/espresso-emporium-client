import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthPRovider";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();
    const {signInUser} = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            console.log(result.user);

            // update last login time ----------
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};
            fetch(`http://localhost:5000/users`,{
                method : 'PATCH',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('signIn into updated in db', data);
                
            })
            navigate('/');
        })
        .catch(err => {
            console.log("err", err);
        })
            
    }

    return (
        <div className="bg-base-200 ">
            <div className="hero min-h-screen w-2/4 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSignIn} className=" space-y-1.5 " action="">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <input className="btn btn-neutral mt-4 w-full" type="submit" value="Login" />

                    </form>
                     <span className=" text-red-500"> <Link to="/signUp">Sign Up</Link></span>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignIn;