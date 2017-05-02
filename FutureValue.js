//calculator
function FutureValue(initialDepositValue, annualInterestValue, numberOfyearsValue, interestTimesValue, monthlyContributionValue) {
  A = initialDepositValue * Math.pow(1 + (annualInterestValue/interestTimesValue), (numberOfyearsValue*interestTimesValue));
  return A.toFixed(2);
};
//function Call
myValue = FutureValue("r",("s"/'k'),"v");
console.log(myValue);
