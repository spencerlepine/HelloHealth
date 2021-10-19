import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  nutritionBottom: {
    padding: '10px',
    borderBottom: '1px solid #e2e2e2 !important',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgb(226, 226, 226)',
  },
  nutritionRight: {
    padding: '10px',
    borderRight: '1px solid #e2e2e2',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: 'rgb(226, 226, 226)',
  },
  nutritionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facts: {
    border: '1px solid black',
    margin: '20px',
    float: 'left',
    width: '280px;',
    padding: '0.5rem',
  },
  factsTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
    margin: '0 0 0.25rem 0',
  },
  factsHeader: {
    borderBottom: '10px solid black',
    padding: '0 0 0.25rem 0',
    margin: '0 0 0.5rem 0',
  },
  smallInfo: {
    fontWeight: 'normal',
    textAlign: 'left',
    padding: '0.25rem 0',
    borderTop: '1px solid black',
    whiteSpace: 'nowrap',
  },
  factsTable: {
    width: '100%',
    border: '0',
  },
  priceText: {
    paddingTop: '1em',
    textAlign: 'center',
  },
  label: {
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  },
}));
