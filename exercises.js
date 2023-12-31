import Schema from './schema.js';

export const exercises = {
  1: {
    a: new Schema(
      '(((x) ** 2) - 4) / ((x) - 2)',
      [1.7, 1.8, 1.9, 1.99, 1.999],
      [2.5, 2.2, 2.1, 2.01, 2.001]
    ),
    b: new Schema(
      '((x) - 3) / (((x) ** 2) - 9)',
      [2.7, 2.8, 2.9, 2.99, 2.999],
      [3.5, 3.2, 3.1, 3.01, 3.001]
    ),
    c: new Schema(
      '(((x) ** 2) - 4) / (((x) ** 2) - (3 * (x)) + 2)',
      [1.7, 1.8, 1.9, 1.99, 1.999],
      [2.5, 2.2, 2.1, 2.01, 2.001]
    ),
    d: new Schema(
      '(((x) ** 2) - 1) / (((x) ** 2) + (3 * (x)) + 2)',
      [-1.5, -1.2, -1.1, -1.01, -1.001],
      [-0.7, -0.8, -0.9, -0.99, -0.999]
    ),
    e: new Schema(
      '(((x) ** 2) - (6 * (x)) + 5) / (((x) ** 2) - (7 * (x)) + 10)',
      [4.7, 4.8, 4.9, 4.99, 4.999],
      [5.5, 5.2, 5.1, 5.01, 5.001]
    ),
    f: new Schema(
      '(((x) ** 3) - (3 * (x)) + 2) / (((x) ** 2) - 4)',
      [-2.5, -2.2, -2.1, -2.01, -2.001],
      [-1.7, -1.8, -1.9, -1.99, -1.999]
    ),
  },
  2: {
    a: new Schema(
      '(((x) ** 2) + (3 * (x))) / ((3 * (x)) + 1)',
      [1.5, 1.7, 1.9, 1.99, 1.999],
      [2.5, 2.2, 2.1, 2.01, 2.001]
    ),
    b: new Schema(
      '((2 * ((x) ** 3)) + Math.sqrt((x) ** 3) + 4) / (Math.cbrt((x) + 1))',
      [2/5, 3/7, 1/2, 2/3, 8/11],
      [21/22, 12/13, 10/11, 5/6, 9/11]
    ),
    c: new Schema(
      '((7 * ((x) ** 2)) + (Math.cbrt((x))) + 2) / ((4 * ((x) ** 2)) + Math.sqrt((x)))',
      [9/8, 7/6, 6/5, 5/4, 4/3],
      [13/7, 9/5, 7/4, 8/5, 9/6]
    ),
    d: new Schema(
      '((8 * ((x) ** 2)) + (5 * (x)) - Math.sqrt((x))) / ((9 * (x)) - (7 * ((x) ** 2)))',
      [8.5, 8.7, 8.9, 8.99, 8.999],
      [9.5, 9.2, 9.1, 9.01, 9.001]

    ),
    e: new Schema(
      '(Math.sqrt(3 * ((x) ** 4)) + 12 + ((x) ** 3)) / (Math.cbrt((x) + 2))',
      [1.4, 1.2, 1.24, 1.25, 1.259],
      [1.7, 1.5, 1.3, 1.28, 1.26]
    ),
    f: new Schema(
      '((5 * (x)) - ((x) ** 2)) / (4 + (x) + ((x) ** 3))',
      [-1.9, -1.7, -1.5, -1.01, -1.001],
      [-0.5, -0.7, -0.9, -0.99, -0.999]
    )
  },
  6: {
    a: new Schema(
      '3 - (7 * (x)) - (5 * ((x) ** 2))',
      [-0.5, -0.3, -0.1, -0.01, -0.001],
      [0.5, 0.3, 0.1, 0.01, 0.001]
    ),
    b: new Schema(
      '(3 * ((x) ** 2)) - (7 * (x)) + 2',
      [2.5, 2.7, 2.9, 2.99, 2.999],
      [3.5, 3.3, 3.1, 3.01, 3.001]
    ),
    c: new Schema(
      '-((x) ** 5) + (6 * ((x) ** 4)) + 2',
      [-1.5, -1.3, -1.1, -1.01, -1.001],
      [-0.5, -0.7, -0.9, -0.99, -0.999]
    ),
    d: new Schema(
      '(2 * (x)) + 7',
      [0.1, 0.2, 0.4, 0.49, 0.499],
      [1, 0.8, 0.6, 0.51, 0.501]
    )
  }
};
