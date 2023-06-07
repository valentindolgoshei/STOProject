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
import { AuthGuard } from '@nestjs/passport';
import { AutopartsService } from './autoparts.service';
import { CreateAutopartDto } from './validation/dto/create.autopart.dto';
import { DeleteAutopartParams } from './validation/params/delete.autopart.params';
import { GetAutopartParams } from './validation/params/get.autopart.params';
import { UpdateAutopartParams } from './validation/params/update.autopart.params';

@Controller('/api/autoparts')
@UseGuards(AuthGuard('jwt'))
export class AutopartsController {
  constructor(private readonly autopartsService: AutopartsService) {}

  @Post()
  async createAutopart(@Body() createAutopartDto: CreateAutopartDto) {
    return this.autopartsService.createAutopart(createAutopartDto);
  }

  @Get('/:autopartId')
  async getAutopart(@Param() params: GetAutopartParams) {
    return this.autopartsService.getAutopart(params);
  }

  @Get()
  async getAutoparts() {
    return this.autopartsService.getAutoparts();
  }

  @Put('/:autopartId')
  async updateAutopart(
    @Param() params: UpdateAutopartParams,
    @Body() updateAutopartDto: CreateAutopartDto,
  ) {
    return this.autopartsService.updateAutopart(params, updateAutopartDto);
  }

  @Delete('/:autopartId')
  async deleteAutopart(@Param() params: DeleteAutopartParams) {
    return this.autopartsService.deleteAutopart(params);
  }
}
