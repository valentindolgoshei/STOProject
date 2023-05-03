import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './validation/dto/create.user.dto';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { UserParams } from './validation/params/user.params';

@Controller('/api/users')
export class UsersController {

  constructor(private readonly usersService: UsersService,
              private readonly authService: AuthService,
  ) {

  }

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.register(createUserDto);
    const payload = {
      id: user.id,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Get('/all')
  async getAllUsers() {
    return await this.usersService.getAllUsers()
      .then(users => {
        return {
          users,
        };
      });
  }

  @Get('/:userId')
  async getUserById(@Param() params: UserParams) {
    return await this.usersService.getUserById(params.userId)
      .then(user => {
        return {
          user,
        };
      });
  }
}
