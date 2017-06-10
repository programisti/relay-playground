defmodule Relay.Web.PageController do
  use Relay.Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
