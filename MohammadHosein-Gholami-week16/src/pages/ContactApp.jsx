import React, { useContext } from "react";
import ContactList from "./ContactList";
import ContactSearch from "./ContactSearch";
import { Link } from "react-router";
import { ContactContext } from "../context/ContactContext";

function ContactApp() {
  const { dispatch, state } = useContext(ContactContext);
  return (
    <>
      <ContactSearch />
      <ContactList />
      <div>
        <ul style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/form"
            style={{
              textDecoration: "none",
              color: "#fff",
              padding: "10px 20px",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
              backgroundColor: "#2196f3",
              fontSize:"14px"
            }}
          >
            صفحه فرم
          </Link>
        </ul>
      </div>
      {state.contacts.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => dispatch({ type: "DELETE_ALL" })}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
}

export default ContactApp;
