import { Outlet } from "react-router-dom";
import UserProvider from "./components/Providers/UserProvider";

function Root() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}

export default Root;
