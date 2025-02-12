# Recart 

### Junior Backend Home Assignment: Weather Forecast API

Your task is to create an API with the endpoints documented below. We recommend using Node.js with Koa, Express or Fastify library or Golang, but you can choose any programming language you are comfortable with.

The goal of this assignment is to evaluate your programming skills and coding style. Spend a maximum of 5 hours on this assignment. Feel free to add comments or README notes to explain your thinking and decisions. If we like your code, we'll discuss it in person, giving you a chance to explain what else you wanted to add and how you planned to implement it.

Submit your code via `bitbucket.org` by creating a **private** repository and sharing it with `developer-account@recart.com`.

Please provide setup/deploy instructions along with your code, preferably in the README file. If you write tests, include instructions on how to run them (e.g., `npm test`).

---

## `GET` /temperatures

Return the current temperature (in Celsius) in Budapest.

Example response:

```json
{ "temperature": 18 }
```

## `POST` /notifications

Send the current temperature to the specified email address.

Request parameters:

* `to`: the recipient's email address

Example response:

```json
{ "status": "ok" }
```

## `POST` /recurring_notifications

Send the current temperature to the specified email address every hour.

Request parameters:

* `to`: the recipient's email address

Example response:

```json
{ "status": "ok" }
```