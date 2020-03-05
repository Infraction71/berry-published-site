QUnit.module('FETCH MODULE', {})

QUnit.test('TEST Shipp Stuff (aysnc)', async assert => {
  assert.expect(3) // expect two async tests
  const ans = await updateWithShip(22);
  const len = ans.length
  console.info(`FETCHED ${len} characters: ${ans}`)
  assert.equal(ans, 'The Imperial shuttle has a max speed of 850 !', 'JSON retrival')
  assert.notEqual(0, len, 'Length is not zero')
  assert.notEqual(ans, 'No joke for you', 'Answer is not default')
})
