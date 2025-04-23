import { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import contactsData from "./data/contacts.json";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactForm } from "./components/ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts ? JSON.parse(saveContacts) : contactsData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <section className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      </section>
    </div>
  );
}

export default App;
