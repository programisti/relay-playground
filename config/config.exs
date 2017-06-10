# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :relay,
  ecto_repos: [Relay.Repo]

# Configures the endpoint
config :relay, Relay.Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "sQDZ4VHEocJ/qNTkvyqW/mvyCeByXu4SfhFRWacFvFY0ust/Te0ohIW4IysZKNd+",
  render_errors: [view: Relay.Web.ErrorView, accepts: ~w(json)],
  pubsub: [name: Relay.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
