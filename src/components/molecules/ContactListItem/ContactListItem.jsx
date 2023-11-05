import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { Span } from 'components/atoms/Span/Span';

export const ContactListItem = ({ item, classes }) => {
  return (
    <li className={classes.contactItem} id={item.id}>
      <Span className={classes.contactNumber}>{item.name}</Span>
      <Span className={classes.contactNumber}>{item.phone}</Span>
      <Button className={classes.contactButton} type="button">
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  classes: PropTypes.shape(),
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
