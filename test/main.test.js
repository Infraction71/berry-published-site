QUnit.module('MAIN MODULE', {})
//CODE TAKEN STRAIGHT FROM DR.CASE'S EXAMPLE
QUnit.test('TEST KPH', assert => {
  assert.equal(toKPH(22), 35.40548, 'KPH: Positive integers')
  assert.equal(toKPH(15.5), 24.94477, 'KPH: decimal')
  assert.equal(toKPH(1),1.60934 , 'KPH: one')
  assert.equal(toKPH(0), 0, 'KPH: zero')
  assert.equal(toKPH(-12), null, 'KPH: null')
  
})
QUnit.test('TEST MPH', assert => {
  assert.equal(toMPH(22), 13.670162, 'MPH: Positive integers')
  assert.equal(toMPH(15.5), 9.6312505, 'MPH: decimal')
  assert.equal(toMPH(1),0.621371 , 'MPH: one')
  assert.equal(toMPH(0), 0, 'MPH: zero')
  assert.equal(toKPH(-12), null, 'MPH: null')
})




