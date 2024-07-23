import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from "react-admin";

export default function UsersList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick={false}>
        <TextField source="id" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="createdAt" />
        <TextField source="updatedAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
