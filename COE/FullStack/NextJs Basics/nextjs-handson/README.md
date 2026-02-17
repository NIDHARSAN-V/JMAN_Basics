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





======================================================================================================


{allData.length === 0 ? (
        <p>No Data</p>
      ) : (
        <ul>
          {allData.map((p) => (
            <li key={p.empid}>
              <p>EmpId: {p.empid}</p>
              <p>EmpName: {p.empname}</p>
              <p>EmpSalary: {p.empsalary}</p>
              <br />
            </li>
          ))}
        </ul>
      )}




export default function FormsData() {
  const [formData, setFormData] = useState<FormType>({
    empid: "",
    empname: "",
    empsalary: 0,
  });

  const [allData, setAllData] = useState<FormType[]>([]);

  // ✅ Submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setAllData((prev) => [...prev, formData]);

    console.log(formData);

    // reset form
    setFormData({
      empid: "",
      empname: "",
      empsalary: 0,
    });
  };

  // ✅ Change handler
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "empsalary"
          ? Number(value) // convert to number
          : value,
    }));
  };






===========================================================================
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




//prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}




//schema.ts
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




