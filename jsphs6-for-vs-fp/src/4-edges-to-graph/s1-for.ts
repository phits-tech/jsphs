import { GraphFunction } from './_.types'

export const graphFor: GraphFunction = (edges: [string, string][]): Record<string, string[]> => {
  const graph: Record<string, string[]> = {}

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i]
    if (!(from in graph)) { graph[from] = [] }
    graph[from].push(to)
  }

  return graph
}
