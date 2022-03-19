import ContactsList from "../components/contacts/ContactsList";
import { Contact } from "../models";

const Contacts = () => {
  const DUMMY_DATA: Contact[] = [
    {
      id: "1",
      firstName: "Matya",
      lastName: "Szobatiszta",
      phoneNumber: "061233344",
      email: "matya.szobatiszta@gmail.com",
      age: 10,
      picture:
        "https://vgl.ucdavis.edu/sites/g/files/dgvnsk8836/files/inline-images/Havanese-Health-Panel-600px.jpg",
      linkToWebsite: "sddasdasdsaddasdasdasdasdasd",
      tags: ["ez", "az"],
    },
    {
      id: "2",
      firstName: "Bosco",
      lastName: "Boss",
      phoneNumber: "061233344",
      email: "bosco@gmail.com",
      age: 10,
      picture:
        "https://www.scotsman.com/webimg/b25lY21zOjA2ZGUwMWI2LWQzZWUtNGE1NC1hZDVlLWY0MzFmMTYzMGMwYTowYmZkYTQyZi1jNTBjLTRkOTQtYWM4YS1lNjk3NTY0YzQwYjQ=.jpg?width=2048&enable=upscale",
      linkToWebsite: "dsasdsa",
      tags: ["ez", "az"],
    },
  ];

  return <ContactsList contacts={DUMMY_DATA} />;
};

export default Contacts;
