import PropTypes from 'prop-types';
import styles from './Form.module.scss';

export const Form = ({ fields, onChange }) => (
  <form className={styles.form}>
    <ul className={styles.fields}>
      {Object
        .entries(fields)
        .map(([key, field]) => (
          <li key={key} className={styles.field}>
            <input
              name={key}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => onChange(key, e.target.value)}
              className={styles.input}
            />
            {field.validator && !field.validator(field.value) &&
              <label htmlFor={key} className={styles.invalidError}>
                {field.invalidError}
              </label>
            }
          </li>
        ))
      }
    </ul>
  </form>
);

Form.propTypes = {
  fields: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

Form.defaultProps = {
  fields: {},
};
