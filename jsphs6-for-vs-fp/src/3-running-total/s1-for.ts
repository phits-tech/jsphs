import { RunningTotalFunction } from './_.types'

export const runningTotalFor: RunningTotalFunction = (numbers: number[]): number[] => {
  let sum = 0
  const result: number[] = []

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    result[i] = sum
  }

  return result
}
