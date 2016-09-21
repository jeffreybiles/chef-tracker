import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  user: Ember.computed.alias('session.currentUser'),
  actions: {
    updateEmail(email){
      let firebaseUser = this.get('firebaseApp').auth().currentUser
      firebaseUser.updateEmail(email).then(()=>{
        let appUser = this.get('user');
        appUser.set('email', email);
        appUser.save().then(()=>{
          this.transitionToRoute('me');          
        });
      }).catch((e)=>{
        alert(e.message)
        if(e.code == 'auth/requires-recent-login'){
          this.transitionToRoute('login')
        }
      })
    }
  }
});
