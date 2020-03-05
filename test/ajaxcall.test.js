QUnit.module('FETCH MODULE', {})

QUnit.test('TEST Shipp Stuff (aysnc)', async assert => {
  assert.expect(2) // expect two async tests
  const ans = await updateWithShip()
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.notEqual(0, len, 'Length is not zero')
  assert.notEqual(ans, 'No joke for you', 'Answer is not default')
})
