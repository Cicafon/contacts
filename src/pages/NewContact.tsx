import { useNavigate } from "react-router-dom";
import useHttp from "../axios/use-http";
import ContactEdit from "../components/contacts/details/ContactEdit";
import Card from "../framework/card/Card";
import { Contact } from "../models";

const NewContact = () => {
  const { sendRequest } = useHttp();
  const navigate = useNavigate();
  const navigateToContactsPage = () => {
    navigate("/contacts");
  };

  const addNewContact = async (newContact: Contact) => {
    const resposne = await sendRequest(
      {
        method: "POST",
        data: newContact,
      },
      (data: { name: string } | null | undefined) => {
        return data;
      }
    );
    if (resposne.name) {
      navigate(`/contacts`);
    }
  };
  return (
    <Card>
      <ContactEdit
        onSave={addNewContact}
        onCancel={navigateToContactsPage}
        contact={{}}
      />
    </Card>
  );
};

export default NewContact;
