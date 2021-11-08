import * as allExports from './index'
import { ApiResponse, NonEmptyUrlsFunction } from './_.types'

// Test data
const EXAMPLE_API_RESPONSE_NO_URL: ApiResponse = { }
const EXAMPLE_API_RESPONSE_EMPTY_STRING: ApiResponse = { url: '' }
const EXAMPLE_API_RESPONSE_1: ApiResponse = { url: 'potato' }
const EXAMPLE_API_RESPONSE_2: ApiResponse = { url: 'https://picsum.photos/seed/potato/200/200' }

// Get SUTs
const isNonEmptyUrlsFunction = (obj: any): obj is NonEmptyUrlsFunction =>
  typeof obj === 'function' && Array.isArray(obj([]))

const isNonEmptyUrlsFunctionEntry = (entry: [string, unknown]): entry is [string, NonEmptyUrlsFunction] =>
  isNonEmptyUrlsFunction(entry[1])

const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(isNonEmptyUrlsFunctionEntry))

// Tests
describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const systemUnderTest = systemsUnderTest[key]

  test('non-empty of empty list', () => {
    const actual = systemUnderTest([])
    expect(actual).toHaveLength(0)
  })

  test('non-empty of 1 present element', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_1])
    expect(actual).toHaveLength(1)
    expect(actual[0]).toEqual(EXAMPLE_API_RESPONSE_1.url)
  })

  test('non-empty of 1 absent element', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_NO_URL])
    expect(actual).toHaveLength(0)
  })

  test('non-empty of 1 zero-length element', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_EMPTY_STRING])
    expect(actual).toHaveLength(0)
  })

  test('non-empty of 2 present elements', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_1, EXAMPLE_API_RESPONSE_2])
    expect(actual).toHaveLength(2)
    expect(actual[0]).toEqual(EXAMPLE_API_RESPONSE_1.url)
    expect(actual[1]).toEqual(EXAMPLE_API_RESPONSE_2.url)
  })

  test('non-empty returns urls in the same order', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_2, EXAMPLE_API_RESPONSE_1])
    expect(actual).toHaveLength(2)
    expect(actual[0]).toEqual(EXAMPLE_API_RESPONSE_2.url)
    expect(actual[1]).toEqual(EXAMPLE_API_RESPONSE_1.url)
  })

  test('non-empty of multiple elements', () => {
    const actual = systemUnderTest([EXAMPLE_API_RESPONSE_NO_URL, EXAMPLE_API_RESPONSE_2, EXAMPLE_API_RESPONSE_EMPTY_STRING, EXAMPLE_API_RESPONSE_1])
    expect(actual).toHaveLength(2)
    expect(actual[0]).toEqual(EXAMPLE_API_RESPONSE_2.url)
    expect(actual[1]).toEqual(EXAMPLE_API_RESPONSE_1.url)
  })

  test('readme example', () => {
    const responses = [
      {},
      { url: '' },
      { url: 'https://picsum.photos/seed/abc/200/200' },
      { url: 'https://picsum.photos/seed/def/200/200' },
    ]

    const actual = systemUnderTest(responses)
    expect(actual).toHaveLength(2)
    expect(actual[0]).toEqual('https://picsum.photos/seed/abc/200/200')
    expect(actual[1]).toEqual('https://picsum.photos/seed/def/200/200')
  })
})
