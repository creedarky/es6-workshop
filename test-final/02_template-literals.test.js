import {expect} from 'chai';

describe('Template Literals', () => {
  it('should support string interpolation', () => {
    // construct a string using template literal string interpolation
    const company = {
      name: 'Axiom Zen',
      products: [
        'ZenHub',
        'Routific',
        'Timeline',
        'Pipp',
        'Persomm'
      ]
    };

    const companyProducts = `${company.name} has ${company.products.length} incredible products: ${company.products.join(', ')}`;
    expect(companyProducts).to.equal(
      'Axiom Zen has 5 incredible products: ZenHub, Routific, Timeline, Pipp, Persomm'
    );
  });

  it(`should support multi-line strings`, () => {
    const multiLine = `
      How cool
      is this!?
    `;
    expect(multiLine).to.equal('\n      How cool\n      is this!?\n    ');
  });

  it(`should support string escaping`, () => {
    expect(`Hi\nthere!`).to.equal('Hi\nthere!');
    expect(`This is \`escaped\` backtics`).to.equal('This is `escaped` backtics');
  });

  describe(`EXTRA CREDIT`, () => {
    // you likely wont often use tagging, but it can be handy!
    describe(`tagging`, () => {
      it(`should call the tagging function`, () => {
        const noun = 'World';
        const emotion = 'happy';
        const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
        expect(result).to.equal('Hello super-cool World! Are you feeling really happy today?');

        function tagIt(literalString, ...interpolatedParts) {
          const firstPart = `${literalString[0]}super-cool ${interpolatedParts[0]}`;
          const lastPart = `${literalString[1]}really ${interpolatedParts[1]}${literalString[2]}`;
          return `${firstPart}${lastPart}`;
        }
      });
    });
  });

});
