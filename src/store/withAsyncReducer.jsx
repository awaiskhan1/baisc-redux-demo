import React, { useEffect } from 'react';
import storeManagerService from './store.service';


const withAsyncReducer = (key, reducer) =>
  (Component) => {
    const WrappedComponent = (props) => {
      useEffect(() => {
        storeManagerService.addReducer(key, reducer);
        return () => storeManagerService.removeReducer(key);
      }, []);
      return <Component {...props} />;
    };

    return WrappedComponent;
  };

export default withAsyncReducer;
