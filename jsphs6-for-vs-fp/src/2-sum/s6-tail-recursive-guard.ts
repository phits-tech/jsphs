// If you really need an explicit interface:
// export const sumTailRecursiveGuard: SumFunction = sumTailRecursiveGuardAccumulator

// The empty list case is handled with a default value for `sumSoFar`
export const sumTailRecursiveGuardAccumulator = (numbers: number[], sumSoFar = 0): number => {
  if (numbers.length === 0) return sumSoFar

  return sumTailRecursiveGuardAccumulator(numbers.slice(1), sumSoFar + numbers[0])
}
