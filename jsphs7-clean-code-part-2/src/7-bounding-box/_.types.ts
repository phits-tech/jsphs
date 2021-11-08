export type Box = {
  top: number
  left: number
  height: number
  width: number
}

export type BoundingBoxFunction = (boxes: Box[]) => Box
