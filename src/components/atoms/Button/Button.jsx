import PropTypes from 'prop-types';

export const Button = ({ children, className, type }) => {
  return (
    <button id={children} className={className} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
