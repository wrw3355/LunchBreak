App = Ember.Application.create();

App.Router.map(function() {
    this.resource("index", { path: "/" });
    this.resource("location", function() {
        this.route("new");
    });
    this.resource("restaurant", function() {
        this.route("new");
    });
    this.resource("events");
    this.resource("event", function() {
        this.route(":event_id");
        this.route("new");
    });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.IndexRoute = Ember.Route.extend({
  actions: {
  },
  model: function() {
      return this.store.find('resturant');
  }
});

App.LocationBlockComponent = Ember.Component.extend({
  actions: {
    showMenu: function(menuUrl) {
        window.open(menuUrl, "_blank");
    }
  }
});