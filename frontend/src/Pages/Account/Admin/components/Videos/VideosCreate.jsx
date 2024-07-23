import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const VideosCreate = (props) => {
  return (
    <Create {...props} title="Create new Product">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nom" />
        <TextInput source="createur" />
        <TextInput source="lien" />
        <TextInput source="id_video" />
      </SimpleForm>
    </Create>
  );
};

export default VideosCreate;
