require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "shirishshrestha",
  id: 54052344,
  node_id: "MDQ6VXNlcjU0MDUyMzQ0",
  avatar_url: "https://avatars.githubusercontent.com/u/54052344?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shirishshrestha",
  html_url: "https://github.com/shirishshrestha",
  followers_url: "https://api.github.com/users/shirishshrestha/followers",
  following_url:
    "https://api.github.com/users/shirishshrestha/following{/other_user}",
  gists_url: "https://api.github.com/users/shirishshrestha/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shirishshrestha/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/shirishshrestha/subscriptions",
  organizations_url: "https://api.github.com/users/shirishshrestha/orgs",
  repos_url: "https://api.github.com/users/shirishshrestha/repos",
  events_url: "https://api.github.com/users/shirishshrestha/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shirishshrestha/received_events",
  type: "User",
  site_admin: false,
  name: "SHIRISH",
  company: null,
  blog: "https://shirishshrestha.netlify.app/",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "_shirish_11",
  public_repos: 20,
  public_gists: 0,
  followers: 3,
  following: 4,
  created_at: "2019-08-13T03:56:36Z",
  updated_at: "2024-05-09T11:49:11Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
