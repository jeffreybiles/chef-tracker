import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  user: Ember.computed.alias('session.currentUser'),
  passwordsMatch: Ember.computed('newPassword', 'confirmNewPassword', function(){
    return this.get("newPassword") == this.get('confirmNewPassword')
  }),
  actions: {
    updatePassword(oldPassword=''){
      if(this.get('passwordsMatch')){
        let email = this.get('session.currentUser.email')
        this.get('session').login(email, oldPassword).then(()=>{
          let firebaseUser = this.get('firebaseApp').auth().currentUser;
          return firebaseUser.updatePassword(this.get('newPassword')).then(()=>{
            this.get('flashMessages').success('You successfully updated your password')
            this.setProperties({
              oldPassword: '',
              newPassword: '',
              confirmNewPassword: ''
            })
            this.transitionToRoute('me')
          })
        }).catch((e)=>{
          alert(e.message)
        })
      } else {
        this.set('triedOnce', true)
      }
    }
  }
});
