import { GraphFunction } from './_.types'

export const graphReduceExtracted: GraphFunction = (edges: [string, string][]): Record<string, string[]> =>
  edges.reduce(addEdgeToGraph, {})

const addEdgeToGraph = (graph: Record<string, string[]>, [from, to]: [string, string]): Record<string, string[]> => {
  if (!(from in graph)) { graph[from] = [] }
  graph[from].push(to)
  return graph
}
