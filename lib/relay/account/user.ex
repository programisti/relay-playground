defmodule Relay.Account.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Relay.Account.User

  schema "users" do
    field :email, :string
    field :name, :string
    has_many :posts, Relay.Blog.Post, foreign_key: :user_id

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:name, :email])
    |> validate_required([:name, :email])
  end
end
