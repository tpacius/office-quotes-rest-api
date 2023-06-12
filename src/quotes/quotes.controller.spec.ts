import { Test } from '@nestjs/testing';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

describe('QuotesController', () => {
  let quotesController: QuotesController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [
        {
          provide: QuotesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                quote_id: 1,
                character: 'Michael',
                quote: "That's what she said",
              },
              {
                quote_id: 2,
                character: 'Jim',
                quote: 'Bears, Beets, Battlestar Galaltica',
              },
              { quote_id: 3, character: 'Pam', quote: "It's the same picture" },
            ]),
            findById: jest.fn().mockImplementation((quote_id: number) =>
              Promise.resolve({
                quote_id,
                character: 'Michael',
                quote: "That's what she said",
              }),
            ),
            find: jest.fn().mockResolvedValue(
              [
                {
                  quote_id: 1,
                  character: 'Michael',
                  quote: "That's what she said",
                },
                {
                  quote_id: 2,
                  character: 'Jim',
                  quote: 'Bears, Beets, Battlestar Galaltica',
                },
                {
                  quote_id: 3,
                  character: 'Pam',
                  quote: "It's the same picture",
                },
              ][Math.floor(Math.random() * 3)],
            ),
          },
        },
      ],
    }).compile();

    quotesController = moduleRef.get<QuotesController>(QuotesController);
  });

  it('should be defined', () => {
    expect(quotesController).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of quotes', async () => {
      await expect(quotesController.getQuotes()).resolves.toEqual([
        { quote_id: 1, character: 'Michael', quote: "That's what she said" },
        {
          quote_id: 2,
          character: 'Jim',
          quote: 'Bears, Beets, Battlestar Galaltica',
        },
        { quote_id: 3, character: 'Pam', quote: "It's the same picture" },
      ]);
    });
  });

  describe('findById', () => {
    it('should get a single quote', async () => {
      await expect(quotesController.getQuoteById(1)).resolves.toEqual({
        quote_id: 1,
        character: 'Michael',
        quote: "That's what she said",
      });
    });
  });

  describe('find', () => {
    it('should get a random quote', async () => {
      const ids = [1, 2, 3];
      const characters = ['Michael', 'Jim', 'Pam'];
      const quotes = [
        "That's what she said",
        'Bears, Beets, Battlestar Galaltica',
        "It's the same picture",
      ];
      await expect(quotesController.getRandomQuote()).resolves.toBeDefined();
      await expect(ids).toContain(
        (
          await quotesController.getRandomQuote()
        ).quote_id,
      );
      await expect(characters).toContain(
        (
          await quotesController.getRandomQuote()
        ).character,
      );
      await expect(quotes).toContain(
        (
          await quotesController.getRandomQuote()
        ).quote,
      );
    });
  });
});
