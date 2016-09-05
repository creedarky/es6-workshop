import {expect} from 'chai';

describe('Template Literals', () => {
  it('should support string interpolation', () => {
    // construct a string from the person object using template literal string interpolation
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

    const companyProducts = `Axiom Zen has ${company.products.length} incredible products: ${company.products.join(', ')}`;
    expect(companyProducts).to.equal(
      'Axiom Zen has 5 incredible products: ZenHub, Routific, Timeline, Pipp, Persomm'
    );
  });

  it(`should support multi-line strings`, () => {
    // construct a string with multiple lines without needing escaped newline characters
    const multiLine = `
      How cool
      is this!?
    `;
    expect(multiLine).to.equal('\n      How cool\n      is this!?\n    ');
  });

  it(`should support string escaping`, () => {
    // properly escape a string in a template literal for each of these
    expect(`Hi\nthere!`).to.equal('Hi\nthere!');
    expect(`This is \`escaped\` backtics`).to.equal('This is `escaped` backtics');
  });

  describe(`EXTRA CREDIT`, () => {
    // you likely wont often use tagging, but it can be handy!
    describe(`tagging`, () => {
      it.skip(`should call the tagging function`, () => {
        const noun = 'World';
        const emotion = 'happy';
        const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`;
        expect(result).to.equal('Hello super-cool World! Are you feeling really happy today?');

        function tagIt(literalString, ...interpolatedParts) {
          // implement this function to make the test pass
          return 'fixme';
        }
      });
    });
  });

});
