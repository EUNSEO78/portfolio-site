import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestbooksModule } from './guestbooks/guestbooks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guestbook } from './guestbooks/entities/guestbook.entity';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'guestbooks',
      entities: [Guestbook, Comment],
      synchronize: true,
    }),
    CommentsModule,
    GuestbooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
