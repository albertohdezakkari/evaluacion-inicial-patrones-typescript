# 01 - Singleton

1. **¿Qué problema intenta resolver Singleton?** Garantiza que una clase tenga una única instancia compartida durante la ejecución.
2. **¿Por qué suele utilizarse un constructor private?** Para impedir que otras partes del programa creen instancias mediante `new`.
3. **¿Cómo se obtiene una instancia de la clase?** Mediante un método estático como `getInstance()`.
4. **¿Qué ocurriría si pudiéramos utilizar new libremente?** Podríamos crear varias instancias y se perdería la garantía de unicidad.
5. **Ejemplo real:** una configuración global de aplicación o un logger.
6. **¿Qué inconveniente puede tener abusar de Singleton?** Introduce estado global y puede dificultar pruebas y mantenimiento.
