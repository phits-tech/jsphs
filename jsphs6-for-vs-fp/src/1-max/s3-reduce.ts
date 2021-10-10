import { MaxFunction } from './_.types'

export const maxReduce: MaxFunction = (numbers: number[]): number | undefined =>
  numbers.length
    ? numbers.reduce((acc, val) => Math.max(acc, val), Number.MIN_VALUE)
    : undefined
