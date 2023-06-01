import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './validation/dto/create.user.dto';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { UserParams } from './validation/params/user.params';

@Controller('/api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    this.usersService.register(createUserDto);
  }

  @Get('/all')
  async getAllUsers() {
    return await this.usersService.getAllUsers().then(users => {
      return {
        users,
      };
    });
  }

  @Get('/:userId')
  async getUserById(@Param() params: UserParams) {
    return await this.usersService.getUserById(params.userId).then(user => {
      return {
        user,
      };
    });
  }

  @Put('/:userId')
  async updateUser(
    @Param() params: UserParams,
    @Body() updateUserDto: CreateUserDto,
  ) {
    const updatedUser = await this.usersService.updateUser(
      params.userId,
      updateUserDto,
    );
    const payload = {
      id: updatedUser.id,
    };

    const token = await this.authService.signPayload(payload);
    return { updatedUser, token };
  }

  @Put('/:userId/activate')
  async activateUser(@Param() params: UserParams) {
    const user = await this.usersService.findUserById(params.userId);
    const updatedUser = await this.usersService.updateUser(params.userId, {
      ...user,
      isActive: 1,
    });

    return { user: updatedUser };
  }

  @Put('/:userId/deactivate')
  async deactivateUser(@Param() params: UserParams) {
    const user = await this.usersService.findUserById(params.userId);
    const updatedUser = await this.usersService.updateUser(params.userId, {
      ...user,
      isActive: 0,
    });

    return { user: updatedUser };
  }
}
