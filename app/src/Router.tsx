import { Route, Routes } from "react-router";
import App from "./App";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App></App>}>
      </Route>
    </Routes>
  )
}