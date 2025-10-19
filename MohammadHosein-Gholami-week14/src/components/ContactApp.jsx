import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function ContactApp() {
  const [contacts, setContacts] = useState([]);
  const [showList, setShowList] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  const deleteContact = (contactToDelete) => {
    setContacts((prevContact) =>
      prevContact.filter((contact) => contact !== contactToDelete)
    );
  };
  const editContact = (contact) => {
    setEditingContact(contact);
    setShowList(false);
  };
  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "افزودن" : "لیست مخاطبین"}
      </button>
      <div>
        {showList ? (
          <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            onEdit={editContact}
          />
        ) : (
          <ContactForm
            addContact={addContact}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
            setContacts={setContacts}
            contacts={contacts}
          />
        )}
      </div>
    </div>
  );
}

export default ContactApp;
