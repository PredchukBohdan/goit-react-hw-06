import { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "../ContactList/ContactList";
import contactsData from "../../data/contacts.json";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactForm } from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const saveContacts = localStorage.getItem("contacts");
  //   return saveContacts ? JSON.parse(saveContacts) : contactsData;
  // });
  // const [filter, setFilter] = useState("");

  // const contacts = useSelector((state) => state.phonebook.contacts.items);
  // const filter = useSelector((state) => state.phonebook.filters.name);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };
  // const addContact = (newContact) => {
  //   dispatch({ type: "addContact", payload: newContact });
  // };
  // const deleteContact = (contactId) => {
  //   dispatch({ type: "deleteContact", payload: contactId });
  // };
  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };
  // const filterContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="container">
      <section className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </section>
    </div>
  );
}

export default App;
