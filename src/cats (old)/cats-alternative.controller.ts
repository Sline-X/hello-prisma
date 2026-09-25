import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';

@Controller('cats')
export class CatsAlternativeController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }
}