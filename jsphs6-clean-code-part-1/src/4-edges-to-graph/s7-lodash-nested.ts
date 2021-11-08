import { GraphFunction } from './_.types'
import { groupBy, mapValues } from 'lodash-es'

export const graphLodashNested: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  mapValues(
    groupBy(edges, ([from, _]) => from),
    (edges) => edges.map(([_, to]) => to)
  )
