import React, {useEffect} from 'react';
import Form from './Form/Form';

const BecomeSupplier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Form />
    </div>
  )
}

export default BecomeSupplier;
