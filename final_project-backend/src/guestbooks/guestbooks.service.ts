import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGuestbookDto } from './dto/create-guestbook.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Guestbook } from './entities/guestbook.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuestbooksService {
  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}

  // 유틸 메서드(remove, increaseLikes, increaseViews)
  private async findGuestbookOrFail(id: number): Promise<Guestbook> {
    const guestbook = await this.guestbookRepository.findOne({ where: { id } });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }

    return guestbook;
  }

  // 생성
  async create(createGuestbookDto: CreateGuestbookDto): Promise<Guestbook> {
    const guestbook = this.guestbookRepository.create(createGuestbookDto);
    if (!guestbook) {
      throw new BadRequestException('입력란을 확인해주세요.');
    }
    return await this.guestbookRepository.save(guestbook);
  }

  // 모두 조회 [페이징 추가 고려]
  async findAll(): Promise<Guestbook[]> {
    return await this.guestbookRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  // 상세 조회
  async findOne(id: number): Promise<Guestbook> {
    const guestbook = await this.guestbookRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
    if (!guestbook) {
      throw new NotFoundException('해당 방명록을 찾을 수 없습니다.');
    }
    return guestbook;
  }

  // 삭제
  async remove(id: number): Promise<void> {
    const guestbook = await this.findGuestbookOrFail(id);
    await this.guestbookRepository.remove(guestbook);
  }

  // 좋아요 수 증가
  async increaseLikes(id: number): Promise<Guestbook> {
    const guestbook = await this.findGuestbookOrFail(id);
    guestbook.likes += 1;
    return await this.guestbookRepository.save(guestbook);
  }

  // 조회수 증가
  async increaseViews(id: number): Promise<Guestbook> {
    const guestbook = await this.findGuestbookOrFail(id);
    guestbook.views += 1;
    return await this.guestbookRepository.save(guestbook);
  }
}
