import flow from 'lodash/fp/flow'
import groupBy from 'lodash/fp/groupBy'
import mapValues from 'lodash/fp/mapValues'
import { GraphFunction } from './_.types'

export const graphLodashFlow: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  flow(
    groupBy(([from]: [string, string]) => from),
    mapValues((edges: [string, string][]) => edges.map(([, to]: [string, string]) => to))
  )(edges)
