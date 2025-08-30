export class InvalidEmailError extends Error {
  constructor(email: string) {
    super(`${email} is an invalid email`);
  }
}

export class WeakPasswordError extends Error {
  constructor() {
    super('Password is too weak');
  }
}
