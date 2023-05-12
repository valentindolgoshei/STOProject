import {
  Controller,
  Get,
  UseGuards,
  Res,
  Req,
  UnauthorizedException,
  Post,
  Body,
  Headers,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizeUserDto } from '../users/validation/dto/authorize.user.dto';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('/login')
  async login(@Body() authorizeUserDto: AuthorizeUserDto) {
    const user = await this.usersService.findUserByLogin(
      authorizeUserDto.login,
    );
    const payload = {
      id: user.id,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('/me')
  @UseGuards(AuthGuard('jwt'))
  async me(@Req() request: Request) {
    const authHeader = request.headers.authorization;
    const jwt = authHeader.slice(7);
    return await this.authService.getUserByJwt(jwt);
  }
}
