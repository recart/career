# Recart

### Senior Back-end Test Assignment

The goal of the assignment is to get a picture of your programming skills and coding style.

We prefer NodeJS or Go but you can choose any programming language that you're comfortable with.

Feel free to use 3rd party frameworks and libraries when needed, but try to choose lightweight ones because we'd also like to see how you think and code. Koa (NodeJS), Flask (Python) or Sinatra (Ruby) are good examples of frameworks that give you just the basics and let you figure out the rest.

Don't stress if you can't get every part done -- spend a maximum of 5 hours on this assignment. Feel free to add comments or README notes to help us understand your thinking and decisions. If we like your code overall, we'll discuss the solution in person too so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.

Feel free to ask questions to clarify the business need and the details. Also, try to estimate what can be done within the 5 hours time frame and let us know if we need to cut the scope.

Submit your code through `bitbucket.org` by creating a **private** repository and sharing it with the `developer-account@recart.com` email address.

---

### Description

Your task is to create a service which can notify integration partners about events in our system.

For example: let's say we have a partner called Awesome Reviews. They send requests to the customers to write a review about the products they order. To do this, they'll need to know when a purchase happens, so they subscribe to our `orders` webhook to get notified about all new orders.

##### Requirements:

* Check which partners are subscribed to the event and send them a POST request to the endpoint they provided.
* You can freely choose the message source. We prefer SQS, NSQ or NATS, but you can use other technologies too.
* You can freely choose the database to store the partner related data.
* It should retry failed requests.
* It should handle multiple event types.

##### Some optional extras we would love to see: 

* Think about security
* Make it easily extendable and easy to add new events
* Add monitoring for the service, so we can see the partner's API latency and error rate.
* Add a way to reformat messages, e.g. omit, rename properties, or map an event to a new structure

---

### Something to think about

When we send large marketing campaigns, there can be spikes in traffic, so a rate-limiting solution would be very helpful. For example, the partners could specify their own our rate limits and we could throttle the requests. However, if one partner hits the rate limit, it shouldn't affect the other partners' performance!

Think about how you would approach this problem and we can discuss it in person :) 
