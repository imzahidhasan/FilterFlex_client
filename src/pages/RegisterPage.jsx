import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../firebase/FirebaseProvider';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser, googleLogin, user } = useContext(AuthContext); // Get the user from AuthContext
    const navigate = useNavigate();

    // Redirect to /products if user is already logged in
    useEffect(() => {
        if (user) {
            navigate('/products');
        }
    }, [user, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password)
            .then((userCredential) => {
                console.log('User created:', userCredential.user);
                navigate('/products');
            })
            .catch((error) => {
                console.error('Error signing up:', error.message);
            });
    };

    return (<>
        <div className="h-screen w-screen relative">
            <form onSubmit={handleSubmit} className="max-w-sm w-full min-w-[300px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className='text-center text-3xl font-semibold'>Sign Up</h1>
                <div>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign Up
                </button>
                <p className='pt-4'>Dont have a account? <Link className='text-blue-500 underline' to={'/'}>Login</Link></p>
                <div onClick={() => googleLogin()}  className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login witn Google</div>
            </form>
        </div>
    </>
    );
}

export default RegisterPage;
