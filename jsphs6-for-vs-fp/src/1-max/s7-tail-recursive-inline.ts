import { MaxFunction } from './_.types'

export const maxTailRecursiveInline: MaxFunction = (numbers: number[]): number | undefined =>
  // max is not defined for empty lists, so we must handle this outside the accumulator
  (numbers.length === 0)
    ? undefined
    : maxTailRecursiveInlineAccumulator(numbers)

const maxTailRecursiveInlineAccumulator = (numbers: number[], maxSoFar: number = Number.MIN_VALUE): number =>
  (numbers.length === 0)
    ? maxSoFar
    : maxTailRecursiveInlineAccumulator(numbers.splice(1), Math.max(maxSoFar, numbers[0]))
