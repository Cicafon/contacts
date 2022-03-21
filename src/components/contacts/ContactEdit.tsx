import { useContext, useState } from "react";
import Button from "../../framework/button/Button";
import Input from "../../framework/input/Input";
import Labelled from "../../framework/label/Labelled";
import { Contact, FilledNewContact } from "../../models";
import ContactsContext from "../../store/ContactsContext";
import classes from "./ContactEdit.module.css";

const ContactEdit: React.FC<{
  onCancel: (param: boolean) => void;
  onSave: (contact: Contact | FilledNewContact) => void;
}> = ({ onCancel, onSave }) => {
  const ctx = useContext(ContactsContext);
  const [values, setValues] = useState<any>(ctx.selectedContact);

  //const [tags, setTags] = useState([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevState: any) => ({
      ...prevState,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  const saveHandler = () => {
    if (values.firstName && values.lastName) {
      onSave(values);
    }
  };

  return (
    <>
      <h1>Create New Contact</h1>
      <div className={classes.wrapper}>
        {values.picture && <img alt="profile-pic" src={values.picture || ""} />}
        <div className={classes.column}>
          <Labelled label="First Name">
            <Input
              name="firstName"
              value={values.firstName || ""}
              onChange={handleChange}
            />
          </Labelled>
          <Labelled label="Last Name">
            <Input
              name="lastName"
              value={values.lastName || ""}
              onChange={handleChange}
            />
          </Labelled>

          <Labelled label="Email">
            <Input
              name="email"
              value={values.email || ""}
              onChange={handleChange}
            />
          </Labelled>

          <Labelled label="Age">
            <Input
              name="age"
              value={values.age || ""}
              onChange={handleChange}
              type="number"
              min="0"
              step="1"
              max="120"
            />
          </Labelled>
          <Labelled label="Phone Number">
            <Input
              name="phoneNumber"
              value={values.phoneNumber || ""}
              onChange={handleChange}
            />
          </Labelled>

          <Labelled label="Picture url">
            <Input
              name="picture"
              value={values.picture || ""}
              onChange={handleChange}
            />
          </Labelled>
          <Labelled label="Link to website">
            <Input
              name="linkToWebsite"
              value={values.linkToWebsite || ""}
              onChange={handleChange}
            />
          </Labelled>
          <Labelled label="Tags">
            <Input />
          </Labelled>
        </div>
      </div>
      <Button appearance="primary" onClick={saveHandler}>
        Save
      </Button>
      <Button appearance="secondary" onClick={() => onCancel(false)}>
        Cancel
      </Button>
      <Button appearance="secondary">Delete</Button>
    </>
  );
};

export default ContactEdit;
