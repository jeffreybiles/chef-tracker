import Ember from 'ember';

export default Ember.Component.extend({
  rating: 0,
  percentage: Ember.computed('rating', function(){
    return this.get('rating') * 10;
  }),
  width: Ember.computed('inputWidth', function(){
    return `${this.get('inputWidth')}px` || '100%';
  })
}).reopenClass({
  positionalParams: ['rating', 'inputWidth']
});
