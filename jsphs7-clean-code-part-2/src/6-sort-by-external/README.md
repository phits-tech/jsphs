# Sort by External

Your function will receive 2 objects:

- `idToData` which links (id: string) -> (data: number)
- `idToSeq` which links (id: string) -> (sequence: number)

All IDs in the first object will be present in the second object.

You must return the data as an array, sorted by the sequence number from the other object, for example:

```ts
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

const result = yourFunction(idToData, idToSeq)
// [100, 0, 50]
```
