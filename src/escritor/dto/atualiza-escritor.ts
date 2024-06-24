import { PartialType } from '@nestjs/mapped-types';
import { criaescritorDTO } from './create-escritor.dto';

export class atualizaEscritorDto extends PartialType(criaescritorDTO) {}
