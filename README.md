# Natours

## _The tour booking application_

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="320" height="100" />
<img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" height="120"  />

This proejct created with Node.js, Express, MongoDB(Mongoose)

## Features

- Booking tour with an online payment api
- Listing bookable tours on overview page
- Authentication & Authorization process
- Map interaction with Mapbox
- And more...

## WARNING !

This project was created purely for personal development (with a Node.js course). Since there will be deficiencies in the source code within the project, it is strongly discouraged to use it for commercial purposes without the necessary corrections and additions.

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm install
```

## Configurations

To run the Node application, you must first set up the `.config.env` file

| KEY               | VALUE                                 |
| ----------------- | ------------------------------------- |
| NODE_ENV          | **development** or **production**     |
| DATABASE          | MongoDB connection url. (example-1)   |
| DATABASE_PASSWORD | MongoDB database password             |
| DATABASE_LOCAL    | Local MongoDB database connection url |
| JWT_SECRET        | Json Web Token secret key             |

**example-1** : `mongodb+srv://username:<PASSWORD>@exampleurl.mongodb.net/natours?retryWrites=true&w=majority&appName=Cluster0`
don't change the **<PASSWORD>**, this value will be replaced with the **DATABASE_PASSWORD** value on the `config.env`

### Email settings

This settings for get test emails no development . [mailtrap.io](https://mailtrap.io/) used here.
| KEY | VALUE |
| ------ | ------ |
| EMAIL_USERNAME | Mailtrap SMTP username |
| EMAIL_USERNAME | Mailtrap SMTP password |
| EMAIL_HOST | Mailtrap SMTP host |
| EMAIL_PORT | Mailtrap SMTP port|
| EMAIL_FROM | the recipient sees this in his email. (yourmail@example.com) |

Brevo email sending service settings. Obviously Brevo is not working in this project. It is recommended to use another service. Have a look at `utils/email.js`

| KEY            | VALUE               |
| -------------- | ------------------- |
| BREVO_USERNAME | Brevo SMTP username |
| BREVO_PASSWORD | Brevo SMTP password |

### Stripe key

Stripe used for testing purposes in this project. Already added Stripe Webhook settnigs. To get real paymetns, you can use another service instead of Stripe. Otherwise manage your Stripe account to get real payments.

Have a look
`controllers/bookingController.js`

| KEY                   | VALUE                  |
| --------------------- | ---------------------- |
| STRIPE_SECRET_KEY     | Your Stripe secret key |
| STRIPE_WEBHOOK_SECRET | Stripe Webhook Key     |

## Use Ready Data

Ready datas available in `dev-data/data` folder. To insert MongoDB database. Use `importData.js`

```sh
node importData.js --import
```

There is also the ability to delete old data in the same collections.

```sh
node importData.js --delete
```

## Run

Run on production mode.

```sh
npm run start:prod
```

Run on development mode.

```sh
npm run start
```

## Screenshots

<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/1.png" />
<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/2.png"  />
<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/3.png"  />
<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/6.png"  />
<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/5.png"  />
<img src="https://github.com/alihogl/Natours/blob/master/dev-data/screenshots/4.png"  />

<br><br><br>
**Ali Hüseyinoğlu**
<br><br>

<blockquote> 
<p dir="auto">Made with ❤️ &amp; ☕ </p>
</blockquote>
