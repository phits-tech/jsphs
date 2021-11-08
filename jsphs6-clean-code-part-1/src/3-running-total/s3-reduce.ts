import { RunningTotalFunction } from './_.types'

export const runningTotalReduce: RunningTotalFunction = (numbers: number[]): number[] =>
  (numbers.length === 0)
    ? []
    : numbers.slice(1).reduce(
      (acc: number[], val: number) => {
        acc.push(acc[acc.length - 1] + val)
        return acc
      },
      [numbers[0]]
    )
