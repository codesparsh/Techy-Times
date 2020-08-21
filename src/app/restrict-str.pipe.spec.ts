import { RestrictStrPipe } from './restrict-str.pipe';

describe('RestrictStrPipe', () => {
  it('create an instance', () => {
    const pipe = new RestrictStrPipe();
    expect(pipe).toBeTruthy();
  });
});
