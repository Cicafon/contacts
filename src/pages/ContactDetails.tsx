import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../axios/use-http";
import SelectedContactDetails from "../components/contacts/details/SelectedContactDetails";
import Card from "../framework/card/Card";
import ContactsContext from "../store/ContactsContext";

const ContactDetails = () => {
  const ctx = useContext(ContactsContext);
  const params = useParams();
  const { id } = params;
  const { sendRequest: fetchContactDetails, isLoading, error } = useHttp();
  const { selectContact, selectedContact: contact } = ctx;

  useEffect(() => {
    const transferData = (data: any) => {
      if (typeof id === "string") {
        selectContact({ ...data[id], id: id });
      }
    };
    fetchContactDetails({ data: id }, transferData);
  }, [fetchContactDetails, id, selectContact]);

  if (!error && isLoading) return <p className="centered">Loading...</p>;
  if (!contact.firstName)
    return (
      <p className="centered">{`Contact with id "${contact.id}" does not exists`}</p>
    );

  return (
    <Card>
      <SelectedContactDetails contact={contact} />
    </Card>
  );
};

export default ContactDetails;
