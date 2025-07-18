import { Input } from "./components/input";
import { Results } from "./components/results";

function App() {
	return (
		<div className="container">
			<h1>Character Counter</h1>
			<Input />
			<Results />
		</div>
	);
}

export default App;
