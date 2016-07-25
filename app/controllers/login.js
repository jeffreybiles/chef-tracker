import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let email = this.get('email');
      let password = this.get('password');
      this.get('session').login(email, password).then(()=>{
        this.transitionToRoute('application');
      });
    }
  }
});
