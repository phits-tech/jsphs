import { Box, BoundingBoxFunction } from './_.types'

export const boundingBoxWrong: BoundingBoxFunction = (boxes: Box[]): Box => {
  return {
    top: 7,
    left: 7,
    width: 7,
    height: 7,
  }
}
