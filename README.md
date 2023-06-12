# Random Quote Generator

## Introduction

Your task is to build a backend application that acts as a RESTful API Server for displaying random quotes. 

The application should be written using [NestJS](https://nestjs.com/), [TypeScript](https://www.typescriptlang.org/), [TypeORM](https://typeorm.io), and [SQLite](https://www.sqlite.org)

## Getting Started

The NestJS starter code and [quotes file](src/data/office_quotes.json) can be found in this repository. 
The [NestJS First Steps](https://docs.nestjs.com/first-steps) documents are a great launching point to begin building this.

## What We Expect From You
1. Create an application that creates and uses a RESTful API to retrieve and display a random quote from the given quotes [dataset](src/data/office_quotes.json). This application does not need to be deployed or hosted anywhere- just something you can run locally.
2. Add tests to your newly created application.
3. Add any additional feature of your choice.
4. Update the README with any information you want to include that will help us understand and run your project.
5. Upload your completed code to your own github account and share it with us. If the repo is private please share it with `violet-hiring`.

## Need Help?

Feel free to consult any NestJS or TypeScript documentation as necessary. For any other further questions or issues that arise, reach out to your hiring manager.

## Time Estimate

We expect this to take you 2-4 hours to complete. This isn’t a hard limit- it is just for you to plan your time!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Submission Notes

I included a basic script (and a small tweak to the tsconfig file) to handle reading and dumping the provided json file into our SQLite database. The script broadly tries to upsert any new data in the json file. For simiplicity since the import script handles ingestion, I did not implement a POST endpoint to add new quotes.

Otherwise, I included two additional endpoints other than the primary endpoint that returns a quote at random. There is one endpoint that returns all of the quotes and another that returns a quote by quote_id.

There are additional unit tests for all of the methods in the QuotesController and QuotesService.

As mentioned above, the project can be run by running the following commands


```bash
$ npm install
```

```bash
$ npm run start
```

And the tests can be run with 
```bash
# unit tests
$ npm run test
```