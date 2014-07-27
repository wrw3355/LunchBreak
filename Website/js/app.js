var App = App || Ember.Application.create();

App.Router.map(function() {
    this.resource("index", { path: "/" });
    this.resource("locations", function() {
        this.route("new");
    });
    this.resource("location", { "path": "/location/:location_id" });

    this.resource("restaurants", function() {
        this.route("new");
    });
    this.resource("restaurant", { "path": "/restaurant/:restaurant_id" });

    this.resource("events", function() {
      this.route("new");
    });
    this.resource("event", { "path": "/event/:event_id" });

    this.resource("users", function() {
      this.route("new");
    });
    this.resource("user", { "path": "/user/:user_id" });
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

App.EventRoute = Ember.Route.extend({
  actions: {
  },
  model: function(params) {
      return this.store.find('user', params.user_id);
  }
});

App.LocationBlockComponent = Ember.Component.extend({
  actions: {
    showMenu: function(menuUrl) {
        window.open(menuUrl, "_blank");
    }
  }
});

App.GoogleMapComponent = Ember.Component.extend({
  href: function() {
    return "https://www.google.com/maps/embed/v1/place?key=AIzaSyB17-nqo0YY71URBunoRlndEV5VkcfG1Js&q=" + this.place.get("address");
  }.property("place")
});