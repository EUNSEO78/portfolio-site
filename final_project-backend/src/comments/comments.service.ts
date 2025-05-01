import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
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

  // 생성
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
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

    return await this.commentRepository.save(comment);
  }

  // 조회
  async findAllByGuestbookId(guestbookId: number): Promise<Comment[]> {
    return await this.commentRepository.find({
      where: { guestbook: { id: guestbookId } },
      order: { createdAt: 'DESC' },
    });
  }

  // 삭제
  async remove(id: number): Promise<void> {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException('해당 댓글을 찾을 수 없습니다.');
    }
    await this.commentRepository.remove(comment);
  }

  // 좋아요 수 증가
  async increaseLikes(id: number): Promise<Comment> {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException('해당 댓글을 찾을 수 없습니다.');
    }
    comment.likes += 1;
    return await this.commentRepository.save(comment);
  }
}
