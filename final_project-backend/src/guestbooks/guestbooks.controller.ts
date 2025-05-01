import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';
import { GuestbooksService } from './guestbooks.service';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
import { Guestbook } from './entities/guestbook.entity';

@Controller('guestbooks')
export class GuestbooksController {
  constructor(private readonly guestbooksService: GuestbooksService) {}

  @Post()
  create(@Body() createGuestbookDto: CreateGuestbookDto): Promise<Guestbook> {
    return this.guestbooksService.create(createGuestbookDto);
  }

  @Get()
  findAll(): Promise<Guestbook[]> {
    return this.guestbooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Guestbook> {
    return this.guestbooksService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    await this.guestbooksService.remove(id);
    return { message: `${id}번 방명록이 삭제되었습니다.` };
  }

  @Patch(':id/like')
  increaseLikes(@Param('id', ParseIntPipe) id: number): Promise<Guestbook> {
    return this.guestbooksService.increaseLikes(id);
  }

  @Patch(':id/view')
  increaseViews(@Param('id', ParseIntPipe) id: number): Promise<Guestbook> {
    return this.guestbooksService.increaseViews(id);
  }
}
