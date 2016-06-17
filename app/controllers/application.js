import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makePresent(chef){
      Ember.set(chef, 'isHere', true)
    },
    makeAbsent(chef){
      Ember.set(chef, 'isHere', false)
    }
  }
});
