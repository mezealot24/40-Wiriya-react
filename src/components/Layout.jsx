import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav className="flex items-center justify-end w-full bg-slate-500 p-4">
				<ul className="flex space-x-5">
					<Link
						to="/"
						className="text-white hover:text-blue-300 transition-colors duration-300"
					>
						Home
					</Link>
					<Link
						to="/owner"
						className="text-white hover:text-blue-300 transition-colors duration-300"
					>
						Owner
					</Link>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
