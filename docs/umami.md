# About (/docs/about)



## What is Umami Analytics?

Umami is an open source, privacy-focused alternative to Google Analytics.
Umami provides you with a powerful web analytics solution that does not violate the privacy of your users.
Additionally, when you self-host Umami you are in complete control of your data.

<img alt="image" src={__img0} placeholder="blur" />


# Add a user (/docs/add-a-user)







Umami allows you to create separate accounts so that you can host data for friends or clients.

## Roles

Team roles and related permissions.

* **Admin**: All permissions.
* **User**: All permissions except admin console.
* **View Only**: View only.

Log into Umami as the administrator and click on the side nav dropdown then click **Admin**.

Only **Admin** users are able to have access to the **Admin** console.

<img alt="image" src={__img0} placeholder="blur" />

Then navigate to **Users** and click on the **Create user** button.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

The new account will have its own dashboard and websites separate from the **admin** account.


# Attribution (/docs/attribution)





Umami Attribution helps track the effectiveness of marketing channels, measures campaign performance, and identifies which sources drive the most valuable traffic.
By linking attribution data with traffic and engagement metrics, businesses can make informed decisions to enhance marketing ROI and drive sustainable growth.

The insight works by choosing a Viewed page or Triggered event you want to track attribution for and displays referrer, paid ads, and UTM data through a specific attribution model.

## Models

* **First-Click**: Credit for a conversion to the very first interaction a user had with your conversion event.
* **Last-Click**: Credit for a conversion to the final interaction before conversion event.

## Parameters

* `Model`: (required) The attribution model applied to the insight.
* `Type`: (required) Viewed page or Triggered event.
* `Conversion Step`: (required) Viewed page or Triggered event user must hit to count as a conversion.

## Create a insight

### Step 1: Choose a Model, Type, and Conversion step.

<img alt="image" src={__img0} placeholder="blur" />

* **Viewed page** : The user must reach this specific URL. (example: `/pricing`)
* **Triggered event** : The user must generate this specific event . (example: `checkout-cart`)

### Step 2: Run insight

<img alt="image" src={__img1} placeholder="blur" />


# Breakdown (/docs/breakdown)







Umami Breakdown allows you to aggregrate and view your data in a variety of ways.
Explore your data more extensively through the utilization of segments and filters.

The insight works by segmenting your data into the follow metrics.

* **Visitors**
* **Visits**
* **Views**
* **Bounce Rate**
* **Visit Duration**

## Parameters

* `Fields`: (required) Metric data you want to segment. This is defaulted to Path and includes all data collected via the tracker script.

## Create a insight

### Step 1: Choose your field(s)

The fields include both pageview and session metrics collected via the tracker script.

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Choose your filter(s)

<img alt="image" src={__img1} placeholder="blur" />

### Step 3: Run insight

<img alt="image" src={__img2} placeholder="blur" />


# Code of Conduct (/docs/code-of-conduct)

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience
for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status, nationality, personal appearance,
race, caste, color, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others’ private information, such as a physical or email address, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate
and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues,
and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions
when appropriate.

### Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the
community in public spaces. Examples of representing our community include using an official email address, posting via an
official social media account, or acting as an appointed representative at an online or offline event.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible
for enforcement at [contact@umami.is](mailto:contact@umami.is). All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

### Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they
deem in violation of this Code of Conduct:

#### 1. Correction

Community Impact: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

Consequence: A private, written warning from community leaders, providing clarity around the nature of the violation and an
explanation of why the behavior was inappropriate. A public apology may be requested.

#### 2. Warning

Community Impact: A violation through a single incident or series of actions.

Consequence: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited
interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in
community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

#### 3. Temporary Ban

Community Impact: A serious violation of community standards, including sustained inappropriate behavior.

Consequence: A temporary ban from any sort of interaction or public communication with the community for a specified
period of time. No public or private interaction with the people involved, including unsolicited interaction with those
enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.

#### 4. Permanent Ban

Community Impact: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior,
harassment of an individual, or aggression toward or disparagement of classes of individuals.

Consequence: A permanent ban from any sort of public interaction within the community.

## Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code\_of\_conduct.html](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html).

Community Impact Guidelines were inspired by Mozilla’s code of conduct enforcement ladder.

For answers to common questions about this code of conduct, see the FAQ at [https://www.contributor-covenant.org/faq](https://www.contributor-covenant.org/faq).
Translations are available at [https://www.contributor-covenant.org/translations](https://www.contributor-covenant.org/translations).


# Compare (/docs/compare)







Umami supports comparing websites stats and metrics across previous date ranges. See how your website performs versus the past and if it's
trending in the right direction.

## Parameters

* `Previous date range`: (required) Comparison date range which can be the previous period or year.

## Create a insight

### Step 1: Choose a previous date range

* **Previous period**: Same date range from the most recent past period.
* **Previous year**: Same date range last year.

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Run insight

Compare mode will show website stats along with performance changes between the two periods.
The graph will also display **Views** (Purple) and **Visitors** (Pink) lines from the previous period.

<img alt="image" src={__img1} placeholder="blur" />

Compare individual metric stats. A performance indicator will be displayed if values match between the two periods.

<img alt="image" src={__img2} placeholder="blur" />


# Distinct IDs (/docs/distinct-ids)





A Distinct ID is a unique identifier assigned to a user, either anonymously or when they log in.
This allows you to associate actions (page views, clicks, conversions) with a single user across multiple sessions.
For a more extensive way to identify a session, take a look at [Session Data](/docs/tracker-functions#session-data).

## Use Cases

* Properly attribute user behavior.
* Connect events across multiple sessions or devices.
* Identify repeat users vs. new users.
* Build out journeys and profiles based on user history.

## Usage

Add the **id** property to the payload. This property has a 50 character limit.

```json
{
  "payload": {
    "hostname": "your-hostname",
    "language": "en-US",
    "referrer": "",
    "screen": "1920x1080",
    "title": "dashboard",
    "url": "/",
    "website": "your-website-id",
    "id": "bob@aol.com"
  },
  "type": "event"
}
```

## Search

Navigate to **Sessions** to view visitor activity.

<img alt="image" src={__img0} placeholder="blur" />

Search for a specific **Distinct ID** to views all connected sessions for that time range.

<img alt="image" src={__img1} placeholder="blur" />


# Event data (/docs/event-data)



Use custom data properties to help you further analyze your data.
Umami allows you to attach dynamic data to your events using the two methods below.

* **[Data attributes](/docs/track-events#using-data-attributes)**
* **[Tracker functions](/docs/tracker-functions#event-data)**

## Accessing event data

Navigate to **Websites** and click on the **View** button.

You can access event data by clicking on the **Event data** button from the top nav.

<img alt="image" src={__img0} placeholder="blur" />


# FAQ (/docs/faq)

### 1. Is Umami GDPR compliant?

Yes, Umami does not collect any personally identifiable information and anonymizes all data collected. Users cannot be identified
and are never tracked across websites.

### 2. Do I need to display a cookie notice to users?

No, Umami does not use any cookies in the tracking code.

### 3. Does Umami work on a single page application (SPA)?

Yes, Umami works seamlessly between SPAs and normal websites.

### 4. Can Umami record events such as button clicks?

Yes, please see [Track Events](/docs/track-events) under **Getting Started**.

### 5. Where can I go for help if I have problems or want to request a feature?

For general discussions and troubleshooting you can use [GitHub Discussions](https://github.com/umami-software/umami/discussions).

For bug reports and feature requests, please file an [issue](https://github.com/umami-software/umami/issues) on GitHub.

For the most fun, join the Umami community on [Discord](https://discord.gg/4dz4zcXYrQ)!


# Funnel (/docs/funnel)











Umami Funnel helps you understand the conversion and drop-off rate of users.
By analyzing the funnel, users can make informed decisions to optimize the website's user experience and achieve better conversion rates.

The insights works by displaying the counts of users that reach each URL or event and the drop off rate from the previous step.
The funnel uses specific order criteria, which requires step completion in a required order.
The user may navigate to other URLs or events in between the funnel steps, but must complete the funnel steps in order to be counted as a conversion.

## Parameters

* `Window`: (required) Amount of minutes a user has between funnel steps to be counted as a conversion.
* `Steps`: (required) Sequential step conditions used in the funnel. Minimum of two is required to run the insight.

## Create a insight

### Step 1: Click on the add Funnel button

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Fill out the form details and click the **Save** button.

<img alt="image" src={__img1} placeholder="blur" />

### Choose your steps

Click the **Add** button, choose the step type (Viewed page or Triggered event) and type in the step condition on the funnel.

<img alt="image" src={__img2} placeholder="blur" />

Continue to add steps until your desired funnel conditions are completed. Umami supports specific URLs, events, and URL wildcards as steps.

* **Specific URL** : The user must reach this specific URL. (example: `/`)
* **Event** : The user must generate this specific event . (example: `live-demo-button`)
* **URL wildcards** : The user must reach any URL that meets the wildcard criteria. Only `Ends with` search is available. (example: `/docs*`)

### Step 3: Run insight

<img alt="image" src={__img3} placeholder="blur" />

To Edit or Delete a funnel click on the ellipsis for that specific funnel.

<img alt="image" src={__img4} placeholder="blur" />


# Goals (/docs/goals)











Umami Goals is a crucial tool in providing valuable insights into how well your website is meeting its objectives.
With clear metrics and visualizations, our goals insights translates user behavior into actionable steps towards improvement.

The insight works by choosing a Viewed page or Triggered event you want to track. The insight will the show conversion rate
of users that hit that action out of the total number of users within that date range.

## Parameters

* `Action`: (required) Viewed page or Triggered event user must hit to count as a conversion.

## Create a insight

### Step 1: Click on the add Goal button

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Fill out the form details and click the **Save** button.

<img alt="image" src={__img1} placeholder="blur" />

### Choose your action

Choose the action type (Viewed page or Triggered event) and type in the step condition on the goal.

<img alt="image" src={__img2} placeholder="blur" />

Umami supports specific URLs and events.

* **Viewed page** : The user visited this specific URL. (example: `/pricing`)
* **Triggered event** : The user must generate this specific event . (example: `live-demo-button`)

### Step 3: Run insight

<img alt="image" src={__img3} placeholder="blur" />

To Edit or Delete a goal click on the ellipsis for that specific goal.

<img alt="image" src={__img4} placeholder="blur" />


# Overview (/docs)

## What is Umami?

Umami is an open-source, privacy-focused web analytics tool that serves as an alternative to Google Analytics.
It provides essential insights into website traffic, user behavior, and performance, all while prioritizing data privacy.

Unlike many traditional analytics platforms, Umami does not collect or store personal data, avoiding the need for cookies,
and is GDPR and PECR compliant.

Designed to be lightweight and easy to set up, Umami can be self-hosted, giving users full control over their data.

## Quickstart

To get Umami up and running you will need to:

1. [Install the application](/docs/install)
2. [Log into the application](/docs/login)
3. [Add a website](/docs/add-a-website)
4. [Add the tracking code into your website HTML](/docs/collect-data)

## Hosting

If you are unfamiliar with running your own servers, check out the [Hosting](/docs/guides/hosting) section to get a quick overview.

There are also many services that will run Umami. See the [Guides](/docs/guides/hosting) section.

## Community

Need help getting started? Come join our community!

* [GitHub](https://github.com/umami-software/umami)
* [Discord](https://discord.gg/4dz4zcXYrQ)
* [X](https://twitter.com/umami_software)

## Frequently asked questions

**1. Is Umami GDPR compliant?**

Yes, Umami does not collect any personally identifiable information and anonymizes all data collected. Users cannot be identified
and are never tracked across websites.

**2. Do I need to display a cookie notice to users?**

No, Umami does not use any cookies in the tracking code.

**3. Does Umami work on a single page application (SPA)?**

Yes, Umami works seamlessly between SPAs and normal websites.

**4. Can Umami record events such as button clicks?**

Yes, please see [Track Events](/docs/track-events).


# Insights (/docs/insights)







Umami has built-in insights to help you gain deeper understanding of your data.
Together, these insights offer a comprehensive understanding of user behavior, satisfaction, and opportunities for optimization.

## Available insights

* [Compare](/docs/compare) - See how your website performs versus the past by a variety of metrics.
* [Breakdown](/docs/breakdown) - Dive deeper into your data by using segments and filters.
* [Funnel](/docs/funnel) - Understand the conversion and drop-off rate of users.
* [Retention](/docs/retention) - Measure your website stickiness by tracking how often users return.
* [UTM](/docs/utm) - Track your campaigns through UTM parameters.
* [Goals](/docs/goals) - Track your goals for pageviews and events.
* [Journey](/docs/journey) - Understand how users nagivate through your website.
* [Revenue](/docs/revenue) - Look into your revenue data and how users are spending.
* [Attribution](/docs/attribution) - See how users engage with your marketing and what drives conversions.

## Universal filtering

The date range and filters from the overview page can now be applied to all reports

<img alt="image" src={__img0} placeholder="blur" />

<img alt="image" src={__img1} placeholder="blur" />

## Accessing an insight

Insights are accessible after clicking on a website. Insights are categorized between traffic, behavior, and growth.

<img alt="image" src={__img2} placeholder="blur" />


# Installation (/docs/install)

There are several different ways to install Umami.

* **Installing from source**: Get the code from [GitHub](https://github.com/umami-software/umami) and build the application yourself.
* **Using Docker compose**: Build your own Docker container using `docker compose`.
* **Using a Docker image**: Download a pre-built Docker image.

## Installing from source

### Requirements

* A server with [Node.js](https://nodejs.org/) version 18.18 or newer.
* A database. Umami supports [PostgreSQL](https://www.postgresql.org/) (minimum v12.14) databases.

### Install pnpm

```shell
npm install -g pnpm
```

### Get the source code and install packages

```shell
git clone https://github.com/umami-software/umami.git
cd umami
pnpm install
```

### Configure Umami

Create an `.env` file with the following

```dotenv
DATABASE_URL={connection url}
```

The connection url is in the following format:

```dotenv
DATABASE_URL=postgresql://username:mypassword@localhost:5432/mydb
```

### Build the application

```shell
pnpm build
```

The first time the build is run, it will create all the required database tables in your database.
It will also create a login account with username **admin** and password **umami**.

### Start the application

```shell
pnpm start
```

By default this will launch the application on `http://localhost:3000`. You will need to either
[proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server
or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

### Running Umami

You can simply run `pnpm start` to start Umami, but it's highly recommended you use a process manager like [PM2](https://pm2.keymetrics.io/) which will handle restarts for you.

To run with PM2:

```shell
pnpm --global add pm2
cd umami
pm2 start "pnpm start" --name umami
pm2 startup
pm2 save
```

## Installing with Docker

Umami ships with a docker compose that contains the application and a PostgreSQL database.

To build the Docker container and start up with a Postgres database, run:

```shell
docker-compose up -d
```

Alternatively, if you want to use prebuilt images, you can pull the Umami Docker image with PostgreSQL support:

```shell
docker pull docker.umami.is/umami-software/umami:postgresql-latest
```


# Integrations (/docs/integrations)

## Plugins

* [Umami Analytics Plugin for VuePress](https://github.com/spekulatius/vuepress-plugin-umami)
* [Umami Analytics Plugin for VuePress v2](https://github.com/azat-io/vuepress-plugin-umami-analytics)
* [Umami Analytics Plugin for Gatsby](https://www.gatsbyjs.com/plugins/gatsby-plugin-umami/)
* [Umami Analytics Module for Nuxt](https://github.com/ijkml/nuxt-umami)
* [Umami Plugin for Craft CMS](https://github.com/stenvdb/craft-umami)
* [Umami Plugin for Docusaurus](https://github.com/dipakparmar/docusaurus-plugin-umami)
* [Umami Plugin for WordPress](https://wordpress.org/plugins/integrate-umami/)
* [Umami Connect Plugin for WordPress](https://github.com/ceviixx/umami-wp-connect/tree/v1.2.0)
* [Umami Analytics Plugin for Publii](https://marketplace.getpublii.com/plugins/umami-analytics/)
* [Umami Module for QloApps](https://github.com/DigitalMalayaliStudio/qlo_umami)

## API

* [Umami API for Javascript](https://github.com/umami-software/api-client)
* [Umami API for PHP Laravel](https://github.com/atm-code/laravel-umami)
* [Umami API for Python](https://github.com/mikeckennedy/umami-python)

## Flutter

* [Flutter Umami Analytics Integration](https://pub.dev/packages/flutter_estatisticas)


# Journey (/docs/journey)









Umami Journey provides analytics into optimizing website performance and enhancing user experience. User journeys map out the steps
visitors take to achieve their goals, such as making a purchase or signing up for a newsletter. By analyzing these paths,
you can identify and remove pain points, ultimately leading to improved customer satisfaction.

The insight works by displaying the top user journeys for your website. You can traverse each step and explore where users start off, where they drop off,
and where they end up at.

## Parameters

* `Steps`: (required) Sequential step conditions used in the user journey. Range is between 3 to 7 steps.
* `Start Step`: The first step of the user journey. Can be a Viewed page or Triggered event.
* `End Step`: The last step of the user journey. Can be a Viewed page or Triggered event.

## Create a insight

### Step 1: Choose your steps

Choose the number of steps and optional step conditions like where your user starts and/or ends their journey.

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Run insight

Press the **Maximize** button in the top-right corner to expand to full-screen.

<img alt="image" src={__img1} placeholder="blur" />

### Step 3: Explore a journey

Select a Viewed page or Triggered event to see how many users reached that step.

<img alt="image" src={__img2} placeholder="blur" />

Hover over a Viewed page or Triggered event to view conversion and dropoff metrics.

<img alt="image" src={__img3} placeholder="blur" />


# Links (/docs/links)











Umami links monitor and record clicks on specific URLs to show where visitors come from and how they interact with your links. It works by adding a redirect link that captures metrics and data at the time of click.
This helps businesses measure campaign performance, identify high-performing channels, and optimize marketing efforts for better conversions.

## Add a link

Log into Umami and click on **Links** in the sidebar.

<img alt="image" src={__img0} placeholder="blur" />

Click on the **Add link** button in the top-right corner.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

## Collect data

To start collecting data, use the Umami link provided instead of the destination URL to start tracking metrics from external sources.

<img alt="image" src={__img3} placeholder="blur" />

## Edit or Delete a link

From the **Links** screen click on the **Edit** button to update a cohort or click on the **Delete** button to delete a link.

<img alt="image" src={__img4} placeholder="blur" />


# Metric definitions (/docs/metric-definitions)

All default metrics Umami collects along with high level definitions.

***

## Event metrics

Event metrics help identify a unique event for a user. Each event is stored as a unique UUID called an Event ID.

**Website ID**

A unique UUID value to identify your website included in the payload.

**Hostname**

Location [hostname](https://developer.mozilla.org/en-US/docs/Web/API/Location/hostname) property included in the payload.

**URL**

URL [pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
and [search](https://developer.mozilla.org/en-US/docs/Web/API/URL/search) property combined included in the payload.

**Referrer**

Document [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) property included in the payload. If the referrer
includes the hostname, the value is replaced by the previous URL.

**Title**

Document [title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) property included in the payload.

**Query parameters**

[Search](https://developer.mozilla.org/en-US/docs/Web/API/URL/search) property that is extracted from the URL
after the payload is sent.

***

## Session metrics

Session metrics help identify a unique session for a user. Each session is stored as a unique UUID called a Session ID.

**Browser**

Browser name extracted from the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).

`Examples: Chrome, FireFox, iOS, Safari, Edge`

**OS**

Operating system name extracted from the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).

`Examples: Windows 10, macOS, Linux, Android, iOS`

**Device**

Device name that is identified from the combination of **OS** and **screen**.

`Examples: Laptop, desktop, mobile, tablet`

**Screen**

[Screen](https://developer.mozilla.org/en-US/docs/Web/API/Screen) width and height property
included in the payload.

`Examples: 1920x1080, 1280x960`

**Language**

Navigator [language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) property included in the payload.

`Examples: English, Chinese, German, French`

***

## Location metrics

Location metrics come from different sources depending on the headers. The IP address sending the request is used to
gather these metrics, but is never stored.

* `Cloudflare`: [HTTP request headers](https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#docs-content)
* `Vercel`: [Geolocation headers](https://vercel.com/guides/geo-ip-headers-geolocation-vercel-functions)
* `MaxMind`: [Geolite Database](https://dev.maxmind.com/geoip/geolocate-an-ip).

**Country**

Name of country following ISO-3166 standards.

`Examples: United States, China, Germany, France`

**Region**

Name of region (subdivisions) following ISO-3166-2 standards.

`Examples: California, Ontario, Bayern, Île-de-France`

**City**

Name of city.

`Examples: San Francisco, Toronto, Munich, Paris`

***

## Calculated metrics

Calculated metrics are a combination of total and unique aggregates per website.

**Views**

The total number of events that were collected by your visitors.

**Visits**

Unique number of visits. A visit is a more granular range within a user session. A visit is calculated
using a hash of the session ID and rotating salt that is rotated at the start of every hour. Visits are able
to span across hourly intervals.

**Visitors**

Unique number of sessions. A session is calculated using a hash of data such as Website ID,
hostname, User-Agent, etc and a rotating salt that is rotated at the start of every month.

**Bounce rate**

A bounce is defined when a visit has only 1 event. A user will enter the website, initially generating a view, then leaving.
The bounce rate is calculated by dividing the total number of bounces by unique number of visits.

**Visit duration**

Total time spent on the website divided by unique number of visits. Total time is only calculated for visitors that
visit more then one page. The difference between the first and last event create time per visit are summed into a duration time.


# Pixels (/docs/pixels)











Umami pixels collect data about how visitors use a site, such as which pages they view, how long they stay, and what actions they take.
Tracking pixels work by loading a tiny invisible image or script that sends information about a visitor’s activity when a webpage is viewed.
This helps site owners understand user behavior, identify popular content, and spot where people drop off.
The insights can be used to improve site design, fix issues, and make the overall experience more effective.

## Add a pixel

Log into Umami and click on **Pixels** in the sidebar.

<img alt="image" src={__img0} placeholder="blur" />

Click on the **Add pixel** button in the top-right corner.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

## Collect data

To start collecting data, embed the Umami pixel provided to start tracking metrics from external sources.

<img alt="image" src={__img3} placeholder="blur" />

## Edit or Delete a pixel

From the **pixels** screen click on the **Edit** button to update a cohort or click on the **Delete** button to delete a pixel.

<img alt="image" src={__img4} placeholder="blur" />


# Retention (/docs/retention)





Umami Retention measures your website stickiness by tracking how often users return.
This insight provides data into how many users continue to engage with your website over time, helping you understand and improve long-term user loyalty.

The insight uses a cohort analysis chart, offering valuable insights into the long-term retention trends and performance of distinct user cohorts.
The chart is broken down into distinct visitors per day and how often those users return on specific days following the first initial visit.

## Parameters

* `Date`: (required) The desired month and year of the insight.

## Create a insight

### Step 1: Choose a date (month and year)

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Run insight

<img alt="image" src={__img1} placeholder="blur" />


# Revenue (/docs/revenue)





Umami Revenue allows you to helps track financial performance, measure ROI, and identify which pages or products
generate the most income. It provides insights into customer behavior, helping optimize revenue sources
and improve conversion rates. By linking revenue data with traffic and user behavior,
businesses can make informed decisions to boost profitability and plan for future growth.

The insight works by aggregating **Revenue** and **Currency** data across a specified time period.

## Configuring Revenue

To start collecting revenue data, you will be leveraging tracking an event with dynamic data. This can be done through [tracker functions](https://umami.is/docs/tracker-functions#event-data)
or [data attributes](https://umami.is/docs/track-events#using-data-attributes). The tracked event must be passed along with the two dynamic data
properties `revenue` and `currency`. If a currency code (ISO 4217) is not recognized, the insight will default to `USD`.

### Tracker function

```js
umami.track('checkout-cart', { revenue: 19.99, currency: 'USD' });
```

When tracking events, the default properties are included in the payload.
This is equivalent to running:

```js
umami.track(props => ({
  ...props,
  name: 'checkout-cart',
  data: {
    revenue: 19.99,
    currency: 'USD',
  },
}));
```

### Data attributes

Please note that revenue must be passed as a string while using this method.

```html
<button
  id="signup-button"
  data-umami-event="checkout-cart"
  data-umami-event-revenue="19.99"
  data-umami-event-currency="USD"
>
  Checkout
</button>
```

## Parameters

* `Currency`: (required) The currency of the data to be aggregated.

## Create a insight

### Step 1: Choose a currency

<img alt="image" src={__img0} placeholder="blur" />

### Step 2: Run insight

<img alt="image" src={__img1} placeholder="blur" />


# Sessions (/docs/sessions)









The **Sessions** screen displays detailed information about your visitors.

## Visitor activity

Explore your most recent visitors and discover where they come from in a high-level summarized view.

<img alt="image" src={__img0} placeholder="blur" />

## Visitor profile

Clicking on any of the avatars in the activity table brings you to a new page showing details about a particular visitor. It also shows their activity history over time.

<img alt="image" src={__img1} placeholder="blur" />

## View session properties

Your custom data can be accessed under the **Properties** tab on the **Sessions** page.
This section will show you all the custom data properties you saved as well as a breakdown of all the values.
To save session properties see [Tracker configuration](/docs/tracker-functions#session-data).

<img alt="image" src={__img2} placeholder="blur" />

Individual session property data can be viewed at the profile level.

<img alt="image" src={__img3} placeholder="blur" />


# Tags (/docs/tags)





Use Umami tags to group events under a single website, gather data, and enable various functionalities.

## Use Cases

* A/B Testing: Test different versions of a webpage or campaign to see which performs better.
* Group events to allow filtering and insights under a single website overview.

## Usage

Add the **data-tag** property to the tracking script. This will include the **tag** column in the payload.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-tag="homepage-layout-a"
></script>
```

You can reuse the tracking script for different parts of your website, introducing additional tags.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-tag="homepage-layout-b"
></script>
```

## Filtering

From the website **Overview** you can filter on specific tags.

<img alt="image" src={__img0} placeholder="blur" />

A pageview breakdown can also be seen by clicking **More** from any of the metric cards.

<img alt="image" src={__img1} placeholder="blur" />


# Track events (/docs/track-events)





Besides pageviews, Umami is also able to track events that occur on your website. There are two ways to record
events in Umami, using the **data attributes** property or using **JavaScript**.

## Limits

* Event names are limited to 50 characters.
* Event data cannot be sent without an event name.

## Using data attributes

To enable events, simply add a special data property to the element you want to track.

For example, you might have a button with the following code:

```html
<button id="signup-button">Sign up</button>
```

Add a data property with the following format:

```html
data-umami-event="{event-name}"
```

So your button element would now look like this:

```html
<button id="signup-button" data-umami-event="Signup button">Sign up</button>
```

When the user clicks on this button, Umami will record an event named `Signup button`.

You can optionally pass along **event\_data** with the **data-umami-event-\*** annotation.

```text
data-umami-event="Signup button"
data-umami-event-email="bob@aol.com"
data-umami-event-id="123"
```

The additional properties will result in `{ email: 'bob@aol.com', id: '123' }` being recorded with the `Signup button` name.

### Notes

* All event data will be saved as a string using this method. If you want to save event data as numeric, dates, booleans, etc. use the JavaScript method below.
* Other event listeners inside the element will not be triggered.

## Using JavaScript

You can also record events manually using the `window.umami` object. To accomplish the same thing as the above
data-\* method, you can do:

```js
const button = document.getElementById('signup-button');

button.onclick = () => umami.track('Signup button');
```

In this case, Umami will record an event named `Signup button`.

If you want to record dynamic data, see [Tracker functions](/docs/tracker-functions).

## View events

Once your events are recorded, they will be available on your website **Events** page.

<img alt="image" src={__img0} placeholder="blur" />

## View event properties

Your custom data can be accessed under the **Properties** tab on the **Events** page.
This section will show you all the custom data properties you saved as well as a breakdown of all the values.

<img alt="image" src={__img1} placeholder="blur" />


# Tracker configuration (/docs/tracker-configuration)

The Umami tracker provides several properties that allow you to configure its behavior.

### data-host-url

By default, Umami will send data to wherever the script is located. You can override this to send data
to another location.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-host-url="http://stats.mywebsite.com"
></script>
```

### data-auto-track

By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and
track events yourself using the [tracker functions](/docs/tracker-functions).

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-auto-track="false"
></script>
```

### data-domains

If you want the tracker to only run on specific domains, you can add them to your tracker script. This is a comma delimited list of domain names. Each value matches against `window.location.hostname`, so you should double check if your website uses `www` or not. <br />
Helps if you are working in a staging/development environment. <br />

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-domains="mywebsite.com,www.mywebsite.com"
></script>
```

### data-tag

If you want the tracker to collect events under a specific tag. Events can be filtered in the dashboard by a specific tag.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-tag="umami-eu"
></script>
```

### data-exclude-search

If you don't want to collect search parameters from the URL.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-exclude-search="true"
></script>
```

### data-exclude-hash

If you don't want to collect the hash value from the URL.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-exclude-hash="true"
></script>
```

### data-do-not-track

Respect user's [Do Not Track](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack) browser setting.

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-do-not-track="true"
></script>
```

### data-before-send

Allows you to specify a function that will be called before data is sent.
You can then inspect and modify the payload or cancel the send entirely.
The function will take two parameters, type and payload.
To continue with sending, you return a payload object.
To cancel the send, return a false-y value.

```javascript
function beforeSendHandler(type, payload) {
  if (checkPayload(payload)) {
    return payload;
  }
  return false;
}
```

```html
<script
  defer
  src="http://mywebsite.com/umami.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
  data-before-send="beforeSendHandler"
></script>
```


# Tracker functions (/docs/tracker-functions)

The Umami tracker exposes a function that you can call on your website if you want
more control over your tracking. By default everything is automatically collected, but you can
disable this using `data-auto-track="false"` and sending the data yourself.
See [Tracker configuration](/docs/tracker-configuration).

## Functions

```js
// Tracks the current page
umami.track();

// Custom payload
umami.track(payload: object);

// Custom event
umami.track(event_name: string);

// Custom event with data
umami.track(event_name: string, data: object);

// Assign ID to current session
umami.identify(unique_id: string);

// Session data
umami.identify(unique_id: string, data: object);

// Session data without ID
umami.identify(data: object);
```

## Pageviews

Track a page view.

```js
umami.track();
```

By default the tracker automatically collects the following properties:

* `hostname`: Hostname of server
* `language`: Browser language
* `referrer`: Page referrer
* `screen`: Screen dimensions (eg. 1920x1080)
* `title`: Page title
* `url`: Page url
* `website`: Website ID (required)

If you wish to send your own custom payload, pass in an object to the function:

```js
umami.track({ website: 'e676c9b4-11e4-4ef1-a4d7-87001773e9f2', url: '/home', title: 'Home page' });
```

The above will only send the properties `website`, `url` and `title`. If you want to include existing properties, pass in a function:

```js
umami.track(props => ({ ...props, url: '/home', title: 'Home page' }));
```

## Events

Track an event with a given name.

```js
umami.track('signup-button');
```

## Event Data

Track an event with dynamic data.

```js
umami.track('signup-button', { name: 'newsletter', id: 123 });
```

When tracking events, the default properties are included in the payload.
This is equivalent to running:

```js
umami.track(props => ({
  ...props,
  name: 'signup-button',
  data: {
    name: 'newsletter',
    id: 123,
  },
}));
```

## Event Data Limits

Event Data can work with any JSON data. There are a few rules in place to maintain performance.

* Numbers have a max precision of 4.
* Strings have a max length of 500.
* Arrays are converted to a String, with the same max length of 500.
* Objects have a max of 50 properties. Arrays are considered 1 property.

## Sessions

Pass in your own ID to identify a user.

```js
umami.identify('unique_id');
```

## Session Data

Save data about the current session.

```js
umami.identify('unique_id', { name: 'Bob', email: 'bob@aol.com' });
```

To save data without a unique ID, pass in only a JSON object.

```js
umami.identify({ name: 'Bob', email: 'bob@aol.com' });
```


# Getting updates (/docs/updates)

## Source code

In order to get the latest updates, first pull the changes from the Git repository:

```shell
git pull
```

Then install any new or updated dependencies:

```shell
pnpm install
```

Rebuild the project:

```shell
pnpm build
```

Finally, start the application:

```shell
pnpm start
```

## Docker

For Docker, simply pull the latest image; with PostgreSQL support:

```shell
docker pull docker.umami.is/umami-software/umami:latest
```


# UTM (/docs/utm)



Umami UTM provides analytics on the performance of marketing campaigns by tracking the effectiveness of different marketing channels, such as social media, email, and advertising.

The insight works by breaking down the 5 standard UTM parameters: source, medium, campaign, term, and content into **Views**.

## Create a insight

### Step 1: Run insight

<img alt="image" src={__img0} placeholder="blur" />


# Enable Cloudflare headers (/docs/enable-cloudflare-headers)

If you are using Cloudflare for your website, Umami will use the headers Cloudflare sends
to determine the visitor's location information. However, by default Cloudflare only sends
data for the country. If you also want region and city information, then you will need to
configure Cloudflare to send additional headers.

## Steps

1. Log in to the Cloudflare dashboard and select your account and website.

2. Go to Rules > Settings.

3. Go to the Managed Transforms tab.

4. Enable the **Add visitor location headers** setting.

Then, you'll have to proxy [the following headers](https://github.com/umami-software/umami/blob/aaa1f9dc58feafe6af54248c5f0611112786fddf/src/lib/detect.ts#L14C2-L18C5) to Umami:

* `CF-IPCountry`
* `CF-RegionCode`
* `CF-IPCity`

For example, if you're using Nginx as a reverse proxy, you can add the following configuration:

```nginx
location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header CF-Connecting-IP $remote_addr;
    proxy_set_header CF-IPCountry $http_cf_ipcountry;
    proxy_set_header CF-RegionCode $http_cf_regioncode;
    proxy_set_header CF-IPCity $http_cf_ipcity;
    proxy_pass http://127.0.0.1:3000;
}
```


# Enable Redis (/docs/enable-redis)

Umami supports [Redis](https://redis.io/) as a caching layer for improved performance. For example, when
you send a request to the server, a website lookup must be done. The result can be cached in Redis for faster
lookups in the future.

Additionally, login authentication will be handled by Redis instead of using JWT tokens.

## Usage

To enable Redis, add a connection string as an environment variabled called `REDIS_URL`.

```dotenv
REDIS_URL=redis://username:password@your-redis-server:port
```


# Environment variables (/docs/environment-variables)

You can configure Umami with the use of environment variables. They go into the same `.env` file as your `DATABASE_URL`.

***

## Runtime variables

Runtime variables are recognized when Umami is running. You can set your environment variables prior to starting the application.

### APP\_SECRET

A unique value for your installation.

```
APP_SECRET = "random string"
```

### CLIENT\_IP\_HEADER

HTTP header to check for the client's IP address. This is useful when you're
behind a proxy that uses non-standard headers.

```
CLIENT_IP_HEADER = "header name"
```

### COLLECT\_API\_ENDPOINT

Allows you to send metrics to a location different than the default `/api/send`. This is to help you avoid some [ad blockers](/docs/bypass-ad-blockers).

```
COLLECT_API_ENDPOINT = "/my-custom-route"
```

### CORS\_MAX\_AGE

How many seconds a CORS preflight should last. Default is 24 hours.

```
CORS_MAX_AGE = 86400
```

### DATABASE\_URL

```
DATABASE_URL = "connection string"
```

Connection string for your database. This is the only required variable.

### DEBUG

Console logging for specific areas of the application. Values include `umami:auth`, `umami:clickhouse`, `umami:kafka`, `umami:middleware`, and `umami:prisma`.

```
DEBUG = "umami:*"
```

### DISABLE\_BOT\_CHECK

By default bots are excluded from statistics. This disables checking for bots.

```
DISABLE_BOT_CHECK = 1
```

### DISABLE\_LOGIN

Disables the login page for the application.

```
DISABLE_LOGIN = 1
```

### DISABLE\_UPDATES

Disables the check for new versions of Umami.

```
DISABLE_UPDATES = 1
```

### DISABLE\_TELEMETRY

Umami collects completely anonymous telemetry data in order help improve the application. You can choose to disable this if you don't want to participate.

```
DISABLE_TELEMETRY = 1
```

### ENABLE\_TEST\_CONSOLE

Enables the internal test page, `{host}/console`. Admin access is required. Users can manually fire pageviews and events to their websites.

```
ENABLE_TEST_CONSOLE = 1
```

### FAVICON\_URL

The URL of the service for displaying website icons.

```
FAVICON_URL = "service URL"
```

The default is `icons.duckduckgo.com`:

* [https://icons.duckduckgo.com/ip3/\{\{domain}}.ico](https://icons.duckduckgo.com/ip3/\{\{domain}}.ico)

Some alternatives you can use:

* [https://www.google.com/s2/favicons?domain=\{\{domain}}](https://www.google.com/s2/favicons?domain=\{\{domain}})
* [https://logo.clearbit.com/\{\{domain}}](https://logo.clearbit.com/\{\{domain}})

### GEO\_DATABASE\_URL

The URL for downloading the geo location database.

### HOSTNAME / PORT

If you are running on an environment which requires you to bind to a specific hostname or port, such as Heroku, you can add
these variables and start your app with `npm run start-env` instead of `npm start`.

```
HOSTNAME = "my.hostname.com"
PORT = 3000
```

### IGNORE\_IP

You can provide a comma-delimited list of IP addresses and ranges to exclude from data collection.

```
IGNORE_IP = "IP addresses or ranges"
```

### LOG\_QUERY

If you are running in development mode, this will log database queries to the console for debugging.

```
LOG_QUERY = 1
```

### PRIVATE\_MODE

Disables all external network calls. Note, this will also disable all website icons since they come from duckduckgo.com.

```
PRIVATE_MODE = 1
```

### REMOVE\_TRAILING\_SLASH

Removes the trailing slash from all incoming urls.

```
REMOVE_TRAILING_SLASH = 1
```

### TRACKER\_SCRIPT\_NAME

Allows you to assign a custom name to the tracker script different from the default `script.js`. This is to help you avoid some [ad blockers](/docs/bypass-ad-blockers).

The `.js` extension is not required. The value can also be any path you choose, for example `/path/to/tracker`.

```
TRACKER_SCRIPT_NAME = "custom-script-name.js"
```

***

## Build time variables

Build time variables are only recognized during the build process. This also includes building custom Docker images. You need to set your environment variables prior to building the application.

### ALLOWED\_FRAME\_URLS

A space-delimited list of urls allowed to host the application in an iframe.

```
ALLOWED_FRAME_URLS = "URLs"
```

### BASE\_PATH

If you want to host Umami under a subdirectory. You may need to update your reverse proxy settings to correctly handle the BASE\_PATH prefix.

```
BASE_PATH = "/custom"
```

### DATABASE\_TYPE

```
DATABASE_TYPE = "postgresql"
```

The type of DB to be used. This is only required for the Docker build.

### FORCE\_SSL

This will send a HTTP `Strict-Transport-Security` response header with all requests. See [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security).

```
FORCE_SSL = 1
```

### SKIP\_DB\_CHECK

Skips the `check-db` step in the build process. Used for Docker builds.

```
SKIP_DB_CHECK = 1
```

### SKIP\_DB\_MIGRATION

Skips the Prisma migration step in the build process. Setting `SKIP_DB_CHECK` also skips this step.

```
SKIP_DB_MIGRATION = 1
```


# Use Google Tag Manager (/docs/google-tag-manager)

The Umami tracker can be installed using Google Tag Manager.

Normally, you would install the Umami tracker by using the following code:

```html
<script
  defer
  src="http://mywebsite.com/script.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
></script>
```

However, Google Tag Manager will strip the attributes from the tracker. So you need to using the following code instead:

```javascript
<script>
  (function () {
  var el = document.createElement('script');
  el.setAttribute('src', 'http://mywebsite.com/script.js');
  el.setAttribute('data-website-id', '94db1cb1-74f4-4a40-ad6c-962362670409');
  document.body.appendChild(el);
})();
</script>
```


# Cohorts (/docs/cohorts)









Cohorts let you group users based on specific actions, like visiting a URL or triggering an event, within a selected date
range. This makes it easy to track and compare behavior patterns over time for different user groups,
helping you uncover trends and measure engagement more effectively.

## Add a cohort

Click on **Cohorts** from the side nav then click on the **Cohort** add button.

<img alt="image" src={__img0} placeholder="blur" />

Choose your filters and click **Save**.

<img alt="image" src={__img1} placeholder="blur" />

* Cohorts allow you to filter on date range and if a user visited a specific URL or triggered a specific event.
* To have a static cohort choose a **Custom Range** from the date picker so the users remain static.

## Applying a cohort

Add a filter and switch to the **Cohorts** tab. Click on a cohort and click on the **Apply** button.

<img alt="image" src={__img2} placeholder="blur" />

## Edit or Delete a cohort

From the **Cohorts** screen click on the **Edit** button to update a cohort or click on the **Delete** button to delete a cohort.

<img alt="image" src={__img3} placeholder="blur" />


# Filters (/docs/filters)

















Umami has built-in reporting to help you gain deeper insights into parts of your data. With universal filtering, you can apply conditions across all screens/reports for consistent analysis.
Segments let you group users based on shared attributes or behaviors. Cohorts take this further by analyzing groups of
users over time, helping you track retention, performance, and long-term trends.

## Available filters

* **Path** - URL path of the visited page.
* **Page Title** - The HTML title of the page as seen in the browser tab.
* **Referrer** - The source that directed the visitor to your site.
* **Browser** - The web browser used by the visitor (e.g., Chrome, Safari, Firefox).
* **OS** - The operating system of the visitor’s device (e.g., Windows, macOS, iOS, Android).
* **Device** - The type of device used, such as desktop, tablet, or mobile.
* **Country** - The visitor’s country based on geolocation.
* **Region** - The visitor’s state, province, or region.
* **City** - The visitor’s city location.
* **Hostname** - The domain where the page was accessed.
* **Tag** - A label or keyword you assign to your data.
* **Event** - Custom events triggered by users (e.g., button clicks, form submissions, video plays).

## Universal filtering

The date range and filters from the website page can now be applied to all screens and reports.

<img alt="image" src={__img0} placeholder="blur" />

<img alt="image" src={__img1} placeholder="blur" />

## Accessing filters

Log into Umami and click on **Websites** in the sidebar.

<img alt="image" src={__img2} placeholder="blur" />

Click on **View** for the website you want to view.

<img alt="image" src={__img3} placeholder="blur" />

The top of the screen will have date and field filters the can be applied across all screens.

<img alt="image" src={__img4} placeholder="blur" />

## Add a filter

**Method 1:** Click the **Filter** button to apply filters

<img alt="image" src={__img5} placeholder="blur" />

**Method 2:** Click on any row on the metrics cards in the overview screen.

<img alt="image" src={__img6} placeholder="blur" />

The current filters applied to each page can be seen at the top of the page.

<img alt="image" src={__img7} placeholder="blur" />


# Segments (/docs/segments)











Segments let you save commonly used filters in Umami, so you can quickly reapply them without setting criteria each time.
This makes it easy to analyze specific groups of users and track their behavior consistently over time.
It speeds up analysis and ensures your insights remain focused and repeatable.

## Add a segment

There are two methods to add a segment.

**Method 1:** Click on **Segments** from the side nav then click on the **Segment** add button.

<img alt="image" src={__img0} placeholder="blur" />

Choose your filters and click **Save**.

<img alt="image" src={__img1} placeholder="blur" />

**Method 2:** From the website **Overview** page select your filters then click **Save as segment**.

<img alt="image" src={__img2} placeholder="blur" />

## Applying a segment

Add a filter and switch to the **Segments** tab. Click on a segment and click on the **Apply** button.

<img alt="image" src={__img3} placeholder="blur" />

## Edit or Delete a segment

From the **Segments** screen click on the **Edit** button to update a segment or click on the **Delete** button to delete a segment.

<img alt="image" src={__img4} placeholder="blur" />


# Bypass ad blockers (/docs/bypass-ad-blockers)

Even though Umami is a privacy-focused product, it may still get blocked by
certain ad blockers. Ad blockers use blocklists maintained by many different people.
Some lists can be overly agressive, for example blocking anything with even
the word `analytics` in it or simply blocking all tracking products regardless
of how they operate.

Here are few methods you can use to avoid ad blockers.

## Proxying

Proxying is done at the server level so you will need access to your web server to make changes.
With this method, you can proxy the tracking script itself to hide the actual name and location of
the original script.

For example, you can have a script on your website that is:

`https://your-website.com/script.js`

That is proxying the file at:

`https://cloud.umami.is/script.js`

So even if the ad blocker blocks the `cloud.umami.is` domain, your own domain would be safe.

Here are some tutorials you can use:

* [Nginx](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
* [Apache](https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html)

To implement this using server-side, what you can do is make a separate endpoint.
For instance, in [Express.js](https://expressjs.com):

```js
app.get("/stats.js", async (req, res) => {
    const scriptText = await fetch("https://cloud.umami.is/script.js");
    res.send(await scriptText.text())
});
```

Then in your html head tag:

```html
<script defer src="/stats.js" data-website-id="..."></script>
```

If you are using a framework like [Next.js](https://nextjs.org), you can use their [rewrites](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites) feature.

## Hosting the tracker script

If you don't have access to the web server and are unable to proxy the script, you can simply host the entire
tracker script on your own domain.

1. Open the the script URL in your browser, `https://cloud.umami.is/script.js`.
2. Save the file.
3. Upload the file to your domain.
4. Set the `data-host-url` attribute to send data to the correct location. See [tracker configuration.](https://umami.is/docs/tracker-configuration)

Note that this method is not as reliable as proxying and if the tracker script were to change, you would need
to download and update the script again.

## Using environment variables (self-hosting)

If you are self-hosting Umami, you can configure your instance using [environment variables](/docs/environment-variables).

There are two sources that could potentially be blocked:

1. The tracker script at `https://your-umami.com/script.js`
2. The stats collection endpoint at `https://your-umami.com/api/send`.

The [`TRACKER_SCRIPT_NAME`](/docs/environment-variables#tracker_script_name) variable can be used to rename your tracker script to
something like `x.js`. You would then change your script source to `https://your-umami.com/x.js`.

The [`COLLECT_API_ENDPOINT`](/docs/environment-variables#collect_api_endpoint) variable can be used to rename your endpoint to something
like `/api/x`. The tracker script will automatically make calls to your custom endpoint name
instead of `/api/send`.


# Exclude my own visits (/docs/exclude-my-own-visits)

You want to visit your own website, but you don't want your visits to appear in
your stats. To accomplish this, you need to add a setting to your browser.

Bring up the developer console in your browser: `Settings -> More tools -> Developer tools`

In the console, enter the following code and hit `Enter`:

```javascript
localStorage.setItem('umami.disabled', 1);
```

This setting applies **per website**, so you will need to do this for each website
you want to be excluded from.

To remove the setting, enter the following code and hit `Enter`:

```javascript
localStorage.removeItem('umami.disabled');
```


# Track outbound links (/docs/track-outbound-links)

When a user clicks on a link to an external site, this event is normally not captured because
the user is leaving the site where Umami runs. However, using [events](/docs/track-events) you can
track this behavior.

To track outbound links, you need to add data attributes to the anchor tag containing the external link.
When the tag is clicked, the event will be triggered. In this example, we are sending
an event named `outbound-link-click` with the value of `url` set to the external URL.

```html
<a href="https://www.external-website.com"
  data-umami-event="outbound-link-click"
  data-umami-event-url="https://www.external-website.com"
>
  External link
</a>
```

If you don't want to manually update all you anchor tags, you can use this script to automatically add the
event attributes to all your outbound tags. You can place the following script at the bottom of your HTML body.

```html
<script type="text/javascript">
  (() => {
    const name = 'outbound-link-click';
    document.querySelectorAll('a').forEach(a => {
      if (a.host !== window.location.host && !a.getAttribute('data-umami-event')) {
        a.setAttribute('data-umami-event', name);
        a.setAttribute('data-umami-event-url', a.href);
      }
    });
  })();
</script>
```


# Add a website (/docs/add-a-website)







Log into Umami and click on **Websites** in the sidebar.

<img alt="image" src={__img0} placeholder="blur" />

Click on the **Add website** button in the top-right corner.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

The **Name** field can be whatever you want. Usually it's the same as the domain name.

The **Domain** field is the actual domain of your website. It is used to filter out your own website
from the list of referrers in your metrics.


# Collect data (/docs/collect-data)





To start collecting data, you need to install the tracker script to your website.

To get your tracking code, click on the **Edit** button for the website you want to track.

<img alt="image" src={__img0} placeholder="blur" />

The tracking code can be found under the **Tracking code** section.

Copy the code and insert it into the `<head>` section of your website.

<img alt="image" src={__img1} placeholder="blur" />

Then visit your website and data should immediately appear in your Umami dashboard.

### Troubleshooting

* If your site was built with [Next.js](https://nextjs.org/), insert the above code block using the [next/script](https://nextjs.org/docs/app/api-reference/components/script) component.


# Enable Share URL (/docs/enable-share-url)











By default a website's metrics can only be seen by the account owner. But you can choose to make the stats available either through a public **Share URL** or through a **Team**.

## Share URL

There are two methods to share a URL.

**Method 1:** Log into Umami and click on **Websites** in the sidebar.

<img alt="image" src={__img0} placeholder="blur" />

Click on the **Edit** button for the website you want to edit.

<img alt="image" src={__img1} placeholder="blur" />

Navigate to the **Share URL** section and toggle on the Share URL.

<img alt="image" src={__img2} placeholder="blur" />

The form that pops up will show you the URL.

<img alt="image" src={__img3} placeholder="blur" />

You can generate a new unique share URL hash by clicking the **Regenerate** button and saving.

**Method 2:** Alternatively you can share a URL from the website **Overview** page.

<img alt="image" src={__img4} placeholder="blur" />


# Login (/docs/login)







Your Umami installation will create a default administrator account with the username **admin** and the password **umami**.

The first thing you will want to do is log in and change your password.

<img alt="image" src={__img0} placeholder="blur" />

Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img1} placeholder="blur" />

Then navigate to **Profile** and click the **Change password** button.

<img alt="image" src={__img2} placeholder="blur" />


# Admin (/docs/api/admin)

Operations around admin management.

These endpoints are only available for self-hosted instances for **admin** users and not **Umami Cloud**.

**Endpoints**

```text

GET /api/admin/users
GET /api/admin/websites
GET /api/admin/teams
```

***

## GET /api/admin/users

Returns all users.

**Parameters**

* `search`: (string | optional) Search text.
* `page`: (number | optional, default 1) Determines page.
* `pageSize`: (number | optional, default 20) Determines how many results to return.

  **Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "username": "member",
      "role": "user",
      "logoUrl": null,
      "displayName": null,
      "createdAt": "2025-10-10T23:09:16.524Z",
      "updatedAt": "2025-10-10T23:09:16.524Z",
      "deletedAt": null,
      "_count": {
        "websites": 0
      }
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "username": "admin",
      "role": "admin",
      "logoUrl": null,
      "displayName": null,
      "createdAt": "2025-09-15T17:47:16.421Z",
      "updatedAt": null,
      "deletedAt": null,
      "_count": {
        "websites": 1
      }
    }
  ],
  "count": 2,
  "page": 1,
  "pageSize": 20,
  "orderBy": "createdAt"
}
```

***

## GET /api/admin/websites

Returns all websites.

**Parameters**

* `search`: (string | optional) Search text.
* `page`: (number | optional, default 1) Determines page.
* `pageSize`: (number | optional, default 20) Determines how many results to return.

  **Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "My Website",
      "domain": "mywebsite.com",
      "shareId": null,
      "resetAt": null,
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2025-09-16T19:59:32.957Z",
      "updatedAt": "2025-09-16T19:59:32.957Z",
      "deletedAt": null,
      "user": {
        "username": "admin",
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      },
      "team": null
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/admin/teams

Returns all teams.

**Parameters**

* `search`: (string | optional) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (number | optional, default 20) Determines how many results to return.

  **Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Umami Software, Inc",
      "accessCode": "xxxxxxxxxxxxxx",
      "logoUrl": null,
      "createdAt": "2025-09-24T22:08:35.259Z",
      "updatedAt": "2025-09-24T22:08:35.259Z",
      "deletedAt": null,
      "members": [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-owner",
          "createdAt": "2025-09-24T22:08:35.302Z",
          "updatedAt": "2025-09-24T22:08:35.302Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "admin"
          }
        },
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-member",
          "createdAt": "2025-10-10T23:41:09.030Z",
          "updatedAt": "2025-10-10T23:41:09.030Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "member"
          }
        }
      ],
      "_count": {
        "websites": 1,
        "members": 2
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```


# API client (/docs/api/api-client)

## Overview

Umami API Client is built in TypeScript and contains functions to call every API endpoint available in Umami.

## Requirements

* [Node.js](https://nodejs.org/) version 18.18 or newer

## Installation

```shell
npm install @umami/api-client
```

## Configure

The following environment variables are required to call your own API.

```dotenv
UMAMI_API_CLIENT_USER_ID
UMAMI_API_CLIENT_SECRET
UMAMI_API_CLIENT_ENDPOINT
```

To access Umami Cloud, these environment variables are required.

```dotenv
UMAMI_API_KEY
UMAMI_API_CLIENT_ENDPOINT
```

More details on accessing Umami Cloud can be found under [API key](/docs/cloud/api-key).

## Usage

Import the configured api-client and query using the available class methods.

```js
import { getClient } from '@umami/api-client';

const client = getClient();

const { ok, data, status, error } = await client.getWebsites();
```

The result will come back in the following format.

```typescript
{
  ok: boolean;
  status: number;
  data?: T;
  error?: any;
}
```

## API Client function mapping

### Me

```text
getMe() ⇒ GET /me
updateMyPassword(data) ⇒ POST /me/password
getMyWebsites() ⇒ GET /me/websites
```

### Users

```text
getUsers() ⇒ GET /users
createUser(data) ⇒ POST /users
getUser(id) ⇒ GET /users/{id}
updateUser(id, data) ⇒ POST /users/{id}
deleteUser(id) ⇒ DEL /users/{id}
getUserWebsites(id) ⇒ GET /users/{id}/websites
getUserUsage(id, data) ⇒ GET /users/{id}/usage
```

### Teams

```text
getTeams() ⇒ GET /teams
createTeam(data) ⇒ POST /teams
joinTeam(data) ⇒ POST /teams/join
getTeam(id) ⇒ GET /teams/{id}
updateTeam(id) ⇒ POST /teams/{id}
deleteTeam(id) ⇒ DEL /teams/{id}
getTeamUsers(id) ⇒ GET /teams/{id}/users
deleteTeamUser(teamId, userId): DEL /teams/{teamId}/users/{userId}
getTeamWebsites(id) ⇒ GET /teams/{id}/websites
createTeamWebsites(id, data) ⇒ GET /teams/{id}/websites
deleteTeamWebsite(teamId, websiteId) ⇒ DEL /teams/{teamId}/websites/{websiteId}
```

### Websites

```text
getWebsites() ⇒ GET /websites
createWebsite(data) ⇒ POST /websites
getWebsite(id) ⇒ GET /websites/{id}
updateWebsite(id, data) ⇒ POST /websites/{id}
deleteWebsite(id) ⇒ DEL /websites/{id}
getWebsiteActive(id) ⇒ GET /websites/{id}/active
getWebsiteEvents(id, data) ⇒ GET /websites/{id}/events
getWebsiteMetrics(id, data) ⇒ GET /websites/{id}/metrics
getWebsitePageviews(id, data) ⇒ GET /websites/{id}/pageviews
resetWebsite(id) ⇒ GET /websites/{id}/reset
getWebsiteStats(id, data) ⇒ GET /websites/{id}/stats
```

### Event Data

```text
getEventDataEvents(id, data) ⇒ GET /event-data/events
getEventDataFields(id, data) ⇒ GET /event-data/fields
getEventDataStats(id, data) ⇒ GET /event-data/stats
```

## Environment Variables

**UMAMI\_API\_CLIENT\_USER\_ID = \<user uuid>**

The `USER_ID` of the User performing the API calls. Permission restrictions will apply based on application settings.

**UMAMI\_API\_CLIENT\_SECRET = \<random string>**

A random string used to generate unique values. This needs to match the `APP_SECRET` used in the Umami application.

**UMAMI\_API\_CLIENT\_ENDPOINT = \<API endpoint>**

The endpoint of your Umami API. Example: `https://{yourserver}/api/`

**UMAMI\_API\_KEY = \<API Key string>**

A unique string provided by Umami Cloud.


# Authentication (/docs/api/authentication)

The following authentication method is only for self-hosted Umami. For **Umami Cloud**, you simply
need to generate an [API key](/docs/cloud/api-key).

## POST /api/auth/login

First you need to get a *token* in order to make API requests. You need to make a
`POST` request to the `/api/auth/login` endpoint with the following data:

```json
{
  "username": "your-username",
  "password": "your-password"
}
```

If successful you should get a response like the following:

```json
{
  "token": "eyTMjU2IiwiY...4Q0JDLUhWxnIjoiUE_A",
  "user": {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "username": "admin",
    "role": "admin",
    "createdAt": "2000-00-00T00:00:00.000Z",
    "isAdmin": true
  }
}
```

Save the token value and send an `Authorization` header with all your data requests with the value `Bearer <token>`. Your request header should look something like this:

```http request
Authorization: Bearer eyTMjU2IiwiY...4Q0JDLUhWxnIjoiUE_A
```

For example, with `curl` it would look like this:

```shell
curl https://{yourserver}/api/websites
   -H "Accept: application/json"
   -H "Authorization: Bearer <token>"
```

The authorization token is expected with every API call that requires permissions.

***

## POST /api/auth/verify

You can verify if the token is still valid.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "username": "admin",
  "role": "admin",
  "createdAt": "2000-00-00T00:00:00.000Z",
  "isAdmin": true,
  "teams": []
}
```


# Events (/docs/api/events)

Operations around Events and Event data.

**Endpoints**

```text
GET /api/websites/:websiteId/events
GET /api/websites/:websiteId/event-data/:eventId
GET /api/websites/:websiteId/event-data/events
GET /api/websites/:websiteId/event-data/fields
GET /api/websites/:websiteId/event-data/properties
GET /api/websites/:websiteId/event-data/values
GET /api/websites/:websiteId/event-data/stats
```

***

## Filters

All Endpoints marked with `filters` can now be filtered with the parameters below.

**Parameters**

* `path`: (string | optional) Name of URL.
* `referrer`: (string | optional) Name of referrer.
* `title`: (string | optional) Name of page title.
* `query`: (string | optional) Name of query parameter.
* `browser`: (string | optional) Name of browser.
* `os`: (string | optional) Name of operating system.
* `device`: (string | optional) Name of device (ex. Mobile)
* `country`: (string | optional) Name of country.
* `region`: (string | optional) Name of region/state/province.
* `city`: (string | optional) Name of city.
* `hostname`: (string | optional) Name of hostname.
* `tag`: (string | optional) Name of tag.
* `segment`: (uuid | optional) UUID of segment.
* `cohort`: (uuid | optional) UUID of cohort.

***

## GET /api/websites/:websiteId/events

Gets website event details within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `search`: (string | optional) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (number | optional, default 20) Determines how many results to return.
* `filters`: Can accept filter parameters.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2025-10-15T16:26:28Z",
      "hostname": "umami.is",
      "urlPath": "/docs/api",
      "urlQuery": "",
      "referrerPath": "",
      "referrerQuery": "",
      "referrerDomain": "",
      "country": "US",
      "city": "Scott",
      "device": "desktop",
      "os": "Mac OS",
      "browser": "chrome",
      "pageTitle": "API – Docs - Umami",
      "eventType": 1,
      "eventName": "",
      "hasData": 0
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2025-10-15T16:26:23Z",
      "hostname": "umami.is",
      "urlPath": "/docs/sessions",
      "urlQuery": "",
      "referrerPath": "/docs/distinct-ids",
      "referrerQuery": "",
      "referrerDomain": "umami.is",
      "country": "PL",
      "city": "Warsaw",
      "device": "desktop",
      "os": "Mac OS",
      "browser": "chrome",
      "pageTitle": "Sessions – Docs - Umami",
      "eventType": 2,
      "eventName": "login-button-header",
      "hasData": 0
    }
  ],
  "count": 2,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/websites/:websiteId/event-data/:eventId

Gets event-data for a individual event

**Sample response**

```json
[
  {
    "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "eventId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "urlPath": "/",
    "eventName": "revenue-demo",
    "dataKey": "currency",
    "stringValue": "USD",
    "numberValue": null,
    "dateValue": null,
    "dataType": 1,
    "createdAt": "2025-10-10T12:31:03Z"
  },
  {
    "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "eventId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "urlPath": "/",
    "eventName": "revenue-demo",
    "dataKey": "revenue",
    "stringValue": "40.0000",
    "numberValue": 40,
    "dateValue": null,
    "dataType": 2,
    "createdAt": "2025-10-10T12:31:03Z"
  }
]
```

***

## GET /api/websites/:websiteId/event-data/events

Gets event data names, properties, and counts

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `event`: (string | optional) Event name filter.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "eventName": "button-click",
    "propertyName": "id",
    "dataType": 1,
    "total": 4
  },
  {
    "eventName": "button-click",
    "propertyName": "name",
    "dataType": 1,
    "total": 4
  },
  {
    "eventName": "track-product",
    "propertyName": "price",
    "dataType": 2,
    "total": 2
  }
]
```

***

## GET /api/websites/:websiteId/event-data/fields

Gets event data property and value counts within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "propertyName": "age",
    "dataType": 2,
    "value": "33",
    "total": 1
  },
  {
    "propertyName": "age",
    "dataType": 2,
    "value": "31",
    "total": 4
  },
  {
    "propertyName": "gender",
    "dataType": 1,
    "value": "female",
    "total": 4
  },
  {
    "propertyName": "gender",
    "dataType": 1,
    "value": "male",
    "total": 1
  }
]
```

***

## GET /api/websites/:websiteId/event-data/properties

Gets event name and property counts for a website.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "eventName": "revenue-demo",
    "propertyName": "revenue",
    "total": 122
  },
  {
    "eventName": "revenue-demo",
    "propertyName": "currency",
    "total": 122
  }
]
```

***

## GET /api/websites/:websiteId/event-data/values

Gets event data counts for a given event and property

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `event`: (string) Event name.
* `propertyName`: (string) Property name.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "value": "Male",
    "total": 28
  },
  {
    "value": "Female",
    "total": 26
  }
]
```

***

## GET /api/websites/:websiteId/event-data/stats

Gets aggregated website events, properties, and records within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "events": 16,
    "properties": 13,
    "records": 26
  }
]
```


# Overview (/docs/api)

Umami allows you to pull data directly by calling the application's API endpoints.
Any operation you can do through the application is available in the API. All data is returned in JSON format.

### Self-hosting

When self-hosting, the API endpoints are available at `http://<your-umami-instance>/api`. You would first need
to [authenticate](/docs/api/authentication) before making calls.

### Umami Cloud

If using Umami Cloud, you would make calls to `https://api.umami.is` using an [API key](/docs/cloud/api-key).


# Links (/docs/api/links)

Operations around Links management.

**Endpoints**

```text
GET /api/links
GET /api/links/:linkId
POST /api/links/:linkId
DELETE /api/links/:linkId
```

***

## GET /api/links

Returns all user links.

**Parameters**

* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "umami",
      "url": "https://www.umami.is",
      "slug": "xxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdAt": "2025-10-27T18:49:39.383Z",
      "updatedAt": "2025-10-27T18:49:39.383Z",
      "deletedAt": null
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/links/:linkId

Gets a link by ID.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "umami",
  "url": "https://www.umami.is",
  "slug": "xxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdAt": "2025-10-27T18:49:39.383Z",
  "updatedAt": "2025-10-27T18:49:39.383Z",
  "deletedAt": null
}
```

***

## POST /api/links/:linkId

Updates a link.

**Parameters**

* `name`: (optional string) The link's name.
* `url`: (optional string) The link's destination URL.
* `slug`: (optional string | minimum 8 char) The link's URL slug.

**Request body**

```json
{
  "name": "umami",
  "url": "https://www.umami.is"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "umami",
  "url": "https://www.umami.is",
  "slug": "xxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdAt": "2025-10-27T18:49:39.383Z",
  "updatedAt": "2025-10-30T23:06:01.824Z",
  "deletedAt": null
}
```

***

## DELETE /api/links/:linkId

Deletes a link.

**Sample response**

```json
{
  "ok": true
}
```


# Me (/docs/api/me)

All information about your session.

**Endpoints**

```text
GET /api/me
GET /api/me/teams
GET /api/me/websites
```

***

## GET /api/me

Get information based on your auth token.

**Sample response**

```json
{
  "token": "xxxxxxxxxxxxxxx",
  "authKey": "auth:xxxxxxxxxxxxxxx",
  "shareToken": null,
  "user": {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "username": "member",
    "role": "user",
    "createdAt": "2025-10-08T18:03:19.823Z",
    "isAdmin": false
  }
}
```

\---S

## GET /api/me/teams

Get all your teams.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Umami Software, Inc",
      "accessCode": "xxxxxxxx",
      "logoUrl": null,
      "createdAt": "2025-09-24T22:08:35.259Z",
      "updatedAt": "2025-09-24T22:08:35.259Z",
      "deletedAt": null,
      "members": [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-owner",
          "createdAt": "2025-09-24T22:08:35.302Z",
          "updatedAt": "2025-09-24T22:08:35.302Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "admin"
          }
        }
      ],
      "_count": {
        "websites": 0,
        "members": 1
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## /api/me/websites

Get all your websites.

**Parameters**

* `includeTeams`: (boolean) Set to true if you want to include websites where you are the team owner.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "My Website",
      "domain": "mywebsite.com",
      "shareId": null,
      "resetAt": null,
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2025-09-16T19:59:32.957Z",
      "updatedAt": "2025-09-16T19:59:32.957Z",
      "deletedAt": null,
      "user": {
        "username": "admin",
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```


# Node Client (/docs/api/node-client)

## Overview

The Umami node client allows you to send data to Umami on the server side.

## Installation

```shell
npm install @umami/node
```

## Usage

```js
import umami from '@umami/node';

umami.init({
  websiteId: '50429a93-8479-4073-be80-d5d29c09c2ec', // Your website id
  hostUrl: 'https://umami.mywebsite.com', // URL to your Umami instance
});

umami.track({ url: '/home' });
```

If using Umami Cloud, you can use `https://cloud.umami.is` as the host URL.

The properties you can send using the `.track` function are:

* **hostname**: Hostname of server
* **language**: Client language (eg. en-US)
* **referrer**: Page referrer
* **screen**: Screen dimensions (eg. 1920x1080)
* **title**: Page title
* **url**: Page url
* **name**: Event name (for custom events)
* **data**: Event data properties


# Pixels (/docs/api/pixels)

Operations around Pixels management.

**Endpoints**

```text
GET /api/pixels
GET /api/pixels/:pixelId
POST /api/pixels/:pixelId
DELETE /api/pixels/:pixelId
```

***

## GET /api/pixels

Returns all user pixels.

**Parameters**

* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Umami Pixel",
      "slug": "xxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdAt": "2025-10-27T18:50:54.079Z",
      "updatedAt": "2025-10-27T18:50:54.079Z",
      "deletedAt": null
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/pixels/:pixelId

Gets a pixel by ID.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Umami Pixel",
  "slug": "xxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdAt": "2025-10-27T18:50:54.079Z",
  "updatedAt": "2025-10-27T18:50:54.079Z",
  "deletedAt": null
}
```

***

## POST /api/pixels/:pixelId

Updates a pixel.

**Parameters**

* `name`: (optional string) The pixel's name.
* `slug`: (optional string | minimum 8 char) The link's URL slug.

**Request body**

```json
{
  "name": "Umami Pixel",
  "slug": "abcde123"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Umami Pixel",
  "slug": "abcde123",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdAt": "2025-10-27T18:50:54.079Z",
  "updatedAt": "2025-10-30T23:11:18.627Z",
  "deletedAt": null
}
```

***

## DELETE /api/pixels/:pixelId

Deletes a pixel.

**Sample response**

```json
{
  "ok": true
}
```


# Realtime (/docs/api/realtime)

Realtime data for your website.

**Endpoints**

```text
GET /api/realtime/:websiteId
```

***

## GET /api/realtime/:websiteId

Realtime stats within the last 30 minutes.

**Sample response**

```json
{
  "countries": {
    "US": 9,
    "FI": 3,
    "IN": 3,
    "VN": 1,
    "CA": 3,
    "TR": 1
  },
  "urls": {
    "/about": 1,
    "/blog": 4,
    "/blog/what-is-coming-in-umami-v3": 2,
    "/": 43,
    "/pricing": 6,
    "/docs": 4
  },
  "referrers": {
    "umami.is": 31,
    "google.com": 9,
    "analytics.quickcv.io": 1,
    "blog.vrecruiters.in": 2
  },
  "events": [
    {
      "__type": "pageview",
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "eventName": "",
      "createdAt": "2025-10-22T00:15:29Z",
      "browser": "chrome",
      "os": "Mac OS",
      "device": "desktop",
      "country": "US",
      "urlPath": "/docs/attribution",
      "referrerDomain": "umami.is"
    },
    {
      "__type": "pageview",
      "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "eventName": "",
      "createdAt": "2025-10-22T00:15:17Z",
      "browser": "chrome",
      "os": "Mac OS",
      "device": "desktop",
      "country": "US",
      "urlPath": "/docs/pixels",
      "referrerDomain": "umami.is"
    }
  ],
  "series": {
    "views": [
      {
        "x": "2025-10-21T23:45:00Z",
        "y": 5
      },
      {
        "x": "2025-10-21T23:46:00Z",
        "y": 7
      }
    ],
    "visitors": [
      {
        "x": "2025-10-21T23:45:00Z",
        "y": 3
      },
      {
        "x": "2025-10-21T23:46:00Z",
        "y": 1
      }
    ]
  },
  "totals": {
    "views": 69,
    "visitors": 42,
    "events": 12,
    "countries": 15
  },
  "timestamp": 1761092151944
}
```


# Reports (/docs/api/reports)

Using reports throught the api.

**Endpoints**

```text
GET /api/reports
POST /api/reports
GET /api/reports/:reportId
POST /api/reports/:reportId
DELETE /api/reports/:reportId
POST /api/reports/attribution
POST /api/reports/breakdown
POST /api/reports/funnel
POST /api/reports/goals
POST /api/reports/journey
POST /api/reports/retention
POST /api/reports/revenue
POST /api/reports/utm
```

***

## Filters

All reports can now be filtered with the filters property in the request body.

**Parameters**

* `path`: (string | optional) Name of URL.
* `referrer`: (string | optional) Name of referrer.
* `title`: (string | optional) Name of page title.
* `query`: (string | optional) Name of query parameter.
* `browser`: (string | optional) Name of browser.
* `os`: (string | optional) Name of operating system.
* `device`: (string | optional) Name of device (ex. Mobile)
* `country`: (string | optional) Name of country.
* `region`: (string | optional) Name of region/state/province.
* `city`: (string | optional) Name of city.
* `hostname`: (string | optional) Name of hostname.
* `tag`: (string | optional) Name of tag.
* `segment`: (uuid | optional) UUID of segment.
* `cohort`: (uuid | optional) UUID of cohort.

**Request body**

```json
{
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "attribution",
  "filters": { "os": "Mac OS", "device": "desktop" },
  "parameters": {
    "startDate": "2025-10-19T07:00:00.000Z",
    "endDate": "2025-10-26T06:59:59.999Z",
    "timezone": "America/Los_Angeles",
    "model": "first-click",
    "type": "path",
    "step": "/"
  }
}
```

***

## GET /api/reports

Get all reports by website ID.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "type": "goal",
      "name": "Visited /pricing",
      "description": "Test",
      "parameters": {
        "type": "path",
        "value": "/pricing"
      },
      "createdAt": "2025-07-23T17:28:55.192Z",
      "updatedAt": "2025-10-07T07:46:57.918Z"
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "type": "goal",
      "name": "Triggered live-demo-button",
      "description": "",
      "parameters": {
        "type": "event",
        "value": "live-demo-button"
      },
      "createdAt": "2025-10-07T07:46:24.120Z",
      "updatedAt": "2025-10-07T07:46:24.120Z"
    }
  ],
  "count": 2,
  "page": 1,
  "pageSize": 20
}
```

***

## POST /api/reports

Creates a report.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type `attribution` | `breakdown` | `funnel` | `goal` | `journey` | `retention` | `revenue` | `utm`.
* `name`: (string) Name of report.
* `description`: (string | optional) Description of report.
* `parameters`: (object) Parameters for report.

**Request body**

```json
{
  "name": "Triggered Login-button ",
  "parameters": { "type": "event", "value": "login-button-header" },
  "type": "goal",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "goal",
  "name": "Triggered Login-button ",
  "description": "",
  "parameters": {
    "type": "event",
    "value": "login-button-header"
  },
  "createdAt": "2025-10-14T00:12:33.203Z",
  "updatedAt": "2025-10-14T00:12:33.203Z"
}
```

***

## GET /api/reports/:reportId

Gets a report by ID.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "goal",
  "name": "Triggered Login-button ",
  "description": "",
  "parameters": {
    "type": "event",
    "value": "login-button-header"
  },
  "createdAt": "2025-10-14T00:12:33.203Z",
  "updatedAt": "2025-10-14T00:12:33.203Z"
}
```

***

## POST /api/reports/:reportId

Updates a report.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type `attribution` | `breakdown` | `funnel` | `goal` | `journey` | `retention` | `revenue` | `utm`.
* `name`: (string) Name of report.
* `description`: (string | optional) Description of report.
* `parameters`: (object) Parameters for report.

**Request body**

```json
{
  "name": "Triggered Login-button ",
  "parameters": { "type": "event", "value": "login-button-header" },
  "type": "goal",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "goal",
  "name": "Triggered Login-button ",
  "description": "",
  "parameters": {
    "type": "event",
    "value": "login-button-header"
  },
  "createdAt": "2025-10-14T00:12:33.203Z",
  "updatedAt": "2025-10-14T00:12:33.203Z"
}
```

***

## DELETE /api/reports/:reportId

Deletes a report.

**Sample response**

```json
{
  "ok": true
}
```

***

## POST /api/reports/attribution

See how users engage with your marketing and what drives conversions.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `model` : (string) Attribution model (`firstClick` | `lastClick`).
* `type` : (array) Conversion type (`path` | `event`).
* `step`: (string) Conversion step

**Request body**

```json
{
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "attribution",
  "filters": { "os": "Mac OS" },
  "parameters": {
    "startDate": "2025-10-19T07:00:00.000Z",
    "endDate": "2025-10-26T06:59:59.999Z",
    "model": "first-click",
    "type": "path",
    "step": "/"
  }
}
```

**Sample response**

```json
{
  "referrer": [
    {
      "name": "google.com",
      "value": 30082
    },
    {
      "name": "chatgpt.com",
      "value": 1672
    }
  ],
  "paidAds": [
    {
      "name": "Facebook / Meta",
      "value": 106
    },
    {
      "name": "Google Ads",
      "value": 6
    }
  ],
  "utm_source": [
    {
      "name": "coolify.io",
      "value": 465
    },
    {
      "name": "chatgpt.com",
      "value": 338
    }
  ],
  "utm_medium": [
    {
      "name": "referral",
      "value": 75
    },
    {
      "name": "email",
      "value": 16
    }
  ],
  "utm_campaign": [
    {
      "name": "navigation",
      "value": 60
    },
    {
      "name": "website_analytics",
      "value": 8
    }
  ],
  "utm_content": [
    {
      "name": "comparison-page",
      "value": 1
    },
    {
      "name": "sidebar-cta",
      "value": 1
    }
  ],
  "utm_term": [
    {
      "name": "data analysis",
      "value": 1
    },
    {
      "name": "0_df65b6d7c8-e2c14ebdc7-59136105",
      "value": 1
    }
  ],
  "total": {
    "pageviews": 171481,
    "visitors": 104727,
    "visits": 138391
  }
}
```

***

## POST /api/reports/breakdown

Dive deeper into your data by using segments and filters.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `fields`: (array) List of column fields.

**Available Fields**

`path` | `title` | `query` | `referrer` | `browser` | `os` | `device` | `country` | `region` | `city` | `hostname`| `tag` | `event`

**Request body**

```json
{
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "breakdown",
  "filters": {},
  "parameters": {
    "startDate": "2025-07-23T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z",
    "fields": ["os", "country"]
  }
}
```

**Sample response**

```json
[
  {
    "views": 37856,
    "visitors": 9229,
    "visits": 13145,
    "bounces": 8105,
    "totaltime": 12985151,
    "os": "Mac OS",
    "country": "US"
  },
  {
    "views": 24399,
    "visitors": 6628,
    "visits": 10673,
    "bounces": 7119,
    "totaltime": 21398417,
    "os": "Windows 10",
    "country": "US"
  },
  {
    "views": 21561,
    "visitors": 4916,
    "visits": 6532,
    "bounces": 3452,
    "totaltime": 22984512,
    "os": "Mac OS",
    "country": "DE"
  },
  {
    "views": 12977,
    "visitors": 2976,
    "visits": 4180,
    "bounces": 2440,
    "totaltime": 9962317,
    "os": "Windows 10",
    "country": "DE"
  }
]
```

***

## POST /api/reports/funnel

Understand the conversion and drop-off rate of users.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `steps` : (array | Minumum two required) type of event (`path` | `event`) and conversion step.
* `window` : (number) Window of days between funnel steps to be considered a conversion.

**Request body**

```json
{
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "funnel",
  "filters": {},
  "parameters": {
    "startDate": "2025-07-23T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z",
    "steps": [
      { "type": "path", "value": "/" },
      { "type": "event", "value": "live-demo-button" }
    ],
    "window": 60
  }
}
```

**Sample response**

```json
[
  {
    "type": "path",
    "value": "/",
    "visitors": 106594,
    "previous": 0,
    "dropped": 0,
    "dropoff": null,
    "remaining": 1
  },
  {
    "type": "event",
    "value": "live-demo-button",
    "visitors": 10269,
    "previous": 106594,
    "dropped": 96325,
    "dropoff": 0.9036624950747697,
    "remaining": 0.09633750492523031
  }
]
```

***

## POST /api/reports/goals

Track your goals for pageviews and events.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `type` : (array) Conversion type (`path` | `event`).
* `value`: (string) Conversion step value.

**Request body**

```json
{
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "type": "goal",
  "filters": {},
  "parameters": {
    "startDate": "2025-07-23T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z",
    "type": "event",
    "value": "live-demo-button"
  }
}
```

**Sample response**

```json
{
  "num": 11935,
  "total": 50602
}
```

***

## POST /api/reports/journey

Understand how users nagivate through your website.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `steps`: (number) Number of steps from 3 to 7
* `startStep` : (string) Starting step URL or event name.
* `endStep` : (string | optional) Ending step URL or event name.

**Request body**

```json
{
  "websiteId": "86d4095c-a2a8-4fc8-9521-103e858e2b41",
  "type": "journey",
  "filters": {},
  "parameters": {
    "startDate": "2025-07-23T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z",
    "steps": 3,
    "startStep": "/",
    "endStep": "/pricing"
  }
}
```

**Sample response**

```json
[
  {
    "items": ["/", "/pricing", null, null],
    "count": 6433
  },
  {
    "items": ["/", "live-demo-button", "/pricing", null],
    "count": 918
  },
  {
    "items": ["/", "/features", "/pricing", null],
    "count": 857
  },
  {
    "items": ["/", "/pricing", null],
    "count": 434
  },
  {
    "items": ["/", "/pricing", null],
    "count": 306
  },
  {
    "items": ["/", "/docs", "/pricing", null],
    "count": 257
  },
  {
    "items": ["/", "get-started-button", "/pricing", null],
    "count": 237
  },
  {
    "items": ["/", "login-button-header", "/pricing", null],
    "count": 102
  }
]
```

***

## POST /api/reports/retention

Measure your website stickiness by tracking how often users return.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `timezone`: Timezone (ex. America/Los\_Angeles).

**Request body**

```json
{
  "websiteId": "86d4095c-a2a8-4fc8-9521-103e858e2b41",
  "type": "retention",
  "filters": {},
  "parameters": {
    "startDate": "2025-10-01T07:00:00.000Z",
    "endDate": "2025-11-01T06:59:59.999Z",
    "timezone": "America/Los_Angeles"
  }
}
```

**Sample response**

```json
[
  {
    "date": "2025-10-01T07:00:00Z",
    "day": 0,
    "visitors": 1499,
    "returnVisitors": 1499,
    "percentage": 100
  },
  {
    "date": "2025-10-01T07:00:00Z",
    "day": 1,
    "visitors": 1499,
    "returnVisitors": 151,
    "percentage": 10.073382254836558
  },
  {
    "date": "2025-10-01T07:00:00Z",
    "day": 2,
    "visitors": 1499,
    "returnVisitors": 83,
    "percentage": 5.537024683122081
  },
  {
    "date": "2025-10-01T07:00:00Z",
    "day": 3,
    "visitors": 1499,
    "returnVisitors": 45,
    "percentage": 3.002001334222815
  }
]
```

***

## POST /api/reports/revenue

Get currency for given range. Needed for Revenue and optional in Attribution reports.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `currency`: (string) Currency code (ISO 4217).

**Request body**

```json
{
  "websiteId": "86d4095c-a2a8-4fc8-9521-103e858e2b41",
  "type": "revenue",
  "filters": {},
  "parameters": {
    "startDate": "2025-07-23T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z",
    "timezone": "America/Los_Angeles",
    "currency": "USD"
  }
}
```

**Sample response**

```json
{
  "chart": [
    {
      "x": "revenue-demo",
      "t": "2025-10-14T07:00:00Z",
      "y": 400
    },
    {
      "x": "revenue-demo",
      "t": "2025-10-15T07:00:00Z",
      "y": 480
    },
    {
      "x": "revenue-demo",
      "t": "2025-10-16T07:00:00Z",
      "y": 490
    }
  ],
  "country": [
    {
      "name": "US",
      "value": 1050
    },
    {
      "name": "FR",
      "value": 1040
    },
    {
      "name": "GB",
      "value": 720
    }
  ],
  "total": {
    "sum": 3870,
    "count": 131,
    "unique_count": 131,
    "average": 29.541984732824428
  }
}
```

***

## POST /api/reports/utm

Track your campaigns through UTM parameters.

**Parameters**

* `websiteId` : (string) Your website id.
* `type`: (string) Report type (`attribution`| `breakdown`| `funnel`| `goal`| `journey`| `retention`| `revenue`| `utm`).
* `filters`: Can accept filter parameters.
* `startDate` : (number) Date (in ms) of start date.
* `endDate` : (number) Date (in ms) of end date.

**Request body**

```json
{
  "websiteId": "86d4095c-a2a8-4fc8-9521-103e858e2b41",
  "type": "utm",
  "filters": {},
  "parameters": {
    "startDate": "2025-10-14T07:00:00.000Z",
    "endDate": "2025-10-22T06:59:59.999Z"
  }
}
```

**Sample response**

```json
{
  "utm_source": [
    {
      "utm": "chatgpt.com",
      "views": 341
    },
    {
      "utm": "coolify.io",
      "views": 235
    },
    {
      "utm": "openalternative.co",
      "views": 89
    },
    {
      "utm": "facebook",
      "views": 28
    }
  ],
  "utm_medium": [
    {
      "utm": "cpc",
      "views": 28
    },
    {
      "utm": "referral",
      "views": 26
    }
  ],
  "utm_campaign": [
    {
      "utm": "website_analytics",
      "views": 28
    },
    {
      "utm": "navigation",
      "views": 16
    }
  ],
  "utm_term": [
    {
      "utm": "0_df65b6d7c8-e2c14ebdc7-59136105",
      "views": 1
    }
  ],
  "utm_content": [
    {
      "utm": "comparison-page",
      "views": 1
    },
    {
      "utm": "sidebar-cta",
      "views": 1
    }
  ]
}
```


# Sending stats (/docs/api/sending-stats)

## POST /api/send

To register an `event`, you need to send a `POST` to `/api/send` with
the following data:

For **Umami Cloud** send a POST to `https://cloud.umami.is/api/send`.

**Parameters**

`payload`

* `hostname`: (string) Name of host.
* `screen`: (string) Screen resolution (ex. "1920x1080")
* `language`: (string) Language of visitor (ex. "en-US")
* `url`: (string) Page URL.
* `referrer`: (string) Referrer URL.
* `title`: (string) Page title.
* `tag`: (string) Additional tag description.
* `id`: (string) Session identifier.
* `website`: (string) Website ID.
* `name`: (string) Name of the event.
* `data`: (object | optional) Additional data for the event.

`type`: (string) `event` is currently the only type available.

**Sample payload**

```json
{
  "payload": {
    "hostname": "your-hostname",
    "language": "en-US",
    "referrer": "",
    "screen": "1920x1080",
    "title": "dashboard",
    "url": "/",
    "website": "your-website-id",
    "name": "event-name",
    "data": {
      "foo": "bar"
    }
  },
  "type": "event"
}
```

Note, for `/api/send` requests you do not need to send an
authentication token.

Also, you need to send a proper `User-Agent` HTTP header or
your request won't be registered.

**Sample response**

```json
{
  "cache": "xxxxxxxxxxxxxxx",
  "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "visitId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

**Programmatically**

You can generate most of these values programmatically with JavaScript using the browser APIs. For example:

```js
const data = {
  payload: {
    hostname: window.location.hostname,
    language: navigator.language,
    referrer: document.referrer,
    screen: `${window.screen.width}x${window.screen.height}`,
    title: document.title,
    url: window.location.pathname,
    website: 'your-website-id',
    name: 'event-name',
  },
  type: 'event',
};
```


# Sessions (/docs/api/sessions)

Operations around Sessions and Session data.

**Endpoints**

```text
GET /api/websites/:websiteId/sessions
GET /api/websites/:websiteId/sessions/stats
GET /api/websites/:websiteId/sessions/weekly
GET /api/websites/:websiteId/sessions/:sessionId
GET /api/websites/:websiteId/sessions/:sessionId/activity
GET /api/websites/:websiteId/sessions/:sessionId/properties
GET /api/websites/:websiteId/session-data/properties
GET /api/websites/:websiteId/session-data/values
```

***

## Filters

All Endpoints marked with `filters` can now be filtered with the parameters below.

**Parameters**

* `path`: (string | optional) Name of URL.
* `referrer`: (string | optional) Name of referrer.
* `title`: (string | optional) Name of page title.
* `query`: (string | optional) Name of query parameter.
* `browser`: (string | optional) Name of browser.
* `os`: (string | optional) Name of operating system.
* `device`: (string | optional) Name of device (ex. Mobile)
* `country`: (string | optional) Name of country.
* `region`: (string | optional) Name of region/state/province.
* `city`: (string | optional) Name of city.
* `hostname`: (string | optional) Name of hostname.
* `tag`: (string | optional) Name of tag.
* `segment`: (uuid | optional) UUID of segment.
* `cohort`: (uuid | optional) UUID of cohort.

***

## GET /api/websites/:websiteId/sessions

Gets website session details within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `search`: (string | optional) Search text.
* `page`: (number | optional, default 1) Determines page.
* `pageSize`: (number | optional, default 20) Determines how many results to return.
* `filters`: Can accept filter parameters.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "hostname": "umami.is",
      "browser": "chrome",
      "os": "Mac OS",
      "device": "desktop",
      "screen": "1800x1169",
      "language": "en-US",
      "country": "SE",
      "region": "SE-AB",
      "city": "Stockholm",
      "firstAt": "2025-10-21T13:35:51Z",
      "lastAt": "2025-10-21T15:00:09Z",
      "visits": 2,
      "views": 18,
      "createdAt": "2025-10-21T15:00:09Z"
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "hostname": "umami.is",
      "browser": "safari",
      "os": "Mac OS",
      "device": "desktop",
      "screen": "1512x982",
      "language": "en-IN",
      "country": "IN",
      "region": "IN-GJ",
      "city": "Bhavnagar",
      "firstAt": "2025-10-21T14:59:47Z",
      "lastAt": "2025-10-21T14:59:48Z",
      "visits": 1,
      "views": 1,
      "createdAt": "2025-10-21T14:59:48Z"
    }
  ],
  "count": 923,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/websites/:websiteId/sessions/stats

Gets summarized website session statistics.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `filters`: Can accept filter parameters.

**Sample response**

```json
{
  "pageviews": {
    "value": 2924
  },
  "visitors": {
    "value": 905
  },
  "visits": {
    "value": 1050
  },
  "countries": {
    "value": 84
  },
  "events": {
    "value": 517
  }
}
```

* `pageviews`: Pages hits
* `visitors`: Number of unique visitors
* `visits`: Number of unique visits
* `bounces`: Number of visitors who only visit a single page
* `totaltime`: Time spent on the website

***

## GET /api/websites/:websiteId/sessions/weekly

Get collected count of sessions by hour of weekday.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of start date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 58, 57, 65, 53, 58, 135],
  [117, 124, 132, 127, 135, 142, 141, 138, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```

***

## GET /api/websites/:websiteId/sessions/:sessionId

Gets session details for a individual session

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "distinctId": "",
  "browser": "chrome",
  "os": "Mac OS",
  "device": "desktop",
  "screen": "1800x1169",
  "language": "en-US",
  "country": "SE",
  "region": "SE-AB",
  "city": "Stockholm",
  "firstAt": "2025-10-21T13:35:51Z",
  "lastAt": "2025-10-21T15:00:09Z",
  "visits": 2,
  "views": 18,
  "events": 12,
  "totaltime": 1609
}
```

***

## GET /api/websites/:websiteId/sessions/:sessionId/activity

Gets session activity for a individual session

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.

**Sample response**

```json
[
  {
    "createdAt": "2025-10-21T15:00:09Z",
    "urlPath": "/blog",
    "urlQuery": "",
    "referrerDomain": "umami.is",
    "eventId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "eventType": 1,
    "eventName": "",
    "visitId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "hasData": 0
  },
  {
    "createdAt": "2025-10-21T14:56:30Z",
    "urlPath": "/docs",
    "urlQuery": "",
    "referrerDomain": "umami.is",
    "eventId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "eventType": 1,
    "eventName": "",
    "visitId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "hasData": 0
  },
  {
    "createdAt": "2025-10-21T14:56:30Z",
    "urlPath": "/",
    "urlQuery": "",
    "referrerDomain": "umami.is",
    "eventId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "eventType": 1,
    "eventName": "",
    "visitId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "hasData": 0
  }
]
```

***

## GET /api/websites/:websiteId/sessions/:sessionId/properties

Gets session properties for a individual session

**Sample response**

```json
[
  {
    "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "dataKey": "email",
    "dataType": 1,
    "stringValue": "bob@aol.com",
    "numberValue": null,
    "dateValue": null,
    "createdAt": "2025-10-22T02:28:17Z"
  },
  {
    "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "dataKey": "id",
    "dataType": 1,
    "stringValue": "910bfde0-21dd-4d24-804d-716035e92ddc",
    "numberValue": null,
    "dateValue": null,
    "createdAt": "2025-10-22T02:28:17Z"
  },
  {
    "websiteId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "sessionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "dataKey": "name",
    "dataType": 1,
    "stringValue": "Bob Aol",
    "numberValue": null,
    "dateValue": null,
    "createdAt": "2025-10-22T02:28:17Z"
  }
]
```

## GET /api/websites/:websiteId/session-data/properties

Gets session data counts by property name

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "propertyName": "id",
    "total": 1039
  },
  {
    "propertyName": "region",
    "total": 1039
  },
  {
    "propertyName": "name",
    "total": 1039
  },
  {
    "propertyName": "email",
    "total": 1039
  }
]
```

***

## GET /api/websites/:websiteId/session-data/values

Gets session data counts for a given property

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `propertyName`: (string) Property name.
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "value": "EU",
    "total": 626
  },
  {
    "value": "US",
    "total": 462
  }
]
```


# Teams (/docs/api/teams)

Operations around Team management.

**Endpoints**

```text
GET /api/teams
POST /api/teams
POST /api/teams/join
GET /api/teams/:teamId
POST /api/teams/:teamId
DELETE /api/teams/:teamId
GET /api/teams/:teamId/users
POST /api/teams/:teamId/users
GET /api/teams/:teamId/users/:userId
POST /api/teams/:teamId/users/:userId
DELETE /api/teams/:teamId/users/:userId
GET /api/teams/:teamId/websites
```

***

## GET /api/teams

Returns all teams.

**Parameters**

* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Umami Software",
      "accessCode": "xxxxxxxxxx",
      "logoUrl": null,
      "createdAt": "2025-01-06T23:46:38.169Z",
      "updatedAt": "2025-02-14T17:38:27.607Z",
      "deletedAt": null,
      "members": [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-owner",
          "createdAt": "2025-01-06T23:46:38.169Z",
          "updatedAt": "2025-01-06T23:46:38.169Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "bob@aol.com"
          }
        },
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-member",
          "createdAt": "2025-01-06T23:46:38.169Z",
          "updatedAt": "2025-01-06T23:46:38.169Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "bob@aol.com"
          }
        }
      ],
      "_count": {
        "websites": 1,
        "members": 2
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## POST /api/teams

Creates a team.

**Parameters**

* `name`: (string) The team's name.

**Request body**

```json
{
  "name": "marketing"
}
```

**Sample response**

```json
[
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "marketing",
    "accessCode": "team_KBmjrm5KcDZSArah",
    "logoUrl": null,
    "createdAt": "0000-00-00T00:00:00.000Z",
    "updatedAt": "0000-00-00T00:00:00.000Z",
    "deletedAt": null
  },
  {
    "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "role": "team-owner",
    "createdAt": "0000-00-00T00:00:00.000Z",
    "updatedAt": "0000-00-00T00:00:00.000Z"
  }
]
```

***

## POST /api/teams/join

Join a team.

**Parameters**

* `accessCode`: (string) The team's access code.

**Request body**

```json
{
  "accessCode": "xxwtoY8pzKjDIUQi"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "role": "team-member",
  "createdAt": "0000-00-00T00:00:00.000Z",
  "updatedAt": "0000-00-00T00:00:00.000Z"
}
```

***

## GET /api/teams/:teamId

Get a team.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Umami Software",
  "accessCode": "xxxxxxxxxxx",
  "logoUrl": null,
  "createdAt": "2024-02-17T06:27:50.130Z",
  "updatedAt": "2025-02-14T17:37:50.306Z",
  "deletedAt": null,
  "members": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "role": "team-owner",
      "createdAt": "2024-02-17T06:27:50.130Z",
      "updatedAt": "2024-02-17T06:27:50.130Z"
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "role": "team-member",
      "createdAt": "2024-02-29T17:47:21.354Z",
      "updatedAt": "2024-02-29T17:47:21.354Z"
    }
  ]
}
```

***

## POST /api/teams/:teamId

Update a team.

**Parameters**

* `name`: (string | optional) The team's name.
* `accessCode`: (string | optional) The team's access code.

**Request body**

```json
{
  "name": "Marketing"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Marketing",
  "accessCode": "xxxxxxxxxxx",
  "logoUrl": null,
  "createdAt": "2025-10-07T07:42:06.112Z",
  "updatedAt": "2025-10-10T22:41:22.191Z",
  "deletedAt": null
}
```

***

## DELETE /api/teams/:teamId

Delete a team.

**Sample response**

```json
{
  "ok": true
}
```

***

## GET /api/teams/:teamId/users

Get all users that belong to a team.

**Parameters**

* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "role": "team-owner",
      "createdAt": "2025-10-10T22:34:46.736Z",
      "updatedAt": "2025-10-10T22:34:46.736Z",
      "user": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "username": "bob@aol.com"
      }
    },
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "role": "team-member",
      "createdAt": "2025-10-10T22:37:38.587Z",
      "updatedAt": "2025-10-10T22:37:38.587Z",
      "user": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "username": "bob@aol.com"
      }
    }
  ],
  "count": 2,
  "page": 1,
  "pageSize": 20
}
```

***

## POST /api/teams/:teamId/users

Add a user to a team.

**Parameters**

* `userId`: ID of user to be added.
* `role`: Team role for user (`team-member`| `team-view-only` | `team-manager`).

**Request body**

```json
{
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "role": "team-member"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "role": "team-member",
  "createdAt": "0000-00-00T00:00:00.000Z",
  "updatedAt": "0000-00-00T00:00:00.000Z"
}
```

***

## GET /api/teams/:teamId/users/:userId

Get a user belonging to a team.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "role": "team-owner",
  "createdAt": "0000-00-00T00:00:00.000Z",
  "updatedAt": "0000-00-00T00:00:00.000Z"
}
```

***

## POST /api/teams/:teamId/users/:userId

Update a user's role on a team.

**Parameters**

* `role`: Team role for user (`team-member`| `team-view-only` | `team-manager`).

**Request body**

```json
{
  "role": "team-member"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "role": "team-member",
  "createdAt": "0000-00-00T00:00:00.000Z",
  "updatedAt": "0000-00-00T00:00:00.000Z"
}
```

***

## DELETE /api/teams/:teamId/users/:userId

Remove a user from a team.

**Sample response**

```json
{
  "ok": true
}
```

***

## GET /api/teams/:teamId/websites

Get all websites that belong to a team.

**Parameters**

* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "aol",
      "domain": "aol.com",
      "shareId": "xxxxxxxxxxxx",
      "resetAt": null,
      "userId": null,
      "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2020-07-19T06:53:33.482Z",
      "updatedAt": "2024-06-24T05:00:00.279Z",
      "deletedAt": null,
      "createUser": {
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "username": "bob@aol.com"
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```


# Users (/docs/api/users)

Operations around User management.

These endpoints are only available for self-hosted instances for **admin** users and not **Umami Cloud**.

**Endpoints**

```text
POST /api/users
GET /api/users/:userId
POST /api/users/:userId
DELETE /api/users/:userId
GET /api/users/:userId/websites
GET /api/users/:userId/teams
```

***

## POST /api/users

Creates a user.

**Parameters**

* `username`: (string) The user's username.
* `password`: (string) The user's password.
* `role`: (string) Choose from (`admin` | `user` | `view-only`).
* `id`: (string | optional) Force a UUID assignment to the user.

**Request body**

```json
{
  "username": "member",
  "password": "umami",
  "role": "user"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "username": "member",
  "role": "user"
}
```

***

## GET /api/users/:userId

Gets a user by ID.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "username": "member",
  "role": "user",
  "createdAt": "2025-10-10T23:09:16.524Z"
}
```

***

## POST /api/users/:userId

Updates a user.

**Parameters**

* `username`: (optional string) The user's username.
* `password`: (optional string) The user's password.
* `role`: (optional string) Select from `admin`, `user`, `view-only`.

**Request body**

```json
{
  "username": "admin",
  "password": "umami",
  "role": "admin"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "username": "admin",
  "role": "admin",
  "createdAt": "0000-00-00T00:00:00.000Z"
}
```

***

## DELETE /api/users/:userId

Deletes a user.

**Sample response**

```json
{
  "ok": true
}
```

***

## GET /api/users/:userId/websites

Gets all websites that belong to a user.

**Parameters**

* `includeTeams`: (boolean) Set to true if you want to include websites where you are the team owner.
* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "My Website",
      "domain": "mywebsite.com",
      "shareId": null,
      "resetAt": null,
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "2025-09-16T19:59:32.957Z",
      "updatedAt": "2025-09-16T19:59:32.957Z",
      "deletedAt": null,
      "user": {
        "username": "admin",
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```

***

## GET /api/users/:userId/teams

Gets all teams that belong to a user.

**Parameters**

* `page`: (number | optional, default 1) Determines page.
* `pageSize`: (string | optional) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Umami Software, Inc",
      "accessCode": "team_qunhu7q6NVZDu6Cg",
      "logoUrl": null,
      "createdAt": "2025-09-24T22:08:35.259Z",
      "updatedAt": "2025-09-24T22:08:35.259Z",
      "deletedAt": null,
      "members": [
        {
          "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "teamId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
          "role": "team-owner",
          "createdAt": "2025-09-24T22:08:35.302Z",
          "updatedAt": "2025-09-24T22:08:35.302Z",
          "user": {
            "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "username": "admin"
          }
        }
      ],
      "_count": {
        "websites": 0,
        "members": 1
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 20
}
```


# Website statistics (/docs/api/website-stats)

Operations around Website statistics.

**Endpoints**

```text
GET /api/websites/:websiteId/active
GET /api/websites/:websiteId/events/series
GET /api/websites/:websiteId/metrics
GET /api/websites/:websiteId/metrics/expanded
GET /api/websites/:websiteId/pageviews
GET /api/websites/:websiteId/stats
```

***

## Filters

All Endpoints marked with `filters` can now be filtered with the parameters below.

**Parameters**

* `path`: (string | optional) Name of URL.
* `referrer`: (string | optional) Name of referrer.
* `title`: (string | optional) Name of page title.
* `query`: (string | optional) Name of query parameter.
* `browser`: (string | optional) Name of browser.
* `os`: (string | optional) Name of operating system.
* `device`: (string | optional) Name of device (ex. Mobile)
* `country`: (string | optional) Name of country.
* `region`: (string | optional) Name of region/state/province.
* `city`: (string | optional) Name of city.
* `hostname`: (string | optional) Name of hostname.
* `tag`: (string | optional) Name of tag.
* `segment`: (uuid | optional) UUID of segment.
* `cohort`: (uuid | optional) UUID of cohort.

***

**Unit Parameter**

The unit parameter buckets the data returned. The unit is automatically converted to the next largest applicable time unit if the maximum is exceeded.

* `minute`: Up to 60 minutes.
* `hour`: Up to 48 hours.
* `day`: Up to 12 months.
* `month`: No limit.
* `year`: No limit.

***

## GET /api/websites/:websiteId/active

Gets the number of active users on a website.

**Sample response**

```json
{
  "visitors": 5
}
```

* `visitors`: Number of unique visitors within the last 5 minutes

***

## GET /api/websites/:websiteId/events/series

Gets events within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `unit`: Time unit (`year` | `month` | `hour` | `day`).
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `filters`: Can accept filter parameters.

**Sample response**

```json
[
  {
    "x": "live-demo-button",
    "t": "2023-04-12T22:00:00Z",
    "y": 1
  },
  {
    "x": "get-started-button",
    "t": "2023-04-12T22:00:00Z",
    "y": 5
  },
  {
    "x": "get-started-button",
    "t": "2023-04-12T23:00:00Z",
    "y": 4
  },
  {
    "x": "live-demo-button",
    "t": "2023-04-12T23:00:00Z",
    "y": 4
  },
  {
    "x": "social-Discord",
    "t": "2023-04-13T00:00:00Z",
    "y": 1
  }
]
```

* `x`: Event name.
* `t`: Timestamp.
* `y`: Number of events.

***

## GET /api/websites/:websiteId/metrics

Gets metrics for a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `unit`: Time unit (year | month | hour | day).
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `type`: Metrics type.
* `filters`: Can accept filter parameters.
* `limit`: (optional, default 500) Number of rows returned.
* `offset`: (optional, default 0) Number of ows to skip.

**Available Types**

`path` | `entry` | `exit` | `title` | `query` | `referrer` | `channel` | `domain` | `country` | `region` | `region` | `city` | `browser` | `os` | `device` | `language` | `screen` | `event` | `hostname` | `tag`

**Sample response**

```json
[
  {
    "x": "Mac OS",
    "y": 1918
  },
  {
    "x": "Windows 10",
    "y": 1413
  },
  {
    "x": "iOS",
    "y": 464
  },
  {
    "x": "Android OS",
    "y": 301
  },
  {
    "x": "Linux",
    "y": 296
  },
  {
    "x": "Windows 7",
    "y": 29
  },
  {
    "x": "Chrome OS",
    "y": 12
  }
]
```

* `x`: Unique value, depending on metric type.
* `y`: Number of visitors.

## GET /api/websites/:websiteId/metrics/expanded

Gets expanded metrics for a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `unit`: Time unit (year | month | hour | day).
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `type`: Metrics type.
* `filters`: Can accept filter parameters.
* `limit`: (optional, default 500) Number of rows returned.
* `offset`: (optional, default 0) Number of ows to skip.

**Available Types**

`path` | `entry` | `exit` | `title` | `query` | `referrer` | `channel` | `domain` | `country` | `region` | `region` | `city` | `browser` | `os` | `device` | `language` | `screen` | `event` | `hostname` | `tag`

**Sample response**

```json
[
  {
    "name": "Mac OS",
    "pageviews": 74020,
    "visitors": 16982,
    "visits": 24770,
    "bounces": 15033,
    "totaltime": 149156302
  },
  {
    "name": "Windows 10",
    "pageviews": 52252,
    "visitors": 12858,
    "visits": 20089,
    "bounces": 12720,
    "totaltime": 137208105
  },
  {
    "name": "iOS",
    "pageviews": 10029,
    "visitors": 4364,
    "visits": 5139,
    "bounces": 3578,
    "totaltime": 23482267
  },
  {
    "name": "Android OS",
    "pageviews": 8147,
    "visitors": 3122,
    "visits": 3854,
    "bounces": 2610,
    "totaltime": 20347972
  },
  {
    "name": "Linux",
    "pageviews": 12462,
    "visitors": 3000,
    "visits": 4278,
    "bounces": 2630,
    "totaltime": 26331069
  }
]
```

* `name`: Unique value, depending on metric type.
* `pageviews`: Pages hits
* `visitors`: Number of unique visitors
* `visits`: Number of unique visits
* `bounces`: Number of visitors who only visit a single page
* `totaltime`: Time spent on the website

***

## GET /api/websites/:websiteId/pageviews

Gets pageviews within a given time range.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `unit`: Time unit (year | month | hour | day).
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `compare`: (string | optional) Comparison value `prev`| `yoy`.
* `filters`: Can accept filter parameters.

**Sample response**

```json
{
  "pageviews": [
    {
      "x": "2025-10-19T07:00:00Z",
      "y": 4129
    },
    {
      "x": "2025-10-20T07:00:00Z",
      "y": 6105
    },
    {
      "x": "2025-10-21T07:00:00Z",
      "y": 4936
    }
  ],
  "sessions": [
    {
      "x": "2025-10-19T07:00:00Z",
      "y": 1397
    },
    {
      "x": "2025-10-20T07:00:00Z",
      "y": 1880
    },
    {
      "x": "2025-10-21T07:00:00Z",
      "y": 1469
    }
  ]
}
```

* `x`: Timestamp.
* `y`: Number of pageviews or visitors.

***

## GET /api/websites/:websiteId/stats

Gets summarized website statistics.

**Parameters**

* `startAt`: (number) Timestamp (in ms) of starting date.
* `endAt`: (number) Timestamp (in ms) of end date.
* `unit`: Time unit (year | month | hour | day).
* `timezone`: Timezone (ex. America/Los\_Angeles).
* `filters`: Can accept filter parameters.

**Sample response**

```json
{
  "pageviews": 15171,
  "visitors": 4415,
  "visits": 5680,
  "bounces": 3567,
  "totaltime": 809968,
  "comparison": {
    "pageviews": 38675,
    "visitors": 10568,
    "visits": 14595,
    "bounces": 9364,
    "totaltime": 2182387
  }
}
```

* `pageviews`: Pages hits
* `visitors`: Number of unique visitors
* `visits`: Number of unique visits
* `bounces`: Number of visitors who only visit a single page
* `totaltime`: Time spent on the website


# Websites (/docs/api/websites)

Operations around Website management and statistics.

**Endpoints**

```text
GET /api/websites
POST /api/websites
GET /api/websites/:websiteId
POST /api/websites/:websiteId
DELETE /api/websites/:websiteId
POST /api/websites/:websiteId/reset
```

***

## GET /api/websites

Returns all user websites.

**Parameters**

* `includeTeams`: (boolean) Set to true if you want to include websites where you are the team owner.
* `search`: (optional string) Search text.
* `page`: (optional number, default 1) Determines page.
* `pageSize`: (optional string) Determines how many results to return.

**Sample response**

```json
{
  "data": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Example",
      "domain": "example.com",
      "shareId": null,
      "resetAt": null,
      "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "teamId": null,
      "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "createdAt": "0000-00-00T00:00:00.000Z",
      "updatedAt": "0000-00-00T00:00:00.000Z",
      "deletedAt": null,
      "user": {
        "username": "bob@aol.com",
        "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      }
    }
  ],
  "count": 1,
  "page": 1,
  "pageSize": 10
}
```

***

## POST /api/websites

Creates a website.

**Parameters**

* `name`: (string) The name of the website in Umami.
* `domain`: (string) The full domain of the tracked website.
* `shareId`: (string | optional) A unique string to enable a share url. Set `null` to unshare.
* `teamId`: (string | optional) The ID of the team the website will be created under.
* `id`: (string | optional) Force a UUID assignment to the website.

**Request body**

```json
{
  "name": "Test",
  "domain": "example.com"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Test",
  "domain": "example.com",
  "shareId": null,
  "resetAt": null,
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdBy": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "createdAt": "0000-00-00T00:00:00.000Z",
  "updatedAt": "0000-00-00T00:00:00.000Z",
  "deletedAt": null
}
```

***

## GET /api/websites/:websiteId

Gets a website by ID.

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Example",
  "domain": "example.com",
  "shareId": null,
  "resetAt": null,
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdBy": "133660ed-e51c-4ed9-84aa-c86654460cae",
  "createdAt": "2025-10-10T22:01:06.201Z",
  "updatedAt": "2025-10-10T22:02:02.220Z",
  "deletedAt": null
}
```

***

## POST /api/websites/:websiteId

Updates a website.

**Parameters**

* `name`: (string) The name of the website in Umami.
* `domain`: (string) The full domain of the tracked website.
* `shareId`: (string | optional) A unique string to enable a share url. Set `null` to unshare.

**Request body**

```json
{
  "name": "Test",
  "domain": "domain.com"
}
```

**Sample response**

```json
{
  "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "name": "Example",
  "domain": "example.com",
  "shareId": null,
  "resetAt": null,
  "userId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "teamId": null,
  "createdBy": "133660ed-e51c-4ed9-84aa-c86654460cae",
  "createdAt": "2025-10-10T22:01:06.201Z",
  "updatedAt": "2025-10-10T22:02:02.220Z",
  "deletedAt": null
}
```

***

## DELETE /api/websites/:websiteId

Deletes a website.

**Sample response**

```json
{
  "ok": true
}
```

***

## POST /api/websites/:websiteId/reset

Resets a website by removing all data related to the website.

**Sample response**

```json
{
  "ok": true
}
```


# Umami API (/docs/cloud/api-changelog)

This page documents changes made to **api.umami.is**.

## 2025-11-13

**Realtime**

* `GET /api/realtime/:websiteId`: Removed `timezone` parameter. Response will always return in `UTC` across all datasets.

## 2025-10-07

**Filters**

* Changed filter `url` to `path`.
* Changed filter `host` to `hostname`

**Websites**

* `GET /websites/[id]/metrics`: The `type` parameter `url` has been changed to `path`.
* `GET /websites/[id]/stats`: The reponse data structure has changed.

```json
{
  "pageviews": 34210,
  "visitors": 9401,
  "visits": 12726,
  "bounces": 7918,
  "totaltime": 5214477,
  "comparison": {
    "pageviews": 30818,
    "visitors": 8776,
    "visits": 11756,
    "bounces": 7396,
    "totaltime": 1704355
  }
}
```

**Events**

* `GET /event-data/values`: The `eventName` query parameter has been changed to `event`.

**Reports**

* `POST /reports`: The `insights` report has been changed to `breakdown`.

## 2024-09-09

**Websites**

* `GET /websites/[id]/pageviews`: Fixed `region` parameter to optional.
* `GET /websites/[id]/events`: Changed result set to website event details within a given time range.
* `GET /websites/[id]/events/series`: **New** event metrics endpoint (previously `GET /websites/[id]/events`).

**Event Data**

* `GET /event-data/events` : **Moved** to `/websites/[id]/event-data/events`.
* `GET /event-data/fields` : **Moved** to `/websites/[id]/event-data/fields`.
* `GET /event-data/stats` : **Moved** to `/websites/[id]/event-data/stats`.
* `GET /websites/[id]/event-data/values` : **Added**

**Sessions**

* `GET /websites/:websiteId/sessions` : **Added**
* `GET /websites/:websiteId/sessions/stats` : **Added**
* `GET /websites/:websiteId/sessions/:sessionId` : **Added**
* `GET /websites/:websiteId/sessions/:sessionId/activity` : **Added**
* `GET /websites/:websiteId/sessions/:sessionId/properties` : **Added**
* `GET /websites/:websiteId/session-data/properties` : **Added**
* `GET /websites/:websiteId/session-data/values` : **Added**

## 2024-05-23

**Websites**

* `GET /websites/[id]/stats`: Renamed `change` to `prev`.

## 2024-03-27

**Websites**

* `GET /websites/[id]/stats`: Renamed `uniques` to `visitors`. Added `visits`.

## 2024-02-16

**Websites**

* `POST /websites`: Added teamId as an optional parameter.

**Teams**

* `/teams/[id]/websites/[websiteId]`: **Deprecated**
* `GET /teams/[id]/users/[userId]/index`: **Added**

**Reports**

* `GET /reports/index`: Added `websiteId` and `teamId` added as query parameters.


# API Key (/docs/cloud/api-key)









In order to access your data using Umami Cloud, you will need to generate an API key.

All API routes in the reference section are available in Umami Cloud using an API key, with the exception of some routes listed in the `Not Allowed` section.

## Create your key

Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **API keys** and click on the **Create key** button.

<img alt="image" src={__img1} placeholder="blur" />

You can reveal your key by clicking on the `visible` icon in the text input.

<img alt="image" src={__img2} placeholder="blur" />

## Using your key

You can access your Umami Cloud data by querying the following address.

`https://api.umami.is/v1`

Just pass in your API key via a custom header `x-umami-api-key`

For example, with `curl` it would look like this:

```shell
curl https://api.umami.is/v1/websites
   -H "Accept: application/json"
   -H "x-umami-api-key: <api-key>"
```

## Using your key with API Client

Set the following requirement variables to have the API client use your API key.

```dotenv
UMAMI_API_KEY={Your API key}
UMAMI_API_CLIENT_ENDPOINT=https://api.umami.is/v1
```

More details on using the API client can be found in [API client](/docs/api/api-client).

## Limits

Each API key is limited to 50 calls every 15 seconds.

## Not allowed

The following API routes are not made available using your API key.

```text
/me/password
/users
/users/*
```

## Deleting your key

From API keys click the `Delete` button for the specific key to be deleted.

Once an API key is deleted, it cannot be recovered.

<img alt="image" src={__img3} placeholder="blur" />


# Umami Cloud (/docs/cloud/cloud-changelog)

This page documents changes made to **cloud.umami.is**.

## 2025-10-07

We are excited to announce that Umami v3 has been deployed to Umami Cloud.


# Delete account (/docs/cloud/delete-account)







Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Account** and click the **Delete account** button.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Delete** button.

<img alt="image" src={__img2} placeholder="blur" />

Your account will now be deleted. You may sign up with the same email in the future.


# Email reports (/docs/cloud/email-reports)











Send scheduled email reports to anyone. Email Reports is available starting at the **Pro** plan.

Email reports are sent out at the following times for your account region.

* **Europe:** 7AM CET/CEST
* **United States:** 7AM PST/PDT

## Available reports

* **Website Summary:** Your website's top stats including top ten pages and referrers.

<img alt="image" src={__img0} placeholder="blur" />

## Create an email report

Log into Umami and click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img1} placeholder="blur" />

Navigate to **Email reports** and click on the **Create report** button.

<img alt="image" src={__img2} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img3} placeholder="blur" />

## Edit or Delete an email report

Navigate to **Email reports** and click on the **Edit** button or **Delete** button next to your email report.

<img alt="image" src={__img4} placeholder="blur" />


# Export data (/docs/cloud/export-data)









Umami allows you to export your data from Umami Cloud to CSV format (compressed via gzip). The export handles a single website at a time.
If you have a large number of websites or a large amount of data to export please contact [support@umami.is](mailto:support@umami.is).

## Exporting data from Umami Cloud

Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Data** and click on the **Export** button.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Export** button.

<img alt="image" src={__img2} placeholder="blur" />

When the import is complete, you will be emailed a link to download your export.

<img alt="image" src={__img3} placeholder="blur" />


# FAQ (/docs/cloud/faq)

For general questions about the Umami application see [FAQ](/docs/faq).

# Umami Cloud FAQ

### Does Umami Cloud have a free tier?'

Yes! Umami Cloud's Hobby plan is completely free. Great for personal projects and low traffic websites.

### How does the free trial work?

Umami Cloud's free trial will last for 14 days from the purchase date. The trial gives you full access to all features in that plan.
At the end of the trial, you will be billed the regular amount. You can cancel your trial at any time within the trial period for no cost.

### How will I be billed?

Billing occurs on either a monthly or annual basis.
If you upgraded to a paid plan via a trial, your first invoice will arrive after your trial period ends.

### How is usage measured?

Usage is measured by counting hits to a website and any custom events or custom event data stored. Each website hit counts as one event. If you save
event data, each data property stored counts as one event.

### Where are your servers located?

Umami Cloud servers are located in the US and EU and adhere to GDPR and CCPA regulations.

### Can I export my data?

Yes, all of your data can be exported from Umami Cloud.


# Import Data (/docs/cloud/import-data)

If you're a **Pro** user, we're happy to assist you with importing your existing data into Umami Cloud.

Please contact [support@umami.is](mailto:support@umami.is) for support or assistance.


# Overview (/docs/cloud)

Umami Cloud is a hosted version of the Umami application run by the creators of Umami.

## Benefits

* **Fully managed**: Get all the latest updates without having to self-host and manage your own servers.
* **Scalable**: Umami provides seamless scalability, allowing you to handle increasing data volumes and user demands without compromising performance.
* **Cost-efficient**: Pay only for what you use with our simple usage based pricing model.
* **Compliant**: Compliant with GDPR & CCPA regulations.

## Signup

You can sign up for free at [https://cloud.umami.is/signup](https://cloud.umami.is/signup?ref=umami-cloud-docs).

Details for each Umami Cloud plan can be found on the [pricing](https://umami.is/pricing) page.


# Login (/docs/cloud/login)







You can log into your account at [https://cloud.umami.is/login](https://cloud.umami.is/login?ref=umami-cloud-docs).

<img alt="image" src={__img0} placeholder="blur" />

If you forget your password click the **Forgot password?** button and enter your email to recieve an email to reset your password.

<img alt="image" src={__img1} placeholder="blur" />

You can change your password by navigating to **Account** and click the **Change password** button.

<img alt="image" src={__img2} placeholder="blur" />


# Notifications (/docs/cloud/notifications)





Umami allows you to turn off email notifications about product features and updates.

## Email preferences

Log into Umami and click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Notifications** and toggle on/off the email preferences for the account.

<img alt="image" src={__img1} placeholder="blur" />


# Sign up (/docs/cloud/sign-up)





You can sign up for free at [https://cloud.umami.is/signup](https://cloud.umami.is/signup?ref=umami-cloud-docs).

## Verify email address

After signing up you will receive a 6-digit code to verify your email address.

<img alt="image" src={__img0} placeholder="blur" />

## Account setup

Log into your account to reach the setup page. You must complete the steps to **Verify email address** and **Select data region**.
You can walkthrough the setup guide or press the **Skip setup** button at the bottom of the screen to continue to Umami Cloud.

<img alt="image" src={__img1} placeholder="blur" />


# Subscription (/docs/cloud/subscription)









Umami uses **Stripe** as its payment processor. When signing up for a plan you will be sent to the stripe checkout portal.
All subscriptions come with a 14-day free trial. You are free to cancel within that time frame at zero charge.

Details for each Umami Cloud plan can be found on the [pricing](https://umami.is/pricing) page.

## Upgrade to Pro

Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Billing** and click on the **Upgrade to Pro** button.

<img alt="image" src={__img1} placeholder="blur" />

If you are interested in an **Enterprise** plan, please click the **Contact Us** button or email us at [sales@umami.is](mailto:sales@umami.is)

You will be sent to the stripe checkout portal to finish signing up. Navigate to **Billing** to see your new billing details.

<img alt="image" src={__img2} placeholder="blur" />

## Manage Plan

Navigate to **Billing** and click on the **Manage plan** button. You will be sent to the stripe billing portal where you can do the following.

* Cancel your **Pro** plan
* Update payment method
* Update billing information
* Review invoice history
* Download invoices and receipts

<img alt="image" src={__img3} placeholder="blur" />


# Teams (/docs/cloud/teams)

































Create teams in Umami to organize users and share websites.

## Roles

Team roles and related permissions.

* **Team Owner**: All permissions.
* **Team Manager**: All permissions except deleting the team.
* **Team Member**: All permissions except deleting or updating the team.
* **View Only**: View only.

## Add a team

Log into Umami and click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Teams** and click on the **Create team** button.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

You will automatically be added to the team with the role of **Team owner**.

## Team access

Click on the side nav dropdown then click **Teams**.

<img alt="image" src={__img3} placeholder="blur" />

## Share team access code

Navigate to **Teams** and click on the team name.

<img alt="image" src={__img4} placeholder="blur" />

The first panel will show the teams access code. Share this code with users you want to join your team.

<img alt="image" src={__img5} placeholder="blur" />

You can generate a new access code by clicking the **Regenerate** button and saving.

## Join a team

Navigate to **Teams** and click on the **Join team** button.

<img alt="image" src={__img6} placeholder="blur" />

Enter the **Access code** your received from the team owner and click the **Join** button.

<img alt="image" src={__img7} placeholder="blur" />

## Invite a member

From the team, navigate to **Members** and click on the **Invite user** button.

<img alt="image" src={__img8} placeholder="blur" />

Fill out the form details and click the **Send** button. The user will receive an email with a link and instructions to join the team.

<img alt="image" src={__img9} placeholder="blur" />

## Add a website

From the team, navigate to **Websites** and click on the **Add Website** button.

<img alt="image" src={__img10} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img11} placeholder="blur" />

## Edit/remove team member (Team owner only)

From the teams screen navigate to the members table and click on the **Edit** button to update the member role or click on the **Delete** button to remove the member from the team.

<img alt="image" src={__img12} placeholder="blur" />

## Transfer a website

Umami allows you to transfer a website between your account and a team that you own.

Navigate to **Websites** and click on the **Edit** button for the website you want to edit.

<img alt="image" src={__img13} placeholder="blur" />

Navigate to the **Transfer website** section and click the **Transfer** button.

<img alt="image" src={__img14} placeholder="blur" />

Fill out the form details and click the **Transfer** button.

<img alt="image" src={__img15} placeholder="blur" />


# Usage (/docs/cloud/usage)





Umami allows the user to track a variety of metrics for the month. Currently you can track the metrics below.

* Total events and breakdown across billing period.
* Total usage and percentage split between Events, Event data, and Session data.
* Top entities (websites, pixels, links) by events collected.

## Track usage

Once logged in, click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Usage** to view your usage details.

<img alt="image" src={__img1} placeholder="blur" />


# Hosting (/docs/guides/hosting)

There are many ways you can get Umami up and running.
All you need is a database [PostgreSQL](https://www.postgresql.org/) and server that can run [Node.js](https://nodejs.org/) (18.18 or newer).

## Single server

In this setup you would have the database and web server running on the same machine. You can optionally run Umami behind
a dedicated web server like [Nginx](https://www.nginx.com/) or [Apache](https://httpd.apache.org/) and proxy requests to Umami.

You can view the [Running on DigitalOcean](/docs/guides/running-on-digitalocean) guide to learn how to set up a server.

## Separate database and web server

In this setup you have a database running on its own machine that allows remote connections. Your web server is running on a different
machine with Umami installed and connects to the database remotely to store and retrieve data.

## App hosting

In this setup, you would have an app hosting provider host the Umami app for you. You would still need a database running elsewhere
that the app could connect to. Here are a few app hosting providers that can host Umami. Vercel, Netlify, Render, and Northflank have a free tier available.

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [Render](https://render.com/)
* [Northflank](https://northflank.com/)
* [Railway](https://railway.app/)

For the deployment, the build command is `npm run build` and the publish directory is `.next`.

## Managed databases

A managed database is where the host provides you with a running database that you don't have to install or maintain. Here are some
providers for managed databases.

* [DigitalOcean](https://www.digitalocean.com/products/managed-databases/)
* [Linode](https://www.linode.com/products/databases/)
* [Scaleway (EU)](https://www.scaleway.com/en/database/)
* [Amazon Web Services](https://aws.amazon.com/products/databases/)
* [Google Cloud SQL](https://cloud.google.com/sql/)
* [Microsoft Azure](https://azure.microsoft.com/en-us/services/#databases)
* [Render](https://render.com/pricing#databases)
* [Heroku](https://www.heroku.com/postgres)
* [Railway](https://docs.railway.app/databases/postgresql/)
* [Neon](https://neon.com)
* [Supabase](https://supabase.com/database)
* [PlanetScale](https://planetscale.com/)


# Overview (/docs/guides)

Welcome to the guides section! Here you will find various guides on how to get
the most out of your Umami experience.

If there is something you would like to see here, send us a suggestion [hello@umami.is](mailto:hello@umami.is)


# Measure campaigns (/docs/guides/measure-campaigns)











Whether you are doing paid advertising or email campaigns, Umami can help you measure the impact
and effectiveness of your marketing campaigns in driving business outcomes.

It's important to note that Umami complements your existing tools.

* **Paid advertising**: Continue to use your paid ads management system (such as Google Ads) to track paid ads performance, such as spend, clicks, CTRs, etc.
* **Email campaigns**: Continue to use your email tool to track email deliverability performance, such as opens and clicks.

## Step 1: Setup event tracking

If you send traffic to a page on your website with Umami installed, that page needs to be set up to track
events. This is a crucial step as Umami can track events on your website, which is vital to understanding
campaign performance. We need to know how many people clicked a sign-up button, installed, downloaded,
signed up, etc. There are two ways to record events in Umami: using the data attributes property or JavaScript.
For additional information on how to set up event tracking using Umami, please refer to the [documentation](/docs).

<img alt="image" src={__img0} placeholder="blur" />

## Step 2: Add UTM parameters to your links

If you send traffic to a page on your website, the links in your ads or emails need to have UTM parameters
so you can measure which links, creative, campaigns, etc, are driving traffic.

**URL w/ no UTM Parameters**:

`https://website.com/`

**URL w/ UTM Parameters**:

`https://website.com/?utm_source=newsletter
&utm_medium=email&utm_campaign=sales`

Umami automatically captures the UTM parameters you have added to the end of your links. You can review that
data inside your Umami dashboards or build a custom [UTM report](/docs/reports/report-utm). Google has a free [UTM link builder](https://ga-dev-tools.google/campaign-url-builder/) that
anyone can use.

<img alt="image" src={__img1} placeholder="blur" />

## Reading the data

Once events and UTMs are in place, measuring the impact and effectiveness of your campaigns involves
reviewing the data inside Umami. There are two places to look: **Dashboards** and **Reports**.

Your Umami dashboard will give you a quick snapshot of which events are being triggered. Remember that without
filters, the dashboard shows all events across all pages. Click More (see screenshot below) to filter your data.

<img alt="image" src={__img2} placeholder="blur" />

To filter your data to measure the impact and effectiveness of your campaigns, click the Filter link
at the top of the page, as shown in the screenshot below. You can slice and dice the data with filters to
understand which campaigns generate events.

<img alt="image" src={__img3} placeholder="blur" />

Umami also allows you to build custom reports that will allow you to jump straight into the exact data view
you are looking for. These are the four types of custom reports:

* **Breakdown**: Dive deeper into your data by using segments and filters.
* **Funnel**: Understand the conversion and drop-off rate of users.
* **Retention**: Measure your website stickiness by tracking how often users return.
* **UTM**: Track your campaigns through UTM parameters.

When you log in to Umami, click Reports along the top navigation to explore and start building your reports.

<img alt="image" src={__img4} placeholder="blur" />

## Example

Let's review an example of how to measure the impact and effectiveness of your campaign by using landing pages,
as sending traffic to a specific landing page is a very common practice:

1. The first thing to do in Umami is view metrics on your landing page by filtering by URL.
2. We can then use data filters to understand traffic via query parameters (UTM parameters) to determine how people arrived on the page, which links were clicked, and which email was clicked (maybe you have multiple emails in a sequence you’re trying to track).
3. We can then use data filters to understand the events on the page. For example, has someone clicked the Get Started or Free Trial buttons?

You can then return to your leadership and recommend adjusting the marketing spend based on actual campaign data. Also, when you determine what is producing the desired outcomes, you can go to leadership and ask for more budget because you will have the information and data you need to tell them the precise return on ad spend per channel.

## Conclusion

Using Umami to measure the impact and effectiveness of your campaigns is a vital step in achieving
your marketing goals. By setting up event tracking and adding UTM parameters to your links, you can gain
valuable insights into your website's performance and attribute the success of your campaigns to
specific campaigns, creative, and more. With the help of Umami's dashboards and custom reports, you can
easily filter and analyze your data to make data-driven decisions that will help you optimize your
marketing efforts and drive business outcomes.

If you want to take your campaign measurement to the next level, try [Umami](https://cloud.umami.is/signup?ref=umami-docs-guides). Start tracking your
website activity today, and use the data to make informed decisions to help you achieve your marketing goals.


# Migrate MySQL to PostgreSQL (/docs/guides/migrate-mysql-postgresql)

As part of Umami v3, we are removing MySQL as a supported database option and standardizing on PostgreSQL.
This change ensures a more consistent and scalable data layer across all environments.

## Data migration

This document outlines the migration process from MySQL to PostgreSQL, including:

* Preparing MySQL dump file or CSVs.
* Verifying data integrity and application compatibility.

The goal is to make the transition seamless, while preserving all data and ensuring minimal downtime. There are open-source tools like
`pgloader` and `pg_chameleon` that you may explore. The process outlined below is a pure data migration into a new v2 PostgreSQL database,
making this method as simple and agnostic as possible.

## Requirements

* MySQL Database schema must be in sync with the latest v2 version (v2.19.0).
* Credentials to both databases:

```shell
MySQL: mysql://user:password@host:port/dbname

PostgreSQL: postgresql://user:password@host:port/dbname
```

## Install Umami with a PostgreSQL database

1. Install Umami (v2.19.0) on a PostgreSQL server. Documents are the installation process can be found [here](/docs/install).
2. Truncate the tables below. These tables will be populated from the MySQL import.

```sql
truncate table "_prisma_migrations";
truncate table "user";
```

## Running migration

### MySQL dump file

For smaller databases (less than 1 million records) you can use a MySQL dump file. Official docs can be found [here](https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html).

1. Generate a MySQL dump file.

```shell
mysqldump --no-create-info --default-character-set=utf8mb4 --quick --skip-add-locks \
-u username -p mydb > mydbdump.sql
```

2. Replace backticks with double quotes to make it PostgreSQL compatible.

```shell
sed -i 's/`/"/g' mydbdump.sql
```

3. Run the dump file using psql

```shell
psql -U username -d mydb < mydbdump.sql
```

Docker version

```shell
docker exec -i my-container psql -U username -d mydb < mydbdump.sql
```

Now you can upgrade to Umami (v3.0)

### Generating CSVs

For larger databases, the dump file may be too large and the insert statement may become inefficient.

1. Generate MySQL CSV's for all the necessary tables with data.

Inside the MySQL shell:

```sql
SELECT *
INTO OUTFILE '/tmp/website_event.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM website_event;
```

**Notes**

* The file path (/tmp/users.csv) is on the MySQL server's filesystem, not necessarily your host.
* Make sure MySQL has permission to write there (secure\_file\_priv may restrict this).

2. Move the file from MySQL server to location accessible by psql using `scp` or `cp`.

3. Use psql `\COPY` command to import the CSVs into PostgreSQL database. Repeat command for each table.

```shell
psql -U postgres -d mydb -c "\COPY website_event FROM 'website_event.csv' CSV NULL '\N'"
```

**Notes**

* Include schema if not using default schema.


# Migrate v1 to v2 (/docs/guides/migrate-v1-v2)



Umami v2 introduces a redesigned schema and a number of breaking changes.

## Breaking changes

* The API endpoints have changed including new ones being added. See [API](/docs/api) for more information.
* The tracker script has been renamed from `umami.js` to `script.js`.
* The collect api endpoint has been renamed from `/api/collect` to `/api/send`.
* The tracker no longer uses CSS class names to trigger events. It now uses HTML data attributes. See [Track events](/docs/track-events) for more information.
* The methods on the global `umami` JavaScript object have changed. There is now a single `.track()` method and a new way to send event data.
  See [Tracker functions](/docs/tracker-functions) for more information.
* The `TRACKER_SCRIPT_NAME` environment variable no longer appends the `.js` extension to the script name. See [Environment variables](/docs/environment-variables) for more information.

## Data migration

Due to the schema changes, your data in your v1 database needs to be converted into v2.
To assist with the migration we created a script `@umami/migrate-v1-v2` that will migrate all of your data for you.

### Requirements

* Database schema must be in sync with the latest v1 version (v1.4.0). The script will query the prisma migrations table to ensure the latest migrations have been ran.

### Important

* Backup your target database prior to use. Potential data loss may occur if the migration is interrupted.
* For users with larger datasets (5M+), the migration may take while. Please plan accordingly.
* The script will NOT migrate any event data into v2.
* The script will ask you if you want to drop your v1 tables after the migration is complete.
* If an `event_data` table is found populated with data, it will be renamed to `v1_event_data` but not dropped.

### Troubleshooting

* If your `DATABASE_URL` is localhost and the migration can't connect to the database, try changing to an IP address, for example: `127.0.0.1`.

## Running migration

There are two ways to run the migration script.

### Running inside the Umami folder

Use this method if you have terminal access to your application folder.
Make sure your application is already built. If not run `yarn build` first.

```shell
cd umami
npx @umami/migrate-v1-v2@latest
```

### Running standalone

Use this method if you don't have access to your application folder like when deployed to Vercel or Netlify.

**Install**

```shell
git clone https://github.com/umami-software/migrate-v1-v2.git
cd migrate-v1-v2
yarn install
yarn build
```

**Configure**

Create an `.env` file with the following variable defined:

```
DATABASE_URL={connection url}
```

**Run**

```shell
yarn start
```

## Docker migration

Go into your running Docker container. You can find the name by the output of `docker ps`.

```shell
docker exec -ti -u 0 <app container name> sh
```

Run the migration script.

```shell
npx @umami/migrate-v1-v2@latest
```

When the migration is run successfully, it should look like this:

<img alt="image" src={__img0} placeholder="blur" />


# Running on CapRover (/docs/guides/running-on-caprover)

[CapRover](https://caprover.com) is an extremely easy to use app/database deployment & web server manager for your NodeJS, Python, PHP, ASP.NET, Ruby, MySQL, MongoDB, PostgreSQL, WordPress (and etc...) applications!
It's blazingly fast and very robust as it uses Docker, nginx, LetsEncrypt and NetData under the hood behind its simple-to-use interface.

* CLI for automation and scripting
* Web GUI for ease of access and convenience
* No lock-in! Remove CapRover and your apps keep working!
* Docker Swarm under the hood for containerization and clustering
* Nginx (fully customizable template) under the hood for load-balancing
* Let's Encrypt under the hood for free SSL (HTTPS)

## Setup

Setup of CapRover Umami is fairly easy. Follow the steps below to set up a Umami on CapRover:

### 1. Visit your CapRover Dashboard

Login to your existing CapRover instance account at `captain.your-sub-domain.your-domain.xx`.

If you don't have an existing CapRover instance check out their docs at [CapRover - Get Started](https://caprover.com/docs/get-started.html).

### 2. Create app from template

Click on the "Apps" section of your CapRover instance.
Now select "One-Click Apps/Databases" and search for Umami. You will find 3 options:

* `umami_postgresql` will create Umami with a PostgreSQL database.
* `umami_mysql` will create Umami with a MySQL database.
* `umami_only` will create Umami alone and you need run your database infrastructure on your own and provide the database credentials in the setup.

### 3. Setup Umami with database

After selecting `umami_postgresql` or `umami_mysql` from the CapRover One-Click Apps, you'll be prompted with a setup page where you can specify some env variables. Notice how most of them are already configured.

* `App Name` is the display name for your Umami instance in CapRover.
* `PostgreSQL or MySQL Version` can be any PostgreSQL OR MySQL version available on [PostgreSQL - Docker Hub](https://hub.docker.com/_/postgres) or [MYSQL - Docker Hub](https://hub.docker.com/_/mysql). The default value has successfully been tested to work with Umami.
* `CapRover Umami Version` refers to the CapRover Umami latest release found on the [Umami release page](https://github.com/umami-software/umami/releases). CapRover Umami will use the official Docker image that been released for specific database that you chose. Instead of using the version number like `v.1.33.x` you can use `latest` to build using the latest version of Umami.
* `Database password` provides the used password for your database. There will always be a default value ready for you.
* Optional: `Arguments for 'PostgreSQL initdb'` you can also provide arguments for PostgreSQL initdb like for example `--data-checksums` this option only available in `umami_postgresql`.

Now just click on "Deploy" to start the setup of your CapRover Umami instance with Database service.
Please do not leave the page until it's done.

### 4. Setup Umami without database services

In some scenarios you may need to manage your database service on your own or use a remote database service for your umami application for doing that you can use `umami_only` CapRover app.

Before setting up this application, you need create a database service using MySQL or PostgreSQL.

After you setup your database, click on `umami_only` in CapRover and fill the variables in the setup:

* `App Name` is the display name for your Umami instance in CapRover.
* `CapRover Umami Version` refers to the CapRover Umami latest release found on the [Umami release page](https://github.com/umami-software/umami/releases). CapRover Umami will use the official docker image that been released for specific database that you chose. instead of using the version number like `v.1.33.x` you can use `latest` to build using the latest version of Umami.
* `Database Type` set to `postgresql` or `mysql` according to your database service.
* `Database Remote URL` is the database service remote url that Umami can use to connect to the database. If your database is in your CapRover network use `srv-captain--appName`.
* `Database User` is your database user.
* `Database Table` is the table that you created for your Umami application.
* `Database Password` is your database password.

Now just click on "Deploy" to start the setup of your CapRover Umami instance.

Please do not leave the page until it's done.

### 4. Final checkouts

You're now able to login to your Umami deployment at `app-name.your-sub-domain.your-domain.xx` as described in the [Login](/docs/login) section. Please immediately change your password on the profile page.

### 5. Updating existing umami instance

First make a backup from your database before doing the update. After you make a backup, just go to the CapRover panel and select your Umami app.
Go to the `Deployment` tab and scroll down to `Deploy via ImageName` and deploy the desired version from the [Umami Docker Registry](https://github.com/umami-software/umami/pkgs/container/umami).

NOTE: do not forget to select the right Docker image according to your database. Usually the MySQL images are prefixed with `mysql_` and the PostgreSQL images are prefixed with `postgresql_`.

## Support

Create an issue on [GitHub](https://github.com/caprover/one-click-apps/issues).


# Running on DigitalOcean (/docs/guides/running-on-digitalocean)

[DigitalOcean](https://m.do.co/c/c9ebc1c0928d) is an affordable cloud hosting provider that will let you host
your own Umami setup. In this setup guide we are going to install
[Ubuntu](https://ubuntu.com/), a [PostgreSQL](https://www.postgresql.org/) or [MySQL](https://www.mysql.com/) database,
an [Nginx](https://www.nginx.com/) webserver, [Node.js](https://nodejs.org/) and Umami.
DigitalOcean also has a [NodeJS droplet build](https://marketplace.digitalocean.com/apps/nodejs) that comes with Node.js, Ubuntu and Nginx which can get you started quicker.

For personal use, you can start with a single $5 a month cloud server
and scale up as needed. You can use this **[link](https://m.do.co/c/c9ebc1c0928d)**
to get a $100 credit for the first 60 days.

Note, these steps can be repeated on any cloud hosting provider that offers Ubuntu.

## Install Ubuntu

* [Initial server setup with Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04)

## Install database (PostgreSQL or MySQL)

* [How to install PostgreSQL on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)
* [How to install MySQL on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

## Install Nginx

* [How to install Nginx on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)

## Install Node.js

* [How to install Node.js on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

## Install Umami

* See [Install](/docs/install) under **Getting started**

## Running Umami

You can simply run `npm start` to start Umami, but it's highly recommended you use a process manager like [PM2](https://pm2.keymetrics.io/) which will handle restarts for you.

To run with PM2:

```shell
npm install pm2 -g
cd umami
pm2 start npm --name umami -- start
pm2 save
```

## Proxying with Nginx

With Umami now running, you can proxy requests to a domain or subdomain from Nginx to Umami.

The following config will send all requests from `umami.yourdomain.com` to your local Umami instance.

```nginx
server {
  server_name umami.yourdomain.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

The following config will allow you to host Umami at a subpath for your domain (eg: website.com/stats).
This requires setting the enviroment variable `BASE_PATH=/stats` in your `.env` file.

```nginx
server {
  ...
  location /stats/_next/static/ {
    alias /your_install_location/umami/.next/static/;
    access_log off;
    expires max;
  }
  location /stats {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
  ...
}
```

## Adding an SSL certificate (optional)

* [How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

## Finish

That's it! You're now self-hosting Umami on your own server.


# Running on Fly.io (/docs/guides/running-on-fly-io)

[Fly.io](https://fly.io) turns containers into VMs that can be deployed in one or multiple regions. The `fly launch` process can automatically set up Postgres VM that in connection with your Umami app.

## Setup using Umami's pre-built container

For anyone wishing to deploy Umami on Fly now, here's a simple method using [Umami's pre-built container for postgres](https://github.com/umami-software/umami/pkgs/container/umami/123905077?tag=postgresql-latest) instead of pulling the source and modifying the Dockerfile.

If you don't already have `flyctl` installed, [install it](https://fly.io/docs/hands-on/install-flyctl/).

1. In a new directory for your app, create `fly.toml`:

```toml
kill_signal = "SIGINT"
kill_timeout = "5s"

[experimental]
auto_rollback = true

[build]
image = "docker.umami.is/umami-software/umami:postgresql-latest"

[[services]]
protocol = "tcp"
internal_port = 3000
processes = ["app"]

[[services.ports]]
port = 80
handlers = ["http"]
force_https = true

[[services.ports]]
port = 443
handlers = ["tls", "http"]

[services.concurrency]
type = "connections"
hard_limit = 25
soft_limit = 20

[[services.tcp_checks]]
interval = "15s"
timeout = "2s"
grace_period = "1s"
```

2. `fly launch` and choose to create an app with the found `fly.toml` configuration.
3. Go through the launch steps, and choose `y` on the step to create a connected Postgres app.
4. Choose not to deploy the app yet.
5. `fly secrets set APP_SECRET="<any-string-minus-angle-brackets>"`, using whatever string you want to salt the hash.
6. `fly deploy` There will be errors, but let the deployment complete.
7. `fly scale memory 512` (or higher, if needed. Umami seems to fail with less than 512 MB RAM)
8. `fly deploy`
9. Following the [Umami docs](https://umami.is/docs/login), log in with user: `admin` and password: `umami`

Adjust instance locations, number of machines, auto-scaling, custom domains for your Umami app, and any other Fly.io options as per Fly [docs](https://fly.io/docs/)


# Running on Forge (/docs/guides/running-on-forge)

[Forge](https://forge.laravel.com/) is a paid server management services, tailored to hosting Laravel apps on Server Providers like DigitalOcean,
Linode, Vultr, Amazon, Hetzner and more.

If you have a Forge Account and a connected server bucket, you can easily set up an Umami installation.

## Prerequisites

1. Configure the (sub) domain you would like to have Umami available on. Usually, you do this by configuring you DNS config with an A-Record that points to your bucket IP-Address.

## Setup

1. Select your desired Server in Forge.

2. Go to **Sites** > **New Site**
   * Enter the domain name
   * Project Type: Static HTML
   * Check **Create Database**, enter a Database Name
   * Click **Add**

3. To install the Repository, fork the [https://github.com/umami-software/umami](https://github.com/umami-software/umami) project to your GitHub account or install from the official repository.
   * Enter the Repository path: `umami-software/umami`
   * Uncheck **Install Composer Dependencies**
   * Click **Install Repository**

4. Update the deployment script and add the following after the `git pull origin $FORGE_SITE_BRANCH` command.

   ```shell
   yarn install
   yarn build
   ```

   Remove these lines, since we don't have artisan or use php:

   ```shell
   ( flock -w 10 9 || exit 1
   echo 'Restarting FPM...'; sudo -S service $FORGE_PHP_FPM reload ) 9>/tmp/fpmlock

   if [ -f artisan ]; then
       $FORGE_PHP artisan migrate --force
   fi
   ```

5. In Forge, go to your Server page, click **Database** and add a user to the just created database.

6. Create the database-connection string and add it to your `.env` file:

   ```dotenv
   DATABASE_URL=mysql://user:password@localhost:3306/dbname
   ```

   The connection url is in the following format:

   ```dotenv
   DATABASE_URL=postgresql://username:mypassword@localhost:5432/mydb
   DATABASE_URL=mysql://username:mypassword@localhost:3306/mydb
   ```

7. Perform the initial project setup, via SSH:

   ```shell
   yarn install
   yarn update-db
   yarn build
   ```

8. Go to your Umami-Site and click on **SSL** in the left menu and add an SSL-Certificate.

9. Click **Edit files** > **Edit Nginx Configuration** and overwrite the following block:

   ```nginx
   location / {
     proxy_pass http://localhost:3000;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection 'upgrade';
     proxy_set_header Host $host;
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_cache_bypass $http_upgrade;
   }
   ```

   This configuration will route the traffic to the node-server that Umami runs on.

10. In Forge, go to your Server page, click **Daemons** and add **New Daemon** to keep the Umami Node-Server up and running.
    * Command: `yarn start`
    * Directory: `/home/forge/umami.yourdomain.tld`
    * Click **Create**

You should now be able to reach your Umami project.


# Running on Heroku (/docs/guides/running-on-heroku)

> [Heroku](https://www.heroku.com/) is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. The platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.
>
> From the ["What is Heroku?" section](https://www.heroku.com/about) of their website.

Heroku provides a free hosting service which works with Umami as well as databases through add-ons.
You don't need to have a database set up before this setup guide.

## Setup

[<img alt="Deploy" src="https://www.herokucdn.com/deploy/button.svg" width="147" height="32" />](https://heroku.com/deploy?template=https://github.com/umami-software/umami)

*Automate all steps using the button above*

### Website

1. Fork a copy of the [Umami repository](https://github.com/umami-software/umami).
2. Create an account on [Heroku](https://heroku.com/).
3. From the dashboard page click **New > Create new app**.
4. Choose an **App name** and then click **Create app**.
5. Under **Deployment method** click **GitHub** and follow the instructions to connect Heroku to GitHub.
6. Search for the repository and click **Connect**.

### Database

1. Navigate to the **Resources** tab and click on the **Find more add-ons** button.
2. Search for **Heroku Postgres** and follow its instructions to install the add-on.
3. The add-on will set the `DATABASE_URL` automatically; you should not have to manually set it.
4. You will need to set up the database tables by following the **Create database tables** section of the [Install](/docs/install) docs.
   You can find temporary connection details by following the **Resources > Heroku Postgres > Settings > Database Credentials** path.
   To run commands found in the docs click **More > Run Console**.

### Build and Deploy

1. With the environment variables and database set up, click the **Deploy > Manual Deploy > Deploy Branch** button.
2. Once the build has finished, the website should be live. Follow the **Open app** button at the top of the dashboard to view it.
3. Follow the **Getting started** guide starting from the [Login](/docs/login) step.


# Running on Koyeb (/docs/guides/running-on-koyeb)

[Koyeb](https://www.koyeb.com) is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, free SSL, a global edge network, and built-in service mesh and discovery.

## Setup

In this guide, you need to have a PostgreSQL database server running and accepting remote connections. If you do not already have a database, you can check out the **Managed database** section under [Hosting](/docs/guides/hosting).

> You will need to set up the database tables by following the **Create database tables** section of the [Install](/docs/install) docs.

To deploy Umami, we use the [Koyeb CLI](https://github.com/koyeb/koyeb-cli), you can also perform the setup using the [Koyeb control panel](https://app.koyeb.com).

### Create Koyeb Secrets

Create one Koyeb secrets to securely store your `DATABASE_URL`. In the terminal execute the following command:

```shell
$ koyeb secret create umami-database-url
Enter your secret: postgres://<user>:<password>@<host>:<port>/<db-name>?sslmode=require

$ openssl rand -hex 32 | koyeb secret create umami-hash-salt --value-from-stdin
```

### Deploy Umami

Once you’ve created the secrets, you can deploy Umami. In your terminal run the following command to create a new Koyeb App and deploy the Umami service:

```shell
koyeb app init umami --docker docker.umami.is/umami-software/umami:postgresql-latest --ports 3000:http --routes /:3000 --env DATABASE_URL=@umami-database-url
```

Your Umami service is being deployed. To retrieve the Umami URL run:

```shell
$ koyeb app get umami
ID                                  	NAME     	DOMAINS                         	UPDATED AT
30de8301-05b1-4131-a842-28e608900000	umami   	umami-<YOUR_KOYEB_ORG>.koyeb.app	2021-07-06 11:58:01.143967 +0000 UTC
```

Open the URL to access Umami and follow the **Getting started** guide starting from the [Login](/docs/login) step.


# Running on Neon Postgres (/docs/guides/running-on-neon)

[Neon](https://neon.tech/) is a fully-managed serverless Postgres service.

## Setup

1. Create a project on Neon with a given name in a region close to where you will be hosting your Umami project.
   * You can also create a Neon project with the Neon CLI: `npx neonctl projects create`. The connection string will be printed to the console.
2. Get the database connection string with pooled connection enabled. It should look something like this: `postgres://user:passwd@endpoint-pooler.region.aws.neon.build/neondb`.
   * You can also get the connection string with Neon CLI: `npx neonctl connection-string --project-id <project-id> --pooled`.
3. **Important:** add `?pgbouncer=true&connect_timeout=10` to the connection string you just copied.
4. Add `DATABASE_URL` to your `.env` file:
   ```text
   DATABASE_URL=postgres://user:passwd@endpoint-pooler.region.aws.neon.build/neondb?pgbouncer=true&connect_timeout=10
   ```
5. You should now be able to check the database connection and update the schema (`yarn run build-db && yarn run update-db`).
6. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.


# Running on Netlify (/docs/guides/running-on-netlify)

[Netlify](https://netlify.com/) provides a free hosting service which is ideal for GitHub organizations.

In this setup, you should already have a database server running and accepting remote connections. If you don't already have a
database, you can follow the [Running on DigitalOcean](/docs/running-on-digitalocean) guide to get a database up and running. You
can also check out the **Managed databases** section under [Hosting](/docs/guides/hosting).

## Setup

[<img alt="Deploy with netlify" src="https://www.netlify.com/img/deploy/button.svg" width="179" height="32" />](https://app.netlify.com/start/deploy?repository=https://github.com/umami-software/umami)

*Automate steps 1-5 using the button above*

1. Fork the [https://github.com/umami-software/umami](https://github.com/umami-software/umami) project to your GitHub account.
2. Create an account on [Netlify](https://netlify.com/).
3. From the dashboard page click **Import Project** then specify the URL to your fork of the project on GitHub.
4. Change build command to **yarn run build**.
5. Add the required environment variables `DATABASE_URL`. These values are defined in the
   **Configure Umami** step from [Install](/docs/install).
6. Deploy and visit your application.
7. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.


# Running on Nodion (/docs/guides/running-on-nodion)

[Nodion](https://www.nodion.com/en/) is a PaaS provider offering a [1-Click Deploy option](https://www.nodion.com/en/deploy/umami/) for Umami, allowing you to launch your own Umami instance with a Managed PostgreSQL Database in Frankfurt, Washington, San Francisco, or Singapore. Including account setup, it takes just 2 minutes to get started, no additional services or providers are needed.

Pricing starts at €3.50 per month for the smallest instance and database type. You can scale up to 16 instances per application, with RAM ranging from 0.5 GB to 32 GB. The managed PostgreSQL database is available with RAM from 0.5 GB up to 512 GB.

## 1-Click Deploy Button

[<img alt="Deploy" src="https://nodion-static.nodioncdn.com/nodion-button-m.svg" width="200" height="38" />](https://my.nodion.com/applications/new?preset=umami)

### Setup Instructions

1. Create an account on [Nodion](https://my.nodion.com/auth/sign_up).
2. After verifying your account you can navigate to [Install Umami](https://my.nodion.com/applications/new?preset=umami)
3. Choose a **Name** for your application, an **instance type**, the **amount of instances**, the **database type** for the managed PostgreSQL database and a **region**
4. After creating the application, the deployment starts automatically
5. After finishing you are able to visit your installation on the included subdomain
6. Feel free to add any custom domain within the Application **Settings** > **Custom Domains**

[<img alt="Screenshot" src="https://nodion-static.nodioncdn.com/deploy-umami-1.png" width="2594" height="2632" />](https://my.nodion.com/applications/new?preset=umami)


# Running on Northflank (/docs/guides/running-on-northflank)

[Northflank](https://northflank.com) is a fully managed platform for building, deploying, and scaling applications using containers. It combines the flexibility of cloud infrastructure with a simple developer experience so you can focus on your app instead of managing servers.

Northflank provides free and paid hosting plans that let you deploy Umami together with a managed PostgreSQL database, all configured automatically.

## Setup Website and Database

### Northflank Button (Recommended)

[<img alt="Deploy on Northflank" src="https://assets.northflank.com/deploy_to_northflank_smm_36700fb050.svg" width="229" height="43" />](https://northflank.com/stacks/deploy-umami)

Click the button above to deploy your own Umami instance with a managed PostgreSQL addon and all environment variables preconfigured.

Once the stack is deployed, go to your Umami service in the Northflank project dashboard and open the public URL.

You should see the setup screen where you can create your admin account and start using Umami.

## Running on Northflank manually

The one-click deployment is the easiest way to get started, but you can also deploy Umami manually using the template configuration.

1. Create a new project on [Northflank](https://northflank.com).
2. Add a **PostgreSQL addon** to the project.
3. Create a **Deployment service** using the Docker image `umamisoftware/umami:postgresql-latest`.
4. Expose port `3000` publicly.
5. Add the following environment variables and link them to your database:
   * `DATABASE_URL` — connection string from the PostgreSQL addon
   * `DATABASE_TYPE=postgres`
6. Deploy the service.

Once deployed, open the public URL of your service to finish the Umami setup.

### Notes

* Data is stored in the PostgreSQL addon and persists across deploys.
* You can scale the service or update the image version from the dashboard.
* Read more about [adding a website](https://umami.is/docs/add-a-website) and [collecting data](https://umami.is/docs/collect-data) here.


# Running on PlanetScale (/docs/guides/running-on-planetscale)

[PlanetScale](https://planetscale.com/) is a MySQL-compatible serverless database platform powered by [Vitess](https://vitess.io/).

## Setup

1. Follow [Install](https://umami.is/docs/install) documentation up to "Configure umami" section.

2. Create a database on [PlanetScale](https://app.planetscale.com/) called `umami-db` and copy the `DATABASE_URL` string from "Connect" > "Connect with Prisma" > ".env" tab.

3. Add the `DATABASE_URL` to your `.env` file:

   ```dotenv
   DATABASE_URL=mysql://username:password@host/umami-db?sslaccept=strict
   ```

4. Run `yarn run build-db && yarn run update-db`

5. Visit the `umami-db` dashboard and make sure the Tables are created and then promote it to production if you want.

6. You should now be able to build and start Umami (`yarn build` followed by `yarn start`).

7. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.

### Troubleshooting

If are getting an error like the following example:

```text
PrismaClientInitializationError: Can't reach database server at `host.aws-region.psdb.cloud`:`3306`
```

You can try add a connection timeout query parameter on your `DATABASE_URL`:

```dotenv
DATABASE_URL=mysql://username:password@host/umami-db?sslaccept=strict&connect_timeout=300
```


# Running on Qovery (/docs/guides/running-on-qovery)

[Qovery](https://www.qovery.com) is a fully-managed cloud platform that runs on your AWS, Digital Ocean and Scaleway account where you can host static sites, backend APIs, databases, cron jobs, and all your other apps in one place.

Qovery provides **free hosting** for individual developers and include the following scrollBlock:

* Continuous, automatic builds & deploys from GitHub and GitLab.
* Automatic SSL certificates through [Let's Encrypt](https://letsencrypt.org).
* Free managed PostgreSQL.
* Free SSD storage.
* Unlimited collaborators.
* Unlimited [custom domains](https://hub.qovery.com/docs/using-qovery/configuration/application/#domains).

## Setup

### 1. Create a Qovery Account

Visit the [Qovery dashboard](https://start.qovery.com) to create an account if you don't already have one.

### 2. Create a project

* Click on **Create project** and give a name to your project.
* Click on **Next**.

<img alt="Create a project" src="https://hub.qovery.com/img/heroku/heroku-2.png" width="2318" height="1026" />

### 3. Create a new environment

* Click on **Create environment** and give a name (e.g. staging, production).

<img alt="Create a new environment" src="https://hub.qovery.com/img/heroku/heroku-3.png" width="2318" height="1026" />

### 4. Add your Umami app

* Click on **Create an application**, give a name and select your GitHub or GitLab repository where your Umami app is located.
* Define the main branch name and the root application path.
* Click on **Create**.

<img alt="Add your application" src="https://hub.qovery.com/img/rust/rust.png" width="1014" height="1320" />

After the application is created:

* Navigate to your application **Settings**.
* Select **Port**.
* Add port used by your Umami application.

### 5. Deploy a database

Create and deploy a new database PostgreSQL database by [following this guide](https://hub.qovery.com/guides/getting-started/create-a-database).

### 6. Add storage

To add storage, go to your application **Settings**:

<img alt="Add storage" src="https://hub.qovery.com/img/add-storage.png" width="2022" height="872" />

### 7. Setup your Umami configuration

To use PostgreSQL provided by Qovery, you can use the built-in secrets and environment variables. You can read more about environment variables and secrets in our [configuration section](https://hub.qovery.com/docs/using-qovery/configuration/environment-variable/).

### 8. Deploy the app on Qovery

All you have to do now is to navigate to your application and click on **Deploy**.

<img alt="Deploy the app" src="https://hub.qovery.com/img/heroku/heroku-1.png" width="1018" height="424" />

That's it. Watch the status and wait till the app is deployed.

To open the application in your browser, click on **Action** and **Open** in your application overview

## Support

Chat with Qovery developers on [Discord](https://discord.qovery.com) if you need help.


# Running on Railway (/docs/guides/running-on-railway)

[Railway](https://railway.app/) is attempting to build software development infrastructure for humans. It's founded with the core ideology that building software should be "Take what you need, leave what you don't" and that the current iteration of tools for software development is far too complicated for current generations of developers, let alone the ones that come next. As a result, Railway handles your builds, deployments, scaling, and management of infrastructure; from development to production!

Railway provides a free hosting services which allows you to deploy Umami and set up a PostgreSQL database so you can have your self-hosted version at the click of a button.

## Setup Website and Database

### Railway Button (Recommended)

[<img alt="Deploy on Railway" src="https://railway.app/button.svg" width="183" height="40" />](https://railway.app/new/template/umami-analytics)

Click the button above to deploy your self-hosted version of the Umami website along with an automagically provisioned PostgreSQL database.

You should now be able to visit your Umami dashboard and set up sites that you want to track analytics for.

You can find the URL in your project dashboard which you can visit by running `railway open`.

## Running on Railway from a forked repository

The previously described method is the quickest and easiest way to get Umami up and running on Railway. However, this creates a new repository with a single commit under your GitHub account. You may want to use a forked repository instead to be able to conveniently receive updates from (or contribute pull requests to) the Umami source repository via GitHub.

### Set up Railway project

1. Fork the [Umami repository](https://github.com/umami-software/umami).
2. Create an account on [Railway](https://railway.app/) connected to GitHub.
3. If you wish, you can give Railway permission only to your Umami fork repository when linking your GitHub account.
4. From the dashboard page click **New Project > Deploy from repo**.
5. Choose your forked Umami repository and select the **master** branch.
6. Add a second variable called `PORT`, set its value to a valid port number (eg: `3000`). Click **Add**.
7. Add a third variable called `DATABASE_TYPE`, set its value to `postgres`. Click **Add**.
8. Add a fourth variable called `HOSTNAME`, set its value to `0.0.0.0`. Click **Add**.
9. Click **Deploy**.

This initial deploy will fail until you follow the rest of these steps.

### Database and Deploy

1. Close the settings sidebar and click **New**, click **Database** and select **Add PostgreSQL**.
2. On the dashboard, select your Umami service, go to the **Variables** tab and click **New Variable**.
3. Click **Add Reference** and select the `DATABASE_URL` variable from your Postgres database. Click **Add**.

Adding the database should trigger a re-deploy, and clicking the app link should get you to the login page of your Umami instance.

### Troubleshooting

If Railway states `Your project has no deploys` within your dashboard.

1. Select `Set up your project locally` in the bottom left hand corner.

2. Within the `umami` root directory follow the instructions within the pop up.

* Login to your Railway account with `railway login`
* Link your project with `railway link`
* Open your project dashboard with `railway open`
* Upload and deploy your project with `railway up`

3. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.

### Notes

* Read more about [adding a website](https://umami.is/docs/add-a-website) and [collecting data](https://umami.is/docs/collect-data) here


# Running on Sevalla (/docs/guides/running-on-sevalla)

[Sevalla](https://sevalla.com) is a developer-focused PaaS that offers [one-click templates](https://docs.sevalla.com/templates/overview), managed databases, and global deployments powered by GKE and Cloudflare, without dealing with complex infrastructure.

Sevalla supports Git-based deployments, Dockerfiles, container images, and most popular frameworks out of the box. This guide walks you through deploying Umami on Sevalla using their one-click template or by deploying manually with your own GitHub repository.

To get started, [create a Sevalla account](https://sevalla.com), and you’ll receive **$50 in free usage credits** to try things out.

## Method 1: One-click deployment (recommended)

Sevalla provides an official Umami template that provisions an Umami app and a PostgreSQL database with a single click.

[<img alt="Deploy on Sevalla" src="https://sevalla.com//deploy-on-sevalla.svg" width="206" height="48" />](https://app.sevalla.com/template/umami)

Click the button above to get started easily. Your app will be live within a few minutes. Then click the **Visit App** button and log in using the [default credentials](https://umami.is/docs/login).

## Method 2: Manual deployment

If you prefer more control, you can manually deploy from your own GitHub repo or from the public Umami repo.

### Set up Sevalla project

1. Go to **Applications** > **New Application**
2. Choose **GitHub repo** (if you’ve forked [Umami](https://github.com/umami-software/umami)), or **Public repo** and paste: `https://github.com/umami-software/umami`
3. Set the branch to `master`, enter an app name, choose a region (same as your database), and select a pod size based on your needs.
4. Click **Create**, but skip the deploy step for now, so it does not fail since we have not added the database.

### Database and deploy

1. Go to **Databases** > **Add database**
2. Choose **PostgreSQL** (recommended), select the **same region** as your app, pick a size, and click **Create**.
3. Once created, scroll to **Connected Applications**, click **Add Connection**, select your Umami app, and enable **“Add environment variables”.**
4. Set the variable name as `DATABASE_URL` (It may be prefilled as `DB_URL`, change it to `DATABASE_URL`)
5. Click **Add connection.** This links your app and DB with the correct environment variable.
6. Go back to your application and click **Deploy**. Once the build is complete, visit your app’s URL and log in using the [default credentials](https://umami.is/docs/login).


# Running on Supabase (/docs/guides/running-on-supabase)

[Supabase](https://supabase.com/) is a open source Firebase alternative built on the Postgres database.

## Setup

1. Edit db/postgresql/schema.prisma to add directUrl = env("DIRECT\_DATABASE\_URL")

2. Create a project on Supabase with a given name in a region close to where you will be hosting your Umami project.

3. Get the database connection string from the **Settings > Database** page, then scroll to the bottom for the **Connection Pooling** section and copy the **Connection string**.

4. Add `DATABASE_URL` and `DIRECT_DATABASE_URL` to your `.env` file:

   ```dotenv
   DATABASE_URL=postgres://[db-user].[project-ref]:[db-password]@aws-0-[aws-region].pooler.supabase.com:6543/[db-name]?pgbouncer=true&connection_limit=1
   DIRECT_DATABASE_URL=postgres://postgres.[my-supabase-project-id]:[db-password]@aws-0-[aws-region].pooler.supabase.com:5432/postgres
   ```

5. You should now be able to build and start Umami (`npm run build` followed by `npm start`).

6. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.


# Running on Vercel (/docs/guides/running-on-vercel)

[Vercel](https://vercel.com/) is the company behind the framework [Next.js](https://nextjs.org/) which is used by Umami.
They also provide a free hosting service which is ideal for Next.js applications.

If you don't already have a database, you can create a Vercel Postgres database integration. You can also
follow the [Running on DigitalOcean](/docs/running-on-digitalocean) guide or the
[Running on PlanetScale](/docs/running-on-planetscale) guide to get a database up and running.
You can also check out the **Managed databases** section under [Hosting](/docs/guides/hosting).

## Setup

[<img alt="Deploy with Vercel" src="https://vercel.com/button" width="103" height="32" />](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fumami-software%2Fumami\&env=DATABASE_URL)

*Automate steps 1-5 using the button above*

1. Fork the [https://github.com/umami-software/umami](https://github.com/umami-software/umami) project to your GitHub account.
2. Create an account on [Vercel](https://vercel.com/).
3. From the dashboard page click **Import Project** then specify the URL to your fork of the project on GitHub.
4. Add the required environment variables `DATABASE_URL` to your Vercel project. These values are defined in the
   **Configure Umami** step from [Install](/docs/install). You can also create a Vercel Postgres database at this point.

* You should use `POSTGRES_PRISMA_URL` for umami, which is in the form of `postgres://user:passwd@endpoint-pooler.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=10`.
* The environment variable used for the database URL can be changed in the `db/postgresql/prisma.schema` file.

5. Deploy and visit your application at `<deploy-id>.vercel.app`.
6. Follow the **Getting started** guide starting from the [Login](/docs/login) step and be sure to change the default password.

### Proxy Umami Analytics via Vercel

Optionally, you can proxy Umami Analytics to serve Umami Analytics from your main domain. This is also useful for bypassing ad-blocker when using [Umami Cloud](https://umami.is/pricing).

See Vercel's [rewrites docs](https://vercel.com/docs/project-configuration).

In the root of your project, add the `vercel.json` file with the following contents:

```json
{
  "rewrites": [
    {
      "source": "/stats/:match*",
      "destination": "https://cloud.umami.is/:match*"
    }
  ]
}
```

The tracking code script tag should use `/stats/script.js` as `src` value:

```html
<script
  defer
  src="/stats/script.js"
  data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"
></script>
```


# Add a team (/docs/teams/add-a-team)







Create teams in Umami to organize users and share websites.

## Add a team

Log into Umami and click on the side nav dropdown then click **Settings**.

<img alt="image" src={__img0} placeholder="blur" />

Navigate to **Teams** and click on the **Create team** button.

<img alt="image" src={__img1} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img2} placeholder="blur" />

You will automatically be added to the team with the role of **Team owner**.


# Using teams (/docs/teams)





Umami teams allow organizations to group websites, users, and resources under a shared workspace for easier management and collaboration. This structure improves organization, access control, and visibility.

## Roles

Team roles and related permissions.

* **Team Owner**: All permissions.
* **Team Manager**: All permissions except deleting the team.
* **Team Member**: All permissions except deleting or updating the team.
* **View Only**: View only.

## Team access

There are two methods to access a team.

**Method 1:** Navigate to **Teams** and click on the team name under the **Name** column.

<img alt="image" src={__img0} placeholder="blur" />

**Method 2:** Use the quick team access dropdown from the Umami navbar.

<img alt="image" src={__img1} placeholder="blur" />


# Join a team (/docs/teams/join-a-team)









Join a team through a shared access code.

## Share team access code

Navigate to **Teams** and click on the team name.

<img alt="image" src={__img0} placeholder="blur" />

The first panel will show the teams access code. Share this code with users you want to join your team.

<img alt="image" src={__img1} placeholder="blur" />

You can generate a new access code by clicking the **Regenerate** button and saving.

## Join a team

Navigate to **Teams** and click on the **Join team** button.

<img alt="image" src={__img2} placeholder="blur" />

Enter the **Access code** your received from the team owner and click the **Join** button.

<img alt="image" src={__img3} placeholder="blur" />


# Manage a team (/docs/teams/manage-a-team)













Manage your team members and websites.

## Add a website

From the team, navigate to **Websites** and click on the **Add Website** button.

<img alt="image" src={__img0} placeholder="blur" />

Fill out the form details and click the **Save** button.

<img alt="image" src={__img1} placeholder="blur" />

## Edit/remove team member (Team owner only)

From the teams screen navigate to the members table and click on the **Edit** button to update the member role or click on the **Delete** button to remove the member from the team.

<img alt="image" src={__img2} placeholder="blur" />

## Transfer a website

Umami allows you to transfer a website between your account and a team that you own.

Navigate to **Websites** and click on the **Edit** button for the website you want to edit.

<img alt="image" src={__img3} placeholder="blur" />

Navigate to the **Transfer website** section and click the **Transfer** button.

<img alt="image" src={__img4} placeholder="blur" />

Fill out the form details and click the **Transfer** button.

<img alt="image" src={__img5} placeholder="blur" />