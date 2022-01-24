import React from "react";
import { ContactItem, DeleteButton, Contact } from "./Contacts.styled";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import PropTypes from 'prop-types';

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
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  return { contacts: filteredContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};