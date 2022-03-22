import { useCallback, useState } from "react";
import { Contact } from "../models";
import ContactsContext from "./ContactsContext";

const ContactsProvider: React.FC<React.ReactNode> = (props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState({});

  const selectContact = useCallback((data: Contact | {}) => {
    setSelectedContact(data);
  }, []);

  const loadContacts = useCallback((data: Contact[]) => {
    setContacts(data);
  }, []);

  const contactsContext = {
    contacts: contacts,
    selectedContact: selectedContact,
    loadContacts: loadContacts,
    selectContact: selectContact,
  };

  return (
    <ContactsContext.Provider value={contactsContext}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
