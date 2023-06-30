import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operation';

import { toast } from 'react-toastify';
import { contactsSelector } from 'redux/contacts/selectors';
import { FormStyled } from './ContactsForm.styled';
import { TiTimes } from 'react-icons/ti';
import { FiUser, FiPhone } from 'react-icons/fi';

function ContactsForm({ closeModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const handleFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      return toast.error(`"${newContact.name}" is already in contacts 😣`, {
        position: 'top-center',
      });
    }

    dispatch(createContact(newContact));
    closeModal();
    e.currentTarget.reset();
  };

  return (
    <FormStyled onSubmit={handleFormSubmit}>
      <button
        title="Close modal"
        className="closeModalBtn"
        type="button"
        onClick={closeModal}
      >
        <TiTimes size={20} />
      </button>
      <h3 className="title">Add new contact</h3>
      <label className="styled-label">
        <span>
          <FiUser size={15} /> Name
        </span>
        <input
          className="styled-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
      </label>
      <label className="styled-label">
        <span>
          {' '}
          <FiPhone size={15} />
          Number
        </span>
        <input
          className="styled-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter phone number"
          required
        />
      </label>
      <button className="addBtn" type="submit">
        Add
      </button>
    </FormStyled>
  );
}

export default ContactsForm;
