import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chefs', function() {
    this.route('chef', {path: ':chef_id'});
    this.route('chef.edit', {path: ':chef_id/edit'});
  });
  this.route('about');
  this.route('training');
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'});
  });
});

export default Router;
