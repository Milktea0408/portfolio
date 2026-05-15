import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import FloatingParticles from "./components/layout/FloatingParticles";

function App() {
  return (
    <>
      <FloatingParticles />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
