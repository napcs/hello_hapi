'use strict';
const Code  = require('code');
const Lab   = require('lab');
const lab   = exports.lab = Lab.script();
const Hello = require('../../lib/hello.js');

lab.experiment('test greetings', () => {

    lab.test('greets with name ', (done) => {

        Code.expect(Hello('Homer')).to.equal('Hello, Homer!');
        done();
    });

});
