import { RunningTotalFunction } from './_.types'

export const runningTotalReduceExtracted: RunningTotalFunction = (numbers: number[]): number[] =>
  (numbers.length === 0)
    ? []
    : numbers.slice(1).reduce(
      pushRunningTotal,
      [numbers[0]]
    )

const pushRunningTotal = (acc: number[], val: number): number[] => {
  const runningTotal = acc[acc.length - 1] + val
  acc.push(runningTotal)
  return acc
}
