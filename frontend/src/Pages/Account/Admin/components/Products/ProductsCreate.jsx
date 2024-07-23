import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const ProductsCreate = (props) => {
  return (
    <Create {...props} title="Create new Product">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="price" />
      </SimpleForm>
    </Create>
  );
};

export default ProductsCreate;
