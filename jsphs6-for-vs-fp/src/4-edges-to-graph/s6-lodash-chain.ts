import { GraphFunction } from './_.types'
import _ from 'lodash'

export const graphLodashChain: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  _(edges)
    .groupBy(([from]) => from)
    .mapValues(edges => edges.map(([, to]: [string, string]) => to))
    .value()
