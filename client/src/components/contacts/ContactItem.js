import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/ContactContext";

const ContactItem = ({ contact: { id, name, email, phone, type } }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onEdit = () => {
    setCurrent({ id, name, email, phone, type });
  };

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        {` `}
        <span
          style={{ float: "right" }}
          className={`badge badge-${
            type === "professional" ? "success" : "primary"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fa fa-envelope open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
