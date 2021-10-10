import { RunningTotalFunction } from './_.types'

export const runningTotalWrong: RunningTotalFunction = (numbers: number[]): number[] => {
  return [7]
}

// Run from Node
if (require.main === module) console.log(runningTotalWrong([1, 3, 5, 2, 4]))
