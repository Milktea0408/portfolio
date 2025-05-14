import { BrowserRouter, useNavigate } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    // <main className="bg-black">
    //   <>
    //     <Navbar />
    //     <Home />
    //   </>
    // </main>
    <>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
