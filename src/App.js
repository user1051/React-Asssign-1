import "./App.css";
import ClassComp from "./ClassComp";
import FunctionalComp from "./FunctionalComp";

function App() {
	return (
		<div className="flex w-full h-screen bg-gradient-to-b from-indigo-300 via-pink-300 to-purple-500">
			<div className="w-1/2 h-screen">
				<FunctionalComp />
			</div>
			<div className="w-1/2">
				<ClassComp />
			</div>
		</div>
	);
}

export default App;
