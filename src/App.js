import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation.component";

import Umek from "./routes/artists/umek.route";
import ArianaGrande from "./routes/artists/ariana-grande.route";
import BlackPink from "./routes/artists/blackpink.route";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="umek" element={<Umek />} />
        <Route path="ariana-grande" element={<ArianaGrande />} />
        <Route path="blackpink" element={<BlackPink />} />
      </Route>
    </Routes>
  );
};

export default App;
