// Lodash max already matches our interface => just export it
export { max as maxLodash } from 'lodash-es'

// If you really need an explicit interface:
// export const maxLodash: MaxFunction = max
