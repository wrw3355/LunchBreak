var App = App || Ember.Application.create();

App.Router.map(function() {
    this.resource("index", { path: "/" });
    this.resource("location", function() {
        this.route("new");
    });
    this.resource("restaurant", function() {
        this.route("new");
    });
    this.resource("events");
    this.resource("event", { "path": "/event/:event_id" }, function() {
        this.route("new");
    });
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.IndexRoute = Ember.Route.extend({
  actions: {
  },
  model: function() {
      return this.store.find('restaurant');
  }
});

App.EventsRoute = Ember.Route.extend({
  actions: {
  },
  model: function() {
      return this.store.find('event');
  }
});

App.EventRoute = Ember.Route.extend({
  actions: {
  },
  model: function(params) {
      return this.store.find('event', params.event_id);
  }
});

App.LocationBlockComponent = Ember.Component.extend({
  actions: {
    showMenu: function(menuUrl) {
        window.open(menuUrl, "_blank");
    }
  }
});