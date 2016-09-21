import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  user: Ember.computed.alias('session.currentUser'),
  passwordsMatch: Ember.computed('newPassword', 'confirmNewPassword', function(){
    return this.get("newPassword") == this.get('confirmNewPassword')
  }),
  actions: {
    updatePassword(){
      if(this.get('passwordsMatch')){
        let firebaseUser = this.get('firebaseApp').auth().currentUser;
        firebaseUser.updatePassword(this.get('newPassword')).then(()=>{
          this.transitionToRoute('me')
        }).catch((e)=>{
          alert(e.message)
          if(e.code == 'auth/requires-recent-login'){
            this.transitionToRoute('login')
          }
        })
      } else {
        this.set('triedOnce', true)
      }
    }
  }
});
