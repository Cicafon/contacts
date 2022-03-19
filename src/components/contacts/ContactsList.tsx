import { Contact } from "../../models";
import ContactListItem from "./ContactListItem";
import classes from "./ContactsList.module.css";
import { useNavigate } from "react-router-dom";

const ContactsList: React.FC<{ contacts: Contact[] | [] }> = ({ contacts }) => {
  const navigate = useNavigate();

  const showDetails = (id: string) => {
    navigate(`/contacts/${id}`);
  };

  return (
    <ul className={classes.list}>
      {!contacts.length && <p>No available contacts</p>}
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            picture={contact.picture}
            name={`${contact.firstName} ${contact.lastName}`}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
            showDetails={showDetails.bind(null, contact.id)}
          />
        ))}
    </ul>
  );
};

export default ContactsList;
