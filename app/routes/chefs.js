import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('chef')
  },
  actions: {
    togglePresent(chef){
      chef.set('isHere', !chef.get('isHere'));
      chef.save();
    }
  }
});
