import PropTypes from 'prop-types';

import { Item } from './Contact.styled';
import { TiDelete, TiEdit, TiInputChecked } from 'react-icons/ti';

import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiPhone } from 'react-icons/fi';

function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const id = contact.id;
    if (name === '' || number === '') {
      return toast.error(
        `You left an empty input field, failed to save changes 😢`
      );
    }
    dispatch(editContact({ name, number, id }));
    setIsEditing(false);
  };

  return (
    <Item>
      <div className="textWrapper">
        {isEditing ? (
          <>
            <input
              className="input inputName"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter name"
            />
            <input
              className="input"
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter phone number"
              onChange={e => setNumber(e.target.value)}
            />
          </>
        ) : (
          <>
            <p className="nameWrap">{name}</p>
            <p>{number}</p>
          </>
        )}
      </div>
      <div className="buttonsWrapper">
        <a className="callLink" href={`tel:${number}`}>
          <FiPhone size={20} />
        </a>
        {isEditing ? (
          <button
            className="button saveBtn"
            type="button"
            onClick={handleSaveClick}
            title="Save changes"
          >
            <TiInputChecked size={21} />
          </button>
        ) : (
          <button
            className="button editBtn"
            type="button"
            title="Edit contact"
            onClick={handleEditClick}
          >
            <TiEdit size={20} />
          </button>
        )}

        <button
          className="button deleteBtn"
          type="button"
          title="Delete contact"
          onClick={() => {
            dispatch(deleteContact(contact.id));
          }}
        >
          <TiDelete size={20} />
        </button>
      </div>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
