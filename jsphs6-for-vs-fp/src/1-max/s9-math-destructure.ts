import { MaxFunction } from './_.types'

// export const maxMathDestructure: MaxFunction = (numbers: number[]): number | undefined =>
//   Math.max(...numbers) // returns -Infinity for empty list

export const maxMathDestructure: MaxFunction = (numbers: number[]): number | undefined =>
  numbers.length
    ? Math.max(...numbers)
    : undefined
