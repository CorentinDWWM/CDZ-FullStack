import React from "react";
import styles from "./Admin.module.scss";
import { Admin, Resource } from "react-admin";
import Dashboard from "./Dashboard";
import UsersList from "./components/Users/UsersList";
import UsersEdit from "./components/Users/UsersEdit";
import dataprovider from "./dataprovider";
import ProductsList from "./components/Products/ProductsList";
import ProductsEdit from "./components/Products/ProductsEdit";
import ProductsCreate from "./components/Products/ProductsCreate";
import VideosCreate from "./components/Videos/VideosCreate";
import VideosList from "./components/Videos/VideosList";
import VideosEdit from "./components/Videos/VideosEdit";

export default function AdminApp() {
  return (
    <Admin
      dataProvider={dataprovider}
      basename="/admin-dashboard"
      dashboard={Dashboard}
    >
      <Resource name="users" list={UsersList} edit={UsersEdit} />
      <Resource
        name="produits"
        list={ProductsList}
        edit={ProductsEdit}
        create={ProductsCreate}
      />
      <Resource
        name="videos"
        list={VideosList}
        edit={VideosEdit}
        create={VideosCreate}
      />
    </Admin>
  );
}
