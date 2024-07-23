import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function VideosList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick={false}>
        <TextField source="id" />
        <TextField source="nom" />
        <TextField source="createur" />
        <TextField source="lien" />
        <TextField source="id_video" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
