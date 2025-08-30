import {
  InvalidEmailError,
  WeakPasswordError,
} from '@/src/entities/errors/auth';
import { User } from '@/src/entites/models/user';
import { SignUpUseCase } from '@/src/application/use-cases/sign-up.use-cases';

describe('Sign Up Use Case', () => {
  let mockUsersRepository: any;

  beforeEach(() => {
    mockUsersRepository = {
      createUser: jest.fn(),
    };
  });

  it('should create an user', async () => {
    const signUpUseCase = new SignUpUseCase(mockUsersRepository);
    const input = { email: 'test@example.com', password: 'test1234' };

    mockUsersRepository.createUser.mockResolvedValue({
      id: '1',
      email: input.email,
      createdAt: new Date(),
    } as User);

    const user = await signUpUseCase.execute(input);

    expect(user.email).toBe(input.email);
    expect(user.id).toBe('1');
    expect(mockUsersRepository.createUser).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'test@example.com' }),
    );
  });

  it('should throw an error when the email is invalid', async () => {
    const signUpUseCase = new SignUpUseCase(mockUsersRepository);

    await expect(
      signUpUseCase.execute({ email: 'wrong!', password: 'password123' }),
    ).rejects.toThrowError(InvalidEmailError);
  });

  it('throws an error when the password is too weak', async () => {
    const signUpUseCase = new SignUpUseCase(mockUsersRepository);

    await expect(
      signUpUseCase.execute({ email: 'test@example.com', password: 'bip' }),
    ).rejects.toThrowError(WeakPasswordError);
  });
});
