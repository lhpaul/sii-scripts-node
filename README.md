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
   Then edit `.env` with your SimpleAPI key

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

## API Service

The `SimpleApiService` class provides methods for interacting with the SimpleAPI Chile API. Update the placeholder methods with actual API endpoints once you have the full API documentation.

## Environment Variables

- `SIMPLE_API_KEY`: Your SimpleAPI key (required)
- `SIMPLE_API_BASE_URL`: Optional custom API endpoint