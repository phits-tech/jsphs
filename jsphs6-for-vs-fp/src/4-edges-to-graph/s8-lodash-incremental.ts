import { GraphFunction } from './_.types'
import { groupBy, mapValues } from 'lodash' // or lodash-es?!

export const graphLodashIncremental: GraphFunction = (edges: [string, string][]): Record<string, string[]> => {
  const edgesByFrom = groupBy(edges, ([from]) => from)
  const toByFrom = mapValues(edgesByFrom, (edges) => edges.map(([, to]) => to))
  // ...
  return toByFrom
}
