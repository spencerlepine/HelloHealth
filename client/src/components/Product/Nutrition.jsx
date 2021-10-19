import React, { useState } from 'react';
import {
  Button,
  Grid,
  Container,
  Box,
  Typography,
  TableContainer,
  Paper,
} from '@mui/material';
import useStyles from './nutritionStyles';

const data = {
  id: 1,
  productId: 392,
  productType: 'Produce',
  nutritionFacts: {
    serving_size: 5,
    calories: 334,
    caloriesFat: 166,
    fat: 321,
    fatPerc: 2,
    satFat: 69,
    satFatPerc: 17,
    transFat: 92,
    transFatPerc: 21,
    protein: 291,
    dietaryFiber: 172,
    dietaryFiberPerc: 4,
    carbohydrates: 161,
    carbohydratesPerc: 10,
    cholesterol: 36,
    cholesterolPerc: 14,
    sodium: 49,
    sodiumPerc: 13,
    sugars: 7,
    sugarsPerc: 7,
  },
};

export default function Nutrition() {
  const classes = useStyles();
  const [facts, setFacts] = useState(false);

  const renderFacts = () => {
    if (!facts) {
      return (
        <Button onClick={() => setFacts(true)}>See Nutrition Facts</Button>
      );
    }
    return (
      <div className={classes.label}>
        <section className={classes.facts}>
          <header className={classes.factsHeader}>
            <h1 className={classes.factsTitle}>Nutrition Facts</h1>
            <p>Serving Size 1/2 cup (about 82g)</p>
            <p>Serving Per Container 8</p>
          </header>
          <table className={classes.factsTable}>
            <thead>
              <tr>
                <th colSpan="3" className={classes.smallInfo}>
                  Amount Per Serving
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="names" colSpan="2">
                  <b>Calories</b> {data.nutritionFacts.calories}g
                </td>
                <td>
                  <b>Calories from Fat</b> {data.nutritionFacts.caloriesFat}g
                </td>
              </tr>
              <tr className={classes.thickRow}>
                <td colSpan="3" className={classes.smallInfo}>
                  <b>% Daily Value*</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Total Fat</b> {data.nutritionFacts.fat}g
                </td>
                <td>
                  <b>{data.nutritionFacts.fatPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Saturated Fat</b> {data.nutritionFacts.satFat}g
                </td>
                <td>
                  <b>{data.nutritionFacts.satFatPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Trans Fat</b> {data.nutritionFacts.transFat}g
                </td>
                <td>
                  <b>{data.nutritionFacts.transFatPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Cholesterol</b> {data.nutritionFacts.cholesterol}g
                </td>
                <td>
                  <b>{data.nutritionFacts.cholesterolPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Sodium</b> {data.nutritionFacts.sodium}g
                </td>
                <td>
                  <b>{data.nutritionFacts.sodiumPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Carbohydrate</b> {data.nutritionFacts.carbohydrates}g
                </td>
                <td>
                  <b>{data.nutritionFacts.carbohydratesPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Dietary Fiber</b> {data.nutritionFacts.dietaryFiber}g
                </td>
                <td>
                  <b>{data.nutritionFacts.dietaryFiberPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Sugars</b> {data.nutritionFacts.sugars}g
                </td>
                <td>
                  <b>{data.nutritionFacts.sugarsPerc}%</b>
                </td>
              </tr>
              <tr>
                <td className="names" colSpan="3">
                  <b>Protein</b> {data.nutritionFacts.protein}g
                </td>
                <td>
                  <b>5%</b>
                </td>
              </tr>
            </tbody>
          </table>
          <table className={classes.factsTableGrid}>
            <tbody>
              <tr>
                <td colSpan="2" className={classes.smallInfo}>
                  Vitamin A<b> 10%</b>
                </td>
                <td>
                  Vitamin C<b> 0%</b>
                </td>
              </tr>
              <tr className={classes.thinEnd}>
                <td colSpan="2">
                  Calcium
                  <b> 10%</b>
                </td>
                <td>
                  Iron
                  <b> 6%</b>
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => setFacts(false)}>Hide Facts</Button>
        </section>
      </div>
    );
  };

  return (
    <>
      <Typography variant="h4">Nutrition</Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            className={`${classes.nutritionBottom} ${classes.nutritionRight}`}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Calories: {data.nutritionFacts.calories}g
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.nutritionBottom}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Carbs: {data.nutritionFacts.carbohydrates}g
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            className={`${classes.nutritionBottom} ${classes.nutritionRight}`}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Total fat: {data.nutritionFacts.fat}g
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.nutritionBottom}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Protein: {data.nutritionFacts.protein}g
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center">
          {renderFacts()}
        </Grid>
      </Box>
    </>
  );
}
