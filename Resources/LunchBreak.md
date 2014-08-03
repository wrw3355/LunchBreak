Locations -> restaurants

Overview
----------
* Dashboard page
    * Quick view of events
    * Quick links
        * New event
        * My restaurants
        * Event invites (not accepted)
        * Upcoming events
    * My week overview
    * Metro style
* Resturants
    * Pictures
    * Menu Link
    * Map (Address)

* Polls
    * Pick which restaurant
    * 1 vote per user per "event"
* Events
    * DateTime
    * Location
    * Invitees
    * Invitee options:
        * Attend
        * Decline
    * Voting
        * I don't care option
* Features:
    * Installation process to set up CouchDB / write config.js file
    * Countdown timer for upcoming events
    * Lock out votes within X time of event
    * Roles
        * Admin
        * Organizer
        * Invitee
    * Comment on locations
    * User profiles
        * Avatar
        * Favorites
* Nice to have:
    * Step by step guide
    * Saved groups of users
    * UI Customization
    * Reviews of restaurants
        * Speed
        * Price
        * Overall
    * Email reminders
        * Voting closes soon
        * Voting has closed, where are we going
        * You haven't voted yet

* Invitee:
    * UserId
    * IsGoing
    * VoteChoice (?)
    * HasVoted
    Views
----------
* Add / Modify Location
    * Name
    * Description
    * Map(?)
    * Add / Modify restaurants
        * Name
        * Description
        * Picture
        * Menu Link
        * Address

* Add / Modify Event
    * Title
    * Description
    * Location

* View Event
    * Are you going?
    * Vote