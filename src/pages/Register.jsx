import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import usericon from '../assets/user.svg'
import keyicon from '../assets/key.svg'
import logo from "../assets/logo-bw.png";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!username || !password || !email) {
            console.error("Username, password, and email are required.");
            return;
        }
        try {
            const response = await axios.post("https://tutam-sbd-9-back-end.vercel.app/user/register", {
                username,
                password,
                email
            });
            if (response.data.success === true) {
                console.log("Registration successful:", response.data);
                localStorage.setItem("token", response.data.token);
                Navigate("/user/login");
            }
        } catch (error) {
            console.error("Registration failed:", error);
        }
    }

    return (
        <div id="main-page" className="flex flex-col min-h-screen max-w-screen bg-jk-black items-center justify-center">
            <header id="navbar" className="flex w-screen bg-jk-green flex-row justify-between items-center fixed top-0 z-50">
                <a id="left" className="flex flex-row items-center justify-center m-4 hover:scale-110 transition-transform duration-200">
                    <img src={logo} alt="logo" className="w-12 h-12 ml-4"/>
                    <h1 className="text-4xl font-bold text-jk-text-black pl-4 my-4">To Do</h1>
                </a>
            </header>

            <div id='login-box' className='flex flex-col h-[475px] w-[70vw] max-w-[600px]  bg-jk-green rounded-lg'>
                <h1 className='text-4xl font-bold text-jk-text-black text-center pt-8'>Register</h1>
                <form className='flex flex-col items-center justify-center h-full w-full gap-4'>
                    <div id='email' className='flex flex-row items-center justify-center w-full px-4'>
                        <img src={usericon} alt="user icon" className='w-8 h-8 mx-4'/>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[80%] h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-2xl px-4 mr-8'/>
                    </div>
                    <div id='user' className='flex flex-row items-center justify-center w-full px-4'>
                        <img src={usericon} alt="user icon" className='w-8 h-8 mx-4'/>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='w-[80%] h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-2xl px-4 mr-8'/>
                    </div>
                    <div id='password' className='flex flex-row items-center justify-center w-full px-4'>
                        <img src={keyicon} alt="user icon" className='w-8 h-8 mx-4'/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[80%] h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-2xl px-4 mr-8'/>
                    </div>
                    <button type="submit" onClick={handleRegister} className='w-[30%] h-[50px] bg-jk-text-white rounded-lg text-jk-black text-2xl font-bold my-4'>Register</button>
                    <p className='text-jk-text-black text-lg'>Already have an account? <a href="/user/login" className='text-jk-text-black font-bold'>Login</a></p>
                </form>
            </div>
        </div>
    )
}