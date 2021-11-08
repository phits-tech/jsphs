import { MaxFunction } from './_.types'

export const maxRecursiveGuard: MaxFunction = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined
  if (numbers.length === 1) return numbers[0]

  return Math.max(numbers[0], maxRecursiveGuard(numbers.splice(1))!!)
}
