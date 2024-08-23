class Dog { }

const someValues = [
  // primitive data types
  undefined,
  null,
  true,
  false,
  'Some string',
  489,
  500.25,
  34938243209482349042803482389n,
  Symbol('foo'),
  // functions (sort of abstract ;) )
  function () { },
  () => { },
  async function () { },
  async () => { },
  // abstract data types
  { status: 'I am an object' },
  [1, 2, 3],
  new Date(),
  new Dog()
];

function betterTypeOf(value) {
  if (value === undefined) { return undefined; }
  if (value === null) { return null; }
  return value.constructor.name;
}

for (let value of someValues) {
  console.log('value', value, 'typeof', betterTypeOf(value));
}