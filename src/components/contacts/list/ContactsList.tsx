import { Contact } from "../../../models";
import ContactListItem from "./ContactListItem";
import classes from "./ContactsList.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ContactsContext from "../../../store/ContactsContext";
import Button from "../../../framework/button/Button";

const ContactsList: React.FC<{
  contacts: Contact[] | [];
}> = ({ contacts }) => {
  const navigate = useNavigate();
  const ctx = useContext(ContactsContext);
  
  const showDetails = (contact: Contact) => {
    ctx.selectContact(contact);
    navigate(`/contacts/${contact.id}`);
  };

  return (
    <>
      <div className={classes.button}>
        <Button onClick={() => navigate("/new-contact")}>
          + Create New Contact
        </Button>
      </div>
      <ul className={classes.list}>
        {!contacts.length && <p>No available contacts</p>}
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              picture={contact.picture}
              name={`${contact.firstName} ${contact.lastName}`}
              phoneNumber={contact.phoneNumber}
              email={contact.email || ""}
              showDetails={showDetails.bind(null, contact)}
            />
          ))}
      </ul>
    </>
  );
};

export default ContactsList;
