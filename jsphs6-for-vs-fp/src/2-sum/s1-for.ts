import { SumFunction } from './_.types'

export const sumFor: SumFunction = (numbers: number[]): number => {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}
