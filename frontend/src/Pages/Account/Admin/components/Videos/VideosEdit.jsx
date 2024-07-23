import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const VideosEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="nom" />
      <TextInput source="createur" />
      <TextInput source="lien" />
      <TextInput source="id_video" />
    </SimpleForm>
  </Edit>
);

export default VideosEdit;
