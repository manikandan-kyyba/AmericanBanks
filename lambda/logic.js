const moment = require('moment-timezone'); // will help us do all the dates math while considering the timezone
const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: "http://ec2-3-234-242-165.compute-1.amazonaws.com:5000"
});
axiosInstance.defaults.timeout = 6500;
axiosInstance.defaults.headers = { 'Accept': 'application/json' };

module.exports = {
    getAccountInfoByBankName(bankName) {
        const url = `/api/v1/get-bank-by-name/${bankName}`;
        async function getJsonResponse(url) {
            const res = await axiosInstance.get(url);
            return res.data;
        }

        return getJsonResponse(url).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    getAccountByLastDigit(lastDigit) {
        const url = `/api/v1/get-account-by-last-digit/${lastDigit}`;
        async function getJsonResponse(url) {
            const res = await axiosInstance.get(url);
            return res.data;
        }

        return getJsonResponse(url).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    currentBalance(accountNumber, pin) {
        const url = `/api/v1/current-balance/`;
        const body = {
            'account_number': accountNumber,
            'pin': pin,
        }
        async function getJsonResponse(url) {
            const res = await axiosInstance.post(url, body);
            return res.data;
        }

        return getJsonResponse(url).then((result) => {
            return result;
        }).catch((error) => {
            return error;
        });
    },
    statementByCheckLastDigit(accountNumber, checkNumber) {
        const url = `/api/v1/statement-by-check-last-digit/`;
        const body = {
            'account_number': accountNumber,
            'check_number': checkNumber,
        }
        async function getJsonResponse(url) {
            const res = await axiosInstance.post(url, body);
            return res.data;
        }

        return getJsonResponse(url).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    lastDeposit(accountNumber) {
        const url = `/api/v1/last-deposit/`;
        const body = {
            'account_number': accountNumber
        }
        async function getJsonResponse(url) {
            const res = await axiosInstance.post(url, body);
            return res.data;
        }

        return getJsonResponse(url).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
}
