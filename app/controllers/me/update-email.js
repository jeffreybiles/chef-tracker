import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  user: Ember.computed.alias('session.currentUser'),
  actions: {
    updateEmail(newEmail, password){
      let oldEmail = this.get('session.currentUser.email')
      this.get('session').login(oldEmail, password).then(()=>{
        let firebaseUser = this.get('firebaseApp').auth().currentUser;
        return firebaseUser.updateEmail(newEmail).then(()=>{
          let appUser = this.get('user');
          appUser.set('email', newEmail);
          appUser.save().then(()=>{
            this.get('flashMessages').success('You successfully updated your email address')
            this.setProperties({
              newEmail: '',
              password: ''
            })
            this.transitionToRoute('me');
          });
        })
      }).catch((e)=>{
        alert(e.message)
      })
    }
  }
});
