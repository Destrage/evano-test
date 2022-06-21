module.exports = {
    GET_ALL_USERS: {
        NAME: "Get All Users",
        PATH: '/user',
        DESCRIBE: "Get All Users API -> GET",
        SUB: 'Should successfully pass the test for get all user api',
        TEST_DATA: {},
        EXPECTED_RESULT: {
            RESPONSE_DATA_IS_ARRAY: true,
            RESPONSE_STATUS_CODE: 200
        }
    }
}