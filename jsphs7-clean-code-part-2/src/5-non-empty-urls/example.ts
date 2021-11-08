import { ApiResponse, NonEmptyUrlsFunction } from './_.types'

export const nonEmptyUrlsWrong: NonEmptyUrlsFunction = (responses: ApiResponse[]): string[] => {
  return []
}
