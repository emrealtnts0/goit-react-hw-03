import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default SearchBox;
