import Ember from 'ember';

export function round([number, inputDecimal]/*, hash*/) {
  let roundDecimal = inputDecimal || 2;
  let tenPower = Math.pow(10, roundDecimal)
  return Math.round(number * tenPower)/tenPower
}

export default Ember.Helper.helper(round);
