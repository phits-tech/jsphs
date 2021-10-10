import { SumFunction } from './_.types'
import { sum } from 'lodash'

export const sumLodash: SumFunction = (numbers: number[]): number =>
  sum(numbers)
