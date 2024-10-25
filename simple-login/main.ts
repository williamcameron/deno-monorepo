export function login(username: string, password: string): boolean {
  return username === "admin" && password === "password";
}

export function greet(username: string): string {
  return `Hello ${username}`;
}
