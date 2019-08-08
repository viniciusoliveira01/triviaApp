import questions from './questions';

export default {
  get: jest.fn(() => Promise.resolve(questions))
};
