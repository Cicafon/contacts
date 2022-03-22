import { useContext, useEffect } from "react";
import useHttp from "../axios/use-http";
import ContactsList from "../components/contacts/ContactsList";
import { Contact } from "../models";
import ContactsContext from "../store/ContactsContext";

const Contacts = () => {
  const ctx = useContext(ContactsContext);
  const { updateContacts, contacts, selectContact } = ctx;
  const { sendRequest: fetchAllContactsData, isLoading } = useHttp();

  useEffect(() => {
    selectContact({})
    const transferData = (data: any) => {
      let transormedData: Contact[] = [];
      for (const e in data) {
        const contact: Contact = {
          ...data[e],
          id: e,
        };
        transormedData.push(contact);
      }
      updateContacts(transormedData);
    };

    fetchAllContactsData({}, transferData);
  }, [fetchAllContactsData, updateContacts, selectContact]);

  return <ContactsList isLoading={isLoading} contacts={contacts} />;
};

export default Contacts;
