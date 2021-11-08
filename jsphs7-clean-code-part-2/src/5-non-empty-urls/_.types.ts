export type ApiResponse = {
  url?: string
}

export type NonEmptyUrlsFunction = (responses: ApiResponse[]) => string[]
