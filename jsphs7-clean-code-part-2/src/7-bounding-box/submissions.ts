import { Box, BoundingBoxFunction } from './_.types'

/* CHARLES */
export const boundingBoxCharles: BoundingBoxFunction = (boxes: Box[]): Box => {
  if (boxes.length === 0) return { top: 0, left: 0, width: 0, height: 0 }

  // Convert height/width to bottom/right
  const boxesAbsolute = boxes.map(({ top, left, height, width }) => ({ top, left, bottom: top + height, right: left + width }))
  const result = boxesAbsolute[0]

  // Find mins & maxes
  boxesAbsolute.slice(1).forEach(box => {
    result.top = Math.min(result.top, box.top)
    result.left = Math.min(result.left, box.left)
    result.bottom = Math.max(result.bottom, box.bottom)
    result.right = Math.max(result.right, box.right)
  })

  // Convert back to height/width
  return {
    top: result.top,
    left: result.left,
    height: result.bottom - result.top,
    width: result.right - result.left
  }
}

/* ANTONY */
export const boundingBox: BoundingBoxFunction = (boxes: Box[]): Box => {
  if (boxes.length === 0) {
    throw new Error('Fool!')
  }
  let box = boxes.shift() as Box
  boxes.forEach(b => {
    const left = Math.min(box.left, b.left)
    const right = Math.max(box.left + box.width, b.left + b.width)
    const top = Math.min(box.top, b.top)
    const bottom = Math.max(box.top + box.height, b.top + b.height)
    box = { left, width: right - left, top, height: bottom - top }
  })
  return box
}
