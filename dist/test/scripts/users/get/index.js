'use strict';

const config = require('../../../config');
const data = require('../data').GET_ALL_USERS;
const util = require('../../../util');
const { expect, request } = require('../../../common');


describe(data.DESCRIBE, () => {
    const baseurl = config.HOST;
    it(data.SUB, done => {
        request(baseurl)
            .get(data.PATH)
            .send()
            .set(config.AUTH_HEADER)
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(data.EXPECTED_RESULT.RESPONSE_STATUS_CODE);
                let body = res.body;
                expect(Array.isArray(body.data), true);
                expect(body.status, data.EXPECTED_RESULT.RESPONSE_STATUS_CODE);
                done();
            });
    });
});