import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Create() {
    const [formData, setFormData] = useState({
        title: "",
        category: "OTHERS",
        status: "PENDING",
        priority: "MEDIUM",
        dueDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div id="main-page" className="flex flex-col min-h-screen w-screen bg-jk-black overflow-x-hidden justify-center items-center">
            <NavBar />
            <div id="create-box" className="flex flex-col h-auto w-[70vw] max-w-[600px] bg-jk-green rounded-lg mt-24 mx-auto py-8">
                <h1 className="text-4xl font-bold text-jk-text-black text-center">Create Task</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-4 mt-6">
                    <div className="w-[80%]">
                        <label htmlFor="title" className="block text-jk-text-black text-lg font-semibold mb-1">Title</label>
                        <input 
                            type="text" 
                            id="title"
                            name="title"
                            placeholder="Task Title" 
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-xl px-4"
                            required
                        />
                    </div>
                    <div className="w-[80%]">
                        <label htmlFor="category" className="block text-jk-text-black text-lg font-semibold mb-1">Category</label>
                        <select 
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-xl px-4 appearance-none"
                        >
                            <option value="ACADEMIC">Academic</option>
                            <option value="ORG">Organization</option>
                            <option value="EVENT">Event</option>
                            <option value="PERSONAL">Personal</option>
                            <option value="OTHERS">Others</option>
                        </select>
                    </div>
                    <div className="w-[80%]">
                        <label htmlFor="status" className="block text-jk-text-black text-lg font-semibold mb-1">Status</label>
                        <select 
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-xl px-4 appearance-none"
                        >
                            <option value="PENDING">Pending</option>
                            <option value="IN PROGRESS">In Progress</option>
                            <option value="DONE">Done</option>
                            <option value="OVERDUE">Overdue</option>
                        </select>
                    </div>
                    <div className="w-[80%]">
                        <label htmlFor="priority" className="block text-jk-text-black text-lg font-semibold mb-1">Priority</label>
                        <select 
                            id="priority"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-xl px-4 appearance-none"
                        >
                            <option value="URGENT">Urgent</option>
                            <option value="HIGH">High</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="LOW">Low</option>
                        </select>
                    </div>
                    <div className="w-[80%]">
                        <label htmlFor="due_date" className="block text-jk-text-black text-lg font-semibold mb-1">Due Date</label>
                        <input 
                            type="date" 
                            id="due_date"
                            name="due_date"
                            value={formData.due_date}
                            onChange={handleChange}
                            className="w-full h-[50px] bg-jk-dark-gray rounded-lg text-jk-text-white text-xl px-4"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center w-full px-4 gap-4 mt-4">
                        <button type="submit" className="w-[30%] h-[50px] bg-jk-text-white rounded-lg text-jk-black text-xl font-bold hover:bg-opacity-90 transition-all">Create</button>
                        <a href="/task" className="w-[30%] h-[50px] bg-jk-text-white rounded-lg text-jk-black text-xl font-bold text-center flex items-center justify-center hover:bg-opacity-90 transition-all">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
