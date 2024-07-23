import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function ProductsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick={false}>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="price" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
