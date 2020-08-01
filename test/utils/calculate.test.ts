import { Calculate } from '../../utils/calculate'

describe('Calculate', () => {
  it('receives array and return result', () => {
    let result

    result = Calculate.fromArray([1, '+', 2])
    expect(result).toEqual(3)

    result = Calculate.fromArray([5, '-', 1])
    expect(result).toEqual(4)

    result = Calculate.fromArray([2, '×', 2])
    expect(result).toEqual(4)

    result = Calculate.fromArray([14, '÷', 7])
    expect(result).toEqual(2)
  })

  it('calculates recursively', () => {
    let result

    result = Calculate.fromArray([1, '+', 2, '-', 3])
    expect(result).toEqual(0)

    result = Calculate.fromArray([7, '×', 3, '-', 6])
    expect(result).toEqual(15)
  })
})
