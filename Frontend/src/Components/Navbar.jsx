import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useFirebase } from "../Firebase/Firebase";
import { useNavigate } from "react-router";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userProfile, setUserProfile] = useState(null);
    const { SignUpWithGoogle, currentUser, LogOutUser } = useFirebase();
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("AccessToken");
        const profileData = Cookies.get("UserProfile");

        if (token && profileData && currentUser) {
            setUserProfile(JSON.parse(profileData));
        } else {
            setUserProfile(null);
        }
    }, [currentUser]);

    const handleLogout = async () => {
        try {

            Cookies.remove("AccessToken");
            Cookies.remove("UserProfile");


            await LogOutUser();


            setUserProfile(null);


            navigate('/');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };


    const handleGoogleSignup = async () => {
        try {
            const SignedUser = await SignUpWithGoogle();
            Cookies.set("AccessToken", SignedUser.accessToken, { expires: 7 });
            Cookies.set("UserProfile", JSON.stringify(SignedUser), { expires: 7 });
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        console.log("Current user state changed:", currentUser ? currentUser.uid : "No user");
    }, [currentUser]);


    return (
        <header>
            <nav className="border-gray-200 py-2.5 bg-gray-100">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center text-black">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
                            Course Vault
                        </span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        {currentUser ? (
                            <>
                                <img
                                    src={userProfile?.photoURL}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border-2 border-gray-300 mr-4"
                                />
                                <button
                                    onClick={handleLogout}
                                    className="text-white bg-red-400 font-medium rounded-lg text-sm px-4 py-2"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to=""
                                onClick={handleGoogleSignup}
                                className="text-white bg-green-400 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Signup
                            </Link>
                        )}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li><Link to="/" className="block py-2 pl-3 pr-4 text-black rounded lg:hover:text-purple-700">Home</Link></li>
                            <li><Link to="/resource" className="block py-2 pl-3 pr-4 text-black rounded lg:hover:text-purple-700">Resources</Link></li>
                            <li><Link to="/study" className="block py-2 pl-3 pr-4 text-black rounded lg:hover:text-purple-700">Study Materials</Link></li>
                            <li><Link to="/roadmap" className="block py-2 pl-3 pr-4 text-black rounded lg:hover:text-purple-700">Roadmap</Link></li>
                            {currentUser?.email === "kamal19111210@gmail.com" && (
                                <li>
                                    <Link to="/dashboard" className="block py-2 pl-3 pr-4 text-black rounded lg:hover:text-purple-700">
                                        DashBoard
                                    </Link>
                                </li>
                            )}                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;