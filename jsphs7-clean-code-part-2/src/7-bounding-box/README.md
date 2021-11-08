# Bounding Box

Your function will receive an array of boxes. Each box has 4 properties:

- top: number
- left: number
- height: number
- width: number

Imagine you are drawing a bounding box around all of these boxes (with no additional padding). Your function should return the dimensions of this bounding box, for example:

```ts
const box1 = { top: 20, left: 10, height: 5, width: 10 }
const box2 = { top: 10, left: 20, height: 1, width: 20 }

const boundingBox = yourFunction([box1, box2])
// { top: 10, left: 10, height: 15, width: 30 }
```
