# Modelos de Mongoose

Este proyecto contiene cuatro modelos de Mongoose: `Sale`, `Product`, `Auth` y
`Employe`. A continuación se describen cada uno de ellos.

## Modelos

### Sale

El modelo `Sale` representa una venta en el sistema.

- **Archivo**: [src/models/sale.model.js](src/models/sale.model.js)
- **Esquema**:
  - `amount` (Number, requerido): El monto de la venta.
  - `date` (Date, requerido): La fecha de la venta.
  - `product` (ObjectId, referencia a `Product`): El producto vendido.

```javascript
import { model, Schema } from 'mongoose';

const saleSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
});

const Sale = model('Sale', saleSchema);

export { Sale };
```

### Product

El modelo `Product` representa una producto en el sistema.

- **Archivo**: [src/models/product.model.js](src/models/product.model.js)
- **Esquema**:
  - `name` (String, requerido): El nombre del producto.
  - `price` (Number, requerido): El precio del producto.
  - `stock` (Number, requerido): La cantidad de stock disponible.

```javascript
import { model, Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Product = model('Product', productSchema);

export { Product };
```

### Employe

El modelo `Employe` representa una venta en el sistema.

- **Archivo**: [src/models/employe.model.js](src/models/employe.model.js)
- **Esquema**:
  - `username` (String, requerido): El nombre de usuario del empleado.
  - `email` (String, requerido): El correo electrónico del empleado.
  - `password` (String, requerido): La contraseña del empleado.
  - `sales` (Array de ObjectId, referencia a `Sale`): Las ventas realizadas por
    el empleado.

```javascript
import { model, Schema } from 'mongoose';

const employeSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sales: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sale',
    },
  ],
});

const Employe = model('Employe', employeSchema);

export { Employe };
```

### Auth

El modelo `Auth` representa una venta en el sistema.

- **Archivo**: [src/models/auth.model.js](src/models/auth.model.js)
- **Esquema**:
  - `employe` (ObjectId, referencia a `Employe`, requerido): El empleado
    autenticado.
  - `serialNumber` (String, requerido): El número de serie del empleado.

```javascript
import { model, Schema } from 'mongoose';

const authSchema = new Schema({
  employe: {
    type: Schema.Types.ObjectId,
    ref: 'Employe',
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
});

const Auth = model('Auth', authSchema);

export { Auth };
```

## Relaciones entre los Modelos

### Diagrama de Relaciones

Employe | |--< Sale | |--< Auth | |-- Employe Product | |--< Sale

### Explicación de las Relaciones

-**Employe - Sale**: Referencia. Un empleado puede tener múltiples ventas, por
lo que se utiliza una referencia para manteener la relación sin duplicar
datos. -**Employe - Auth**: Referencia. La autenticación se refiere a un
empleado específico, por lo que se utiliza una referencia para mantener la
relación. -**Product - Sale**: Referencia. Una venta se refiere a un producto
específico, por lo que se utiliza una referencia para mantener la relación.

Las relaciones son referenciadas (`Population`) en lugar de embebidas para
evitar la duplicación de datos y facilitar la gestión y actualización de las
relaciones entre los documentos.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```
