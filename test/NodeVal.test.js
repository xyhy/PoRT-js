const NodeVal = require('../src/NodeVal')

test('constructor', () => {
    let testingNode = new NodeVal(15, 7, 1)
    expect(testingNode.Value()).toEqual(15);
    expect(testingNode.Tax()).toEqual(7);
    expect(testingNode.Dbit()).toEqual(1);
});

test('setter', () => {
    let testingNode = new NodeVal()
    testingNode.SetValue(15)
    testingNode.SetTax(7)
    testingNode.SetDbit(1)
    expect(testingNode.Value()).toEqual(15);
    expect(testingNode.Tax()).toEqual(7);
    expect(testingNode.Dbit()).toEqual(1);
});