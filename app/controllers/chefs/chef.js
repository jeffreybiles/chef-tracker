import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    fire(chef){
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});
