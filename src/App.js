import Info from "./components/Info";
import { Paper } from "@mui/material";

function App() {

  return (
    <Paper 
    className="App" 
    square
    sx={{
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: '#353233'
    }}
    >
      <Info />
    </Paper>
  );
}

export default App;
