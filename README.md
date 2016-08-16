# Firestarter platform

This readme is really, really outdated. Instructions to get started and to set up Active Admin are still valid though.

## To get started

Install ruby 2.3.0 (or any ruby will probably work).

    gem install bundler # if needed
    bundle install
    bundle exec rake db:migrate

To get all the deps and the database set up properly. To start the server:

    bundle exec rails s

Now rails will listen at `localhost:3000` for your requests.

Go to `camps/new` to create a new camp and to `camps` to see a list of camps.

## There are tests

Run them with:

    bundle exec rspec spec

## Database

Currently sqlite is used as database. We will stick to this in development but set up
postgres in production. Install sqlite with your favourite package manager and you should
be up and running right away.

## Mail

In development mode [mailcatcher](http://mailcatcher.me/) is configured to catch emails
locally for easier testing.

## Ticket ID Import

Ticket ids are imported from a single column csv file of IDs, which is located in db/borderland_codes.csv
Rake task is in lib/tasks/import.rake and is run with "bundle exec rake import"


## Active Admin
Users and creations can be administrated with Active Admin. 
After install, run:
bundle exec rake db:migrate
bundle exec rake db:seed

## TODO
Before final version, change "camps" to creations or dreams.
