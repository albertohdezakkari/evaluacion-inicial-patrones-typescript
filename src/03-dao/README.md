# 03 - DAO

1. **¿Qué significa DAO?** Data Access Object.
2. **¿Cuál es su responsabilidad principal?** Encapsular las operaciones de acceso y persistencia de datos.
3. **¿Qué relación tiene con una base de datos?** Actúa como una capa que concentra las consultas y operaciones necesarias para leer o modificar datos.
4. **¿Qué operaciones aparecen habitualmente?** Consultar todos, buscar por ID, insertar, actualizar y eliminar.
5. **¿Qué diferencia existe entre DAO y Repository?** Un DAO se centra principalmente en **cómo** acceder a una fuente de datos concreta y ejecutar operaciones de persistencia. Un Repository expresa **qué** conjunto de datos o entidades necesita el dominio y ofrece una interfaz más cercana al lenguaje de negocio. El Repository puede apoyarse internamente en uno o varios DAO.
