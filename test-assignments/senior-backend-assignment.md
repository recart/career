# Recart

### Senior Back-end Test Assignment

The goal of this assignment is to evaluate your programming skills and coding style.

We prefer NodeJS or Go, but you can use any programming language you're comfortable with.

Feel free to use third-party frameworks and libraries, but choose lightweight ones to showcase your coding abilities. For example, use Koa, Fastify, or Express for Node.js.

Spend a maximum of 5 hours on this assignment. Add comments or README notes to explain your thinking and decisions. If we like your code, we'll discuss it in person, giving you a chance to explain what else you wanted to add and how you planned to implement it.

Ask questions to clarify the business needs and details. Estimate what can be done within the 5-hour timeframe and let us know if we need to cut the scope.

Submit your code via `bitbucket.org` by creating a **private** repository and sharing it with `developer-account@recart.com`.

---

### Description

Your task is to create a service that can notify integration partners about events in our system.

For example, let's say we have a partner called Awesome Reviews. They send requests to customers to write reviews about the products they order. To do this, they'll need to know when a purchase happens, so they subscribe to our `orders` webhook to get notified about all new orders.

##### Requirements:

* Ability to trigger an `order` event.
* Check which partners are subscribed to the event and send them a POST request to the endpoint they provided.
* You can freely choose the message source. We prefer SQS, but you can use other technologies too.
* Store the partner-related data. You can choose your preferred database.
* It should retry failed requests.
* It should handle multiple event types.
* Test cases for the most important paths.

##### Some optional extras we would love to see:

* Think about security, ensure that webhooks are only received from validated partners.
* Make the code base easily extendable to add new events.
* Add monitoring for the service, so we can see the partner's API latency and error rate.

---

### Something to think about

When we send large marketing campaigns, there can be spikes in traffic, so a rate-limiting solution would be very helpful. For example, partners could specify their own rate limits, and we could throttle the requests accordingly.

Think about how you would approach this problem, and we can discuss it in person :)