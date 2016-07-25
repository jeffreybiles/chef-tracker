import Ember from 'ember';

export default Ember.Service.extend({
  cookies: Ember.inject.service(),
  store: Ember.inject.service(),

  currentUser: null,
  isAuthenticated: Ember.computed.notEmpty('currentUser'),
  login(email, password){
    return this.get('store').query('user', {orderBy: 'email', equalTo: email}).then((users)=>{
      let user = users.objectAt(0);
      if(user && user.get('password') == password){
        this.set('currentUser', user);
        this.get('cookies').write('currentUserId', user.get('id'));
      } else {
        return Ember.RSVP.reject("The email and password given do not match");
      }
    })
  },
  logout(){
    this.set('currentUser', null);
    this.get('cookies').clear('currentUserId');
  },
  init(){
    this._super(...arguments);
    let currentUserId = this.get('cookies').read('currentUserId');
    if(currentUserId){
      let currentUser = this.get('store').findRecord('user', currentUserId);
      this.set('currentUser', currentUser);
    }
  }
});
