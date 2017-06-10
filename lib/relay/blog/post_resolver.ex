defmodule Relay.Blog.PostResolver do
  alias Relay.{ Repo, Blog, Blog.Post }

  def all(_args, _), do: {:ok, Blog.list_posts}
  def create(args, _info), do: Blog.create_post(args)
  def update(%{id: id, post: post_params}, _info), do: Blog.get_post!(id) |> Blog.update_post(post_params)
  def delete(%{id: id}, _info), do: Blog.get_post(id) |> Blog.delete_post(id)
end
