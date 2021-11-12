import { ApiResponse, NonEmptyUrlsFunction } from './_.types'

/* NUTTO */
export const nonEmptyUrlsNutto: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] => {
  return responses.filter(({ url }) => url).map(({ url }) => url)
}

/* SIWAOH */
export const nonEmptyUrlsSiwaoh: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] => {
  return responses.map(response => response.url)
    .filter(url => url && url.length > 0) as string[] // not good, still need more TS understand

  // return responses.map(response => response.url).filter(url => url?.length > 0) // expect this
}

/* ANTONY */
export const nonEmptyUrlsAntony: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] => {
  return responses.map(r => r.url).filter(url => url !== undefined && url.length > 0) as string[]
}

/* CHARLES */
export const nonEmptyUrlsCharles: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] =>
  responses
    .map(({ url }) => url ?? '')
    .filter(url => url.length > 0)

/* TYPE-SAFE FILTER */
export const nonEmptyUrlsTypeSafe: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] => {
  return responses
    .filter((response): response is Required<ApiResponse> => Boolean(response.url))
    .map(({ url }) => url)
}
