import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body } from '@nestjs/common';
// import { CreateCatDto} from './create-cat.dto';

@Controller('cats (old)')
export class CatsController {
  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats (old)';
  // }

  @Get('breed')
  getBreed(): string {
    return 'This action returns breed';
  }

  @Post()
  // @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('abcd/*')
  findAllWildcards() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  // return `This action returns #${params.id} cat`;
  findOne(@Param('id') id: string) {
    return `This action returns #${id} cat`;
  }

  @Get()
  async findAllAsync(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  // не получилось
  // @Post()
  // async createAsync(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
}
