import { Module } from '@nestjs/common';
import { modeloEscritor } from './escritor/module/escritor.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ modeloEscritor, MongooseModule.forRoot('mongodb://0.0.0.0/authors')],
  controllers: [],
  providers: [],
})
export class AppModule {}
