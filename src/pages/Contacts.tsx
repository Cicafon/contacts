import { useContext, useEffect } from "react";
import useHttp from "../axios/use-http";
import ContactsList from "../components/contacts/list/ContactsList";
import { Contact } from "../models";
import ContactsContext from "../store/ContactsContext";

const Contacts = () => {
  const ctx = useContext(ContactsContext);
  const { loadContacts, contacts, selectContact } = ctx;
  const { sendRequest: fetchAllContactsData, isLoading, error } = useHttp();

  useEffect(() => {
    selectContact({});
    const transferData = (data: any) => {
      let transormedData: Contact[] = [];
      for (const e in data) {
        const contact: Contact = {
          ...data[e],
          id: e,
        };
        transormedData.push(contact);
      }
      
      loadContacts(transormedData);
    };

    fetchAllContactsData({}, transferData);
  }, [fetchAllContactsData, loadContacts, selectContact]);

  if (!error && isLoading) return <p className="centered">Loading...</p>;
  if (error) return <p className="centered">Oop, cannot load the contacts.</p>;
  return <ContactsList contacts={contacts} />;
};

export default Contacts;
