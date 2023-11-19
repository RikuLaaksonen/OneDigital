//TYPES
type Member = {
  name: string;
  age: number;
  plays: string[];
};
type Members = {
  current: Member[];
  past: Member[];
  all: string[];
};
type ExpectedMembers = {
  all: string[];
};
type ExpectedPlays = {
  [play: string]: string[];
};
type ExpectedResult = {
  members: ExpectedMembers;
  plays: ExpectedPlays;
};

// Data
const band: Members = {
  current: [
    { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
    { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
    { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
    { name: 'Steve', age: 55, plays: ['guitar'] },
  ],
  past: [
    { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
    { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
    { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] },
  ],
  all: [],
};

function transformData(band: Members): ExpectedResult {
  const allNames: string[] = [...band.current, ...band.past]
    .map((member) => ({
      name: member.name.toLowerCase(),
      age: member.age,
    }))
    .sort((a, b) => b.age - a.age || a.name.localeCompare(b.name))
    .map((member) => member.name);

  const plays: ExpectedPlays = {};
  [...band.current, ...band.past].forEach((member) => {
    member.plays.forEach((play) => {
      const playName = play.toLowerCase();
      plays[playName] = plays[playName]
        ? [...plays[playName], member.name.toLowerCase()]
        : [member.name.toLowerCase()];
    });
  });

  return {
    members: { all: allNames },
    plays,
  };
}

const expected = {
  members: {
    current: [
      { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
      { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
      { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
      { name: 'Steve', age: 55, plays: ['guitar'] },
    ],
    past: [
      { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
      { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
      { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] },
    ],
    all: ['sascha', 'gunter', 'raymond', 'steve', 'jules', 'en', 'lucia'],
  },
  plays: {
    vocals: ['sascha', 'lucia', 'raymond', 'en'],
    synth: ['sascha', 'lucia', 'jules', 'raymond', 'en', 'gunter'],
    guitar: ['sascha', 'jules', 'steve', 'en', 'gunter'],
    bass: ['sascha', 'jules'],
    drums: ['en'],
  },
};

const result: ExpectedResult = transformData(band);

console.log('Expected Members:', expected.members.all);
console.log('Actual Members:', result.members.all);

console.log(
  'Members Match:',
  JSON.stringify(result.members.all) === JSON.stringify(expected.members.all)
);

console.log('Expected Plays:', expected.plays);
console.log('Actual Plays:', result.plays);

console.log(
  'Plays Match:',
  JSON.stringify(result.plays) === JSON.stringify(expected.plays)
);
