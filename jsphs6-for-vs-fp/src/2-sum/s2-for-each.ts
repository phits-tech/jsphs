import { SumFunction } from './_.types'

export const sumForEach: SumFunction = (numbers: number[]): number => {
  let sum = 0

  numbers.forEach(number => {
    sum += number
  })

  return sum
}
