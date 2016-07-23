import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  chefs: hasMany(),
  healthRatings: Ember.computed.mapBy('chefs', 'health'),
  maxHealth: Ember.computed.max('healthRatings'),
  fameRatings: Ember.computed.mapBy('chefs', 'fame'),
  maxFame: Ember.computed.max('fameRatings'),
  totalHealthRatings: Ember.computed.sum('healthRatings'),
  averageHealth: Ember.computed('totalHealthRatings', 'healthRatings.[]', function(){
    if(this.get('healthRatings.length') == 0){
      return "No Chefs";
    }
    return this.get('totalHealthRatings')/this.get('healthRatings.length');
  }),
  totalFameRatings: Ember.computed.sum('fameRatings'),
  averageFame: Ember.computed('totalFameRatings', 'fameRatings.[]', function(){
    if(this.get('fameRatings.length') == 0){
      return "No Chefs";
    }
    return this.get('totalFameRatings')/this.get('fameRatings.length');
  })
});
