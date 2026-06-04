# Data Analyst Test Assignment

We always think about adding new communication channels to our product. Your task is to help our Product team understand how much of an impact adding email to our system would have.

## Requirements

You have to answer 3 questions:
- How many unique email addresses could we have added to Recart in the last 6 months?
- How many unique email addresses can be connected to subscribers from the last 6 months?
- What does the distribution of unique email addresses look like in the last 6 months?

To be able to answer the above 3 questions you have to generate a dataset. Please find the schema and some requirements for the dataset below.

You have to generate 3 datasets:
- merchants - A merchant record represents a webshop that uses Recart.
- subscribers - A subscriber record represents a person who subscribed to get marketing messages from a merchant using Recart.
- orders - An order record represents a purchase made by a person.

**Schemas:**

merchants:
    - id - ObjectId or UUID, cannot be null, must be unique
    - domain - text, it has to be a valid URI, cannot be null, must be unique

subscribers:
    - id - ObjectId or UUID, cannot be null, must be unique
    - merchant_id - ObjectId or UUID, cannot be null, must be present in the merchants dataset
    - phone_number - text, must be a valid phone number, cannot be null, must be unique on a per-merchant basis
    - subscribed_at - timestamp, cannot be null
    - unsubscribed_at - timestamp, can be null

orders:
    - id - ObjectId or UUID, cannot be null, must be unique
    - merchant_id - ObjectId or UUID, cannot be null, must be present in the merchants dataset
    - subscriber_id - ObjectId or UUID, can be null, must be present in the subscribers dataset
    - email - text, must be a valid email address, cannot be null
    - phone_number - text, must be a valid phone number, can be null
    - created_at - timestamp, cannot be null


**Other properties of the datasets:**

There should be at least:
    - 100 merchants
    - 1 million subscribers
    - 1.5 million orders

The amount of subscribers and orders has to be distributed over a 6-month-long time window.

At least 30% of the orders have to have a valid phone number, and there should be an overlap with the phone numbers in the subscribers dataset.

At least 5% of the subscribers have to have been unsubscribed in the last 6 months.

## README

We encourage you to write a summary of your approach to the problem.

You should think of it as a plan to be implemented as part of the resolution.

## Extras

The README should contain a section about how to run the data generation script.

## Hints

- We recommend using Hex (hex.tech). You can ask for a free 2-week-long trial, and it makes sharing things a lot easier.
- We recommend using Faker (https://fakerjs.dev/guide/) to generate the datasets; it supports both Python and JavaScript.
- We want to run the script you write on our own computers, so please make sure we can do that.

## LLM usage

Using Claude / Copilot / Cursor / ChatGPT is encouraged — but **if you use an LLM, sharing your prompts and transcripts is required**, not optional. Drop them in a `prompts/` directory or attach exported logs. We want to see how you direct the tool and what you keep vs. throw away; a submission with clear LLM output and no prompts is a red flag, not a clean one.

## Time budget

Max 6 hours. Ask questions up front to clarify the details, estimate what fits in the timeframe, and tell us what you cut and why. Don't stress if you don't finish every part — notes in the README on what you'd do next are valuable.


## Submitting

Submit via Hex by inviting `developer-account@recart.com`.