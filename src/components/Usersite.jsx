import React from "react";

const Usersite = ({ users }) => {
	return (
		<div className="overflow-x-auto w-full max-w-4xl">
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Usersite;
