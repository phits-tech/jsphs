import { SumFunction } from './_.types'

export const sumRecursiveGuard: SumFunction = (numbers: number[]): number => {
  if (numbers.length === 0) return 0

  return numbers[0] + sumRecursiveGuard(numbers.slice(1))
}
