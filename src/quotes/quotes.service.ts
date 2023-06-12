import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}

  async findById(quote_id: number): Promise<Quote> | null {
    if (!quote_id) {
      return null;
    }
    return this.quoteRepository.findOneBy({ quote_id: quote_id });
  }

  async find(): Promise<Quote> {
    const dbCount = await this.quoteRepository.count({});
    const quote_id = Math.floor(Math.random() * (dbCount - 1) + 1);
    return await this.quoteRepository.findOneBy({ quote_id });
  }

  async findAll(): Promise<Array<Quote>> {
    return await this.quoteRepository.find();
  }
}
