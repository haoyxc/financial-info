const express = require("express");
const axios = require("axios");
const router = express.Router();

console.log("working");
async function getAnnualReport(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/financials/income-statement/${ticker}`
    );
    let data = resp.data;
    let netIncome = data.financials[0]["Net Income"];
    let { EBIT, EBITDA } = data.financials[0];
    console.log(netIncome);
    // data.financials[0].EBITA
    // console.log(resp.data);
  } catch (e) {
    console.log(e);
  }
}

async function getBalanceSheet(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/financials/balance-sheet-statement/${ticker}`
    );
    let data = resp.data;
    console.log(data);
  } catch (e) {
    console.log("ERR", e);
  }
}

async function getCashFlow(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/financials/cash-flow-statement/${ticker}`
    );
    let data = resp.data;
    console.log(data);
  } catch (e) {
    console.log("ERR", e);
  }
}
async function getKeyMetrics(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/company-key-metrics/${ticker}`
    );
    let data = resp.data;
    console.log(data);
  } catch (e) {
    console.log("ERR", e);
  }
}

async function getEnterpriseValue(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/enterprise-value/${ticker}`
    );
    let data = resp.data;
    console.log(data);
  } catch (e) {
    console.log("ERR", e);
  }
}

async function getCompanyRatios(ticker) {
  try {
    let resp = await axios(
      `https://financialmodelingprep.com/api/v3/financial-ratios/${ticker}`
    );
    let data = resp.data;
    console.log(data);
  } catch (e) {
    console.log("ERR", e);
  }
}

getAnnualReport("TIF");
// getBalanceSheet("TIF");
// getCashFlow("CC");
// getKeyMetrics("CC");
// getCompanyRatios("GOOG");

module.exports = router;
