export const Calculate = {
  fromArray(inputs: Array<any>) {
    if (inputs.length == 1) {
      return inputs[0]
    } else {
      const [left, operand, right, ...rest] = inputs

      if (operand == '+') {
        return this.fromArray([left + right, ...rest])
      } else if (operand == '-') {
        return this.fromArray([left - right, ...rest])
      } else if (operand == '×') {
        return this.fromArray([left * right, ...rest])
      } else if (operand == '÷') {
        return this.fromArray([left / right, ...rest])
      } else {
        throw 'Error'
      }
    }
  },
}
