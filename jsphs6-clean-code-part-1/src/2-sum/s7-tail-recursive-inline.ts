// If you really need an explicit interface:
// export const sumTailRecursiveInline: SumFunction = sumTailRecursiveInlineAccumulator

// The empty list case is handled with a default value for `sumSoFar`
export const sumTailRecursiveInlineAccumulator = (numbers: number[], sumSoFar = 0): number =>
  (numbers.length === 0)
    ? sumSoFar
    : sumTailRecursiveInlineAccumulator(numbers.slice(1), sumSoFar + numbers[0])
