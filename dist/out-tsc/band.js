"use strict";
// Data
const band = {
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
function transformData(band) {
    const members = {
        current: [...band.current],
        past: [...band.past],
        all: [...band.all],
    };
    members.all = [...members.current, ...members.past]
        .map((member) => member.name.toLowerCase())
        .sort((a, b) => members.current.find((m) => m.name.toLowerCase() === b)?.age -
        members.current.find((m) => m.name.toLowerCase() === a)?.age || 0);
    const plays = {};
    members.current.concat(members.past).forEach((member) => {
        member.plays.forEach((play) => {
            plays[play] = plays[play]
                ? [...plays[play], member.name.toLowerCase()]
                : [member.name.toLowerCase()];
        });
    });
    return {
        members,
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
const result = transformData(band);
console.log('Members Match:', JSON.stringify(result.members) === JSON.stringify(expected.members));
console.log('Plays Match:', JSON.stringify(result.plays) === JSON.stringify(expected.plays));
//# sourceMappingURL=band.js.map