import { GraphFunction } from './_.types'

export const graphFunctional: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  Object.fromEntries(
    edges.map(([from]) => [
      from,
      edges.filter(([innerFrom]) => from === innerFrom).map(([, to]) => to) // nested looping
    ])
  )

// If we were using Kotlin...
//
//  edges
//    .map(([from]) => [
//      from,
//      edges.filter(([innerFrom]) => from === innerFrom).map(([, to]) => to)
//    ])
//    .apply(Object.fromEntries)
//
