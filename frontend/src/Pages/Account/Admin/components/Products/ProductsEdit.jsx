import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ProductsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export default ProductsEdit;
