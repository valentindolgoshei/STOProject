import { InjectRepository } from '@nestjs/typeorm';
import { Autopart } from 'src/entities/autopart.entity';
import { Repository } from 'typeorm';
import { CreateAutopartDto } from './validation/dto/create.autopart.dto';
import { DeleteAutopartParams } from './validation/params/delete.autopart.params';
import { GetAutopartParams } from './validation/params/get.autopart.params';
import { UpdateAutopartParams } from './validation/params/update.autopart.params';

export class AutopartsService {
  constructor(
    @InjectRepository(Autopart)
    private readonly autopartsRepository: Repository<Autopart>,
  ) {}

  async createAutopart(autopartDto: CreateAutopartDto): Promise<Autopart> {
    return this.autopartsRepository.save(autopartDto);
  }

  async getAutopart(autopartParams: GetAutopartParams): Promise<Autopart> {
    return this.autopartsRepository.findOne(autopartParams.autopartId);
  }

  async getAutoparts(): Promise<Autopart[]> {
    return this.autopartsRepository.find();
  }

  async updateAutopart(
    autopartParams: UpdateAutopartParams,
    autopartDto: CreateAutopartDto,
  ): Promise<Autopart> {
    await this.autopartsRepository.update(
      { id: autopartParams.autopartId },
      { ...autopartDto },
    );
    return this.autopartsRepository.findOne({ id: autopartParams.autopartId });
  }

  async deleteAutopart(autopartParams: DeleteAutopartParams): Promise<void> {
    this.autopartsRepository.delete({ id: autopartParams.autopartId });
  }
}
