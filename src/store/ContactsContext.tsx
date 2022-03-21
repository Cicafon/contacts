import React from "react";
import { Contact } from "../models";

type ContextType = {
  contacts: Contact[] | [];
  selectedContact: Contact | {};
  updateContacts: (contacts: Contact[]) => void; // remove this? not needed?
  selectContact: (contact: Contact | {}) => void;
  add: (contact: Contact) => void;
  save: (contact: Contact) => void;
  delete: (id: string) => void;
};

const ContactsContext = React.createContext<ContextType>({
  contacts: [],
  selectedContact: {},
  updateContacts: (contacts: Contact[]) => {},
  selectContact: (contact: Contact | {}) => {},
  add: (contact: Contact) => {},
  save: (contact: Contact) => {},
  delete: (id: string) => {},
});

export default ContactsContext;
