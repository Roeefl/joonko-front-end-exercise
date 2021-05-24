import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

export const Button = ({ type, disabled, onClick, children }) => (
  <button onClick={disabled ? null :  onClick} className={cx(styles.button, styles[type], { [styles.disabled]: disabled })}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
};
