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
  HttpCode,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(
    @Query('guestbookId', ParseIntPipe) guestbookId: number,
  ): Promise<Comment[]> {
    return this.commentsService.findAllByGuestbookId(guestbookId);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    await this.commentsService.remove(id);
    return { message: `${id}번 방명록이 삭제되었습니다.` };
  }

  @Patch(':id/like')
  increaseLikes(@Param('id', ParseIntPipe) id: number): Promise<Comment> {
    return this.commentsService.increaseLikes(id);
  }
}
