import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './validation/dto/create.user.dto';
import { generate } from 'password-hash';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async register(userDto: CreateUserDto): Promise<User> {
    let user: User = await this.usersRepository.findOne({
      login: userDto.login,
    });

    if (user) {
      throw new BadRequestException([
        {
          property: 'login',
          constraints: {
            isUnique: 'Such login has already been taken',
          },
        },
      ]);
    }

    user = await this.usersRepository.findOne({
      email: userDto.email,
    });

    if (user) {
      throw new BadRequestException([
        {
          property: 'email',
          constraints: {
            isUnique: 'User with such email has already been registered',
          },
        },
      ]);
    }

    return await this.usersRepository.save({
      ...userDto,
      password: generate(userDto.password, {
        algorithm: 'sha256',
      }),
    });
  }

  async findUserByLogin(login: string): Promise<User> {
    return this.usersRepository
      .findOneOrFail({
        login,
      })
      .catch(reason => {
        if (reason instanceof EntityNotFoundError) {
          throw new BadRequestException(
            `Could not find user with login '${login}'`,
          );
        }

        throw new Error(reason);
      });
  }

  async findUserById(id: number): Promise<User> {
    return await this.usersRepository.findOneOrFail(id).catch(reason => {
      if (reason instanceof EntityNotFoundError) {
        throw new BadRequestException(`Could not find user with id '${id}'`);
      }

      throw new Error(reason);
    });
  }

  async findUsersByIds(ids: number[]): Promise<User[]> {
    return await this.usersRepository.findByIds(ids).catch(reason => {
      if (reason instanceof EntityNotFoundError) {
        throw new BadRequestException(`Could not find users with ids '${ids}'`);
      }

      throw new Error(reason);
    });
  }

  async findByPayload(payload: any) {
    const { login } = payload;

    return await this.usersRepository
      .findOneOrFail({
        login,
      })
      .catch(reason => {
        if (reason instanceof EntityNotFoundError) {
          throw new BadRequestException(
            `Could not find user with login '${login}'`,
          );
        }

        throw new Error(reason);
      });
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async getUserById(userId: number): Promise<User> {
    return this.usersRepository.findOne(userId);
  }
}
