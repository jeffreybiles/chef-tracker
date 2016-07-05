import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    togglePresent(chef){
      chef.set('isHere', !chef.get('isHere'));
      chef.save();
    },
    toggleOpen(){
      this.set('isOpen', !this.get('isOpen'));
    }
  }
});
