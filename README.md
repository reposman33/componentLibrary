# PersonalWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.9.

## running the application locally:

### run `npm run start:webapp:dev` to run the application in development mode over https

### run `npm run start:webapp:prod` to run the application in production mode over https

## Configuring the local webserver (ng serve) to serve over ssl (https)

- note: this is already set up and this section only serves as documentation

Refer to [How To Serve Your Angular Application Over HTTPS Using ng serve](https://betterprogramming.pub/how-to-serve-your-angular-application-over-https-using-ng-serve-240e2c2e0a5d)

- refer to [Create a Certificate](How to Create Trusted SSL Certificates for Your Local Development)
- add the certificates in a folder in workspaceroot
- for each application: add below options block to the `angular.json` configuration file in the `serve` block:

```
"options": { "sslKey": "<relative path from angular.json>/server.key",
              "sslCert": "<relative path from angular.json>/server.crt",
              "ssl": true
          }
```
