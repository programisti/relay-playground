alias Relay.{ Repo, Account.User, Blog.Post }

for _ <- 1..10 do
  Repo.insert!(%User{
    name: Faker.Name.name,
    email: Faker.Internet.safe_email
  })
end

for _ <- 1..20 do
  Repo.insert!(%Post{
    title: Faker.Lorem.sentence,
    body: Faker.Lorem.sentences(%Range{first: 1, last: 3}) |> Enum.join("\n\n"),
    user_id: Enum.random(1..10) # Pick random user for post to belong to
  })
end
