export interface IExchange {
  buy: ICurrency | string
  sell: string
  amount: number
  fixed: 'buy' | 'sell'
}

export interface ICurrency {
  value: string
}
