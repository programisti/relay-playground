defmodule Relay.Web.Router do
  use Relay.Web, :router

  scope "/" do
    get "/*path", Relay.Web.PageController, :index
  end
  forward "/api", Absinthe.Plug, schema: Relay.Schema
  forward "/graphiql", Absinthe.Plug.GraphiQL, schema: Relay.Schema
end
