const a: string[] = []
// @ts-expect-error
const b = a[0].trim()
export { a }