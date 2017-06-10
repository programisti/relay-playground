defmodule Relay.Blog do
  import Ecto.Query, warn: false
  alias Relay.{ Repo, Blog.Post }

  def list_posts, do: Repo.all(Post)
  def get_post!(id), do: Repo.get!(Post, id)

  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def update_post(%Post{} = post, attrs) do
    post
    |> Post.changeset(attrs)
    |> Repo.update()
  end

  def delete_post(%Post{} = post), do: Repo.delete(post)
  def change_post(%Post{} = post), do: Post.changeset(post, %{})
end
