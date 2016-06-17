import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'Gordon Ramsay', isHere: true},
      {name: 'Anthony Bourdain', isHere: false},
      {name: 'Rachael Ray', isHere: true},
      {name: 'Jamie Oliver', isHere: false},
      {name: 'Guy Fieri', isHere: true}
    ]
  }
});
