import { MaxFunction } from './_.types'

export const maxRecursiveSwitch: MaxFunction = (numbers: number[]): number | undefined => {
  switch (numbers.length) {
    case 0: return undefined
    case 1: return numbers[0]
    default: return Math.max(numbers[0], maxRecursiveSwitch(numbers.splice(1))!!)
  }
}
