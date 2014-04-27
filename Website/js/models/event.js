var App = App || Ember.Application.create();
App.Event = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.belongsTo('location'),
  whenDate: DS.attr('date'),
  recurring: DS.attr('boolean'),
  frequency: DS.attr('string'),
  restaurants: DS.hasMany('restaurant'),
  public: DS.attr('date'),
  invitees: DS.attr('user')
});

App.Event.FIXTURES = [];