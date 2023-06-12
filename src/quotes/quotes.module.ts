import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quote.entity';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  providers: [QuotesService],
  controllers: [QuotesController],
})
export class QuotesModule {}
