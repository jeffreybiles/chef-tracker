import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    makePresent(chef){
      Ember.set(chef, 'isHere', true);
      chef.save();
    },
    makeAbsent(chef){
      Ember.set(chef, 'isHere', false);
      chef.save();
    },
    toggleOpen(){
      this.set('isOpen', !this.get('isOpen'));
    }
  }
});
