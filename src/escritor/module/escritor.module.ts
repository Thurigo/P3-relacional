import { Module } from '@nestjs/common';
import { serviceEscritor } from '../service/escritor.service';
import { ControllerEscritor } from '../controller/escritor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EscritorEsqueletoBanco, escritor} from '../schema/escritor.schema';


@Module({
  imports: [MongooseModule.forFeature([{ nome: escritor.nome, schema: EscritorEsqueletoBanco }])],
  controllers: [ControllerEscritor],
  providers: [serviceEscritor],
})
export class modeloEscritor {}
