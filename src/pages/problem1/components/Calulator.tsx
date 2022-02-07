import { Container } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

import { useFetch } from 'usehooks-ts'
import { IExchange } from '../../../types/interface'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone' // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

interface IData {
  clientBuyAmount: string
  clientBuyCurrency: string
  clientRate: string
  clientSellAmount: string
  clientSellCurrency: string
  coreRate: string
  currencyPair: string
  depositAmount: string
  depositRequired: boolean
  fixedSide: "buy" | "sell"
  midMarketRate: string
  partnerRate?: string
  settlementCutOffTime: string
}
const markupValue = 0.5

const Calculator = (props: IExchange) => {
  const { buy, sell, amount, fixed } = props
  const url = `https://wnvgqqihv6.execute-api.ap-southeast-2.amazonaws.com/Public/public/rates?Sell=${sell}&Buy=${buy}&Amount=${amount}&Fixed=${fixed}`

  const { data, error } = useFetch<IData>(url)

  if (error) return <p>There was an error getting the data, please try again.</p>
  if (!data) return <p>Loading...</p>
  const currentTimezeone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const buyAmount: number = Number(data.clientBuyAmount)
  const markup: number = ((markupValue / 100) * buyAmount)
  const markupRounded: number = Math.round(markup * 100) / 100
  const finalRate: number = buyAmount - markupRounded
  console.log(data.settlementCutOffTime)
  return (
    <>
      <p>Buying ${data.clientSellAmount} {data.clientSellCurrency}</p>
      <p>${finalRate} selling at a conversion rate of ${data.midMarketRate}</p>
      <p>This is comprised of a base rate of: ${data.clientBuyAmount}</p>
      <p>Total Fees: ${markupRounded} </p>
      <p>This exchange rate is valid until {dayjs(data.settlementCutOffTime).tz(currentTimezeone).format('DD/MM/YYYY HH:MMA')}</p>
    </>



  )
}

export default Calculator