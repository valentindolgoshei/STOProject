import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderParams } from './validation/params/create.order.params';
import { CreateOrderDto } from './validation/dto/create.order.dto';
import { Order } from 'src/entities/order.entity';
import { GetOrderParams } from './validation/params/get.order.params';
import { AuthGuard } from '@nestjs/passport';
import { UpdateOrderParams } from './validation/params/update.order.params';
import { DeleteOrderParams } from './validation/params/delete.order.params';

@Controller('/api/orders')
@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('/:userId')
  async createOrder(
    @Param() params: CreateOrderParams,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.createOrder(params, createOrderDto);
  }

  @Get('/:orderId')
  async getOrder(@Param() params: GetOrderParams) {
    return this.ordersService.getOrder(params);
  }

  @Get('/')
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Put('/:userId/:orderId')
  async updateOrder(
    @Param() params: UpdateOrderParams,
    updateOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.updateOrder(params, updateOrderDto);
  }

  @Delete('/:orderId')
  async deleteOrder(@Param() params: DeleteOrderParams) {
    return this.ordersService.deleteOrder(params);
  }
}
