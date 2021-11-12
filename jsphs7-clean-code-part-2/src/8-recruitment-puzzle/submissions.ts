import { DecodeFunction } from './_.types'

import { zip } from 'lodash-es'

/* ORIGINAL PUZZLE */
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

/* ANTONY */
// I don't need another job thank you.

/* CHARLES */
export const decodeCharles: DecodeFunction = (input: string): string => {
  const digits = input
    .split('')
    .map(c => parseInt(c))

  return (zip(digits, digits.slice(1)) as [number, number][])
    .filter(([a, b]) => (a % 2) === (b % 2))
    .map(([a, b]) => Math.max(a, b))
    .join('')
}

/**
 * JAKE ARCHIBALD
 * https://twitter.com/jaffathecake/status/1452560709909368836
 */
export function decodeJake (code: string): string {
  const numbers = [...code].map((n) => Number(n))

  return (
    // Create pairs of [[0th, 1st], [1st, 2nd], [2nd, 3rd], ...]
    Array.from({ length: numbers.length - 1 }, (_, i) => [
      numbers[i],
      numbers[i + 1],
    ])
      // Keep pairs where both numbers are odd, or both numbers are even
      .filter(([a, b]) => a % 2 === b % 2)
      // Take the greatest of each pair
      .map(([a, b]) => Math.max(a, b))
      // Combine as a string
      .join('')
  )
}
