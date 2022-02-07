import { FormControl, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'
import { IExchange } from '../../types/interface'
import Calculator from './components/Calulator'

const Problem1 = () => {
  const [values, setValues] = useState<IExchange>({
    buy: 'USD',
    sell: 'AUD',
    amount: 0,
    fixed: 'buy',
  })

  const handleChange = (prop: any) => (event: { target: { value: any } }) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  return (
    <>
      <Grid container spacing={2} rowSpacing={1}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Grid container spacing={1} columns={8}>
            <Grid item xs={2}>
              <p>Convert:</p>
            </Grid>

            <Grid item xs={4} justifyContent="center">
              <TextField
                id="sell-amount"
                label="Buy"
                variant="outlined"
                value={values.amount}
                required
                onChange={handleChange('amount')}
              />
            </Grid>
            <Grid item justifyContent="center">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.sell}
                label="Sell Currency"
                onChange={handleChange('sell')}
              >
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'AUD'}>AUD</MenuItem>
                <MenuItem value={'NZD'}>NZD</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Grid container spacing={1} columns={8}>
            <Grid item xs={3}>
              <p>From:</p>
            </Grid>

            <Grid item xs={4}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.buy}
                label="Buy Currency"
                onChange={handleChange('buy')}
              >
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'AUD'}>AUD</MenuItem>
                <MenuItem value={'NZD'}>NZD</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </FormControl>
        <Grid item xs={12}>
          <Calculator
            buy={values.buy}
            sell={values.sell}
            amount={values.amount}
            fixed={'sell'}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Problem1
