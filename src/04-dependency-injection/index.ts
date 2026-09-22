interface NotificationService {
  send(to: string, message: string): void;
}

class EmailService implements NotificationService {
  send(to: string, message: string): void {
    console.log(`Email enviado a ${to}: ${message}`);
  }
}

class FakeNotificationService implements NotificationService {
  public messages: string[] = [];

  send(to: string, message: string): void {
    this.messages.push(`${to}: ${message}`);
  }
}

class UserService {
  constructor(private readonly notificationService: NotificationService) {}

  registerUser(email: string): void {
    console.log(`Usuario registrado: ${email}`);
    this.notificationService.send(email, "Registro completado");
  }
}

const realService = new UserService(new EmailService());
realService.registerUser("alumno@example.com");

const fake = new FakeNotificationService();
const testService = new UserService(fake);
testService.registerUser("test@example.com");

console.log("Mensajes de prueba:", fake.messages);
