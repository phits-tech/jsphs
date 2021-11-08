import * as allExports from './index'
import { DecodeFunction } from './_.types'

// Test data

// Get SUTs
const isDecodeFunction = (obj: any): obj is DecodeFunction =>
  typeof obj === 'function' && typeof obj('') === 'string'

const isDecodeFunctionEntry = (entry: [string, unknown]): entry is [string, DecodeFunction] =>
  isDecodeFunction(entry[1])

const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(isDecodeFunctionEntry))

// Tests
describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const systemUnderTest = systemsUnderTest[key]

  test('decode empty string', () => {
    expect(systemUnderTest('')).toEqual('')
  })

  test('decode evens', () => {
    expect(systemUnderTest('2468')).toEqual('468')
  })

  test('decode odds', () => {
    expect(systemUnderTest('1357')).toEqual('357')
  })

  test('decode alternating', () => {
    expect(systemUnderTest('12345')).toEqual('')
  })

  test('decode string which increases and decreases', () => {
    expect(systemUnderTest('113355331122446644221122332211')).toEqual('13355533124466644212321')
  })

  test('readme example', () => {
    const input = '1112031584'
    const expected = '112358'

    const actual = systemUnderTest(input)

    expect(actual).toEqual(expected)
  })
})
