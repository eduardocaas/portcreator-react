import { Route, Routes } from "react-router";
import App from "./App";
import { Home } from './components/public/home/Home'
import SignIn from "./components/auth/signin/Signin";
import SignUp from "./components/auth/signup/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route index element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Route>
    </Routes>
  )
}