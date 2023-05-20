import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" ,padding:0}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail/>}/>
            <Route path="/channel/:id" element={<ChannelDetail/>}/>
            <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
