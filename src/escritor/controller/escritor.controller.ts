import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { escritorService } from '../service/escritor.service';
import { criaescritorDTO } from './dto/create-escritor.dto';
import { atualizaEscritorDto } from './dto/update-escritor.dto';

@Controller('escritor')
export class ControllerEscritor {
  constructor(private readonly escritorService: escritorService) {}

  @Post()
  create(@Body() criaescritorDTO: criaescritorDTO) {
    return this.escritorService.create(criaescritorDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escritorService.remove(id);

    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escritorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() atualizaEscritorDto: atualizaEscritorDto) {
    return this.escritorService.update(id, atualizaEscritorDto);
  }

  

  @Get()
  findAll() {
    return this.escritorService.findAll();
  }
}
