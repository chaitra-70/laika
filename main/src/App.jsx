import { BrowserRouter, Routes, Route } from "react-router-dom";

import SpaceJourney from "./components/SpaceJourney";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import ISS from "./pages/ISS";
import Launches from "./pages/Launches";
import Asteroids from "./pages/Asteroids";
import Apod from "./pages/Apod";
import SpaceFeed from "./pages/SpaceFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpaceJourney />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="iss" element={<ISS />} />
          <Route path="launches" element={<Launches />} />
          <Route path="asteroids" element={<Asteroids />} />
          <Route path="apod" element={<Apod />} />
          <Route path="SpaceFeed" element={<SpaceFeed />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;