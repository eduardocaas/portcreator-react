import { Route, Routes } from "react-router";
import App from "./App";
import { Home } from './components/public/home/Home'
import SignIn from "./components/auth/signin/Signin";
import SignUp from "./components/auth/signup/Signup";
import ProtectedRoute from "./services/auth/ProtectedRoute";
import { NotFound } from "./components/public/not-found/NotFound";
import Nav from "./components/admin/nav/Nav";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<Nav />}>
          {/* <Route index element={<Dashboard />} /> 
          <Route path="profile" element={<Profile />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="certifications/create" element={<FormCertification />} />
          <Route path="certifications/create/:id" element={<FormCertification />} />
          <Route path="certifications/:id" element={<CertificationDetails />} />
          <Route path="portfolio" element={<Portfolio />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}