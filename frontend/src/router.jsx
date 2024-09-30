import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "../src/Pages/Form/Login/Login";
import Accueil from "./Pages/Accueil/Accueil";
import Register from "./Pages/Form/Register/Register";
import RGPD from "./Pages/Form/RGPD/RGPD";
import Logout from "./Pages/Logout";
import VerifyMail from "./Pages/Form/VerifyMail";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import ForgotPassword from "./Pages/Form/Password/ForgotPassword";
import ResetPassword from "./Pages/Form/Password/ResetPassword";
import MyAccount from "./Pages/Account/MyAccount";
import Contact from "./Pages/Contact/Contact";
import { userLoader } from "./loader/userLoader";
import Videos from "./Pages/Videos/Videos";
import Boutique from "./Pages/Boutique/Boutique";
import Produit from "./Pages/Boutique/Produit/Produit";
import Root from "./Root";
import AdminApp from "./Pages/Account/Admin/Admin";
import UsersList from "./Pages/Account/Admin/components/Users/UsersList";
import UsersEdit from "./Pages/Account/Admin/components/Users/UsersEdit";
import Erreur from "./Pages/Erreur/Erreur";
import AdminUser from "./components/ProtectedRoutes/AdminUser";
import ProductsList from "./Pages/Account/Admin/components/Products/ProductsList";
import ProductsEdit from "./Pages/Account/Admin/components/Products/ProductsEdit";
import VideosList from "./Pages/Account/Admin/components/Videos/VideosList";
import VideosEdit from "./Pages/Account/Admin/components/Videos/VideosEdit";
import Mentions_Legales from "./Pages/Form/RGPD/Mentions_Legales/Mentions_Legales";
import { produitLoader } from "./loader/produitLoader";
import CGV from "./Pages/Form/RGPD/CGV/CGV";

const MainRoutes = {
  path: "/",
  element: <App />,
  loader: userLoader,
  produitLoader,
  children: [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/videos",
      element: <Videos />,
    },
    {
      path: "/boutique",
      element: <Boutique />,
    },
    {
      path: "/boutique/produit/:id",
      element: <Produit />,
    },
    {
      path: "/contact",
      element: (
        <UserConnected>
          <Contact />
        </UserConnected>
      ),
    },
    {
      path: "/register",
      element: (
        <UserNotConnected>
          <Register />
        </UserNotConnected>
      ),
    },
    {
      path: "/verifyMail/:token",
      element: <VerifyMail />,
    },
    {
      path: "/rgpd",
      element: <RGPD />,
    },
    {
      path: "/mentions_legales",
      element: <Mentions_Legales />,
    },
    {
      path: "/cgv",
      element: <CGV />,
    },
    {
      path: "/login",
      element: (
        <UserNotConnected>
          <Login />
        </UserNotConnected>
      ),
    },
    {
      path: "/forgotPassword",
      element: (
        <UserNotConnected>
          <ForgotPassword />
        </UserNotConnected>
      ),
    },
    {
      path: "/resetPassword/:email",
      element: (
        <UserNotConnected>
          <ResetPassword />
        </UserNotConnected>
      ),
    },
    {
      path: "/account/:id",
      element: (
        <UserConnected>
          <MyAccount />
        </UserConnected>
      ),
    },
    {
      path: "/logout",
      element: (
        <UserConnected>
          <Logout />
        </UserConnected>
      ),
    },
  ],
};

const adminRoutes = {
  path: "/admin-dashboard/*",
  element: (
    <AdminUser>
      <AdminApp />
    </AdminUser>
  ),
  children: [
    {
      path: "/admin-dashboard/*/users",
      element: (
        <AdminUser>
          <UsersList />
        </AdminUser>
      ),
      children: [
        {
          path: "/admin-dashboard/*/users/:id",
          element: (
            <AdminUser>
              <UsersEdit />
            </AdminUser>
          ),
        },
      ],
    },
    {
      path: "/admin-dashboard/*/produits",
      element: (
        <AdminUser>
          <ProductsList />
        </AdminUser>
      ),
      children: [
        {
          path: "/admin-dashboard/*/produits/:id",
          element: (
            <AdminUser>
              <ProductsEdit />
            </AdminUser>
          ),
        },
      ],
    },
    {
      path: "/admin-dashboard/*/videos",
      element: (
        <AdminUser>
          <VideosList />
        </AdminUser>
      ),
      children: [
        {
          path: "/admin-dashboard/*/videos/:id",
          element: (
            <AdminUser>
              <VideosEdit />
            </AdminUser>
          ),
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Erreur />,
    children: [MainRoutes, adminRoutes],
  },
]);
