import { SumFunction } from './_.types'

export const sumRecursiveInline: SumFunction = (numbers: number[]): number =>
  (numbers.length === 0)
    ? 0
    : numbers[0] + sumRecursiveInline(numbers.slice(1))
