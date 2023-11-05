import PropTypes from 'prop-types';
import { Header } from 'components/atoms/Header/Header';
import { Input } from 'components/atoms/Input/Input';
import styles from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return (
    <>
      <Header level={4} className={styles.filterHeader}>
        Find contacts by name:
      </Header>
      <Input className={styles.filterInput} type="text" onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
