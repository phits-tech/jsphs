# Non-Empty URLs

Your function will receive a list of `ApiResponse`, which _may_ contain a URL.

You must return a list of the non-empty URLs (any string that both exists and has length > 0) in the same order as the original list.

```ts
const responses = [
  {},
  { url: '' },
  { url: 'https://picsum.photos/seed/abc/200/200' },
  { url: 'https://picsum.photos/seed/def/200/200' },
]

const result = yourFunction(responses)
// [
//   'https://picsum.photos/seed/abc/200/200',
//   'https://picsum.photos/seed/def/200/200'
// ]
```
