# Realm Web and GraphQL Tutorial

Working app:
https://tasktracker-aubpu.mongodbstitch.com/

Follow along at https://docs.mongodb.com/realm/tutorial/web-graphql/

## Troubleshooting

- Be sure to **check the logs in Realm UI** for more information as well as the console in your app.
- Be sure to **deploy your changes** in the Realm UI.

## Issues & Pull Requests

If you find an issue or have a suggestion, please let us know using the feedback
widget on the [docs site](http://docs.mongodb.com/realm/tutorial).

This repo is automatically derived from our main docs repo. If you'd like to
submit a pull request -- thanks! -- please feel free to do so at
https://github.com/mongodb/docs-realm/ (see the tutorial/ subdirectory).

## Deploy the App

Now that you've validated that the app is working, it's time to deploy the app. In this section, you're going to create a production build with Create React App's build script and deploy the app to be hosted with Realm Static Hosting.

### Create the Production Bundle

To create your production bundle, run the command:

```java
npm run build
```

Once the build finishes, validate it's working by running:

```java
npx serve -s build
```

You will see a new browser window pop up running the app on localhost:5000. The app should look and behave the same as the development version you made in the previous step.

You can find the production bundle's code with your repository in a newly generated folder build.

## Deploy Using the Realm CLI

You can also deploy the app frontend with the Realm CLI. Before you're able to deploy the frontend from the Realm CLI, you must first enable hosting in the Realm UI, as discussed at the beginning of the Deploy Using the Realm UI section.

Once you've enabled hosting in the UI, you need to have the realm-tutorial-backend repository handy, which you used in the backend setup.

In the backend directory, create the folder `hosting/files`. This is where you will place your assets for Realm Hosting.

Also create a config file for the app. This should be located at `hosting/config.json`, and have the following contents:

```java
{
   "enabled": true,
   "default_response_code": 200,
   "default_error_path": "/index.html",
}
```

Copy the contents of the build folder from the realm-tutorial-web directory to the hosting/files folder in the backend. You can do this with the command:

In General

```java
cp -a path/to/realm-tutorial-web/build/. path/to/realm-tutorial-backend/hosting/files
```

For me specifically, I had to do this:

```java
rm -rf ../realm-tutorial-backend/hosting/files
cp -a build ../realm-tutorial-backend/hosting/
mv ../realm-tutorial-backend/hosting/build ../realm-tutorial-backend/hosting/files
```

Now you're ready to deploy the app using the Realm CLI. To deploy, run the command:

realm-cli push --remote=<Your-App-Id> --include-hosting

Realm then deploys your site to <Your-App-Id>.mongodbstitch.com.
