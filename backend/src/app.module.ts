import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule, OrdersModule],
  controllers: [
    AppController,
    HealthcheckController,
    AuthController,
    UsersController,
    OrdersController,
  ],
  providers: [AppService, AuthService, UsersService, OrdersService],
})
export class AppModule {}
