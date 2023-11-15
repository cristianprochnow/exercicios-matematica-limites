import Interpreter from './interpreter.js';
import { exercises } from './exercises.js';

const interpreter = new Interpreter();

Object.keys(exercises).forEach(exerciseIndex => {
  console.log(`Exercício #${exerciseIndex}`);

  Object.keys((exercises[exerciseIndex])).forEach(exerciseItemIndex => {
    console.log(`${exerciseItemIndex.toUpperCase()})`);

    const exerciseItem = exercises[exerciseIndex][exerciseItemIndex];

    interpreter.setValues({
      xLeft: exerciseItem.xLeft,
      xRight: exerciseItem.xRight,
    });
    interpreter.setFormula(exerciseItem.formula);

    console.log(interpreter.calcResults());
  });
});
