import Ember from 'ember';

export default Ember.Controller.extend({
  chefs: [
    {name: 'Gordon Ramsay', isHere: true},
    {name: 'Anthony Bourdain', isHere: false},
    {name: 'Rachael Ray', isHere: true},
    {name: 'Jamie Oliver', isHere: false},
    {name: 'Guy Fieri', isHere: true}
  ],
  actions: {
    makePresent(chef){
      Ember.set(chef, 'isHere', true)
    },
    makeAbsent(chef){
      Ember.set(chef, 'isHere', false)
    }
  }
});
