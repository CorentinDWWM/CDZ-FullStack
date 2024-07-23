import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import UserProvider from "./components/Providers/UserProvider";

function App() {
  return (
    <>
      <div className={`d-flex flex-column`}>
        <UserProvider>
          <Header />
          <div style={{ height: "100px" }}></div>
          <div className={`${styles.global}`}>
            <Outlet />
          </div>
          <Footer />
        </UserProvider>
      </div>
      <ScrollRestoration />
    </>
  );
}

export default App;
