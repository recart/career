# Recart 

### Senior Back-end Test Assignment

Most of our users are on the Shopify platform and [Recart](https://apps.shopify.com/recart) handles a bunch of different Shopify webhooks to gather the necessary data for their customers. For example we receive webhooks when customers update their cart (by adding or removing products).

Your task is to create an API that has a single HTTP endpoint which handles all incoming webhooks.

Check out the [Shopify API documentation](https://help.shopify.com/api/reference/webhook) to learn how webhooks work. In this first version, we only need to handle the `carts/create` and `carts/update` topics but structure the app in a way that will make it easy to add more handlers in the future. (The `carts/create` and `carts/update` webhooks should actually perform the same task.)

Use a database of your choice to store these data:
- Shopify shops with 2 main properties: domain and currency
- User sessions (which shop it belongs to, shopifyCartId, cart data)

When we receive the webhook, the session is already present in the database and you can find it by `shopifyCartId` (which should equal the `id` property of the webhook data).

Write these pieces of information onto the session:
- currency (as stored in our own database for the shop)
- value (sum of the price of the products in the cart)
- valueUSD (same, but converted to USD)
- itemCount (number of products in the cart)

We process many webhooks and neither the order of messages nor exactly-once delivery is guaranteed. Make sure you don't overwrite a session with outdated cart data. The ensure this, you can use `updated_at` parameter which is missing from the documentation but is actually included in the webhook data.

The conversion of the `value` from the original currency to USD is a time consuming task. To avoid long processing time, make it asyncronous. It's okay to update the session later with the converted value. If your solution to this would take too long to implement, you can leave it out but let us know how you'd approach this.

The endpoint should return either 200 or 500 response code and "OK" or the error message in the body.

You don't need to set up a Shopify store or anything like that. Just copy the dummy webhook data from the documentation and write good tests that prove that your API works properly ;)

---

The goal of the assignment is to get a picture of your programming skills and coding style. We prefer NodeJS or Go but you can choose any programming language that you're comfortable with.

Don't stress if you can't get every part done -- spend a maximum of 5 hours on this. We'll discuss your solution in person so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.

Feel free to ask questions to clarify the business need and the details. Also, try to estimate what can be done within the 5 hours time frame and let us know if we need to cut the scope.

Submit your your code through `bitbucket.org` by creating a **private** repository and sharing it with the `recart` user.