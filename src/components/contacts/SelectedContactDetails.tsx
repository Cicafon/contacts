import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../axios/use-http";
import { Contact } from "../../models";
import ContactEdit from "./ContactEdit";
import ContactView from "./ContactView";
import classes from "./SelectedContactDetails.module.css";

const SelectedContactDetails: React.FC<{
  contact: Contact | {};
}> = ({ contact }) => {
  const [isEditable, setIsEditable] = useState(false);

  const { isLoading, error, sendRequest } = useHttp();

  const navigate = useNavigate();
  if (!error && isLoading) return <h1>Loading</h1>;
  if (!contact) return <p>No contact</p>;

  const toggleIsEditable = (param: boolean) => {
    setIsEditable(param);
  };

  const editContactData = () => {};

  const deleteContact = async (id: string) => {
    const resposne = await sendRequest(
      {
        method: "DELETE",
        data: id,
      },
      (data: { name: string } | null | undefined | any) => {
        return data;
      }
    );
    if (resposne === undefined) {
      return;
    } else {
      navigate(`/contacts`);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        {!isEditable && <ContactView toggleIsEditable={toggleIsEditable} />}
        {isEditable && (
          <ContactEdit
            onSave={editContactData}
            onCancel={toggleIsEditable}
            onDelete={deleteContact}
          />
        )}
        {error && <p>Error happened</p>}
      </div>
    </React.Fragment>
  );
};

export default SelectedContactDetails;
