import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    register(){
      let email = this.get('email');
      let password = this.get('password');
      let displayName = this.get('displayName');
      this.get('session').register(email, password, displayName).then(()=>{
        this.transitionToRoute('chefs');
      });
    }
  }
});
