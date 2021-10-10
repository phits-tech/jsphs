import * as allExports from './index'
import { MaxFunction } from './_.types'

const isMaxFunction = (obj: any): obj is MaxFunction => typeof obj === 'function' && typeof obj([1, 2, 3]) === 'number'
const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(([_, value]) => isMaxFunction(value)))

describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const examples: [number[], number | undefined][] = [
    [[], undefined],
    [[10], 10],
    [[1, 3, 5, 2, 4], 5]
  ]
  const systemUnderTest = systemsUnderTest[key]

  test.each(examples)('max(%s) => %s', (input, expected) => {
    expect(systemUnderTest(input)).toEqual(expected)
  })
})
