import React, { useEffect } from 'react';
import Layout from './Components/Layout/Layout';
import ProducItemDetails from './Components/ProducItemDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductItem from './Components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './Redux/asyncActions/products';

function App() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);


  useEffect(() => {
    dispatch(getProducts(products));
  }, [])


  return (
    <BrowserRouter>
      <Route path="/" render={() => {
        return (
          <Layout products={products} />
        )
      }} exact />

      <Route path="/products/:id" component={ProducItemDetails} />

    </BrowserRouter>

  );
}

export default App;
