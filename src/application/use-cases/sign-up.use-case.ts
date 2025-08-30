import {
  InvalidEmailError,
  WeakPasswordError,
} from '@/src/entities/errors/auth';
import { User } from '@/src/entities/models/user';

export interface ISignUpDependencies {
  createUser(user: User): Promise<User>;
}

export interface SignUpInput {
  email: string;
  password: string;
}

export class SignUpUseCase {
  constructor(private deps: ISignUpDependencies) {}

  async execute(input: SignUpInput): Promise<User> {
    if (input.email.length < 8) throw new InvalidEmailError(input.email);
    if (input.password.length < 6) throw new WeakPasswordError();

    const newUser: User = {
      id: Math.random().toString(36).substring(2),
      email: input.email,
      createdAt: new Date(),
    };

    return this.deps.createUser(newUser);
  }
}
