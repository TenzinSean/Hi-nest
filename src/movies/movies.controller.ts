import { Controller, Get, Param, Post, Delete, Patch, Body, Query, Req, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Controller('movies')
export class MoviesController {
    
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(@Req() req, @Res() res): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching a movies with a title: ${searchingYear} `;
    }


    @Get(":id")
    getOne(@Param('id') movieId: number): Movie{
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }


    @Post()
    create(@Body() movieData: CreateMovieDto){
        console.log(movieData);
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    deleteMovie(@Param('id') movieId:number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }

}
