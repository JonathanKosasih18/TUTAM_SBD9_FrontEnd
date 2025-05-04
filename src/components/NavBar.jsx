import logo from "../assets/logo-bw.png";
import usericon from "../assets/user.svg";

export default function NavBar() {
    return (
        <header id="navbar" className="flex w-screen bg-jk-green flex-row justify-between items-center fixed top-0 z-50">
            <a id="left" href="/task" className="flex flex-row items-center justify-center m-4 hover:scale-110 transition-transform duration-200">
                <img src={logo} alt="logo" className="w-12 h-12 ml-4"/>
                <h1 className="text-4xl font-bold text-jk-text-black pl-4 my-4">To Do</h1>
            </a>
            <div id="right" className="flex flex-row items-center justify-end mr-8"> 
                <a href="/user/login" className="">
                    <img src={usericon} alt="user icon" className="w-8 h-8 mx-4 hover:scale-110 transition-transform duration-200"/>
                </a>
            </div>
        </header>
    )
}