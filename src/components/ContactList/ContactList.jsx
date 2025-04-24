import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";

const getFilteredContacts = (userContacts, filterValue) => {
  if (filterValue !== "") {
    return userContacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
  return userContacts;
};

export const ContactList = () => {
  const userContacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const filteredContacts = getFilteredContacts(userContacts, filterValue);

  return (
    <ul className={s.contactsList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
