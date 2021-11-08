import * as allExports from './index'
import { SortExternalFunction } from './_.types'

// Test data
const guid1 = '4641d28d'; const guid2 = 'c0172d8e'; const guid3 = 'b52c2ccb'; const guid4 = '3940c668'; const guid5 = 'b85675d6'; const guid6 = 'cf70c0b1'; const guid7 = '7dc28525'; const guid8 = '0c3805fa'; const guid9 = '523b3c7c'
const sequence = { [guid1]: 1, [guid2]: 2, [guid3]: 3, [guid4]: 4, [guid5]: 5, [guid6]: 6, [guid7]: 7, [guid8]: 8, [guid9]: 9 }

// Get SUTs
const isSortExternalFunction = (obj: any): obj is SortExternalFunction =>
  typeof obj === 'function' && Array.isArray(obj({}, {}))

const isSortExternalFunctionEntry = (entry: [string, unknown]): entry is [string, SortExternalFunction] =>
  isSortExternalFunction(entry[1])

const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(isSortExternalFunctionEntry))

// Tests
describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const systemUnderTest = systemsUnderTest[key]

  test('sort empty object', () => {
    const actual = systemUnderTest({}, sequence)
    expect(actual).toHaveLength(0)
  })

  test('sort 1 element', () => {
    const actual = systemUnderTest({ [guid5]: 10 }, sequence)
    expect(actual).toHaveLength(1)
    expect(actual[0]).toEqual(10)
  })

  test('sort 2 elements', () => {
    const actual = systemUnderTest({ [guid9]: 100, [guid5]: 10 }, sequence)
    expect(actual).toHaveLength(2)
    expect(actual[0]).toEqual(10)
    expect(actual[1]).toEqual(100)
  })

  test('sort multiple elements', () => {
    const actual = systemUnderTest({ [guid8]: 1, [guid3]: 2, [guid5]: 3, [guid9]: 4, [guid1]: 5 }, sequence)
    expect(actual).toHaveLength(5)
    expect(actual[0]).toEqual(5)
    expect(actual[1]).toEqual(2)
    expect(actual[2]).toEqual(3)
    expect(actual[3]).toEqual(1)
    expect(actual[4]).toEqual(4)
  })

  test('readme example', () => {
    const idToData = {
      abc: 0, // seq 3
      def: 50, // seq 4
      ghi: 100, // seq 2
    }

    const idToSeq = {
      abc: 3,
      def: 4,
      ghi: 2,
      jkl: 5,
      mno: 1,
    }

    const actual = systemUnderTest(idToData, idToSeq)
    expect(actual).toHaveLength(3)
    expect(actual[0]).toEqual(100)
    expect(actual[1]).toEqual(0)
    expect(actual[2]).toEqual(50)
  })
})
