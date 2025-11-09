import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AcademicYear from "./pages/master/AcademicYear";
import Category from "./pages/master/Category";
import ClassPage from "./pages/master/ClassPage";
import Section from "./pages/master/Section";
import FeeType from "./pages/master/FeeType";
import StudentAdmission from "./pages/students/StudentAdmission";
import PaymentReport from "./pages/reports/PaymentReport";
import ConcessionReport from "./pages/reports/ConcessionReport";

export default function App() {
  const isAuth = localStorage.getItem("auth");

  return (
    <BrowserRouter>
      {isAuth && <Topbar />}
      {isAuth && <Sidebar />}
      <div className={isAuth ? "main" : ""}>
        <Routes>
          {!isAuth ? (
            <Route path="*" element={<Login />} />
          ) : (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/master/academic-year" element={<AcademicYear />} />
              <Route path="/master/category" element={<Category />} />
              <Route path="/master/class" element={<ClassPage />} />
              <Route path="/master/section" element={<Section />} />
              <Route path="/master/fee-type" element={<FeeType />} />
              <Route path="/students/admission" element={<StudentAdmission />} />
              <Route path="/reports/payments" element={<PaymentReport />} />
              <Route path="/reports/concession" element={<ConcessionReport />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
