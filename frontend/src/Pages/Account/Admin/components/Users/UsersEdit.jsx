import React from "react";
import { Edit, EmailField, SimpleForm, TextInput } from "react-admin";

const UsersEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <EmailField source="email" />
      <TextInput disabled source="createdAt" />
      <TextInput disabled source="updateAt" />
    </SimpleForm>
  </Edit>
);

export default UsersEdit;
