//calculator
function FutureValue(initialDepositValue, annualInterestValue, numberOfyearsValue,interestTimesValue) {
  A = initialDepositValue * Math.pow(1 + (annualInterestValue/interestTimesValue), (numberOfyearsValue*interestTimesValue));
  return A.toFixed(2);
};
myValue = FutureValue(1000,(10/100),5,1);
