import { Injectable } from '@nestjs/common';
import { criaescritorDTO as EscritorDTOcriar } from './dto/create-escritor.dto';
import { atualizaEscritorDto } from './dto/update-escritor.dto';
import { escritor } from '../schema/escritor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class serviceEscritor {
  constructor(@InjectModel(escritor.nome) private authorModel: Model<escritor>) {}

  async create(createCatDto: EscritorDTOcriar): Promise<escritor> {
    const EscritorCria = new this.authorModel(createCatDto);
    return EscritorCria.save();
  }

  async findAll(): Promise<escritor[]> {
    return this.authorModel.find();
  }
  async findOne(id: string):Promise<escritor> {
    return await this.authorModel.findById(id)
  }

  async update(id: string, atualizaEscritorDto: atualizaEscritorDto) {
    return await this.authorModel.findByIdAndUpdate(id,atualizaEscritorDto)
  }

  async remove(id: string) {
    return await this.authorModel.findByIdAndDelete(id)
    return `This action removes a #${id} escritor`;
  }
}
