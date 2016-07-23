import Ember from 'ember';

export function round(params/*, hash*/) {
  let number = params[0];
  let roundDecimal = params[1] || 2;
  let tenPower = Math.pow(10, roundDecimal)
  return Math.round(number * tenPower)/tenPower
}

export default Ember.Helper.helper(round);
