# Next module system

## Start

### Install dependencies

```bash
npm ci
```

### Development

```bash
npm run dev
```

### Production

```bash
npm ci
npm run dev
```

## File structure

```bash
project/
├── core/
│   ├── index.ts
│   ├── builder/
│   ├── decorators/
│   ├── units/
│   └── utils/
└── modules/
    ├── root/ -> transform pages into '/' route
    │   ├── index.ts
    │   ├── module.ts
    │   ├── pages/ -> like next routing
    │   │   ├── index.ts
    │   │   ├── page/
    │   │   └── layout/
    │   └── components/
    │       ├── index.ts
    │       ├── (client component)/
    │       │   ├── index.ts
    │       │   ├── useLogic.ts
    │       │   └── view.tsx -> `use client` directive is required
    │       └── (server component)/
    │           ├── index.ts
    │           ├── useLogic.ts
    │           └── view.tsx
    └── (your module)/
        ├── index.ts
        ├── module.ts
        ├── pages/ -> like next routing
        │   ├── index.ts
        │   ├── page/
        │   └── layout/
        └── components/
            ├── index.ts
            ├── (client component)/
            │   ├── index.ts
            │   ├── useLogic.ts
            │   └── view.tsx -> `use client` directive is required
            └── (server component)/
                ├── index.ts
                ├── useLogic.ts
                └── view.tsx
```
