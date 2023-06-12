import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Quote } from './quote.entity';
import { QuotesService } from './quotes.service';

const quotes: Quote[] = [
  { quote_id: 1, character: 'Michael', quote: "That's what she said" },
  {
    quote_id: 2,
    character: 'Jim',
    quote: 'Bears, Beets, Battlestar Galaltica',
  },
  { quote_id: 3, character: 'Pam', quote: "It's the same picture" },
];

describe('QuotesService', () => {
  let service: QuotesService;
  let repository: Repository<Quote>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuotesService,
        {
          provide: getRepositoryToken(Quote),
          useClass: Repository,
        },
      ],
    }).compile();
    service = module.get<QuotesService>(QuotesService);
    repository = module.get<Repository<Quote>>(getRepositoryToken(Quote));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of quotes', async () => {
      jest.spyOn(repository, 'find').mockResolvedValueOnce(quotes);
      expect(await service.findAll()).toEqual(quotes);
      // const mockedQuotes = await service.findAll();
      // console.log(mockedQuotes)
      // expect(mockedQuotes).toEqual(quotes);
    });
  });

  describe('findById', () => {
    it('should return a specific quote', async () => {
      jest.spyOn(repository, 'findOneBy').mockResolvedValueOnce(quotes[0]);
      expect(await service.findById(1)).toEqual(quotes[0]);
    });
  });

  describe('find', () => {
    it('should return a random quote', async () => {
      const ids = [1, 2, 3];
      const characters = ['Michael', 'Jim', 'Pam'];
      const sampleQuotes = [
        "That's what she said",
        'Bears, Beets, Battlestar Galaltica',
        "It's the same picture",
      ];
      jest.spyOn(repository, 'count').mockResolvedValueOnce(3);
      jest
        .spyOn(repository, 'findOneBy')
        .mockResolvedValueOnce(quotes[Math.floor(Math.random() * 3)]);

      await expect(ids).toContain((await service.find()).quote_id);

      jest.spyOn(repository, 'count').mockResolvedValueOnce(3);
      jest
        .spyOn(repository, 'findOneBy')
        .mockResolvedValueOnce(quotes[Math.floor(Math.random() * 3)]);

      await expect(characters).toContain((await service.find()).character);

      jest.spyOn(repository, 'count').mockResolvedValueOnce(3);
      jest
        .spyOn(repository, 'findOneBy')
        .mockResolvedValueOnce(quotes[Math.floor(Math.random() * 3)]);

      await expect(sampleQuotes).toContain((await service.find()).quote);
    });
  });
});
