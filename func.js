function getMean(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += parseInt(num)
  }
  return sum / nums.length
}

function getMedian(nums) {
  nums.sort((a,b) => {
    return a-b
  })
  const half = Math.floor(nums.length / 2)

  if (nums.length % 2) {
    return nums[half]
  }
  return (nums[half-1] + nums[half]) / 2.0
}

function getMode(nums) {
  const numObj = {}
  for (let num of nums) {
    if (numObj[num]) {
      numObj[num] += 1
    } else {
      numObj[num] = 1
    }
  }
  let max = 0;
  let mode;
  for (let num of Object.keys(numObj)) {
    if (numObj[num] > max) {
      max = numObj[num]
      mode = num
    }
  }
  return +mode
}

function getAll(nums) {
  return {
    mean: getMean(nums),
    median: getMedian(nums),
    mode: getMode(nums)
  }
}

function parseNums(nums) {
  return nums.split(',').map(n => parseInt(n))
}

module.exports = {getMean, getMedian, getMode, getAll, parseNums}