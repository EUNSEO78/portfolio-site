import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { Guestbook } from 'src/guestbooks/entities/guestbook.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const guestbook = await this.guestbookRepository.findOne({
      where: { id: createCommentDto.guestbookId },
    });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    const comment = this.commentRepository.create({
      author: createCommentDto.author,
      content: createCommentDto.content,
      guestbook,
    });

    return this.commentRepository.save(comment);
  }

  async findAllByGuestbookId(guestbookId: number): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: { guestbook: { id: guestbookId } },
      order: { createdAt: 'DESC' },
    });
  }

  async remove(id: number) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException('해당 댓글을 찾을 수 없습니다.');
    }
    return this.commentRepository.remove(comment);
  }

  async increaseLikes(id: number) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException('해당 댓글을 찾을 수 없습니다.');
    }
    comment.likes += 1;
    return this.commentRepository.save(comment);
  }
}
