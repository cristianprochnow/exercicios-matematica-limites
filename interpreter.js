class Interpreter {
  formula;
  valuesList;

  setFormula(formula) {
    this.formula = formula;
  }

  /**
   * @param {{
   *   xLeft: number[],
   *   xRight: number[]
   * }} valuesList
   */
  setValues(valuesList) {
    this.valuesList = valuesList;
  }

  calcResults() {
    const results = {
      xLeft: {},
      xRight: {}
    };

    this.valuesList.xLeft.forEach(xLeftValue => {
      results.xLeft[xLeftValue.toString()] = this.executeFormula(xLeftValue);
    });
    this.valuesList.xRight.forEach(xRightValue => {
      results.xRight[xRightValue.toString()] = this.executeFormula(xRightValue);
    });

    return results;
  }

  executeFormula(value) {
    const customFormula = this.replaceFormula(value);

    return this.formatResult(eval(customFormula));
  }

  formatResult(resultValue) {
    return parseFloat(parseFloat(resultValue).toFixed(4));
  }

  replaceFormula(value) {
    return this.formula.replaceAll('x', value);
  }
}

export default Interpreter;
