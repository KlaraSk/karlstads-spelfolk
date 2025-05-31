import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="wrapper">{<Outlet />}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
