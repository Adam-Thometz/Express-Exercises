const { getMean, getMedian, getMode } = require("./func")

describe('test operations', () => {
  let nums;
  beforeEach(() => {
    nums = [1,2,3,4,5,6,7,7]
  })

  test('test mean function', () => {
    expect(getMean(nums)).toEqual(4.375)
  })
  test('test median function', () => {
    // when nums.length is even
    expect(getMedian(nums)).toEqual(4.5)
    // when nums.length is odd
    expect(getMedian([1,2,3,4,5,6,7])).toEqual(4)
  })
  test('test mode function', () => {
    expect(getMode(nums)).toEqual(7)
  })
})