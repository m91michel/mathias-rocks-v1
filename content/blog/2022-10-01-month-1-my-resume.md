---
title: "Month 1: My resume of the first month"
date: "2022-10-01"
description: "The first month of my “4 projects in 4 months” is over. Let's discuss what I achieved, what I learned, and draw a conclusion about the first month."
keywords: [sabbatical, startup, personal]
tags: [personal, "4 Projects in 4 Months"]
---

The first month of my “4 projects in 4 months” is over. Let's discuss what I achieved, what I learned, and draw a conclusion about the first month.

![einfachcrypto.de Market Dashboard](./assets/2022-10-01/einfachcrypto-market-dashboard.png)

## What did I achieve this month?

### 1. A Beginner's Guide to Bitcoin
- I researched a lot of german crypto-related websites and created [this bitcoin beginner guide](https://einfachcrypto.de/wissen/bitcoin-guide/).
  
### 2. Crypto calendar
- I collected some events in the crypto space and added them to a notions page.
- I created [a page](https://einfachcrypto.de/wissen/kalender/) where I display these events grouped by months.
- You can suggest a new event by using my tally form, which directly adds the data to my notions database. I just have to accept it ✅..

### 3. Market Research
- [Market Dashboard](https://einfachcrypto.de/dashboard/market-dashboard/) with economic data like inflation rate, money supply, unemployment rate, and CPI rate.
- I created a background job that pulls data from CoinGecko and imports it into my database.
- Show all coins in the table, where you can [configure the columns](https://einfachcrypto.de/coins/) for better comparison.
- Each coin has a details page (e.g. [Ethereum](https://einfachcrypto.de/coins/ethereum/)) where you see all links and further information. This page can be extended in the future.

### 4. General improvements to the site
- I updated the [start page](https://einfachcrypto.de/) with a nice list of services. The same list is used [here](https://einfachcrypto.de/dashboard/).
- Ask for cookie consent and data privacy. Do not show Google Trends charts without consent.
- An update to my [social link page](https://einfachcrypto.de/ig/).
- A lot of code improvements under the hood. Automatic dependency updates with GitHub actions and improved build speed.


## What did I learn?
- **GatsbyJS**: I improved my knowledge of GatsbyJS.
  - Learning here is, that consumes more effort than expected for basic problems like adding a sitemap. There is a nice plugin system, but these plugins still need more configuration than expected as each content type need to be defined.
  - And local build time is quite slow as all content is fetched.
- **SEO**: I improved my SEO knowledge in terms of on-page optimizations.
  - I improved the link structure as I observed warnings in Google Search Console. The lesson here was that Gatsby adds a trailing slash (`../slug/`) with a redirect and I used links without a slash. (`../slug`), which caused these redirects.
  - I learned how to configure Netlify to add redirects for not available pages 
  - I tried out some tools like Screaming Frog to analyze my website and improve some headings.
- **Supabase**: I improved my knowledge of Supabase by using it as my database of coin data. I configured [RLS](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security) for my tables and experimented with the [realtime feature](https://supabase.com/docs/guides/realtime) for live pricing updates. 
- **No-Code**: I am using n8n for background tasks like updating coin prices. I optimized my workflow here to  
- **Cloud functions** learned the use of Netlify's cloud function which I use to consume the up-to-date data from Supabase.
- **Contentful**: How to render rich text content on a GatsbyJS page. I thought it is easier, but you have to implement your own [rich text render].
- **Tailwind**: I practiced the use of Tailwind and learned how dark mode works. (Not enabled yet 🙂)
- **Social media**: I used Twitter more often than usual and tweeted with #buildInPublic. My result is that I have now 10 new followers 🎉.
- **Data privacy** is a pain if I want to integrate widgets from external websites. 

## Resume: What is a success?
I would say yes. I learned a lot during this month.

## What is next
- SEO and Marketing

PS: You can follow my daily progress on [Twitter](https://twitter.com/m91michel).
