import "./App.css";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import HomeIntro from "./components/HomeIntro";
import StartPage from "./components/StartPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box>
      <NavBar />
      <Box mt={10}>
        <Routes>
          <Route path="/" element={<HomeIntro />} />
          <Route path="signup" element={<StartPage />}>
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
