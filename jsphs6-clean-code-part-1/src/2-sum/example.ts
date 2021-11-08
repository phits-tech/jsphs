import { SumFunction } from './_.types'

export const sumWrong: SumFunction = (numbers: number[]): number => {
  return 7
}

// Run from Node
if (require.main === module) console.log(sumWrong([1, 3, 5, 2, 4]))
