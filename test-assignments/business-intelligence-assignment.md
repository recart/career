# Recart 

### Business Intelligence Test Assignment

The goal of the assignment is to get a picture of your programming skills and coding style.

We prefer NodeJS or Go but you can choose any programming language that you're comfortable with.

Don't stress if you can't get every part done -- spend a maximum of 5 hours on this assignment. Feel free to add comments or README notes to help us understand your thinking and decisions. If we like your code overall, we'll discuss the solution in person too so you'll get a chance to tell us what else you wanted to add and how you planned to implement those.

Feel free to ask questions to clarify the business need and the details. Also, try to estimate what can be done within the 5 hours time frame and let us know if we need to cut the scope.

Submit your code through `bitbucket.org` by creating a **private** repository and sharing it with the `developer-account@recart.com` email address.

---

### Description

We use Intercom on our website and also on our Dashboard to communicate with our users or with anyone who is interested in using Recart. Our Customer Success team depends mainly on Intercom.

To give our customers a great support experience we need to measure how good our performance is, so we defined the following KPIs:

- Median first response time (in minutes)
- Median time to close (in hours)

Your task is to synchronize data from Intercom to an RDBMS engine and write queries that return the data for the KPIs. Intercom gives free trial to every developer.

To calculate the above KPIs you should use the conversation model ([https://developers.intercom.com/intercom-api-reference/reference#conversation-model](https://developers.intercom.com/intercom-api-reference/reference#conversation-model)).

### Requirements

- AWS RDS compatible RDBMS engine
- Good performance
    - if a field is not required for the KPIs please do not save them into the database
    - well defined indexes, if there should be any

### Something to think about

How would you build up a general enough ETL system to move customer data into a data warehouse that our product managers can use to analyze the usage of our features?
