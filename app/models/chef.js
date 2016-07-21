import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  isHere: attr('boolean'),
  description: attr('string'),
  imageUrl: attr('string'),
  restaurants: hasMany()
});
