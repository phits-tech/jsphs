import * as allExports from './index'
import { GraphFunction } from './_.types'

const isGraphFunction = (obj: any): obj is GraphFunction => typeof obj === 'function' && typeof obj([]) === 'object'
const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(([_, value]) => isGraphFunction(value)))

describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const examples: [[string, string][], Record<string, string[]>][] = [
    [[], {}],
    [[['1', '2']], { 1: ['2'] }],
    [[['1', '2'], ['2', '3'], ['1', '4']], { 1: ['2', '4'], 2: ['3'] }]
  ]
  const systemUnderTest = systemsUnderTest[key]

  test.each(examples)('graph(%s) => %s', (input, expected) => {
    const result = systemUnderTest(input)
    expect(result.size).toEqual(expected.size)
    expect(result).toEqual(expected)
  })
})
