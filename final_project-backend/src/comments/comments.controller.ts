import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  Query,
  Patch,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller(`comments`)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return await this.commentsService.create(createCommentDto);
  }

  @Get()
  async findAll(
    @Query('guestbookId', ParseIntPipe) guestbookId: number,
  ): Promise<Comment[]> {
    return await this.commentsService.findAllByGuestbookId(guestbookId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.commentsService.remove(id);
  }

  @Patch(':id/like')
  increaseLikes(@Param('id') id: number) {
    return this.commentsService.increaseLikes(id);
  }
}
