import { Card } from './card';

describe('Card', () => {
  it('should create an instance', () => {
    const groupId = 0;
    const cardId = 0;
    const turned = false;
    const found = false;
    expect(new Card(cardId, groupId, turned, found)).toBeTruthy();
  });
});
