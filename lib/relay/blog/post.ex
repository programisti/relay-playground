defmodule Relay.Blog.Post do
  use Ecto.Schema
  import Ecto.Changeset
  alias Relay.Blog.Post

  schema "posts" do
    field :body, :string
    field :title, :string
    belongs_to :user, Relay.Account.User, foreign_key: :user_id

    timestamps()
  end

  @doc false
  def changeset(%Post{} = post, attrs) do
    post
    |> cast(attrs, [:title, :body])
    |> validate_required([:title, :body])
  end
end
