import { Guestbook } from 'src/guestbooks/entities/guestbook.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Guestbook, (guestbook) => guestbook.comments, {
    onDelete: 'CASCADE',
  })
  guestbook: Guestbook;
}
