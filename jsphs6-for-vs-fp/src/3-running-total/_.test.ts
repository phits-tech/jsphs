import * as allExports from './index'
import { RunningTotalFunction } from './_.types'

const isRunningTotalFunction = (obj: any): obj is RunningTotalFunction => typeof obj === 'function' && Array.isArray(obj([1, 2, 3]))
const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(([_, value]) => isRunningTotalFunction(value)))

describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const examples: [number[], number[]][] = [
    [[], []],
    [[10], [10]],
    [[1, 3, 5, 2, 4], [1, 4, 9, 11, 15]]
  ]
  const systemUnderTest = systemsUnderTest[key]

  test.each(examples)('runningTotal(%s) => %s', (input, expected) => {
    expect(systemUnderTest(input)).toEqual(expected)
  })
})
