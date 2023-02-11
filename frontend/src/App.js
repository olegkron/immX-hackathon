import "./App.css";
import AppHeader from "./components/AppHeader";
import AppScreen from "./components/AppScreen";
import MainScreen from "./screens/MainScreen";
function App() {
  return (
    <AppScreen>
      <AppHeader />
      <MainScreen />
    </AppScreen>
  );
}

export default App;
