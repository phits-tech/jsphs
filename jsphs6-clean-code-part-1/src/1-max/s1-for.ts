import { MaxFunction } from './_.types'

export const maxFor: MaxFunction = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined

  let maxSoFar = Number.MIN_VALUE

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxSoFar) maxSoFar = numbers[i]
  }

  return maxSoFar
}

/**
 * Concept:
 * 1. Add more condition on array members
 * 2. Change the max holder to the first member of the array
 */
export const maxForOption2: MaxFunction = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined
  if (numbers.length === 1) return numbers[0]

  let maxSoFar = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxSoFar) maxSoFar = numbers[i]
  }

  return maxSoFar
}
