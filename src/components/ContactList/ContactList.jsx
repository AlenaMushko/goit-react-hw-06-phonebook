import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// import PropTypes from 'prop-types';
import { ContactEl } from 'components/ContactEl';
import {List, Item } from './ContactList.styled'

// export const ContactList = ({ contacts, onDelete }) => {
export const ContactList = () => {
 const contacts = useSelector(getContacts); 
 console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item  key={id}>
          <ContactEl
            name={name}
            number={number}
            // onDelete={() => onDelete(id)}
          />
        </Item>
      ))}
      </List>
  );
};

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
