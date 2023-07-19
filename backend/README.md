# Team Data Merge API
This API allows users to merge data from two collections, collection1 and collection2, and retrieve the merged results. It provides an endpoint to fetch data from both collections and combine them based on a common email field.

## Prerequisites
To use this API, you need the following:

* Node.js installed on your local system

* MongoDB connection string

* Installation

1. Clone the repository:

       git clone <repository-url>

2. Install the dependencies:

        cd <project-folder>
        npm install

3. Set up environment variables:

* Create a .env file in the project root folder.

* Define the following environment variables in the .env file:

     mongoUrl: MongoDB connection string.

4. Start the server:

      npm start

## API Endpoints

`Merge Team Data`

* method : GET

* Endpoint: /allData

* Description: Fetches data from both collection1 and collection2 and merges them based on the common email field.

* Response:

        Status: 200 OK
        Body: Merged team data, combining fields from both collections.

## Implementation Details
* The application uses the Express.js framework to handle HTTP requests and routing.

* Mongoose is used for connecting to the MongoDB database and defining the schemas for collection1 and collection2.

* The API endpoint fetches data from collection1 and performs a lookup on collection2 to merge the data based on the common email field.

* The merged data is then returned as the response to the client.


## Dependencies

    "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }


### Deployment

[Back-End](https://h2skill-task1.onrender.com/)