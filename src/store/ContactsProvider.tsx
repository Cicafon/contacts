import { useCallback, useState } from "react";
import { Contact } from "../models";
import ContactsContext from "./ContactsContext";

// const DUMMY_DATA = [
//   {
//     id: "1",
//     firstName: "Matya",
//     lastName: "Szobatiszta",
//     phoneNumber: "061233344",
//     email: "matya.szobatiszta@gmail.com",
//     age: 10,
//     picture:
//       "https://vgl.ucdavis.edu/sites/g/files/dgvnsk8836/files/inline-images/Havanese-Health-Panel-600px.jpg",
//     linkToWebsite: "sddasdasdsaddasdasdasdasdasd",
//     tags: ["ez", "az"],
//   },
//   {
//     id: "2",
//     firstName: "Bosco",
//     lastName: "Boss",
//     phoneNumber: "061233344",
//     email: "bosco@gmail.com",
//     age: 10,
//     picture:
//       "https://www.scotsman.com/webimg/b25lY21zOjA2ZGUwMWI2LWQzZWUtNGE1NC1hZDVlLWY0MzFmMTYzMGMwYTowYmZkYTQyZi1jNTBjLTRkOTQtYWM4YS1lNjk3NTY0YzQwYjQ=.jpg?width=2048&enable=upscale",
//     linkToWebsite: "dsasdsa",
//     tags: ["ez", "az"],
//   },
// ];

const ContactsProvider: React.FC<React.ReactNode> = (props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState({});

  const selectContact = useCallback((data: Contact | {}) => {
    setSelectedContact(data);
  }, []);

  const addContactHandler = (data: Contact) => {
    contacts.push(data);
  };

  const editContactHandler = (data: Contact) => {};

  const deleteContactHandler = (id: string) => {};

  const updateContacts = useCallback((data: Contact[]) => {
    setContacts(data);
  }, []);

  const contactsContext = {
    contacts: contacts,
    selectedContact: selectedContact,
    updateContacts: updateContacts,
    selectContact: selectContact,
    add: addContactHandler,
    save: editContactHandler,
    delete: deleteContactHandler,
  };

  return (
    <ContactsContext.Provider value={contactsContext}>
      {props.children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
