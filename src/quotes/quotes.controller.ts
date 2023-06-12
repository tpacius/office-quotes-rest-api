import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.entity';

@Controller('api/v1/quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}
  @Get('getAllQuotes')
  async getQuotes() {
    return await this.quotesService.findAll();
  }

  @Get('random')
  async getRandomQuote(): Promise<Quote> {
    return await this.quotesService.find();
  }

  @Get(':quote_id')
  async getQuoteById(@Param('quote_id') quote_id: number): Promise<Quote> {
    return await this.quotesService.findById(quote_id);
  }
}
