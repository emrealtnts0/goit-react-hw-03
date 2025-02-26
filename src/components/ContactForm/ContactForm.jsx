import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too short!')
    .required('Required'),
});

const ContactForm = ({ addContact }) => {
  const initialValues = { name: '', number: '' };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
