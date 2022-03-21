import { useContext } from "react";
import SelectedContactDetails from "../components/contacts/SelectedContactDetails";
import Card from "../framework/card/Card";
import ContactsContext from "../store/ContactsContext";

// const DUMMY_CONTACT = {
//   firstName: "Suzy",
//   lastName: "Szobatiszta",
//   phoneNumber: "061233344",
//   email: "suzy.szobatiszta@gmail.com",
//   age: 10,
//   picture:
//     "https://ae01.alicdn.com/kf/HTB1ObgiaUzrK1RjSspmq6AOdFXat/5D-DIY-Diamond-Painting-white-poodle-dog-Diamond-Embroidery-Paint-with-Diamonds-Mosaic-Puzzels-diamond-art.jpg",
//   linkToWebsite: "dfdsfsdfsdfdsfdsf",
//   tags: ["ez", "az"],
// };

const ContactDetails = () => {
  const ctx = useContext(ContactsContext);

  return (
    <Card>
      <SelectedContactDetails
        contact={ctx.selectedContact}
      />
    </Card>
  );
};

export default ContactDetails;
