import { SortExternalFunction } from './_.types'

/* SIWAOH */
export const sortExternalSiwaoh: SortExternalFunction = (idToData: Record<string, number>, idToSeq: Record<string, number>): number[] => {
  const mergedArr :number[][] = []
  for (const key in idToData) {
    if (Object.prototype.hasOwnProperty.call(idToData, key)) {
      const element = idToData[key]
      mergedArr.push([element, idToSeq[key]])
    }
  }

  return mergedArr.sort((idToData, idToSeq) => idToData[1] - idToSeq[1]).map(member => member[0])
}

/* ANTONY */
export const sortExternalAntony: SortExternalFunction = (idToData: Record<string, number>, idToSeq: Record<string, number>): number[] => {
  const sortedIds = Object.keys(idToSeq).sort((a, b) => idToSeq[a] - idToSeq[b])
  return sortedIds.map(id => idToData[id]).filter(data => data !== undefined)
}

/* CHARLES */
export const sortExternalCharles: SortExternalFunction = (idToData: Record<string, number>, idToSeq: Record<string, number>): number[] =>
  Object.entries(idToData)
    .sort(([id1, data1], [id2, data2]) => idToSeq[id1] - idToSeq[id2])
    .map(([id, data]) => data)
