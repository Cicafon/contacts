import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../../axios/use-http";
import { Contact } from "../../../models";
import ContactsContext from "../../../store/ContactsContext";
import ContactEdit from "./ContactEdit";
import ContactView from "./ContactView";
import classes from "./SelectedContactDetails.module.css";

const SelectedContactDetails: React.FC<{ contact: Contact }> = ({
  contact,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const { isLoading, error, sendRequest } = useHttp();
  const ctx = useContext(ContactsContext);
  const navigate = useNavigate();

  const toggleIsEditable = (param: boolean) => {
    setIsEditable(param);
  };

  const editContactData = async (updatedContact: Contact) => {
    const { id, ...contactDataToSend } = updatedContact;
    const response = await sendRequest(
      {
        method: "PUT",
        data: contactDataToSend,
        itemId: id,
      },
      (data: { name: string } | null | undefined) => {
        return data;
      }
    );

    if (!response) {
      return;
    } else {
      ctx.selectContact(updatedContact);
      setIsEditable(false);
    }
  };

  const deleteContact = async (id: string) => {
    const response = await sendRequest(
      {
        method: "DELETE",
        itemId: id,
      },
      (data: { name: string } | null | undefined) => {
        return data;
      }
    );
    if (response === undefined) {
      return;
    } else {
      navigate(`/contacts`);
    }
  };

  return (
    <div className={classes.container}>
      {!isEditable && (
        <ContactView contact={contact} onOpen={toggleIsEditable} />
      )}
      {isEditable && (
        <ContactEdit
          contact={contact}
          onSave={editContactData}
          onCancel={toggleIsEditable}
          onDelete={deleteContact}
        />
      )}
      {error && <p className={classes.error}>Error happened</p>}
    </div>
  );
};

export default SelectedContactDetails;
