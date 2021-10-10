import { RunningTotalFunction } from './_.types'
import { cumsum } from 'd3-array'

export const runningTotalD3: RunningTotalFunction = (numbers: number[]): number[] =>
  Array.from(cumsum(numbers)) // Convert Float64Array to number[]
