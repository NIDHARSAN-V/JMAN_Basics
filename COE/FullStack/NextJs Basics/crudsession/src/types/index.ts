export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
}

export interface AuthPayload {
  userId: string;
  email: string;
}
