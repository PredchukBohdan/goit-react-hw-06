import { Contact } from "../Contact/Contact";
import { useState } from "react";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
