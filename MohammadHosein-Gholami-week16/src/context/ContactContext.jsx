import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: [],
  name: "",
  phone: "",
  email: "",
  job: "",
  search: "",
  editId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_CONTACT":
      return { ...state, contacts: action.contacts };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: Date.now(),
            name: state.name,
            phone: state.phone,
            email: state.email,
            job: state.job,
          },
        ],
        name: "",
        phone: "",
        email: "",
        job: "",
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.id),
        name: "",
        phone: "",
        email: "",
        job: "",
        editId: null,
      };
    case "SET_EDITING":
      const contact = state.contacts.find((e) => e.id === action.id);
      if (!contact) return state;
      return {
        ...state,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        job: contact.job,
        editId: action.id,
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === state.editId
            ? {
                ...contact,
                name: state.name,
                phone: state.phone,
                email: state.email,
                job: state.job,
              }
            : contact
        ),
        name: "",
        phone: "",
        email: "",
        job: "",
        editId: null,
      };
    case "DELETE_ALL":
      return {
        ...state,
        contacts: [],
        name: "",
        phone: "",
        email: "",
        job: "",
        editId: null,
      };

    default:
      return state;
  }
};

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      dispatch({ type: "SET_CONTACT", contacts: JSON.parse(storedContacts) });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
