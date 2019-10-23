import * as React from "react";

abstract class MessageSender {
  messageSender: MessageSender | undefined;

  constructor(messageSender?: MessageSender) {
    if (!!messageSender) this.messageSender = messageSender;
  }

  abstract handle(msg: string): string;
}

class TripleQuotesMessageSender extends MessageSender {
  handle(msg: string): string {
    let result = `'''${msg}'''`;
    if (!!this.messageSender) {
      return this.messageSender.handle(result);
    }
    return result;
  }
}

class BoldMessageSender extends MessageSender {
  handle(msg: string): string {
    let result = `<pre>${msg}</pre>`
    if (!!this.messageSender) {
      return this.messageSender.handle(result);
    }
    return result;
  }
}

class ConsoleOutterMessageSender extends MessageSender {
  handle(msg: string): string {
    return msg;
  }
}

function Demo() {
  let message = "Hello";
  let messageSender: MessageSender = new TripleQuotesMessageSender(
    new BoldMessageSender(
      new ConsoleOutterMessageSender()
    )
  );


  return (
    <div>
      <h1>Behavioral</h1>
      <h2>Chain of Responsibility Demo</h2>
      <div>
        <div>Message {message}</div>
        <div>Process message {messageSender.handle(message)}</div>
      </div>
    </div>
  );
}

export default Demo;
