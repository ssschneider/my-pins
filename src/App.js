import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MinhasPastas from "./pages/minhas-pastas/minhas-pastas";
import Header from "./partials/HeaderPartial/header";
import { AppContext } from "./store/AppContext";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: []
}

function App() {
  return (
    <BrowserRouter>
      <AppContext initialState={initialState}>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/minhas-pastas" element={<MinhasPastas />}/>
      </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
