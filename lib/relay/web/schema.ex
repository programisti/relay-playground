defmodule Relay.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema
  import_types Relay.Schema.Types

  query do
    field :posts, list_of(:post) do
      resolve &Relay.Blog.PostResolver.all/2
    end

    field :users, list_of(:user) do
      resolve &Relay.Account.UserResolver.all/2
    end
  end
end
