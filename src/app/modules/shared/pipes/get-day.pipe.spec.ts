import { GetDayPipe } from './get-day.pipe';

describe('GetDayPipe', () => {
  const pipe = new GetDayPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Input Date', () => {
    const date = new Date('08/08/2018');
    expect(pipe.transform(date)).toBe('08');
  });
  it('Input Null', () => {
    expect(pipe.transform(undefined)).toBe(null);
  });
});
