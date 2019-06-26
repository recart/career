# Recart

### Senior Back-end Test Assignment

The goal of the assignment is to get a picture of your programming skills and coding style.

We prefer NodeJS or Go but you can choose any programming language that you're comfortable with.

Don't stress if you can't get every part done -- spend a maximum of 5 hours on this. We'll discuss your solution in person so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.

Feel free to ask questions to clarify the business need and the details. Also, try to estimate what can be done within the 5 hours time frame and let us know if we need to cut the scope.

Submit your your code through `bitbucket.org` by creating a **private** repository and sharing it with the `david.namenyi+bitbucket@recart.com` email address.

### Description

Let's say we have a partner called Awesome Reviews. They send a request to the customer to write a review about the product they order. To do this, they'll need to know when a purchase happened, so they subscribe to our `orders` webhook to get notified about the new orders.

Your task is to create a service which can notify partners about events in our system.

Requirements
* Check if the partner is subscribed to the event, if yes send a POST message to the endpoint what they provided.
* You can freely choose the message source (SQS, NSQ, NATS preferred but you can use other technologies )
* You can freely choose the database to store the partner related data.
* It should retry failed messages
* Handle multiple event categories

Nice to have features:
* Add monitoring for the service, so we can see the partner's api latency, error rate
* Security
* Easily extendable, easy to add new events
* Messages can be reformatted, Eg.: omit, rename properties, or event map to a new structure
* For large campaigns there can be spikes, so it's nice to have ratelimit the requests towards our partners. Additionally it's nice if the partner can specify their ratelimit. But be careful, if one partner hits the ratelimit, it shouldn't affect the other site's performance!
