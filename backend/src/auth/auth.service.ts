import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UsersService } from '../users/users.service';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,
              private readonly jwtService: JwtService,
              ) {
  }

  async signPayload(payload: any) {
    return sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: '12h'});
  }

  async validateUser(payload: any): Promise<object> {
    return this.usersService.findByPayload(payload);
  }

  async getUserByJwt(jwt: string) {
    const payload: any = this.jwtService.decode(jwt);
    return await this.usersService.findUserById(payload.id);
  }
}
