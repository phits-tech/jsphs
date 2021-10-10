import { GraphFunction } from './_.types'

export const graphReduce: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  edges.reduce(
    (graph, [from, to]) => {
      if (!(from in graph)) { graph[from] = [] }
      graph[from].push(to)
      return graph
    },
    {} as Record<string, string[]>
  )
