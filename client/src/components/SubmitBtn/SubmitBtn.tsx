import { useAppSelector } from '../../app/hooks';
import { usePostOrderMutation } from '../../services/shopApi';
import s from './SubmitBtn.module.scss';

const SubmitBtn = () => {
  const { cart } = useAppSelector((state) => state.store);
  const { formData, isValid } = useAppSelector((state) => state.form);
  const [updatePost, result] = usePostOrderMutation({
    fixedCacheKey: 'shared-update-post',
  });
  const handleSubmit = () => {
    console.log('-------------------');

    const order = {
      ...formData,
      order: cart,
    };
    updatePost(order);
  };

  return (
    <button disabled={isValid} type="button" className={s.button} onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default SubmitBtn;
