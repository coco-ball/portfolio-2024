import { Outlet } from "react-router-dom";
import HomeButton from "./components/common/HomeButton";

function App() {
  return (
    <div>
      <Outlet></Outlet>
      <HomeButton></HomeButton>
    </div>
  );
}

export default App;
