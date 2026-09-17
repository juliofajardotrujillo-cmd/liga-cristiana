import { Routes, Route } from "react-router-dom";
import MobileShell from "./components/MobileShell";
import Inicio from "./pages/Inicio";
import Calendario from "./pages/Calendario";
import Equipos from "./pages/Equipos";
import Estadisticas from "./pages/Estadisticas";
import Reglas from "./pages/Reglas";

function App() {
  return (
    <Routes>
      <Route element={<MobileShell />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/reglas" element={<Reglas />} />
      </Route>
    </Routes>
  );
}

export default App;
