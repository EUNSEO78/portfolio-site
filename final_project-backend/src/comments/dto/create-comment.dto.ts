import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsNumber()
  @IsNotEmpty({ message: 'guestbookId가 필요합니다.' })
  guestbookId: number;

  @IsString()
  @IsNotEmpty({ message: '작성자를 입력하세요.' })
  @MinLength(2, { message: '작성자는 2글자 이상이어야 합니다.' })
  @MaxLength(10, { message: '작성자는 10글자 이하여야 합니다.' })
  author: string;

  @IsString()
  @IsNotEmpty({ message: '내용을 입력하세요' })
  @MinLength(5, { message: '내용은 5글자 이상이어야 합니다.' })
  @MaxLength(500, { message: '내용은 500글자 이하여야 합니다.' })
  content: string;
}
