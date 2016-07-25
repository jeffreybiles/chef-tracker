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
      }).catch((errors)=>{
        if(Ember.isArray(errors)){
          errors.forEach((error)=>{
            let message = `Error on ${error.attribute}: ${error.message}`
            this.get('flashMessages').danger(message, {sticky: true});
          })
        } else {
          this.get('flashMessages').danger(errors, {sticky: true});
        }
      });
    }
  }
});
