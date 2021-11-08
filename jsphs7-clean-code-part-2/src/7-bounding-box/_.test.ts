import * as allExports from './index'
import { Box, BoundingBoxFunction } from './_.types'

// Test data
const EXAMPLE_BOX_1: Box = { top: 0, left: 0, height: 100, width: 100 }
const EXAMPLE_BOX_2: Box = { top: 100, left: 100, height: 100, width: 100 }
const EXAMPLE_BOX_3: Box = { top: 0, left: 0, height: 50, width: 100 }
const EXAMPLE_BOX_4: Box = { top: 0, left: 0, height: 100, width: 50 }
const EXAMPLE_BOX_5: Box = { top: 0, left: 150, height: 100, width: 100 }
const EXAMPLE_BOX_6: Box = { top: 150, left: 0, height: 100, width: 100 }
const EXAMPLE_BOX_7: Box = { top: -100, left: 0, height: 50, width: 10 }
const EXAMPLE_BOX_8: Box = { top: 0, left: -100, height: 10, width: 50 }

// Get SUTs
const isBox = (obj: any): obj is Box =>
  typeof obj === 'object' && 'top' in obj && 'left' in obj && 'width' in obj && 'height' in obj

const isBoundingBoxFunction = (obj: any): obj is BoundingBoxFunction =>
  typeof obj === 'function' && isBox(obj([EXAMPLE_BOX_1, EXAMPLE_BOX_2]))

const isBoundingBoxFunctionEntry = (entry: [string, unknown]): entry is [string, BoundingBoxFunction] =>
  isBoundingBoxFunction(entry[1])

const systemsUnderTest = Object.fromEntries(Object.entries(allExports).filter(isBoundingBoxFunctionEntry))

// Tests
describe.each(Object.keys(systemsUnderTest))('%s', (key) => {
  const systemUnderTest = systemsUnderTest[key]

  test('compute bounds of empty list', () => {
    expect(systemUnderTest([])).toEqual({ top: 0, left: 0, height: 0, width: 0 })
  })

  test('compute bounds of 1 element', () => {
    expect(systemUnderTest([EXAMPLE_BOX_1])).toEqual(EXAMPLE_BOX_1)
  })

  test('compute bounds of 1 offset element', () => {
    expect(systemUnderTest([EXAMPLE_BOX_2])).toEqual(EXAMPLE_BOX_2)
  })

  test('compute bounds of 2 elements', () => {
    expect(systemUnderTest([EXAMPLE_BOX_1, EXAMPLE_BOX_2])).toEqual({ top: 0, left: 0, height: 200, width: 200 })
  })

  test('compute bounds when width & height are driven by different boxes', () => {
    expect(systemUnderTest([EXAMPLE_BOX_3, EXAMPLE_BOX_4])).toEqual({ top: 0, left: 0, height: 100, width: 100 })
  })

  test('compute bounds when top & left are driven by different boxes', () => {
    expect(systemUnderTest([EXAMPLE_BOX_5, EXAMPLE_BOX_6])).toEqual({ top: 0, left: 0, height: 250, width: 250 })
  })

  test('compute bounds when top & left are negative', () => {
    expect(systemUnderTest([EXAMPLE_BOX_7, EXAMPLE_BOX_8])).toEqual({ top: -100, left: -100, width: 110, height: 110 })
  })

  test('compute bounds when height is not measured from the origin', () => {
    expect(systemUnderTest([EXAMPLE_BOX_1, EXAMPLE_BOX_7])).toEqual({ top: -100, left: 0, height: 200, width: 100 })
  })

  test('compute bounds when width is not measured from the origin', () => {
    expect(systemUnderTest([EXAMPLE_BOX_2, EXAMPLE_BOX_8])).toEqual({ top: 0, left: -100, height: 200, width: 300 })
  })

  test('compute bounds of multiple elements', () => {
    expect(systemUnderTest([EXAMPLE_BOX_1, EXAMPLE_BOX_2, EXAMPLE_BOX_3, EXAMPLE_BOX_4, EXAMPLE_BOX_5, EXAMPLE_BOX_6, EXAMPLE_BOX_7, EXAMPLE_BOX_8])).toEqual({ top: -100, left: -100, width: 350, height: 350 })
  })

  test('readme example', () => {
    const box1 = { top: 20, left: 10, height: 5, width: 10 }
    const box2 = { top: 10, left: 20, height: 1, width: 20 }
    const expected = { top: 10, left: 10, height: 15, width: 30 }

    const actual = systemUnderTest([box1, box2])

    expect(actual).toEqual(expected)
  })
})
