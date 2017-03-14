// 1st ...args: Turn multiple arguments into an array
// 2nd ...args: Spread an array into multiple arguments
export const partial = (fn, ...args) => fn.bind(null, ...args)
