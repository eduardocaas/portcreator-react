import { Navigate, Route, Routes } from "react-router";
import App from "./App";
import { Home } from './components/public/home/Home'
import SignIn from "./components/auth/signin/Signin";
import SignUp from "./components/auth/signup/Signup";
import ProtectedRoute from "./services/auth/ProtectedRoute";
import { NotFound } from "./components/public/not-found/NotFound";
import Nav from "./components/admin/nav/Nav";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Profile from "./components/admin/user/profile/Profile";
import Certification from "./components/admin/certification/certification/Certification";
import FormCertification from "./components/admin/certification/form-certification/FormCertification";
import DetailsCertification from "./components/admin/certification/details-certification/DetailsCertification";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<Nav />}>
          <Route index element={<Dashboard />} /> 
          <Route path="profile" element={<Profile />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="certifications/create" element={<FormCertification />} />
          <Route path="certifications/create/:id" element={<FormCertification />} />
          <Route path="certifications/:id" element={<DetailsCertification />} />
          {/* <Route path="portfolio" element={<Portfolio />} />  */}
          <Route path="*" element={<Navigate to="/app" replace />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}