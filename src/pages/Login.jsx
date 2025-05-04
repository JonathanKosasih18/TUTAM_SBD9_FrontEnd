import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import usericon from '../assets/user.svg'
import keyicon from '../assets/key.svg'
import logo from "../assets/logo-bw.png";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    const handleLogin = async (e) => {  
        e.preventDefault();
        if (!username || !password) {
            console.error("Username and password are required.");
            return;
        }
        try {
            const response = await axios.post("https://tutam-sbd-9-back-end.vercel.app/user/login", {
                username,
                password
            });
            if (response.data.success === true) {
                console.log("Login successful:", response.data);
                localStorage.setItem("token", response.data.token);
                Navigate("/task");
            }
            else {
                console.error("Login failed:", response.data);
            }
        } catch (error) {
            console.error("Login failed:", error);
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

            <div id='login-box' className='flex flex-col h-[400px] w-[70vw] max-w-[600px]  bg-jk-green rounded-lg'>
                <h1 className='text-4xl font-bold text-jk-text-black text-center pt-8'>Login</h1>
                <form className='flex flex-col items-center justify-center h-full w-full gap-4'>
                    <div id='user' className='flex flex-row items-center justify-center w-full px-4'>
                        <img src={usericon} alt="user icon" className='w-8 h-8 mx-4'/>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className='w-[80%] h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-2xl px-4 mr-8'/>
                    </div>
                    <div id='password' className='flex flex-row items-center justify-center w-full px-4'>
                        <img src={keyicon} alt="user icon" className='w-8 h-8 mx-4'/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[80%] h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-2xl px-4 mr-8'/>
                    </div>
                    <button type="submit" onClick={handleLogin} className='w-[30%] h-[50px] bg-jk-text-white rounded-lg text-jk-black text-2xl font-bold my-4'>Login</button>
                    <p className='text-jk-text-black text-lg'>Don't have an account? <a href="/user/register" className='text-jk-text-black font-bold'>Register</a></p>
                </form>
            </div>
        </div>
    )
}