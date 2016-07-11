import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleOpen(){
      this.set('isOpen', !this.get('isOpen'));
    }
  }
});
