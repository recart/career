# Data Analyst Test Assignment

We are always thinking about adding new communication channels to our product. Your task is to help our Product team to understand the much of an impact adding email to our system would have.

## Requirements

You have to answer 3 questions:
- How many unique email addresses could we have added to Recart in the last 6 months?
- How many unique email addresses can be connected to subscribers from the last 6 months?
- How does the distribution unique email addresses look like in the last 6 months?

To be able to answer the above 3 questions you have to generate a dataset, please find the schema and the some requirements below for the dataset.

You have to generate 3 datasets:
- merchants - A merchant record represents a webshop that uses Recart.
- subscribers - A subscriber record represents a person who subscribed to get marketing message from a merchat uning Recart.
- orders - An order record represents a purchase made by a person.

**Schemas:**

merchants:
    - id - ObjectId or UUID, cannot be null, must be unique
    - domain - text, it has to be a valid URI, cannot be null, must be unique

subscribers:
    - id - ObjectId or UUID, cannot be null, must be uniqiue
    - merchat_id - ObjectId or UUID, cannot be null, must be present in the merchants dataset
    - phone_number - text, must be a valid phone number, cannot be null, must be unique for on per merchant basis
    - subscribed_at - timestamp, cannot be null
    - unsubscribed_at - timestamp, can be null

orders:
    - id - ObjectId or UUID, cannot be null, must be unique
    - merchant_id - ObjectId or UUID, cannot be null, must be present in the merchants dataset
    - subscriber_id - ObjectId or UUID, can be null, must be present in the subscribers dataset
    - email - text, must be a valid email address, cannot be null
    - phone_number, text, must be a valid phone number, can be null
    - created_at - timestamp, cannot be null


**Other properties of the datasets:**

There should be at least:
    - 100 merchants
    - 1 million subscribers
    - 1.5 million orders.

The amount of subscribers and orders has be distributed in a 6 monhts long time window.

At least 30% of the orders has to have a valid phone number, and there should be an overlap with the phone number in the subscribers dataset.

At least 5% of the subscribers has to have been unsubscribed in the last 6 months.

## README

We encoureage you to write a summary of your approach to the problem.

You should think of as a plan to be implement as part of the resolution.

## Extras

The read.me should contains a section about how to run the data generation script.

## Hints

- We recommend you to use Hex (hex.tech). You can ask for a free 2 weeks long trial, and it make sharing things a log easier.
- We recommend you to use Faker (https://fakerjs.dev/guide/) to generatae the datasets, it supports Python and Javascript as well.
- We want to run the script you write on our own computers, please make sure we can do that.

## LLM usage

Using Claude / Copilot / Cursor / ChatGPT is encouraged — but **if you use an LLM, sharing your prompts and transcripts is required**, not optional. Drop them in a `prompts/` directory or attach exported logs. We want to see how you direct the tool and what you keep vs. throw away; a submission with clear LLM output and no prompts is a red flag, not a clean one.

## Time budget

Max 6 hours. Ask questions up front to clarify the details, estimate what fits in the timeframe, and tell us what you cut and why. Don't stress if you don't finish every part — notes in the README on what you'd do next are valuable.


## Submitting

Via Hex, invite `developer-account@recart.com`.
