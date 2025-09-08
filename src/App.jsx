// app.jsx
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={routes} />
    </MotionConfig>
  );
}

export default App;