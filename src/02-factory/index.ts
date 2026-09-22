interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`EMAIL: ${message}`);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log(`PUSH: ${message}`);
  }
}

class SmsNotification implements Notification {
  send(message: string): void {
    console.log(`SMS: ${message}`);
  }
}

class NotificationFactory {
  static create(type: "email" | "push" | "sms"): Notification {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "push":
        return new PushNotification();
      case "sms":
        return new SmsNotification();
    }
  }
}

const email = NotificationFactory.create("email");
const push = NotificationFactory.create("push");
const sms = NotificationFactory.create("sms");

email.send("Bienvenido");
push.send("Tienes una notificación");
sms.send("Código de acceso");
