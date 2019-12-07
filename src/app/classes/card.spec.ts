import { Card } from './card';

describe('Card', () => {
  it('should create an instance', () => {
    let groupId;
    let cardId;
    let turned;
    let found;
    expect(new Card(cardId, groupId, turned, found)).toBeTruthy();
  });
});
