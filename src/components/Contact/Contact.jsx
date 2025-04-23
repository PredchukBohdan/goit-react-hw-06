import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={s.item}>
      <div className={s.itemInfo}>
        <div className={s.itemName}>
          <IoPerson />
          <span>{contact.name}</span>
        </div>
        <div className={s.itemPhone}>
          <FaPhone />
          <span>{contact.number}</span>
        </div>
      </div>
      <button
        className={s.itemDelete}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
