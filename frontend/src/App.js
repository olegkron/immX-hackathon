import "./App.css";
import { Button, Text } from "@mantine/core";
import colors from "./constants/colors";
// import { makeStyles } from "@material-ui/core/styles";

function App() {
  // const useStyles = makeStyles({
  //   whiteButton: {
  //     backgroundColor: "white",
  //     color: "black",
  //     "&:hover": {
  //       backgroundColor: "#E0E0E0",
  //     },
  //   },
  // });
  // const classes = useStyles();
  return (
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
  );
}

export default App;
