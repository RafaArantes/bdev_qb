const quickBackend = require('./quick_backend')

const arr = Object.freeze([2,3,4,3,2,1])

test('Test case #1', () => {
    expect(quickBackend(arr, 2)).toBe(2)
})

test('Test case #2', () => {
    expect(quickBackend(arr, 1)).toBe(1)
})

test('Test case #3', () => {
    expect(quickBackend(arr, 3)).toBe(2)
})

test('Test case #4', () => {
    expect(quickBackend(arr, 4)).toBe(1)
})
