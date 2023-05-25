import { useAppSelector } from '../../app/hooks';
import s from './SubmitBtn.module.scss';

const SubmitBtn = () => {
  const { cart } = useAppSelector((state) => state.store);
  const { formData, isValid } = useAppSelector((state) => state.form);

  const handleSubmit = () => {
    const order = {
      ...formData,
      order: cart,
    };
    console.log(order);
  };

  return (
    <button disabled={isValid} type="button" className={s.button} onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default SubmitBtn;
