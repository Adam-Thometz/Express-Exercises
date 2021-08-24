const express = require('express');
const {getMean, getMedian, getMode, getAll, parseNums} = require('./func')
const ExpressError = require('./expressError')

const app = express();
app.use(express.json());

const ERROR_400_NO_NUM_TXT = "No numbers? Why are you even here?"
const ERROR_400_WRONG_NUM_TXT = "I can't calculate that. One of the 'numbers' you gave me is an imposter"
const ERROR_400_NO_OP_TXT = "What kind of operation is that? I accept 'mean', 'median', 'mode', and 'all'"
const ERROR_404_TXT = "You're a real nowhere man!"

app.get("/:operation", (req, res, next) => {
  if (!req.query.numsStr) throw new ExpressError(ERROR_400_NO_NUM_TXT, 400)
  const operation = req.params.operation
  const nums = parseNums(req.query.numsStr)
  if (nums.filter(n => isNaN(n)).length > 0) throw new ExpressError(ERROR_400_WRONG_NUM_TXT, 400)
  
  let value;
  if (operation === 'all') {
    value = getAll(nums)
    return res.send({
      operation,
      "mean": value.mean,
      "median": value.median,
      "mode": value.mode
    })
  } else if (operation === 'mean') {
    value = getMean(nums)
  } else if (operation === 'median') {
    value = getMedian(nums)
  } else if (operation === 'mode') {
    value = getMode(nums)
  } else {
    throw new ExpressError(ERROR_400_NO_OP_TXT, 400)
  }
  return res.send({operation, value})
})


// Error handling
app.use((req, res, next) => {
  const err = new ExpressError(ERROR_404_TXT, 404)
  next(err)
})

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.status || 500
  const msg = err.msg
  console.log(err.stack)

  return res.status(status).json({
    error: {msg, status}
  })
})

// Listen
app.listen(3000, () => {
  console.log("Server running on port 3000")
});