import Schema from './schema.js';

export const exercises = {
  1: {
    a: new Schema(
      '((x ** 2) - 4) / (x - 2)',
      [1.7, 1.8, 1.9, 1.99, 1.999],
      [2.5, 2.2, 2.1, 2.01, 2.001]
    ),
    b: new Schema(
      '(x - 3) / ((x ** 2) - 9)',
      [2.7, 2.8, 2.9, 2.99, 2.999],
      [3.5, 3.2, 3.1, 3.01, 3.001]
    )
  }
};
