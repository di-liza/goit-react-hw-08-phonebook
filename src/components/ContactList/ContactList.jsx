import React, { useState } from 'react';
// import { useLogoutRedirect } from 'hooks/logOutRedirects';
import { useSelector } from 'react-redux';
import { contactsSelector, selectIsLoading } from 'redux/contacts/selectors';
import { Filter, Loader, Modal } from 'components';
import { Contact } from 'components';
import { ContactsWrapper } from './ContactList.styled';
import { TiUserAdd } from 'react-icons/ti';
import { selectFiter } from 'redux/filter';

function ContactList() {
  const contacts = useSelector(contactsSelector);
  const isLoading = useSelector(selectIsLoading);

  const filter = useSelector(selectFiter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ContactsWrapper>
      {open && <Modal closeModal={handleClose} />}
      <div className="headerWrap">
        <h2 className="title">Contacts</h2>
        <button
          title="Add contact"
          className="addContactBtn"
          type="button"
          onClick={handleOpen}
        >
          <TiUserAdd size={20} />
        </button>
      </div>
      <Filter />
      {isLoading ? (
        <Loader height={80} width={80} top={100} />
      ) : (
        <ul>
          {filteredContacts.length !== 0 &&
            filteredContacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
      )}
    </ContactsWrapper>
  );
}

export default ContactList;
