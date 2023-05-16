import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './validation/dto/create.order.dto';
import { CreateOrderParams } from './validation/params/create.order.params';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { GetOrderParams } from './validation/params/get.order.params';
import { UpdateOrderParams } from './validation/params/update.order.params';
import { DeleteOrderParams } from './validation/params/delete.order.params';
import * as _ from 'lodash';

export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    private readonly usersServise: UsersService,
  ) {}

  async createOrder(
    orderParams: CreateOrderParams,
    orderDto: CreateOrderDto,
  ): Promise<Order> {
    const user = await this.usersServise.findUserById(orderParams.userId);
    return this.ordersRepository.save({
      ...orderDto,
      user,
    });
  }

  async getOrder(orderParams: GetOrderParams): Promise<Order> {
    return this.ordersRepository.findOne(orderParams.orderId, {
      relations: ['user'],
    });
  }

  async getOrders(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async updateOrder(
    orderParams: UpdateOrderParams,
    orderDto: CreateOrderDto,
  ): Promise<Order> {
    const user = await this.usersServise.findUserById(orderParams.userId);
    const order = _.omit(orderDto, 'userId');
    await this.ordersRepository.update(
      { id: orderParams.orderId },
      { ...order, user },
    );
    return this.ordersRepository.findOne({ id: orderParams.orderId });
  }

  async deleteOrder(orderParams: DeleteOrderParams): Promise<void> {
    this.ordersRepository.delete({ id: orderParams.orderId });
  }
}
