const parity = require('./parity')

test('happy path balanced brackets - {}', () => {
  const testString = '{}'

  expect(parity(testString)).toBe(true)
})

test('beginning closed bracket - }{', () => {
  const testString = '}{'

  expect(parity(testString)).toBe(false)
})

test('one unclosed bracket - {{}', () => {
  const testString = '{{}'

  expect(parity(testString)).toBe(false)
})

test('empty string - ""', () => {
  const testString = ''

  expect(parity(testString)).toBe(true)
})

test('non-bracket characters - abc..xyz', () => {
  const testString = 'abc...xyz'

  expect(parity(testString)).toBe(true)
})

test('balanced brackets with non-bracket characters - {abc...xyz}', () => {
  const testString = '{abc...xyz}'

  expect(parity(testString)).toBe(true)
})

test('beginning closed bracket with non-bracket characters - }abc...xyz{', () => {
  const testString = '}abc...xyz{'

  expect(parity(testString)).toBe(false)
})

test('balanced nested brackets - {{}{}}', () => {
  const testString = '{{}{}}'

  expect(parity(testString)).toBe(true)
})

test('balanced multi-level nested brackets - {{{}}}', () => {
  const testString = '{{{}}}'

  expect(parity(testString)).toBe(true)
})

test('unbalanced multi-level nested brackets - {{}}}', () => {
  const testString = '{{}}}'

  expect(parity(testString)).toBe(false)
})
