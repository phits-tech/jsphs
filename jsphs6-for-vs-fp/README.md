# JS-PHS #6 - Clean Code: for vs FP

## Summary

In this meetup we looked at **various approaches to solving a range of coding problems**. We compared their **readability** & developer **ergonomics**.

## Inspiration

This meetup was inspired by [Jake Archibald](https://twitter.com/jaffathecake)'s [Tweet](https://twitter.com/jaffathecake/status/1213077702300852224), and their follow-up video for Google Chrome Developers (with [Surma](https://twitter.com/dassurma)): [Is reduce() bad?](https://www.youtube.com/watch?v=qaGjS7-qWzg)

> All code using array.reduce should be rewritten without array.reduce so it's readable by humans _mutes thread_

## Adding a solution

Each folder is a different problem. If you want to write your own function to solve it:

1. Copy `example.ts`
2. Write your own implementation
3. Export your implementation in `index.ts`
4. Run the tests with `npm run test`

_If you want to share your solution, submit a Pull Request :)_

## Manual testing

To run your function from the shell, add this code to your file:

```ts
if (require.main === module) console.log(maxWrong([1, 5, 3]))
```

...and execute with:

```sh
npm run serve src/1-max/example.ts
```
