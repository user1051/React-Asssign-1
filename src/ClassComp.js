import { Component } from "react";

export default class ClassComp extends Component {
	state = {
		show: false,
	};
	render() {
		return (
			<div className="h-screen flex justify-between flex-col ml-10 p-12">
				<button
					className="border-2 border-black bg-blue-300 w-1/2 h-14 rounded-3xl text-sm hover:bg-fuchsia-400"
					onClick={() =>
						this.setState((prevState) => ({ show: !prevState.show }))
					}
				>
					To see styling in class component
				</button>

				{this.state.show && (
					<div className="border-2 border-black rounded-3xl w-3/4 h-2/5 bg-fuchsia-500 text-center flex flex-col items-center justify-evenly">
						<h1 className="text-2xl font-bold">
							This is created using Class Component
						</h1>
						<p className="text-gray-200">This is done using external CSS</p>
						<p className="text-blue-700">This is done using internal CSS</p>
					</div>
				)}
			</div>
		);
	}
}
