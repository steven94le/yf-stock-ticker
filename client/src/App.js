import { useEffect, useState } from "react";
import protobuf from "protobufjs";
import { Buffer } from "buffer";

const emojis = {
  "": "",
  up: "🚀",
  down: "😔",
};

const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

const App = () => {
  const [stock, setStock] = useState(null);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const ws = new WebSocket("wss://streamer.finance.yahoo.com");

    protobuf.load("./YPricingData.proto", (error, root) => {
      if (error) {
        return console.log(error);
      }

      const Yaticker = root.lookupType("yaticker");

      const open = () => {
        console.log("connected");
        ws.send(
          JSON.stringify({
            subscribe: [(params.get("symbol") || "AAPL").toUpperCase()],
          })
        );
      };

      ws.onopen = open;

      const close = () => {
        console.log("disconnected");
      };

      ws.onclose = close;

      const incoming = (message) => {
        const next = Yaticker.decode(new Buffer(message.data, "base64"));
        console.log("next:", next);
        setStock((current) => {
          if (current) {
            const nextDirection =
              current.price < next.price
                ? "up"
                : current.price > next.price
                ? "down"
                : "";

            if (nextDirection) {
              setDirection(nextDirection);
            }
          }
          return next;
        });
      };

      ws.onmessage = incoming;
    });
  }, []);

  return (
    <div>
      <h2>Add "/?symbol=TICKER" to end of url for ticker price</h2>
      <br />
      <div>
        {stock && (
          <h2>
            {stock.id}: {formatPrice(stock.price)} {emojis[direction]}
          </h2>
        )}
      </div>
    </div>
  );
};

export default App;
