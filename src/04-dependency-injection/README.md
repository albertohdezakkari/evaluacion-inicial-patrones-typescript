# 04 - Dependency Injection

1. **¿Qué es una dependencia?** Es un objeto o servicio que otra clase necesita para realizar su trabajo.
2. **¿Qué significa inyectar una dependencia?** Entregar esa dependencia desde el exterior en lugar de construirla dentro de la clase.
3. **¿Qué diferencia existe entre new y recibirla por constructor?** Con `new`, la clase queda unida a una implementación concreta; por constructor puede recibir cualquier implementación compatible.
4. **¿Qué problema genera un alto acoplamiento?** Hace más difícil cambiar, reutilizar y probar las clases.
5. **¿Qué ventaja proporciona para las pruebas?** Permite sustituir servicios reales por dobles de prueba, mocks o fakes.
6. **¿Por qué es importante en NestJS?** Porque NestJS dispone de un contenedor de inyección de dependencias que administra providers y entrega automáticamente sus dependencias.
