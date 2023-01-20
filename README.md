# Overton Front End / UX / UI test

## Introduction

*Overton's users are typically groups who want to influence government policy - they might be universities, charities like the British Heart Foundation or agencies like UNICEF. To help them we maintain a large, regularly updated database of government documents and use text mining, pattern matching and other techniques to extract a list of the people, academic papers and ideas that went into creating each one. We can then give each user a list of areas where we can see they've had an effect.*

Thanks for agreeing to run through this exercise.

During it you'll be tackling a short challenge based on themes from the real life Overton codebase. You'll be fetching data, displaying it and figuring out how best to make it navigable by users. We're keen to see what you come up with!

You should be able to get through the two parts of the exercise in 60 - 90 minutes. After you've submitted the test we'll schedule a call where you'll have the opportunity to walk us through it.

Please don't spend longer than 90 minutes in total on this: it's completely fine if you don't finish both sections.

The aim isn't for you to produce perfect, production ready code or designs; rather it's for you to be able to get a feel for what Overton does and for you to show us how you approach new projects and problems. We're interested in your thinking as much as the final output and this test gives us lots of jumping off points for chatting later, when you walk us through your work.

### What we're looking for

We'd like you to code in Javascript and to use HTML and CSS, but you can use any (or no) framework or helper libraries, feel free to do whatever you're most comfortable with.

Don't worry too much about making things look pretty at this point, though a little bit of styling is welcome - we're primarily concerned with the software engineering part of things with this test, and with how your structure and approach.

There's a skeleton structure in this repository, but you don't have to use it: if you've got a framework of choice feel free to delete or overwrite it.

## The brief

Imagine you're Overton's latest front end hire (congrats!). We've just had a call with a big climate change NGO - they'd like us to quicky prototype an app that journalists and researchers can use to see all of the latest thinking on air quality from the UK government. The app doesn't need to look polished or designed, but should be easy to use and understand.

### Section 1 : Fetching and rendering data

In this section we'd like you to build a simple client that fetches documents from a REST API and renders them.

The base URL you'll need is here:

https://app.overton.io/documents.php?query=title%3A%22air+quality%22+or+%22pollution%22&source=govuk&sort=citations&format=json&api_key=xxxx

You'll need to replace "xxxx" with the API key we've sent you in the email inviting you to take this code test.

The app.overton.io domain supports CORS.

Write some code to fetch the JSON data from the API and then render the individual documents in the "results" key.

There are a lot of fields in the API output for each result, but in this project we only care about these fields, and you can ignore the rest:

* title - this is the title of the policy document
* thumbnail - this is a link to the cover image thumbnail for the document
* authors - this is an array of author names for the document
* snippet - this is a line or two about what the document contains
* topics - this is an array of topics that the document covers
* published_on - this is the data that the document was published on

Use these fields when you're showing each document.

Optionally: 

* Instead of a timestamp we'd like to show the date in a more human friendly form e.g. 12th August 2022.
* The topics in the API results are in order of importance. Show only the first few topics by default and let the user click to see more.

### Section 2 : Exploring the data

In this section we'd like you to add filters to the results so that users can eventually explore them and drill down into different groups of documents. These filters could be in a sidebar or advanced search box or anywhere else you think is appropriate.

In the "facets" key of the JSON file you retrieved in (1) you'll find information about the different filters available to the user.

We're specifically interested in these four facets, and you can ignore the rest:

* authors - this is the list of agencies / departments that have published policy documents in the set
* published_year - these are the years that the documents were published in
* topics - these are the high level topics that the documents are about
* sdgcategories - these are the "sustainable development goals" - high level goals set by the United Nations, and often used by policymakers - that are relevant to the documents

Present these filters to the user, showing the different options available in each. You don't need to worry about making them actually work to filter the data yet - we'll talk about that in the interview!

Some things to think about that may come up when we chat:

* how might you present the years differently, bearing in mind that Overton has some policy from the 1890s
* how might your UI handle year ranges if we wanted to add support for queries like "anything published between 2010 and 2020"
* if we were to break out the topics onto their own page, how might you present them in a useful and/or visually interesting or appealing way?
* from a UX/UI perspective, how might you allow users to choose filters to be AND, OR or NOT - e.g. ("published in 2012" OR "topic is air quality") AND NOT "authors is Department of Transport"

### To continue in the interview: making the filters work and maintaining state

> **Don't tackle this section at home** - but if you have time feel free to collect your thoughts on it, as we'll be extending your code together to complete it in the interview.

By adding parameters to the base URL above you can filter the results in different ways.

For example, by addding &authors=Environment%20Agency you can only return policy documents from the Environment Agency i.e.

https://app.overton.io/documents.php?query=title%3A%22air+quality%22+or+%22pollution%22&source=govuk&sort=citations&format=json&authors=Environment%20Agency&api_key=xxxx

Add logic to the filters you added in (2) so that users can click on them and see the results. The app should maintain state after each click - so users should be able to select "Environment Agency" in the authors filter and then "2018" from the published_year filter to see documents by the Environment Agency that were published in 2018.

Important! For authors, topics and sdgcategories the name of the parameter you add to the URL is the same as the filter name e.g. "topics" "authors" or "sdgcategories". For published_year the parameter is just "year" i.e. &year=2018

## Sending us the code

Commit your code to github and make it public and send us the URL or invite us as a collaborator (the username to invite is "mrstew"). If you'd rather not use github then you can also zip up your code and send it to us by email.
