//calculator
function FutureValue(initialDepositValue, annualInterestValue, numberOfyearsValue, interestTimesValue, monthlyContributionValue) {
  A = initialDepositValue * Math.pow(1 + (annualInterestValue/interestTimesValue), (numberOfyearsValue*interestTimesValue)) + monthlyContributionValue*12*((Math.pow(1 + (annualInterestValue/interestTimesValue), (numberOfyearsValue*interestTimesValue)) - 1)/annualInterestValue);
  return A.toFixed(2);
};
//function Call
myValue = FutureValue("r",("s"/'k'),"v","m");
console.log(myValue);
