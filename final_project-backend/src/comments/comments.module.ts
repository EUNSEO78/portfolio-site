import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guestbook } from 'src/guestbooks/entities/guestbook.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Guestbook])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
