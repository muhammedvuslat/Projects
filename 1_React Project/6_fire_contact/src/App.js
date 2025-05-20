import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className=" w-screen h-screen flex items-center justify-around  p-10 justify-center border border-red-500">
      <Form />
      <List />
    </div>
  );
}

export default App;
