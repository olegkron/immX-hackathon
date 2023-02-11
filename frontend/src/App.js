import { Button, Text } from "@mantine/core";
import "./App.css";
import AppScreen from "./components/AppScreen";
import colors from "./constants/colors";

function App() {
  return (
    <div className="App" style={{ backgroundColor: colors.main }}>
      <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", paddingHorizontal: 25, alignItems: "center" }}>
        <div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
          <Button
            variant="outline"
            style={{ color: "white", borderColor: "white", display: "flex", marginRight: 15 }}
            color="#000"
            radius="md"
            uppercase
          >
            Create competition
          </Button>
          <p style={{ marginRight: 15 }}>PROFILE</p>
          <p style={{ marginRight: 15 }}>SUBMISSIONS</p>
          <p style={{ marginRight: 15 }}>HISTORY</p>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Button variant="outline" style={{ color: "white", borderColor: colors.mainGradient }} color="#000" radius="md" uppercase>
            Create competition
          </Button>
        </div>
      </div>
    </AppScreen>
  );
}

export default App;
