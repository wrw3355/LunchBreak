var App = App || Ember.Application.create();
App.Location = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string')
});

App.Location.FIXTURES = [];