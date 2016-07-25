import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let email = this.get('email');
      let password = this.get('password');
      this.get('session').login(email, password).then(()=>{
        this.get('flashMessages').success('You have logged in successfully');
        this.transitionToRoute('application');
      }).catch((reason)=>{
        this.get('flashMessages').danger(reason)
      });
    }
  }
});
