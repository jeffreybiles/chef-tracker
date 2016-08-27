import Ember from 'ember';

export default Ember.Helper.extend({
  session: Ember.inject.service(),
  compute([chef]/*, hash*/) {
    let user = this.get('session.currentUser');
    let employerId = chef.get('restaurant.user.id');
    return user && user.get('id') == employerId;
  }
});
