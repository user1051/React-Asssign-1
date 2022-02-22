import { useState } from "react";

export default function FunctionalComp() {
	const [show, setShow] = useState(false);
	return (
		<div className="h-screen flex flex-col justify-between items-end mr-10 p-12">
			<button
				className="border-2 border-black bg-blue-300 w-1/2 h-14 rounded-3xl text-sm hover:bg-cyan-400"
				onClick={() => setShow(!show)}
			>
				To see styling in functional component
			</button>
			{show && (
				<div className="border-2 border-black rounded-3xl w-3/4 h-2/5 bg-cyan-400 flex flex-col text-center justify-evenly">
					<h1 className="text-2xl font-bold ">
						This is created using Functional Component
					</h1>
					<p className="text-gray-200">This is done using external CSS</p>
					<p className="text-blue-700">This is done using internal CSS</p>
				</div>
			)}
		</div>
	);
}
