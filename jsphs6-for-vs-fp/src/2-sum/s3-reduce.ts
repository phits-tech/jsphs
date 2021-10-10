import { SumFunction } from './_.types'

export const sumReduce: SumFunction = (numbers: number[]): number =>
  numbers.reduce((a, b) => a + b, 0)
