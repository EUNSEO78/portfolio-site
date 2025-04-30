import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guestbook } from './entities/guestbook.entity';
import { Repository } from 'typeorm';

export interface ApiRepository {
  success: boolean;
  message: string;
  statusCode: number;
  data: Guestbook[];
}

@Injectable()
export class GuestbooksService {
  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}

  // 생성
  async create(createGuestbookDto: CreateGuestbookDto) {
    const guestbook = await this.guestbookRepository.create(createGuestbookDto);
    if (!guestbook) {
      throw new BadRequestException('입력란 확인');
    }
    await this.guestbookRepository.save(guestbook);
    return {
      success: true,
      message: '방명록이 저장되었습니다.',
    };
  }

  // 모두 조회 [페이징 추가 고려]
  async findAll(): Promise<ApiRepository> {
    const guestbooks = await this.guestbookRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      success: true,
      message: '모든 방명록이 조회되었습니다.',
      statusCode: 200,
      data: guestbooks,
    };
  }

  // 상세 조회
  async findOne(id: number) {
    const guestbook = await this.guestbookRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    return {
      success: true,
      message: `${id}번 방명록이 조회되었습니다.`,
      statusCode: 200,
      data: guestbook,
    };
  }

  // 삭제
  async remove(id: number) {
    const guestbook = await this.guestbookRepository.findOne({ where: { id } });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    await this.guestbookRepository.remove(guestbook);
    return {
      success: true,
      message: `${id}번 방명록이 삭제되었습니다.`,
      statusCode: 200,
    };
  }

  // 좋아요 수 증가
  async increaseLikes(id: number) {
    const guestbook = await this.guestbookRepository.findOne({ where: { id } });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    guestbook.likes += 1;
    return this.guestbookRepository.save(guestbook);
  }

  // 조회수 증가
  async increaseViews(id: number) {
    const guestbook = await this.guestbookRepository.findOne({ where: { id } });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    guestbook.views += 1;
    return this.guestbookRepository.save(guestbook);
  }
}
