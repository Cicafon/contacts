import React from "react";
import { Contact } from "../models";

type ContextType = {
  contacts: Contact[] | [];
  selectedContact: Contact;
  loadContacts: (contacts: Contact[]) => void;
  selectContact: (contact: Contact | {}) => void;
};

const ContactsContext = React.createContext<ContextType>({
  contacts: [],
  selectedContact: {},
  loadContacts: (contacts: Contact[]) => {},
  selectContact: (contact: Contact | {}) => {},
});

export default ContactsContext;
