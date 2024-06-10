import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout.jsx";
import Ownerpage from "./components/OwnerPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <App />,
			},
		],
	},
	{
		path: "/owner",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Ownerpage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
