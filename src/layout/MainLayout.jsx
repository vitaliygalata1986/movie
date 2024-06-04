import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

// style.css
import "./MainLayout.css";

export default function Mainlayout() {
  return (
    <>
      <Header />
      <main className="main-box">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
