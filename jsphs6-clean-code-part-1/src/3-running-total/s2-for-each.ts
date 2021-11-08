import { RunningTotalFunction } from './_.types'

export const runningTotalForEach: RunningTotalFunction = (numbers: number[]): number[] => {
  let sum = 0
  const result: number[] = []

  numbers.forEach(number => {
    sum += number
    result.push(sum)
  })

  return result
}
