import { Button } from "@mantine/core";
import "./App.css";
import AppScreen from "./components/AppScreen";
import colors from "./constants/colors";

function App() {
  return (
    <AppScreen>
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
            <p style={{ margin: 30 }}>PROFILE</p>
            <p style={{ margin: 30 }}>SUBMISSIONS</p>
            <p style={{ margin: 30 }}>HISTORY</p>
          </div>
          <div style={{ flexDirection: "row", display: "flex" }}>
            <Button variant="outline" style={{ color: "white", borderColor: colors.mainGradient }} color="#000" radius="md" uppercase>
              Create competition
            </Button>
          </div>
        </div>
      </div>
    </AppScreen>
  );
}

export default App;
