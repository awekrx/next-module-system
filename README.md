# Next module system

## Start

```bash
npm ci
npm start
```

Open `localhost:3000`

## File structure

project/
├── core/
│   ├── builder/ -> Builds modules and compile them
│   ├── components/
│   ├── decorators/
│   ├── fetcher/
│   ├── module/
│   ├── page/
│   └── register/ -> Compiles modules and components
└── modules/
    ├── module1/
    │   ├── index.ts
    │   ├── module.ts
    │   └── components/
    │       ├── index.ts
    │       └── (client component)/
    │           ├── index.ts
    │           ├── client.ts -> `use only` directive is required
    │           └── view.tsx
    └── module1/
        ├── index.ts
        ├── module.ts
        └── components/
            ├── index.ts
            └── (server component)/
                ├── index.ts
                ├── server.ts
                └── view.tsx

If need hybrid component we can create component with client and server sides.
`Component -> server (get data from api, send to client) -> client (get data from server side) -> view (render data)`

## Problems

1. Not ability to send non-string or non-numeric props to client components because the component class is a server component
