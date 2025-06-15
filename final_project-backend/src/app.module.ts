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
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Guestbook, Comment],
      synchronize: true, // 운영 환경에서는 false 권장
    }),
    CommentsModule,
    GuestbooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
