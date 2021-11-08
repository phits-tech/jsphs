import { GraphFunction } from './_.types'

export const indexGraphWrong: GraphFunction = (edges: [string, string][]): Record<string, string[]> => {
  return {}
}

// Run from Node
if (require.main === module) console.log(indexGraphWrong([['1', '2'], ['2', '3'], ['1', '4']]))
