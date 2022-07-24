import "./App.css";
import AppNavbar from "./components/appNavbar/AppNavbar";
import Sidebar from "./components/sidebar/Sidebar";
import { HiArrowLeft } from "react-icons/hi";
import TestInfo from "./components/testInfo/TestInfo";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="app_right">
        <AppNavbar />
        <div className="exit_wrapper">
          <HiArrowLeft className="exit_icon" />
          <p>Back to Exit</p>
        </div>
        <TestInfo />
      </div>
    </div>
  );
}

export default App;
