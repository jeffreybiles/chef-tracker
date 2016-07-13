import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      chef: this.store.findRecord('chef', params.chef_id),
      restaurants: this.store.findAll('restaurant')
    });
  }
});
