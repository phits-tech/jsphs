import { GraphFunction } from './_.types'

export const graphForEach: GraphFunction = (edges: [string, string][]): Record<string, string[]> => {
  const graph: Record<string, string[]> = {}

  edges.forEach(([from, to]) => {
    if (!(from in graph)) { graph[from] = [] }
    graph[from].push(to)
  })

  return graph
}
