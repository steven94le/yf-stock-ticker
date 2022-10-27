# yf-stock-ticker :rocket:

# Introduction :wave:

Little WIP front-end app that taught me how to work with Yahoo Finance's WebSocket API. Combined with protocol buffers (protobufjs) to structure the message exchange, near real-time financial data is displayed from YF given a ticker symbol (Apple/AAPL by default). Surge was used to put the application into production (the deployment process was very simple and everything was done in the command line interface - resource linked below!).

![yf-stock-ticker](https://user-images.githubusercontent.com/76791687/198332754-af9162a2-8bd6-4f2f-9005-ed3544d21a5f.gif)

<img width="600" alt="Screen Shot 2022-10-27 at 10 47 27 AM" src="https://user-images.githubusercontent.com/76791687/198332774-ecfc9790-64a3-4cd7-9a81-dd3ae7479a76.png">

---

## **Deploying The Project :computer:**

Clone the repository to your local machine using the terminal:

`$ git clone git@github.com:steven94le/yf-stock-ticker.git`

### Installing the dependencies:

### The Client

1. Navigate to the client folder `cd client`
2. Install the required packages `yarn install`
3. Once that's done you can start the server with `yarn start`

This will run the app in development mode. Open http://localhost:3000 to view it in the browser! The page will reload if you make changes.

### Resources Used

1. Web Socket API
- https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

2. Surge Sh Deployment
- https://surge.sh/help/getting-started-with-surge

3. Protobufjs
- https://www.npmjs.com/package/protobufjs

## **Technologies Used :computer:**

Frontend:
- JavaScript, HTML, CSS, React.js

## **Author :bust_in_silhouette:**

- Steven Le (GitHub: [@steven94le](https://github.com/steven94le))
