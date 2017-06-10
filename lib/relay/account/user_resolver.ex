defmodule Relay.Account.UserResolver do
  alias Relay.{Account.User, Repo}

  def all(_args, _info) do
    {:ok, Repo.all(User)}
  end
end
