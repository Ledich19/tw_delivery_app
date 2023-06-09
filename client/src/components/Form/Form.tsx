import { useEffect } from 'react';
import s from './Form.module.scss';
import useInput from '../../hooks/useInput';
import { useAppDispatch } from '../../app/hooks';
import { setFormData } from '../../reducers/formReducer';
import GoogleMapComponent from '../GoogleMapComponent/MapComponent';
import Search from '../GoogleMapComponent/Search/Search';

const Form = () => {
  const dispatch = useAppDispatch();
  const name = useInput('', {
    isEmpty: true,
    minLength: 3,
  });
  const email = useInput('', {
    isEmpty: true,
    minLength: 3,
    reGex: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      text: `Это должен быть Электронная почта`,
    },
  });
  const phone = useInput('', {
    isEmpty: true,
    minLength: 8,
    reGex: {
      value: /^\+\d{12}$/,
      text: `номер в формате +999999999999`,
    },
  });

  useEffect(() => {
    const formData = {
      name: name.value || '',
      email: email.value || '',
      phone: phone.value || '',
    };
    const isValid = !email.isValid || !phone.isValid;
    dispatch(setFormData({ formData, isValid }));
  }, [name, email, phone, dispatch]);

  return (
    <div className={s.form}>
      <GoogleMapComponent />
      <div className={s.label}>
        Name:
        {name.error && name.isDirty && <span className={s.error}> {name.error} </span>}
      </div>
      <input
        type="text"
        className={s.textBox}
        value={name.value}
        onChange={(e) => name.onChange(e)}
        onBlur={() => name.onBlur()}
        placeholder="Full Name"
      />
      <div className={s.label}>
        Email:
        {email.error && email.isDirty && <span className={s.error}> {email.error} </span>}
      </div>
      <input
        type="text"
        className={s.textBox}
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={() => email.onBlur()}
        placeholder="E-mail Address"
      />

      <div className={s.label}>
        Phone:
        {phone.error && phone.isDirty && <span className={s.error}> {phone.error} </span>}
      </div>
      <input
        type="tel"
        className={s.textBox}
        value={phone.value}
        onChange={(e) => phone.onChange(e)}
        onBlur={() => phone.onBlur()}
        placeholder="phone"
      />

      <Search />
    </div>
  );
};

export default Form;
