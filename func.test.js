const { getMean, getMedian, getMode, getAll, parseNums } = require("./func")

describe('test operations', () => {
  let nums;
  beforeEach(() => {
    nums = [1,2,3,4,5,6,7,7]
  })

  test('test parseNums function', () => {
    const toParse = '1,2,3,4,5,6,7,7'

    expect(parseNums(toParse)).toEqual(nums)
  })

  test('test getMean function', () => {
    expect(getMean(nums)).toEqual(4.375)
  })
  test('test getMedian function', () => {
    // when nums.length is even
    expect(getMedian(nums)).toEqual(4.5)
    // when nums.length is odd
    expect(getMedian([1,2,3,4,5,6,7])).toEqual(4)
  })
  test('test getMode function', () => {
    expect(getMode(nums)).toEqual(7)
  })
  test('test getAll function', () => {
    const answer = {
      mean: 4.375,
      median: 4.5,
      mode: 7
    }
    expect(getAll(nums)).toEqual(answer)
  })
})