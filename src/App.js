import { MyPlantsContainer } from "./components/MyPlantsContainer/MyPlantsContainer";
import { Navbar } from "./components/Navbar/Navbar";
/* import { AddPlant } from "./components/AddPlant/AddPlant"; */
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyPlantsContainer />
      {/* <AddPlant /> */}
    </div>
  );
}

export default App;
