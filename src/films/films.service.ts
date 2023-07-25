import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFilmDTO } from './dto/create-film.dto';

@Injectable()
export class FilmsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.film.findMany();
  }

  async findById(id: string) {
    const film = await this.prisma.film.findUnique({ where: { id } });
    if (!film) {
      throw new NotFoundException(`Film with id ${id} not found`);
    }
    return film;
  }

  async create(createFilmDTO: CreateFilmDTO) {
    return this.prisma.film.create({
      data: createFilmDTO,
    });
  }

  async delete(id: string) {
    const film = await this.findById(id);
    return this.prisma.film.delete({ where: { id: film.id } });
  }

  async update(id: string, updateFilmDTO: CreateFilmDTO) {
    const film = await this.findById(id);
    return this.prisma.film.update({
      where: { id: film.id },
      data: updateFilmDTO,
    });
  }
}
