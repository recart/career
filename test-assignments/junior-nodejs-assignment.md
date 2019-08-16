# Recart 

### NodeJS Junior Test Assignment: Weather forecast API

Your task is to create an API with the endpoints that are documented below. We recommend that you use the [Koa framework](https://github.com/koajs/koa/), but it's okay if you choose something else.

The goal of the assignment is to get a picture of your programming skills and coding style. Don't stress if you can't get every part done -- spend a maximum of 5 hours on this assignment. Feel free to add comments or README notes to help us understand your thinking and decisions. If we like your code overall, we'll discuss the solution in person too so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.


Submit your code through `bitbucket.org` by creating a **private** repository and sharing it with the `david.namenyi+bitbucket@recart.com` email address.

Please also provide setup / deploy instructions along with your code, preferrably in the README file. If you write tests, tell us how to run them (e.g.: `npm test`).

---

## `GET` /current_temperature

Return the current temperature (in Celsius) in Budapest.

Example response:

```
{ "temperature": 18 }
```

## `POST` /email_temperature

Send the current temperature to the specified email address.

Request parameters:

* `to`: the recipient's email address

Example response:

```
{ "status": "ok" }
```


## `POST` /subscribe_temperature

Send the current temperature to the specified email address __in every hour__.

Request parameters:

* `to`: the recipient's email address

Example response:

```
{ "status": "ok" }
```
