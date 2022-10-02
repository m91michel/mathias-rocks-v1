---
title: "Month 1: My resume of the first month"
date: 2022-10-01
description: "The first month of my four projects in four months has come to an end. Let's talk about what I accomplished, what I learned, before concluding."
keywords: [sabbatical, startup, personal]
tags: [personal, "4 Projects in 4 Months"]
---

The first month of my [4 projects in 4 months](/blog/2022-08-10-4-projects-in-4-months/) has come to an end. Let's talk about what I accomplished, what I learned, before concluding.

![einfachcrypto.de Market Dashboard](./assets/2022-10-01/einfachcrypto-market-dashboard.png)

## What did I achieve this month?

### 1. A Beginner's Guide to Bitcoin
- I researched a lot of german crypto-related websites and created [this bitcoin beginner guide](https://einfachcrypto.de/wissen/bitcoin-guide/).
  
### 2. Crypto calendar
- I compiled a list of crypto-related events and added them to a notions page.
- I made [a page](https://einfachcrypto.de/wissen/kalender/) where I display these events by month.
- You can suggest a new event by using my tally form, which adds the data directly to my notions database. All I have to do now is accept it ✅.

### 3. Market Research
- Economic data such as the inflation rate, money supply, unemployment rate, and CPI rate are displayed on [the market dashboard](https://einfachcrypto.de/dashboard/market-dashboard/).
- I wrote a background job that imports data from CoinGecko into my database.
- Display all coins in a table where you can [customize the columns](https://einfachcrypto.de/coins/) for easier comparison.
- Each coin has a details page (for example, [Ethereum](https://einfachcrypto.de/coins/ethereum/)) where you can find all links and additional information. This page can be extended with further useful information in the future.

### 4. General improvements to the site
- I added a nice list of services to the [start page](https://einfachcrypto.de/). The same list is reused on other pages like [this one](https://einfachcrypto.de/dashboard/).
- Ask for cookie consent and data privacy. Do not display Google Trends charts without permission.
- My [social link page](https://einfachcrypto.de/ig/) has been updated.
- A lot of code improvements have been made under the hood. For example, improved build speed and automatic dependency updates via GitHub actions.


## What did I learn?
- **GatsbyJS**: I improved my knowledge of GatsbyJS.
  - One lesson here is that Gatsby requires more effort than expected for simple tasks like adding a sitemap. Although there is a nice plugin system, these plugins require more configuration than expected because each content type must be defined.
  - Furthermore, the local build time is quite long because all content data is fetched.
- **SEO**: In terms of on-page optimizations, I improved my SEO knowledge.
  - As I noticed warnings in Google Search Console, I improved the link structure. The lesson here was that Gatsby adds a trailing slash (`../slug/`) with a redirect, and I used links that did not have a slash (`../slug`), resulting in these redirects.
  - I learned how to configure Netlify to add redirects for unavailable pages
  - I used [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) to analyze my website and improve some headings.
- **Supabase**: I improved my understanding of Supabase by using it as my coin data database. For my tables, I enabled [RLS](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security) and experimented with the [realtime feature](https://supabase.com/docs/guides/realtime).
- **No-Code**: I use n8n for background tasks such as coin price updates. This is where I improved my workflow.
- **Cloud functions** I learned how to use Netlify's cloud function to consume up-to-date data from Supabase.
- **Contentful**: How to display rich text on a GatsbyJS page. I thought it would be simpler, but you'll have to create your own [rich text render](https://www.npmjs.com/package/@contentful/rich-text-react-renderer).
- **Tailwind**: I practiced using Tailwind and discovered how dark mode works. (Not yet enabled)
- **Social media**: I used Twitter more than usual and used the hashtag #buildInPublic. As a result, I now have 10 new followers 🎉.
- **Data privacy**: Integrating widgets from external websites is difficult due to data privacy concerns. 

## Resume: What is a success?
Yes, I would say. During this month, I shipped a lot of features for einfachcrypto.de and improved my skill set. I now have a foundation for comparing projects and improving my research.
One thing that is missing is some user feedback. If I talk to friends or people who DM me on Instagram, I will do this.


PS: You can follow my daily progress on [Twitter](https://twitter.com/m91michel).
