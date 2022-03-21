import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../axios/use-http";
import ContactEdit from "../components/contacts/ContactEdit";
import Card from "../framework/card/Card";
import { FilledNewContact } from "../models";
import ContactsContext from "../store/ContactsContext";

const NewContact = () => {
  const { sendRequest } = useHttp();
  const ctx = useContext(ContactsContext);
  const navigate = useNavigate();
  const navigateToContactsPage = () => {
    navigate("/contacts");
    ctx.selectContact({})
  };

  const addNewContact = async (newContact: FilledNewContact) => {
    const resposne = await sendRequest(
      {
        url: `${process.env.REACT_APP_FIREBASE_DOMAIN}/contacts.json`,
        method: "POST",
        data: newContact,
      },
      (data: { name: string } | null | undefined) => {
        return data;
      }
    );
    if (resposne.name) {
      ctx.add({ ...newContact, id: resposne.name });
      navigate(`/contacts`);
    }
  };
  return (
    <Card>
      <ContactEdit onSave={addNewContact} onCancel={navigateToContactsPage} />
    </Card>
  );
};

export default NewContact;
