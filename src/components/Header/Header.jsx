
import { Link } from 'react-router-dom';
import bg from '../../assets/Group 2.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPRovider';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))

    }
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className=' bg-[url] h-26'>
            <div className='container mx-auto flex justify-between'>
                <button className=' text-white mt-8'>{user?.email}</button>
                {
                    user?  <button onClick={handleLogOut}  className=' btn btn-secondary  mt-9'>LogOut</button> :
                    <Link to="/signIn">
                    <button className=' btn btn-secondary ml-3  mt-8'>Login</button>
                    </Link>
                }

               
        
            </div>
        </div>
    );
};

export default Header;