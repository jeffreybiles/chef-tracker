import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    makePresent(chef){
      Ember.set(chef, 'isHere', true)
      chef.save()
    },
    makeAbsent(chef){
      Ember.set(chef, 'isHere', false)
      chef.save()
    }
  }
});
