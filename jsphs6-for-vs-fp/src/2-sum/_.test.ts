import * as allExports from './index'
import { SumFunction } from './_.types'

const isSumFunction = (obj: any): obj is SumFunction => typeof obj === 'function' && typeof obj([1, 2, 3]) === 'number'
const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(([_, value]) => isSumFunction(value)))

describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const examples: [number[], number][] = [
    [[], 0],
    [[10], 10],
    [[1, 3, 5, 2, 4], 15]
  ]
  const systemUnderTest = systemsUnderTest[key]

  test.each(examples)('sum(%s) => %s', (input, expected) => {
    expect(systemUnderTest(input)).toEqual(expected)
  })
})
