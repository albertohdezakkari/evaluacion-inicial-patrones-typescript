# 02 - Factory

1. **¿Qué problema resuelve Factory?** Centraliza la lógica de creación de objetos.
2. **¿Qué ventaja tiene frente a usar new por toda la aplicación?** Reduce el acoplamiento entre el código cliente y las clases concretas.
3. **¿Qué ocurriría si añadimos WhatsAppNotification?** Se crea la nueva implementación y se amplía el Factory para poder devolverla.
4. **¿Quién tiene la responsabilidad de crear los objetos?** El Factory.
5. **¿Qué ventaja proporciona respecto al acoplamiento?** El cliente depende de un contrato común y no necesita conocer los detalles de construcción.
