// [ [1,2], [2,3], [1,4] ] => { 1: [2,4], 2: [3] }
export type GraphFunction = (edges: [string, string][]) => Record<string, string[]>
