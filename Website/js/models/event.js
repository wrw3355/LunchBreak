var App = App || Ember.Application.create();
App.Event = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.belongsTo('location'),
  whenDate: DS.attr('date'),
  recurring: DS.attr('boolean'),
  frequency: DS.attr('string'),
  restaurants: DS.hasMany('restaurant'),
  public: DS.attr('boolean'),
  invitees: DS.attr('user')
});

App.Event.FIXTURES = [{
  //records: [{
    id: 0,
    title: "Fancy Friday",
    description: "Lunch at a sit down restaurant.",
    location: 0,
    whenDate: new Date(2014, 5, 11, 11, 45, 0, 0),
    recurring: false,
    frequency: "",
    restaurants: [0, 1, 2],
    public: true,
    invitees: [0]
  //}]
}];