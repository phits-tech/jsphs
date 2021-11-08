import { MaxFunction } from './_.types'

export const maxTailRecursive: MaxFunction = (numbers: number[]): number | undefined => {
  // max is not defined for empty lists, so we must handle this outside the accumulator
  if (numbers.length === 0) return undefined

  return maxTailRecursiveAccumulator(numbers)
}

const maxTailRecursiveAccumulator = (numbers: number[], maxSoFar: number = Number.MIN_VALUE): number => {
  if (numbers.length === 0) return maxSoFar

  return maxTailRecursiveAccumulator(numbers.splice(1), Math.max(maxSoFar, numbers[0]))
}
