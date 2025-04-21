# SII Scripts Node

A TypeScript service for interacting with SimpleAPI Chile to access SII (Servicio de Impuestos Internos) data.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Copy the environment example file and update with your API credentials:
   ```
   cp .env.example .env
   ```
   Then edit `.env` to add the correct values.

## Environment Variables
- `SII_SIMPLE_API_KEY`: Your SII SimpleAPI key (required) 

## Usage

### Development

```
npm run dev
```

### Build

```
npm run build
```

### Run production build

```
npm start
```

## Project Structure

```
src/
├── services/              # Service layer
│   └── external-data-sources/      # External API connections
│
├── utils/                 # Utility functions
│   └── api-helper/        # API requests helpers
│       └── api-helper.utils.ts  # API requests utility functions
│
└── index.ts               # Application entry point
```

### Project Conventions

This section outlines the coding and file structure conventions used in this repository. Adhering to these guidelines ensures consistency and maintainability.

#### Module Import Order

Maintain a consistent import order within each file:

1.  **External Dependencies:**
    * Import all third-party packages first (e.g., `react`, `lodash`, `axios`).
    * Sort these alphabetically. Treat scoped packages or path aliases beginning with `@` (e.g., `@nestjs/common`, `@/components`) as preceding other letters.
2.  **Internal Project Modules:**
    * Import modules from within this project after external dependencies.
    * Primary sort criterion: Relative path depth. Imports from higher-level directories (e.g., `../../../config`) come before those from closer directories (e.g., `../services`, `./utils`).
    * Secondary sort criterion: Alphabetical order for modules at the same path depth.

**Example Import Order:**

```typescript
// External dependencies (alphabetical, @ first)
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as bcrypt from 'bcrypt';

// Internal modules (farthest path first, then alphabetical)
import { AppConfig } from '../../../config';
import { DatabaseService } from '../../database/database.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from './utils/security.utils';
```

#### File Naming Suffixes
Use the following suffixes in filenames (before the extension, e.g., `user.service.ts`) to denote the file's role:

`.constants.ts`: Stores constant values. No logic.
`.errors.ts`: Defines custom Error classes. Minimal logic.
`.interfaces.ts`: Contains TypeScript interface and type definitions. No logic.
`.service.ts`: Implements a class providing methods to interact with data sources or encapsulate core business logic related to a specific domain.
`.utils.ts`: Holds reusable utility functions, often pure and stateless.

## Testing

Run tests using:

```
npm test
```