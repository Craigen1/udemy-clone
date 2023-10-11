import { Route, Routes } from "react-router-dom";
import HowsTo from "./components/Contents/HowsTo";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="frame">
              <HowsTo />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
