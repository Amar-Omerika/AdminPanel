import GlobalRoutes from "./router/globalRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <GlobalRoutes />
    </BrowserRouter>
  );
}

export default App;
