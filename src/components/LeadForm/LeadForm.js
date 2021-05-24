import { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import apiService from 'services/api';
import Form from 'components/common/Form';
import Button from 'components/common/Button';
import styles from './LeadForm.module.scss';

const FIELDS = [
  {
    key: 'name',
    placeholder: 'Full name',
  },
  {
    key: 'companyName',
    placeholder: 'Company name',
  },
  {
    key: 'phone',
    placeholder: 'Phone',
  },
  {
    key: 'email',
    placeholder: 'Work Email',
    validator: isEmail,
    invalidError: 'Invalid, please try again',
  },
];

export const LeadForm = () => {
  const [fields, setFields] = useState({});
  const [hasInvalidFields, setHasInvalidFields] = useState(true);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  useEffect(() => {
    const initialFields = FIELDS.reduce((acc, field) => ({
      ...acc,
      [field.key]: {
        ...field,
        value: '',
      }
    }), {});

    setFields(initialFields);
  }, []);

  const computeInvalidFields = () => {
    let isInvalid = false;

    Object
      .values(fields)
      .forEach(field => {
        const { validator = () => true } = field;
        isInvalid = !field.value || !validator(field.value);
      });

    setHasInvalidFields(isInvalid);
  };

  useEffect(
    () => computeInvalidFields(),
    [fields]
  );

  const onInputChange = (key, value) => {
    setFields({
      ...fields,
      [key]: {
        ...fields[key],
        value,
      }
    });
  };

  const onDownloadClick = async () => {
    const link = await apiService.submitForm(fields);
    window.open(link);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>
        Want to get the full version?
      </h3>
      <h4>
        Fill in the form below:
      </h4>
      <section className={styles.form}>
        <Form fields={fields} onChange={onInputChange} />
      </section>
      <Button type="secondary" disabled={hasInvalidFields || !isPrivacyChecked} onClick={onDownloadClick}>
        {`Download Now >>`}
      </Button>
      <section className={styles.privacyPolicy} onClick={() => setIsPrivacyChecked(!isPrivacyChecked)} >
        <input type="checkbox" checked={isPrivacyChecked} className={styles.checkbox} />
        <span className={styles.description}>
          I agree to the privacy policy including for Joonko to use my contact details to contact me for marketing purposes.
        </span>
      </section>
    </div>
  );
};
