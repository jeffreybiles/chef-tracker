import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';
// import { belongsTo, hasMany } from 'ember-data/relationships';

const Validations = buildValidations({
  displayName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', {type: 'email'})
  ],
  password: [
    validator('presence', true),
    validator('length', {min: 8})
  ]
})

export default Model.extend(Validations, {
  displayName: attr('string'),
  email: attr('string'),
  password: attr('string')
});
