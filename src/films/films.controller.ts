import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDTO } from './dto/create-film.dto';

@Controller('films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.filmsService.findById(id);
  }

  @Post()
  create(@Body(ValidationPipe) createFilmDTO: CreateFilmDTO) {
    return this.filmsService.create(createFilmDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.filmsService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFilmDTO: CreateFilmDTO) {
    return this.filmsService.update(id, updateFilmDTO);
  }
}
