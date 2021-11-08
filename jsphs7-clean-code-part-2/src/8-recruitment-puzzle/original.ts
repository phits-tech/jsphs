import { DecodeFunction } from './_.types'

export const decodeOriginal: DecodeFunction = (input: string): string => {
  let result = ''

  for (let i = 1; i < input.length; i++) {
    const digitCurrent = parseInt(input[i])
    const digitLast = parseInt(input[i - 1])

    if (digitCurrent % 2 === digitLast % 2) {
      result += Math.max(digitCurrent, digitLast)
    }
  }

  return result
}
