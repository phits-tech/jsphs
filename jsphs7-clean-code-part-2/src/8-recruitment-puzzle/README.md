# Recruitment Puzzle

You are presented with this ridiculous pseudo-code:

```ts
const decode = (a: string): string => {
  s = ''

  for (i = 1; i < a.length; i++) {
    if (a[i] % 2 === a[i - 1] % 2) {
      s += max(a[i], a[i - 1])
    }
  }

  return s
}
```

```ts
const input = '1112031584'

const url = yourFunction(input)
// '112358'
```

You must rewrite the function in TypeScript!
Bonus points for recognizing the example output ;)
