# utilhq Server

utilhq server is a fork of [Interval Server](https://github.com/interval/server) and intended to be a drop-in replacement. utilhq server is the central node used to run applications developed with the [utilhq SDK](https://github.com/utilhq/utilhq-node).

## Pre-requisites

### Required dependencies

#### Database

utilhq server requires a Postgres database to work. In the future, especially for local development, we may ease this requirement.

We have tested utilhq server with Postgres versions 11.x and 12.x. Newer versions should work, but we do not plan to support anything older than 11.x.

#### Node.js

utilhq server is a pure Node.js application. Node.js version 16 or higher is required to run utilhq server.

### Optional dependencies

- [Postmark](https://postmarkapp.com) is used for sending application emails. In the future we may introduce a vendor-agnostic path for sending emails. If a `POSTMARK_API_KEY` environment variable is not provided when running utilhq server, emails will not be sent.
- [WorkOS](https://workos.com) is used for SSO, directory sync, and Sign in with Google. If `WORKOS_API_KEY`,`WORKOS_CLIENT_ID`, and `WORKOS_WEBHOOK_SECRET` environment variables are not provided when running utilhq server, these functions will not be available.
- [Slack](https://slack.com) can be used to send notifications via utilhq's [notify](https://utilhq.com/docs/action-context/notify) methods. If `SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET` environment variables are not provided when running utilhq server, notifications cannot be sent via Slack.
- [S3](https://aws.amazon.com/s3/) can be used to support file uploads via utilhq's [file input](https://utilhq.com/docs/io-methods/input-file) methods. If `S3_KEY_ID`,`S3_KEY_SECRET`,`S3_BUCKET`, and `S3_REGION` environment variables are not provided when running utilhq server, file uploads will not function properly.

## Required environment variables

- `APP_URL` is the URL where your utilhq server instance is running. For example: `http://localhost:3000` or `https://example.com`.
- `DATABASE_URL` is the Postgres connection string. It should follow the format `postgresql://username:password@host:port/dbname`.
- `SECRET` is a secret that _you must provide_ for use in encrypting passwords. Any string is valid for this value, but you should use something secure!
- `WSS_API_SECRET` is a secret that _you must provide_. It is used internally by utilhq server for communication between utilhq services. Any string is valid for this value, but you should use something secure!
- `AUTH_COOKIE_SECRET` is a secret that _you must provide_ for use in encrypting session cookies. Any string **at least 32 characters in length** is valid for this value, but you should use something secure!

### Ports

utilhq server runs services on ports `3000` and `3033`. The main service runs on `3000`.

## Running utilhq server locally

For development, you may wish to run an instance of utilhq server locally.

1. `npm i -g @utilhq/server`
2. From the directory where you would like to run utilhq server, create a `.env` file like this:

```
DATABASE_URL=<YOUR DATABASE URL>
SECRET=<YOUR SECRET VALUE>
APP_URL=<YOUR APP URL>
AUTH_COOKIE_SECRET=<YOUR AUTH COOKIE SECRET>
WSS_API_SECRET=<YOUR WSS API SECRET>
```

_Note:_ you don't _need_ to use a `.env` file. As long as the [required variables](#required-environment-variables) are set, you should be good to go.

3. If you _have not_ already setup a database, run `utilhq-server db-init` to initialize one.
4. Run `utilhq-server start` to run `utilhq-server`.
5. 🎉 Visit http://localhost:3000 to access your utilhq server!

## Running utilhq server in production

Running utilhq server in production is largely the same as running in development. For convenience, we've created a Docker image to make this even easier.

The utilhq server Docker image is: `docker.io/alexarena/utilhq-server:latest`.

Many services [like Render](https://render.com/docs/deploy-an-image) make it trivial to deploy Docker images with just a few clicks.

Important things to know:

- You'll still need to provide all [required environment variables](#required-environment-variables) when running the utilhq server Docker image.
- Hosting providers like Render will automatically discover the utilhq server service running on port 3000 and will expose this port for you, but if your hosting provider doesn't do this, you'll have to handle exposing this yourself.

## Connecting to utilhq server from your app

Once your utilhq server instance is up and running, it's trivial to connect to it from your utilhq apps. Just add an `endpoint` property pointing to your utilhq server instance to the utilhq SDK's constructor. For example:

```js
const utilhq = new utilhq({
  apiKey: process.env.UTILHQ_KEY,
  endpoint: 'wss://<YOUR UTILHQ SERVER URL>/websocket', // Don't forget the /websocket path!
})
```

**Note:** if you're running utilhq server locally, this URL will use the insecure `ws://` protocol, _not_ the secure `wss://` version used in production deployments.

## Available utilhq-server commands

Once you run `npm i -g @utilhq/server`, the following commands are available:

### `utilhq-server start`

Starts utilhq server. See above for information on running utilhq server locally or in production.

### `utilhq-server db-init`

Creates and sets up an Postgres database for use with utilhq server.

[psql](https://www.postgresql.org/docs/7.0/app-psql.htm) must be installed for this command to work.

You must provide a `DATABASE_URL` environment variable of the form `postgresql://username:password@host:port/dbname` when running this command.

By default, the `db-init` command will attempt to create a database with the name provided in your `DATABASE_URL` environment variable. If you've already created the database and just need to apply create the appropriate tables etc., you can run `utilhq-server db-init --skip-create` to skip the database creation step.

## Contributing

For our initial release, we're focused on making it easy to setup and run your own utilhq Server instance. We'll make it easier to contribute (and document how you can) in the future, but for now we aren't actively soliciting new contributions.
