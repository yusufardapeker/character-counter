import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.scss";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
