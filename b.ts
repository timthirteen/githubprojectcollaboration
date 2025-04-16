type User = {
  username: string;
  email: string;
  password: string;
};

const users: User[] = [];

export function registerUser(user: User): string {
  const existingUser = users.find(
    (u) => u.email === user.email || u.username === user.username,
  );

  if (existingUser) {
    return "User already exists";
  }

  users.push(user);
  return "User registered successfully";
}
