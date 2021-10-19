import React from 'react';
import Nutrition from '../Product/Nutrition.jsx';
import MealList from '../Product/MealList.jsx';

export default function ProductsPage() {
  return (
    <>
      <MealList />
      <Nutrition />
      <h1>Products Page</h1>
    </>
  );
}
