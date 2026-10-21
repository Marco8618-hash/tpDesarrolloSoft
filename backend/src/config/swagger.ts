export const swaggerSpec = {
  openapi: '3.0.3',
  info: {
    title: 'TechRepair API',
    version: '1.0.0',
    description: 'Documentación interactiva de la API REST para el sistema de gestión de reparaciones TechRepair. Permite autenticar usuarios (JWT), gestionar clientes (personas y empresas), técnicos, reparaciones, insumos, facturas y ubicaciones.',
    contact: {
      name: 'Equipo de Desarrollo TechRepair',
    },
  },
  servers: [
    {
      url: '/api/v1',
      description: 'API v1 (Ruta base)',
    },
  ],
  tags: [
    { name: 'Auth', description: 'Autenticación y obtención de tokens JWT' },
    { name: 'Clientes', description: 'Gestión y perfil de clientes (Personas y Empresas)' },
    { name: 'Reparaciones', description: 'Ciclo de vida de reparaciones, items, estados y facturación' },
    { name: 'Técnicos', description: 'Gestión del personal técnico' },
    { name: 'Insumos', description: 'Catálogo de repuestos e insumos' },
    { name: 'Ubicaciones', description: 'Sucursales y depósitos' },
    { name: 'Facturas', description: 'Consulta de facturas emitidas' },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Ingrese el token JWT obtenido en el endpoint `/auth/login`. Ejemplo: `Bearer <token>`',
      },
    },
    schemas: {
      ErrorResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Descripción del error' },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['cuit', 'password'],
        properties: {
          cuit: { type: 'string', example: '20123456789', description: 'CUIT del cliente (persona o empresa)' },
          password: { type: 'string', format: 'password', example: 'secreto123', description: 'Contraseña registrada' },
        },
      },
      LoginResponse: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Inicio de sesión exitoso' },
          token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          usuario: {
            type: 'object',
            properties: {
              id: { type: 'integer', example: 1 },
              cuit: { type: 'string', example: '20123456789' },
              tipo: { type: 'string', enum: ['persona', 'empresa'], example: 'persona' },
              nombre: { type: 'string', example: 'Juan Pérez' },
              razonSocial: { type: 'string', example: 'Tech Solutions S.A.' },
            },
          },
        },
      },
      ClientePersonaCreate: {
        type: 'object',
        required: ['cuit', 'nombre', 'apellido', 'password'],
        properties: {
          cuit: { type: 'string', example: '20123456789' },
          nombre: { type: 'string', example: 'Juan' },
          apellido: { type: 'string', example: 'Pérez' },
          password: { type: 'string', format: 'password', minLength: 6, example: 'secreto123' },
        },
      },
      ClienteEmpresaCreate: {
        type: 'object',
        required: ['cuit', 'razonSocial', 'password'],
        properties: {
          cuit: { type: 'string', example: '30987654321' },
          razonSocial: { type: 'string', example: 'Tech Solutions S.A.' },
          password: { type: 'string', format: 'password', minLength: 6, example: 'empresaPass2026' },
        },
      },
      ClientePersonaResponse: {
        type: 'object',
        properties: {
          idcliente: { type: 'integer', example: 1 },
          cuit: { type: 'string', example: '20123456789' },
          nombre: { type: 'string', example: 'Juan' },
          apellido: { type: 'string', example: 'Pérez' },
          fechaBaja: { type: 'string', format: 'date-time', nullable: true, example: null },
        },
      },
      ClienteEmpresaResponse: {
        type: 'object',
        properties: {
          idcliente: { type: 'integer', example: 2 },
          cuit: { type: 'string', example: '30987654321' },
          razonSocial: { type: 'string', example: 'Tech Solutions S.A.' },
          fechaBaja: { type: 'string', format: 'date-time', nullable: true, example: null },
        },
      },
      ClientePersonaUpdate: {
        type: 'object',
        properties: {
          cuit: { type: 'string', example: '20123456789' },
          nombre: { type: 'string', example: 'Juan Carlos' },
          apellido: { type: 'string', example: 'Pérez Gómez' },
          password: { type: 'string', format: 'password', minLength: 6, example: 'nuevaPass123' },
        },
      },
      ClienteEmpresaUpdate: {
        type: 'object',
        properties: {
          cuit: { type: 'string', example: '30987654321' },
          razonSocial: { type: 'string', example: 'Tech Solutions Argentina S.A.' },
          password: { type: 'string', format: 'password', minLength: 6, example: 'nuevaPassEmpresa' },
        },
      },
      ReparacionCreate: {
        type: 'object',
        required: ['descripcion', 'idcliente', 'idubicacion'],
        properties: {
          descripcion: { type: 'string', example: 'Reparación de pantalla notebook Dell Inspiron' },
          idcliente: { type: 'integer', example: 1 },
          idubicacion: { type: 'integer', example: 1 },
        },
      },
      ReparacionItemCreate: {
        type: 'object',
        required: ['idinsumo', 'cantidad'],
        properties: {
          idinsumo: { type: 'integer', example: 5 },
          cantidad: { type: 'integer', example: 2 },
        },
      },
      TecnicoCreate: {
        type: 'object',
        required: ['cuit', 'nombre', 'apellido', 'idubicacion'],
        properties: {
          cuit: { type: 'string', example: '20334455667' },
          nombre: { type: 'string', example: 'Martín' },
          apellido: { type: 'string', example: 'González' },
          idubicacion: { type: 'integer', example: 1 },
        },
      },
      InsumoCreate: {
        type: 'object',
        required: ['nombre', 'costo'],
        properties: {
          nombre: { type: 'string', example: 'Pasta Térmica Arctic MX-4' },
          costo: { type: 'number', format: 'float', example: 12500.5 },
        },
      },
      UbicacionCreate: {
        type: 'object',
        required: ['provincia', 'localidad', 'calle', 'altura'],
        properties: {
          provincia: { type: 'string', example: 'Santa Fe' },
          localidad: { type: 'string', example: 'Rosario' },
          calle: { type: 'string', example: 'Pellegrini' },
          altura: { type: 'integer', example: 1550 },
        },
      },
    },
  },
  paths: {
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Inicio de sesión con CUIT y Contraseña',
        description: 'Autentica a un cliente (persona o empresa) por su CUIT y contraseña, retornando un token JWT.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/LoginRequest' },
            },
          },
        },
        responses: {
          '200': {
            description: 'Inicio de sesión exitoso',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/LoginResponse' },
              },
            },
          },
          '400': {
            description: 'CUIT o contraseña faltantes o inválidos',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
          '401': {
            description: 'Credenciales inválidas o usuario inactivo',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/clientes/persona': {
      post: {
        tags: ['Clientes'],
        summary: 'Registrar nuevo cliente persona (público)',
        description: 'Da de alta un nuevo cliente persona física con contraseña obligatoria.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ClientePersonaCreate' },
            },
          },
        },
        responses: {
          '201': {
            description: 'Cliente persona creado exitosamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Cliente persona creado exitosamente' },
                    data: { $ref: '#/components/schemas/ClientePersonaResponse' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Datos faltantes o inválidos',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/clientes/empresa': {
      post: {
        tags: ['Clientes'],
        summary: 'Registrar nuevo cliente empresa (público)',
        description: 'Da de alta un nuevo cliente empresa con razón social y contraseña obligatoria.',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ClienteEmpresaCreate' },
            },
          },
        },
        responses: {
          '201': {
            description: 'Cliente empresa creado exitosamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string', example: 'Cliente empresa creado exitosamente' },
                    data: { $ref: '#/components/schemas/ClienteEmpresaResponse' },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Datos faltantes o inválidos',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/clientes/perfil': {
      get: {
        tags: ['Clientes'],
        summary: 'Obtener datos del cliente autenticado',
        security: [{ bearerAuth: [] }],
        responses: {
          '200': {
            description: 'Perfil del cliente',
            content: {
              'application/json': {
                schema: {
                  oneOf: [
                    { $ref: '#/components/schemas/ClientePersonaResponse' },
                    { $ref: '#/components/schemas/ClienteEmpresaResponse' },
                  ],
                },
              },
            },
          },
          '401': {
            description: 'No autenticado o token inválido',
            content: { 'application/json': { schema: { $ref: '#/components/schemas/ErrorResponse' } } },
          },
        },
      },
    },
    '/clientes': {
      get: {
        tags: ['Clientes'],
        summary: 'Listar todos los clientes (polimórfico)',
        security: [{ bearerAuth: [] }],
        responses: {
          '200': {
            description: 'Lista de todos los clientes activos',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    oneOf: [
                      { $ref: '#/components/schemas/ClientePersonaResponse' },
                      { $ref: '#/components/schemas/ClienteEmpresaResponse' },
                    ],
                  },
                },
              },
            },
          },
          '401': { description: 'No autenticado' },
        },
      },
    },
    '/clientes/personas': {
      get: {
        tags: ['Clientes'],
        summary: 'Listar solo clientes personas',
        security: [{ bearerAuth: [] }],
        responses: {
          '200': {
            description: 'Lista de clientes persona',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ClientePersonaResponse' },
                },
              },
            },
          },
          '401': { description: 'No autenticado' },
        },
      },
    },
    '/clientes/empresas': {
      get: {
        tags: ['Clientes'],
        summary: 'Listar solo clientes empresas',
        security: [{ bearerAuth: [] }],
        responses: {
          '200': {
            description: 'Lista de clientes empresa',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ClienteEmpresaResponse' },
                },
              },
            },
          },
          '401': { description: 'No autenticado' },
        },
      },
    },
    '/clientes/{id}': {
      get: {
        tags: ['Clientes'],
        summary: 'Obtener cliente por ID',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, description: 'ID del cliente' },
        ],
        responses: {
          '200': {
            description: 'Datos del cliente',
            content: {
              'application/json': {
                schema: {
                  oneOf: [
                    { $ref: '#/components/schemas/ClientePersonaResponse' },
                    { $ref: '#/components/schemas/ClienteEmpresaResponse' },
                  ],
                },
              },
            },
          },
          '404': { description: 'Cliente no encontrado' },
        },
      },
      put: {
        tags: ['Clientes'],
        summary: 'Actualizar cliente genérico',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, description: 'ID del cliente' },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                oneOf: [
                  { $ref: '#/components/schemas/ClientePersonaUpdate' },
                  { $ref: '#/components/schemas/ClienteEmpresaUpdate' },
                ],
              },
            },
          },
        },
        responses: {
          '200': { description: 'Cliente actualizado exitosamente' },
          '404': { description: 'Cliente no encontrado' },
        },
      },
      delete: {
        tags: ['Clientes'],
        summary: 'Baja lógica de cliente',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, description: 'ID del cliente' },
        ],
        responses: {
          '200': { description: 'Cliente dado de baja exitosamente' },
          '404': { description: 'Cliente no encontrado' },
        },
      },
    },
    '/clientes/persona/{id}': {
      put: {
        tags: ['Clientes'],
        summary: 'Actualizar cliente persona',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, description: 'ID del cliente' },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ClientePersonaUpdate' },
            },
          },
        },
        responses: {
          '200': { description: 'Cliente persona actualizado exitosamente' },
          '404': { description: 'Cliente no encontrado' },
        },
      },
    },
    '/clientes/empresa/{id}': {
      put: {
        tags: ['Clientes'],
        summary: 'Actualizar cliente empresa',
        security: [{ bearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' }, description: 'ID del cliente' },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ClienteEmpresaUpdate' },
            },
          },
        },
        responses: {
          '200': { description: 'Cliente empresa actualizado exitosamente' },
          '404': { description: 'Cliente no encontrado' },
        },
      },
    },
    '/reparaciones': {
      get: {
        tags: ['Reparaciones'],
        summary: 'Listar reparaciones',
        parameters: [
          { name: 'estado', in: 'query', schema: { type: 'string' }, description: 'Filtrar por estado' },
          { name: 'idcliente', in: 'query', schema: { type: 'integer' }, description: 'Filtrar por cliente' },
          { name: 'idtecnico', in: 'query', schema: { type: 'integer' }, description: 'Filtrar por técnico' },
        ],
        responses: { '200': { description: 'Lista de reparaciones' } },
      },
      post: {
        tags: ['Reparaciones'],
        summary: 'Crear nueva reparación',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ReparacionCreate' },
            },
          },
        },
        responses: { '201': { description: 'Reparación creada' } },
      },
    },
    '/reparaciones/{id}': {
      get: {
        tags: ['Reparaciones'],
        summary: 'Obtener detalle de reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Detalle de la reparación' } },
      },
      put: {
        tags: ['Reparaciones'],
        summary: 'Actualizar reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ReparacionCreate' },
            },
          },
        },
        responses: { '200': { description: 'Reparación actualizada' } },
      },
      delete: {
        tags: ['Reparaciones'],
        summary: 'Eliminar o cancelar reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Reparación eliminada' } },
      },
    },
    '/reparaciones/{id}/aceptar': {
      patch: {
        tags: ['Reparaciones'],
        summary: 'Aceptar presupuesto de reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Presupuesto aceptado' } },
      },
    },
    '/reparaciones/{id}/rechazar': {
      patch: {
        tags: ['Reparaciones'],
        summary: 'Rechazar presupuesto de reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Presupuesto rechazado' } },
      },
    },
    '/reparaciones/{id}/finalizar': {
      patch: {
        tags: ['Reparaciones'],
        summary: 'Finalizar reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Reparación finalizada' } },
      },
    },
    '/reparaciones/{id}/items': {
      get: {
        tags: ['Reparaciones'],
        summary: 'Listar items e insumos de la reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Items asociados' } },
      },
      post: {
        tags: ['Reparaciones'],
        summary: 'Agregar insumo a la reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ReparacionItemCreate' },
            },
          },
        },
        responses: { '201': { description: 'Item agregado' } },
      },
    },
    '/reparaciones/{id}/items/{idItem}': {
      put: {
        tags: ['Reparaciones'],
        summary: 'Actualizar cantidad de item de insumo',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
          { name: 'idItem', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: { cantidad: { type: 'integer', example: 3 } },
              },
            },
          },
        },
        responses: { '200': { description: 'Item actualizado' } },
      },
      delete: {
        tags: ['Reparaciones'],
        summary: 'Quitar insumo de la reparación',
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'integer' } },
          { name: 'idItem', in: 'path', required: true, schema: { type: 'integer' } },
        ],
        responses: { '200': { description: 'Item eliminado' } },
      },
    },
    '/reparaciones/{id}/total': {
      get: {
        tags: ['Reparaciones'],
        summary: 'Obtener costo total de la reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Costo total' } },
      },
    },
    '/reparaciones/{id}/factura': {
      post: {
        tags: ['Reparaciones'],
        summary: 'Emitir factura de la reparación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '201': { description: 'Factura emitida' } },
      },
    },
    '/tecnicos': {
      get: {
        tags: ['Técnicos'],
        summary: 'Listar técnicos',
        responses: { '200': { description: 'Lista de técnicos' } },
      },
      post: {
        tags: ['Técnicos'],
        summary: 'Crear técnico',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/TecnicoCreate' },
            },
          },
        },
        responses: { '201': { description: 'Técnico creado' } },
      },
    },
    '/tecnicos/{id}': {
      get: {
        tags: ['Técnicos'],
        summary: 'Obtener técnico por ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Detalle del técnico' } },
      },
      put: {
        tags: ['Técnicos'],
        summary: 'Actualizar técnico',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/TecnicoCreate' },
            },
          },
        },
        responses: { '200': { description: 'Técnico actualizado' } },
      },
      delete: {
        tags: ['Técnicos'],
        summary: 'Eliminar técnico',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Técnico eliminado' } },
      },
    },
    '/insumos': {
      get: {
        tags: ['Insumos'],
        summary: 'Listar insumos',
        responses: { '200': { description: 'Catálogo de insumos' } },
      },
      post: {
        tags: ['Insumos'],
        summary: 'Crear insumo',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/InsumoCreate' },
            },
          },
        },
        responses: { '201': { description: 'Insumo creado' } },
      },
    },
    '/insumos/{id}': {
      get: {
        tags: ['Insumos'],
        summary: 'Obtener insumo por ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Detalle del insumo' } },
      },
      put: {
        tags: ['Insumos'],
        summary: 'Actualizar insumo',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/InsumoCreate' },
            },
          },
        },
        responses: { '200': { description: 'Insumo actualizado' } },
      },
      delete: {
        tags: ['Insumos'],
        summary: 'Eliminar insumo',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Insumo eliminado' } },
      },
    },
    '/ubicaciones': {
      get: {
        tags: ['Ubicaciones'],
        summary: 'Listar ubicaciones',
        responses: { '200': { description: 'Lista de ubicaciones' } },
      },
      post: {
        tags: ['Ubicaciones'],
        summary: 'Crear ubicación',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UbicacionCreate' },
            },
          },
        },
        responses: { '201': { description: 'Ubicación creada' } },
      },
    },
    '/ubicaciones/{id}': {
      get: {
        tags: ['Ubicaciones'],
        summary: 'Obtener ubicación por ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Detalle de la ubicación' } },
      },
      put: {
        tags: ['Ubicaciones'],
        summary: 'Actualizar ubicación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        requestBody: {
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/UbicacionCreate' },
            },
          },
        },
        responses: { '200': { description: 'Ubicación actualizada' } },
      },
      delete: {
        tags: ['Ubicaciones'],
        summary: 'Eliminar ubicación',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Ubicación eliminada' } },
      },
    },
    '/facturas': {
      get: {
        tags: ['Facturas'],
        summary: 'Listar facturas',
        parameters: [
          { name: 'idreparacion', in: 'query', schema: { type: 'integer' }, description: 'Filtrar por reparación' },
        ],
        responses: { '200': { description: 'Lista de facturas' } },
      },
    },
    '/facturas/{id}': {
      get: {
        tags: ['Facturas'],
        summary: 'Obtener factura por ID',
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
        responses: { '200': { description: 'Detalle de factura' } },
      },
    },
  },
};
