import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, Length } from 'class-validator';

export class CreateFilmDTO {
  @ApiProperty({
    description: 'The title of the film',
    default: 'Inception',
  })
  @IsString()
  @Length(1, 255)
  title: string;

  @ApiProperty({
    description: 'The director of the film',
    default: 'Christopher Nolan',
  })
  @IsString()
  @Length(1, 255)
  director: string;

  @ApiProperty({
    description: 'The year of the film',
    default: '2010',
  })
  @IsString()
  @Length(4, 4)
  year: string;

  @ApiProperty({
    description: 'The actors of the film',
    default: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
  })
  @IsArray()
  @IsString({ each: true })
  actors: string[];

  @ApiProperty({
    description: 'The synopsis of the film',
    default: 'A sci-fi film about dreams within dreams.',
  })
  @IsString()
  synopsis: string;

  @ApiProperty({
    description: 'The category of the film',
    default: 'owned',
  })
  @IsString()
  category: string;
}
