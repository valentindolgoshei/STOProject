import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User])],
  controllers: [OrdersController],
  providers: [OrdersService, UsersService],
})
export class OrdersModule {}
