import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Autopart } from "src/entities/autopart.entity";
import { AutopartsController } from "./autoparts.controller";
import { AutopartsService } from "./autoparts.service";

@Module({
  imports: [TypeOrmModule.forFeature([Autopart])],
  controllers: [AutopartsController],
  providers: [AutopartsService]
})
export class AutopartsModule {}
