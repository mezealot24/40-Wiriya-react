import React, { useState } from "react";
import Usersite from "./components/Usersite";
import Adminsite from "./components/Adminsite";

const App = () => {
	const [showUserTable, setShowUserTable] = useState(false);
	const [showAdminTable, setShowAdminTable] = useState(false);
	const [currentView, setCurrentView] = useState("React - Assessment");
	const [users, setUsers] = useState([]);

	const toggleUserSite = () => {
		setShowUserTable(true);
		setShowAdminTable(false);
		setCurrentView("User Sector");
	};

	const toggleAdminSite = () => {
		setShowAdminTable(true);
		setShowUserTable(false);
		setCurrentView("Admin Sector");
	};

	const handleDelete = (userId) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
	};

	const handleAddUser = (newUser) => {
		setUsers((prevUsers) => [
			...prevUsers,
			{ id: prevUsers.length + 1, ...newUser },
		]);
	};

	return (
		<>
			<main>
				<h1>
					Generation Thailand
					<br />
					<span>{currentView}</span>
				</h1>
				<div className="flex space-x-10 mt-11 mb-11">
					<button
						onClick={toggleUserSite}
						className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					>
						User Sector
					</button>

					<button
						onClick={toggleAdminSite}
						className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					>
						Admin Sector
					</button>
				</div>

				{showAdminTable && !showUserTable && (
					<Adminsite
						users={users}
						onDelete={handleDelete}
						onAddUser={handleAddUser}
					/>
				)}
				{showUserTable && !showAdminTable && <Usersite users={users} />}
			</main>
		</>
	);
};

export default App;
