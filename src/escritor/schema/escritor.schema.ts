import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthorDocument = HydratedDocument<escritor>;

@Schema()
export class escritor {
  @Prop()
  nome: string;

  @Prop()
  idade: number;

  @Prop()
  livros: string;
}

export const EscritorEsqueletoBanco = SchemaFactory.createForClass(escritor);