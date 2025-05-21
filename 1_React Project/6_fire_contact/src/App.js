import "./App.css";
import store from "./apps/store";
import Form from "./components/Form";
import List from "./components/List";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className=" w-screen h-screen flex items-center justify-around  p-10  border border-red-500">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
