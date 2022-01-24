import React from "react";
import { ContactItem, DeleteButton, Contact } from "./Contacts.styled";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactItem>
      {contacts.map((contact) => (
        <Contact key={contact.id}>
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <DeleteButton
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </DeleteButton>
        </Contact>
      ))}
    </ContactItem>
  );
};

const mapStateToProps = state => {
  // const { filter, items } = state.contacts;
  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = items.filter(item =>
  //     item.toLowerCase().includes(normalizedFilter)
  //   );
  return { contacts: state.contacts.items }
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
