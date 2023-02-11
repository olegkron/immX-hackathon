import { Button, Text } from "@mantine/core";
import "./App.css";
import AppScreen from "./components/AppScreen";
import colors from "./constants/colors";

function App() {
  return (
    <AppScreen>
      <div className="App" style={{ backgroundColor: colors.main }}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Button variant="outline" style={{ color: "white", borderColor: "white" }} color="#000" radius="md" uppercase>
            Create competition
          </Button>
          <Text>PROFILE</Text>
          <Text>SUBMISSIONS</Text>
          <Text>HISTORY</Text>
        </div>
      </div>
    </AppScreen>
  );
}

export default App;
