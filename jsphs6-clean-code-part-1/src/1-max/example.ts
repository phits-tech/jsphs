import { MaxFunction } from './_.types'

export const maxWrong: MaxFunction = (numbers: number[]): number => {
  return 7
}

// Run from Node
if (require.main === module) console.log(maxWrong([1, 3, 5, 2, 4]))
