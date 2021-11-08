import { SumFunction } from './_.types'
import { sum } from 'lodash-es'

export const sumLodash: SumFunction = (numbers: number[]): number =>
  sum(numbers)
