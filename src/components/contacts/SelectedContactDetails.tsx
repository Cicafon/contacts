import React, { useState } from "react";
import useHttp from "../../axios/use-http";
import { Contact } from "../../models";
import ContactEdit from "./ContactEdit";
import ContactView from "./ContactView";
import classes from "./SelectedContactDetails.module.css";

const SelectedContactDetails: React.FC<{
  contact: Contact | {};
}> = ({ contact }) => {
  const [isEditable, setIsEditable] = useState(false);

  const { isLoading } = useHttp();
  if (isLoading) return <h1>Loading</h1>;
  if (!contact) return <p>No contact</p>;

  const toggleIsEditable = (param: boolean) => {
    setIsEditable(param);
  };

  const editContactData = () => {};

  return (
    <React.Fragment>
      <div className={classes.container}>
        {!isEditable && <ContactView toggleIsEditable={toggleIsEditable} />}
        {isEditable && (
          <ContactEdit onSave={editContactData} onCancel={toggleIsEditable} />
        )}
      </div>
    </React.Fragment>
  );
};

export default SelectedContactDetails;
