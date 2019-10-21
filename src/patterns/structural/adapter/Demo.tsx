import * as React from "react";

interface EuroSocket {
  connect220(): string;
}

interface AmericanSocket {
  connect110(): string;
}
class American implements AmericanSocket {
  connect110(): string {
    return "Connected to 110V";
  }

}
class AmericanToEuroSocketAdapter implements EuroSocket {
  americanSocket: AmericanSocket;

  constructor(socket:AmericanSocket) {
    this.americanSocket = socket;
  }

  connect220(): string {
    return this.americanSocket.connect110() + " through adapter 220V";
  }

}

function Demo() {
  let american:AmericanSocket = new American();
  let euro:EuroSocket = new AmericanToEuroSocketAdapter(american);

  return (
    <div>
      <h1>Structural</h1>
      <h2>Adapter Demo</h2>
      <div>
        <div>{euro.connect220()}</div>
      </div>
    </div>
  );
}

export default Demo;
