import { Guestbook } from 'src/guestbooks/entities/guestbook.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guestbookId: number;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column({ type: 'int', default: 0 })
  likes: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Guestbook, (guestbook) => guestbook.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'guestbookId' })
  guestbook: Guestbook;
}
