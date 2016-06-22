import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('chefs');
  this.route('about');
  this.route('training');
});

export default Router;
