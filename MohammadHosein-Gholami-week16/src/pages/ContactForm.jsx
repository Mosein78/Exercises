import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import styles from "./ContactForm.module.css";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function ContactForm() {
  const { state, dispatch } = useContext(ContactContext);
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (state.editId) {
      dispatch({ type: "UPDATE_CONTACT" });
    } else {
      dispatch({ type: "ADD_CONTACT" });
    }
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmit} className={styles.contactForm}>
        <input
          placeholder="name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="phone"
          value={state.phone}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "phone",
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "email",
              value: e.target.value,
            })
          }
        />
        <input
          placeholder="job"
          value={state.job}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "job",
              value: e.target.value,
            })
          }
        />
        <button
          type="submit"
          style={{ backgroundColor: state.editId && "#ff9800" }}
        >
          {state.editId ? "Update" : "Add"}
        </button>
      </form>
      <div>
        <ul style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/"
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
              fontSize: "14px",
            }}
          >
            صفحه اصلی
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;
