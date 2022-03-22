import Button from "../../../framework/button/Button";
import Labelled from "../../../framework/label/Labelled";
import { Contact } from "../../../models";
import classes from "./ContactViewEdit.module.css";
import { noImage } from "../../../helpers";

const ContactView: React.FC<{
  contact: Contact;
  onOpen: (param: boolean) => void;
}> = ({ contact, onOpen }) => {
  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <img alt="profile-pic" src={contact.picture || noImage} />
        </div>
        <div className={classes.column}>
          <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
          <Labelled bold label="Email">
            <p>{contact.email || "-"}</p>
          </Labelled>
          <Labelled bold label="Age">
            <p>{contact.age || "-"}</p>
          </Labelled>
          <Labelled bold label="Phone Number">
            <p>{contact.phoneNumber || "-"}</p>
          </Labelled>
          <Labelled bold label="Link to website">
            <p>{contact.linkToWebsite || "-"}</p>
          </Labelled>
          <Labelled bold label="Tags">
            <p>{"-"}</p>
          </Labelled>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button onClick={() => onOpen(true)}>Open</Button>
      </div>
    </>
  );
};

export default ContactView;