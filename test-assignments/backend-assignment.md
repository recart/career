# Recart 

### Back-end Test Assignment

The goal of this assignment is to evaluate your programming skills and coding style.

We prefer NodeJS or Go, but you can use any language you're comfortable with.

Feel free to use third-party frameworks and libraries, but choose lightweight ones to showcase your coding abilities. For example, use Koa, Fastify, or Express for Node.js.

Spend a maximum of 5 hours on this assignment. Add comments or README notes to explain your thinking and decisions. If we like your code, we'll discuss it in person, giving you a chance to explain what else you wanted to add and how you planned to implement it.

Ask questions to clarify the business needs and details. Estimate what can be done within the 5-hour timeframe and let us know if we need to cut the scope.

Submit your code via `bitbucket.org` by creating a **private** repository and sharing it with `developer-account@recart.com`.

---

### Description

Most of our users are on the Shopify platform, and [Recart](https://apps.shopify.com/recart) handles various Shopify webhooks to gather necessary data. For example, we receive webhooks when customers update their cart.

Your task is to create an API with a single HTTP endpoint to handle all incoming webhooks.

Refer to the [Shopify API documentation](https://shopify.dev/docs/apps/build/webhooks) to understand how webhooks work. For this version, handle only the `carts/create` and `carts/update` topics, but structure the app to easily add more handlers in the future. Both `carts/create` and `carts/update` webhooks should perform the same task.

Use a database of your choice to store:
- Shopify shops with properties: domain and currency
- User sessions with properties: shop it belongs to, shopifyCartId, cart data

When receiving a webhook, the session is already in the database and can be found by `shopifyCartId` (equal to the `id` property of the webhook data).

Update the session with:
- currency (from our database for the shop)
- value (sum of the product prices in the cart)
- valueUSD (converted to USD)
- itemCount (number of products in the cart)

Ensure you don't overwrite a session with outdated cart data. Use the `updated_at` parameter (included in the webhook data but not documented).

The conversion of `value` to USD is time-consuming. Make it asynchronous to avoid long processing times. If this takes too long to implement, describe your approach instead.

You don't need to set up a Shopify store. Use dummy webhook data from the documentation and write tests to prove your API works correctly.