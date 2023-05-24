import s from './Form.module.scss';

import useInput from '../../hooks/useInput';
import { useAppSelector } from '../../app/hooks';

const Form = () => {
  const { cart } = useAppSelector((store) => store.store);
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
      value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      text: `номер в формате 999-999-9999`,
    },
  });
  const address = useInput('', {
    isEmpty: true,
    minLength: 5,
  });

  const handleSubmit = () => {
    const order = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      order: cart,
    };
    console.log(order);
  };

  return (
    <div className={s.form}>
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

      <div className={s.label}>
        Address:
        {address.error && address.isDirty && <span className={s.error}> {address.error} </span>}
      </div>
      <input
        type="text"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className={s.textBox}
        value={address.value}
        onChange={(e) => address.onChange(e)}
        onBlur={() => address.onBlur()}
        placeholder="address"
      />
      <button
        disabled={!email.isValid || !phone.isValid || !address.isValid}
        type="button"
        className={s.button}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
