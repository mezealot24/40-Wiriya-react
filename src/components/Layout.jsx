import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav className=" flex items-center justify-end w-full bg-slate-500 p-4">
				<ul className="flex space-x-5">
					<Link to="/">Home</Link>
					<Link to="/owner">Owner</Link>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};

export default Layout;
