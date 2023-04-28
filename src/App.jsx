import {  Stack } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

function App() {
  return (
    <>
    <Stack sx={{backgroundColor:'#F2F4F7'}} direction={'row'}>

    <Stack width={'232px'}>
      <Sidebar />
    </Stack>

      <Stack direction={"column"} sx={{flexGrow:1}}>
        <Navbar></Navbar>
        <Board></Board>
      </Stack>

    </Stack>
    </>
  );
}

export default App;
