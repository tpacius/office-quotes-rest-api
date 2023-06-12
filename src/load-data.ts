import { Database } from 'sqlite3';
import quotes from './data/office_quotes.json';

export function loadData() {
  const db = new Database('./db');
  db.serialize(() => {
    const stmt = db.prepare(
      'INSERT OR IGNORE INTO Quote(quote_id, quote, character) VALUES (?,?,?)',
    );
    quotes.forEach((quote) => {
      stmt.run(quote['quote_id'], quote['quote'], quote['character']);
    });
    stmt.finalize();
  });
  db.close();
}
