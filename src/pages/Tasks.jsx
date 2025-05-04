import NavBar from "../components/NavBar.jsx";
import editicon from "../assets/edit.svg";
import deleteicon from "../assets/delete.svg";

export default function Tasks() {
    const dummy_data = { 
        page: 1,
        results: [
            {
                id: "82825f5d-cb66-4b9a-8c3e-48bfde2eff3e",
                user_id: "cdfd01f1-3358-4410-9e12-8b39cc43a2be",
                title: "Tutam SBD 9", 
                status: "DONE",
                priority: "HIGH",
                category: "OTHERS",
                due_date: "",
                created_at: "2025-05-03 17:22:53.834721",
            },
            {
                id: "a8413779-8ce6-4234-ba2b-62256ae0eb4d",
                user_id: "cdfd01f1-3358-4410-9e12-8b39cc43a2be",
                title: "Final Project DMJ", 
                status: "PENDING",
                priority: "MEDIUM",
                category: "OTHERS",
                due_date: "",
                created_at: "2025-05-03 17:22:53.834721",
            },
            {
                id: "be5e9aa2-4385-47cd-adfa-357bdb14d0d8",
                user_id: "cdfd01f1-3358-4410-9e12-8b39cc43a2be",
                title: "Tugas Matlan", 
                status: "PENDING",
                priority: "LOW",
                category: "OTHERS",
                due_date: "",
                created_at: "2025-05-03 17:22:53.834721",
            }
        ]
    }

    const getPriorityColor = (priority) => {
        switch(priority) {
            case "URGENT": return "bg-red-500";
            case "HIGH": return "bg-orange-500";
            case "MEDIUM": return "bg-yellow-500";
            case "LOW": return "bg-green-500";
            default: return "bg-gray-500";
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case "IN PROGRESS": return "text-yellow-500";
            case "PENDING": return "text-orange-500";
            case "DONE": return "text-green-500";
            case "OVERDUE": return "text-red-500";
            default: return "text-gray-500";
        }
    };

    return (
        <div id="main-page" className="flex flex-col min-h-screen w-screen bg-jk-black overflow-x-hidden">
            <NavBar />
            <div id="content" className="flex flex-col items-center justify-center h-full w-full p-4 mt-24"> 
                <h1 className="text-4xl font-bold text-jk-text-white mt-4 mb-8 text-center">"Never put off until tomorrow what can be done today."</h1>
                <div id="button-container" className="flex flex-row justify-center items-center mb-4 gap-4">
                    <a href="/task/create" className="bg-jk-green text-jk-text-black font-bold text-lg py-2 px-4 rounded-lg hover:bg-jk-light-green transition duration-300">Create Task</a>
                </div>

                <div id="card-container" className="w-full max-w-6xl mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dummy_data.results.map((task) => (
                        <div key={task.id} className="border-2 border-gray-800 bg-jk-dark-green rounded-lg p-4 relative">
                            <div className={`absolute top-4 left-4 w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <button className="hover:opacity-70 transition-opacity">
                                    <img src={editicon} alt="Edit" className="w-5 h-5" />
                                </button>
                                <button className="hover:opacity-70 transition-opacity">
                                    <img src={deleteicon} alt="Delete" className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="text-center mb-6 mt-2">
                                <h2 className="text-2xl font-bold text-jk-text-white">{task.title}</h2>
                                <p className="text-md font-semibold text-jk-text-black">{task.priority}</p>
                            </div>
                            <div className="flex justify-between items-end mt-8">
                                <div className="text-jk-dark-gray text-md font-semibold">
                                    {task.category}
                                </div>
                                <div className={`font-bold ${getStatusColor(task.status)}`}>
                                    {task.status}
                                </div>
                            </div>
                            <div className="text-right text-jk-dark-gray text-md font-semibold mt-2">
                                {task.due_date ? task.due_date : "No due date"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
