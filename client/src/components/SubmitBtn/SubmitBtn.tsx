import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { usePostOrderMutation } from '../../services/shopApi';
import { cleanCart, setIsError, setIsSuccess } from '../../reducers/storeReducer';
import s from './SubmitBtn.module.scss';

const SubmitBtn = () => {
  const { cart } = useAppSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, isValid } = useAppSelector((state) => state.form);
  const [updatePost, result] = usePostOrderMutation({});
  const handleSubmit = () => {
    dispatch(setIsError(null));
    const order = {
      ...formData,
      order: cart,
    };
    updatePost(order);
  };

  useEffect(() => {
    if (result.isError) {
      dispatch(setIsError(result.isError));
    }
    if (result.isSuccess) {
      dispatch(cleanCart());
      dispatch(setIsSuccess(true));
      setTimeout(() => {
        dispatch(setIsSuccess(false));
        navigate('/');
      }, 5000);
    }
  }, [result, dispatch, navigate]);

  return (
    <button disabled={isValid} type="button" className={s.button} onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default SubmitBtn;
