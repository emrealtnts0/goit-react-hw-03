import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <div>{contact.name}</div>
      <div> {contact.number}</div>
      <div>
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </div>
    </li>
    
  );
};


export default Contact;
