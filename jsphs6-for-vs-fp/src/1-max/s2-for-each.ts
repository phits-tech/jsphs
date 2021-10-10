import { MaxFunction } from './_.types'

export const maxForEach: MaxFunction = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined

  let maxSoFar = Number.MIN_VALUE

  numbers.forEach(number => {
    if (number > maxSoFar) maxSoFar = number
  })

  return maxSoFar
}
