import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: null,
  isAuthenticated: Ember.computed.notEmpty('currentUser'),
  login(user){
    this.set('currentUser', user);
  },
  logout(){
    this.set('currentUser', null);
  }
});
