import { useState } from "react";
import Button from "../../../framework/button/Button";
import Input from "../../../framework/input/Input";
import Labelled from "../../../framework/label/Labelled";
import { Contact } from "../../../models";
import { noImage } from "../../../helpers/helpers";
import classes from "./ContactViewEdit.module.css";
import Tag from "./Tag";
import WarningModal from "./WarningModal";

const ContactEdit: React.FC<{
  onCancel: (param: boolean) => void;
  onSave: (contact: Contact) => void;
  onDelete?: (id: string) => void;
  contact: Contact;
}> = ({ onCancel, onSave, onDelete, contact }) => {
  const [values, setValues] = useState<Contact>(contact);
  const [tagInput, setTagInput] = useState("");
  const [pictureEdit, setPictureEdit] = useState(false);
  const [newPicture, setNewPicture] = useState(values.picture);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let formIsValid: boolean =
    values.firstName?.trim() &&
    values.lastName?.trim() &&
    values.phoneNumber?.trim() &&
    values.email?.includes("@")
      ? true
      : false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState: Contact) => ({
      ...prevState,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  const tagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (values.tags?.includes(tagInput)) {
      alert("Tags must be unique");
      setTagInput("");
      return;
    }
    const newTags = values.tags ? [...values.tags, tagInput] : [tagInput];
    setValues((prevState: Contact) => ({ ...prevState, tags: newTags }));
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    const newTags = values.tags?.filter((item) => item !== tag);
    setValues((prevState: Contact) => ({ ...prevState, tags: newTags }));
  };

  const updatePicture = () => {
    setPictureEdit(false);
    setValues((prevState: Contact) => ({ ...prevState, picture: newPicture }));
  };

  const saveHandler = () => {
    if (!formIsValid) {
      alert(
        "First Name, Last Name, Phone Number and Email (with @) are mandatory."
      );
      return;
    }
    if (values.firstName && values.lastName) {
      onSave(values);
    }
  };

  return (
    <>
      <h1>{values.id ? "Edit Contact" : "Create New Contact"}</h1>
      <div className={classes.wrapper}>
        {values.id && (
          <div className={classes.pictureSection}>
            <img alt="profile-pic" src={values.picture || noImage} />
            {pictureEdit ? (
              <>
                <Input
                  name="newPicture"
                  value={newPicture}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewPicture(e.target.value)
                  }
                />
                <div className={classes.newPictureButtons}>
                  <Button onClick={updatePicture}>Update</Button>
                  <Button
                    appearance="secondary"
                    onClick={() => {
                      setPictureEdit(false);
                      setNewPicture(values.picture);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <Button onClick={() => setPictureEdit(true)}>
                Change picture
              </Button>
            )}
          </div>
        )}
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
          {!values.id && (
            <Labelled label="Picture url">
              <Input
                name="picture"
                value={values.picture || ""}
                onChange={handleChange}
              />
            </Labelled>
          )}
          <Labelled label="Link to website">
            <Input
              name="linkToWebsite"
              value={values.linkToWebsite || ""}
              onChange={handleChange}
            />
          </Labelled>
          <Labelled label="Tags">
            <div className={classes.row}>
              <Input
                name="tagInput"
                value={tagInput || ""}
                onChange={tagInputChange}
              />
              <Button onClick={addTag}>Add</Button>
            </div>
          </Labelled>
          <div className={classes.row}>
            {values.tags?.map((tag, index) => (
              <Tag tag={tag} key={tag} onRemove={removeTag} deletable />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button appearance="primary" onClick={saveHandler}>
          Save
        </Button>
        <Button appearance="secondary" onClick={() => onCancel(false)}>
          Cancel
        </Button>
        {values.id && (
          <Button appearance="secondary" onClick={() => setIsModalOpen(true)}>
            Delete
          </Button>
        )}
        {isModalOpen && (
          <WarningModal
            title="Delete contact"
            onOk={() => onDelete!(values.id!)}
            onClose={() => setIsModalOpen(false)}
            message={`"Are you sure to delete this contact?"`}
          />
        )}
      </div>
    </>
  );
};

export default ContactEdit;
