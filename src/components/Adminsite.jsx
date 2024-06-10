import React, { useState } from "react";

const Adminsite = ({ users, onDelete, onAddUser }) => {
	const [newUser, setNewUser] = useState({
		fName: "",
		lName: "",
		position: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewUser({ ...newUser, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddUser(newUser);
		setNewUser({ fName: "", lName: "", position: "" });
	};

	return (
		<div className="overflow-x-auto w-full max-w-4xl">
			<h2 className="text-xl font-bold mb-4">Add New User</h2>
			<form onSubmit={handleSubmit} className="mb-6">
				<div className="flex space-x-4 mb-4">
					<input
						type="text"
						name="fName"
						placeholder="First Name"
						value={newUser.fName}
						onChange={handleInputChange}
						className="px-3 py-2 border border-gray-300 rounded-md w-full"
						required
					/>
					<input
						type="text"
						name="lName"
						placeholder="Last Name"
						value={newUser.lName}
						onChange={handleInputChange}
						className="px-3 py-2 border border-gray-300 rounded-md w-full"
						required
					/>
					<input
						type="text"
						name="position"
						placeholder="Position"
						value={newUser.position}
						onChange={handleInputChange}
						className="px-3 py-2 border border-gray-300 rounded-md w-full"
						required
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
				>
					Add User
				</button>
			</form>
			<table className="min-w-full bg-white border border-blue-300 rounded-lg shadow-lg">
				<thead>
					<tr className="bg-blue-300 text-blue-900 uppercase text-sm leading-normal">
						<th className="py-3 px-6 text-left border-b border-blue-300">
							Name
						</th>
						<th className="py-3 px-6 text-left border-b border-blue-300">
							Last Name
						</th>
						<th className="py-3 px-6 text-left border-b border-blue-300">
							Position
						</th>
						<th className="py-3 px-6 text-left border-b border-blue-300">
							Action
						</th>
					</tr>
				</thead>
				<tbody className="text-blue-900 text-sm font-medium">
					{users.map((user) => (
						<tr
							key={user.id}
							className="border-b border-blue-200 hover:bg-blue-100"
						>
							<td className="py-3 px-6 text-left whitespace-nowrap border-r border-blue-300">
								{user.fName}
							</td>
							<td className="py-3 px-6 text-left border-r border-blue-300">
								{user.lName}
							</td>
							<td className="py-3 px-6 text-left border-r border-blue-300">
								{user.position}
							</td>
							<td className="py-3 px-6 text-left">
								<button
									onClick={() => onDelete(user.id)}
									className="bg-blue-500 text-white rounded py-1 px-3 hover:bg-blue-700"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Adminsite;
