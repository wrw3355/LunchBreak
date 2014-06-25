var App = App || Ember.Application.create();
App.Location = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string')
});

App.Location.FIXTURES = [{
  id: 0,
  name: "Victor, New York",
  description: "The Victor, New York area.",
  address: "Victor, NY"
}];