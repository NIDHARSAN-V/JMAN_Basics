This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





npm i --save-dev axios
npm install prisma @prisma/client
$ npm i --save-dev @types/jsonwebtoken

% $ npm uninstall prisma @prisma/client
% $ npm install prisma@5 @prisma/client@5
% npx prisma init

%         prisma/
%   schema.prisma


% $ npx prisma -v
% $ npx prisma migrate dev --name init
% npx prisma generate 


npm install prisma@5 @prisma/client@5

npx prisma init

# Edit .env → DATABASE_URL
# Edit schema.prisma → add model

npx prisma migrate dev --name init

npx prisma generate   # optional





import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}





generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL") 
}

model Employee {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String
  name     String
  role     Role   @default(EMP)
  salary   Int
}

enum Role {
  EMP
  MANAGER
}











$ npm uninstall prisma @prisma/client

removed 81 packages, and audited 385 packages in 6s

144 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$ rm -rf node_modules package-lock.json

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$ npm install prisma@5 @prisma/client@5

added 391 packages, and audited 392 packages in 2m

144 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$ npx prisma -v
Environment variables loaded from .env
prisma                  : 5.22.0
@prisma/client          : 5.22.0
Computed binaryTarget   : windows
Operating System        : win32
Architecture            : x64
Node.js                 : v20.20.0
Query Engine (Node-API) : libquery-engine 605197351a3c8bdd595af2d2a9bc3025bca48ea2 (at node_modules\@prisma\engines\query_engine-windows.dll.node)
Schema Engine           : schema-engine-cli 605197351a3c8bdd595af2d2a9bc3025bca48ea2 (at node_modules\@prisma\engines\schema-engine-windows.exe)
Schema Wasm             : @prisma/prisma-schema-wasm 5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2
Default Engines Hash    : 605197351a3c8bdd595af2d2a9bc3025bca48ea2
Studio                  : 0.503.0

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$ npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma

✔ Generated Prisma Client (v5.22.0) to .\node_modules\@prisma\client in 128ms

Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

Help us improve the Prisma ORM for everyone. Share your feedback in a short 2-min survey: https://pris.ly/orm/survey/release-5-22

┌─────────────────────────────────────────────────────────┐
│  Update available 5.22.0 -> 7.4.0
           │
│  
           │
│  This is a major update - please follow the guide at    │
│  https://pris.ly/d/major-version-upgrade     
           │
│  
           │
│  Run the following to update
           │
│    npm i --save-dev prisma@latest
           │
│    npm i @prisma/client@latest
           │
└─────────────────────────────────────────────────────────┘

AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crudsession (master)
$ npx prisma migrate dev --name init
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Datasource "db": MySQL database "employee_db_next" at "localhost:3306"

- Drift detected: Your database schema is not in sync with your migration history.

The following is a summary of the differences between the expected database schema given your 
migrations files, and the actual schema of the 
database.

It should be understood as the set of changes to get from the expected schema to the actual schema.

[+] Added tables
  - employee

- The following migration(s) are applied to the database but missing from the local migrations directory: 20260217034648_init

√ We need to reset the MySQL database "employee_db_next" at "localhost:3306"
Do you want to continue? All data will be lost. ... yes

Applying migration `20260217045413_init`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20260217045413_init/
    └─ migration.sql

Your database is now in sync with your schema. 

✔ Generated Prisma Client (v5.22.0) to .\node_modules\@prisma\client in 71ms



AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/cr

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20260217045413_init/
    └─ migration.sql

Your database is now in sync with your schema. 

✔ Generated Prisma Client (v5.22.0) to .\node_modules\@prisma\client in 71ms



AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/crmigrations/
  └─ 20260217045413_init/
    └─ migration.sql

Your database is now in sync with your schema. 

✔ Generated Prisma Client (v5.22.0) to .\node_modules\@prisma\client in 71ms



AzureAD+NidharsanVelmurugan@DESKTOP-6J4P3NA MINGW64 ~/Documents/COE/FullStack/NextJs Basics/cr✔ Generated Prisma Client (v5.22.0) to .\node_modules\@prisma\client in 71ms


