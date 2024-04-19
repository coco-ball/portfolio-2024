import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>;
    </div>
  );
}

export default App;
