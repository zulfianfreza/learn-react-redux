import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../config/redux/action';

export default function Content() {
  const { dataProduct } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProduct());
  }, [dispatch]);

  return (
    <>
      <div>
        <div className="mt-4">
          <div className="container">
            <h4>Product</h4>
            <hr />
            {dataProduct.map((item) => {
              return <p>{item.title}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
