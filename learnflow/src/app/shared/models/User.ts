export interface User {
  id: string;
    name: {
      firstname: string;
      lastname: string;
    };
    email: string;
    password: string;
    tasks: string[];
  }