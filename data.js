// US Economic Calendar Data — 2026
// Sources: BLS, BEA, Federal Reserve
const EVENTS = [
  // ─── FED / FOMC ───────────────────────────────────────────────
  {
    date: "2026-01-28",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision and press conference. Two-day meeting Jan 27–28. Statement released at 2:00 PM ET.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-02-18",
    name: "FOMC Minutes (Jan 27–28)",
    description: "Minutes from the January 27–28 FOMC meeting, released three weeks after the decision.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-03-18",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Mar 17–18. Includes Summary of Economic Projections (SEP) and dot plot.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: true
  },
  {
    date: "2026-04-08",
    name: "FOMC Minutes (Mar 17–18)",
    description: "Minutes from the March 17–18 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-04-29",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Apr 28–29.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-05-20",
    name: "FOMC Minutes (Apr 28–29)",
    description: "Minutes from the April 28–29 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-06-17",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Jun 16–17. Includes Summary of Economic Projections (SEP) and dot plot.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: true
  },
  {
    date: "2026-07-08",
    name: "FOMC Minutes (Jun 16–17)",
    description: "Minutes from the June 16–17 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-07-29",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Jul 28–29.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-08-19",
    name: "FOMC Minutes (Jul 28–29)",
    description: "Minutes from the July 28–29 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-09-16",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Sep 15–16. Includes Summary of Economic Projections (SEP) and dot plot.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: true
  },
  {
    date: "2026-10-07",
    name: "FOMC Minutes (Sep 15–16)",
    description: "Minutes from the September 15–16 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-10-28",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Oct 27–28.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-11-18",
    name: "FOMC Minutes (Oct 27–28)",
    description: "Minutes from the October 27–28 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },
  {
    date: "2026-12-09",
    name: "FOMC Meeting Decision",
    description: "Federal Open Market Committee interest rate decision. Two-day meeting Dec 8–9. Includes Summary of Economic Projections (SEP) and dot plot.",
    source: "FED",
    time: "14:00 ET",
    importance: "high",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: true
  },
  {
    date: "2026-12-30",
    name: "FOMC Minutes (Dec 8–9)",
    description: "Minutes from the December 8–9 FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
    withSEP: false
  },

  // ─── BLS — Employment Situation (Jobs Report) ─────────────────
  {
    date: "2026-02-06",
    name: "Employment Situation — Jan 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-03-06",
    name: "Employment Situation — Feb 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-04-03",
    name: "Employment Situation — Mar 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-05-08",
    name: "Employment Situation — Apr 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-06-05",
    name: "Employment Situation — May 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-07-10",
    name: "Employment Situation — Jun 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-08-07",
    name: "Employment Situation — Jul 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-09-04",
    name: "Employment Situation — Aug 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-10-02",
    name: "Employment Situation — Sep 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-11-06",
    name: "Employment Situation — Oct 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },
  {
    date: "2026-12-04",
    name: "Employment Situation — Nov 2026",
    description: "Monthly jobs report: nonfarm payrolls, unemployment rate, average hourly earnings. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/news.release/empsit.toc.htm"
  },

  // ─── BLS — Consumer Price Index (CPI) ─────────────────────────
  {
    date: "2026-02-11",
    name: "CPI — January 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge measuring price changes in a basket of goods and services. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-03-11",
    name: "CPI — February 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-04-10",
    name: "CPI — March 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-05-12",
    name: "CPI — April 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-06-10",
    name: "CPI — May 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-07-14",
    name: "CPI — June 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-08-12",
    name: "CPI — July 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-09-11",
    name: "CPI — August 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-10-13",
    name: "CPI — September 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-11-12",
    name: "CPI — October 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },
  {
    date: "2026-12-11",
    name: "CPI — November 2026",
    description: "Consumer Price Index for All Urban Consumers. Key inflation gauge. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bls.gov/cpi/"
  },

  // ─── BLS — Producer Price Index (PPI) ─────────────────────────
  {
    date: "2026-02-13",
    name: "PPI — January 2026",
    description: "Producer Price Index: measures average price changes received by domestic producers. Leading indicator of consumer inflation. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-03-13",
    name: "PPI — February 2026",
    description: "Producer Price Index for February. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-04-14",
    name: "PPI — March 2026",
    description: "Producer Price Index for March. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-05-14",
    name: "PPI — April 2026",
    description: "Producer Price Index for April. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-06-12",
    name: "PPI — May 2026",
    description: "Producer Price Index for May. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-07-16",
    name: "PPI — June 2026",
    description: "Producer Price Index for June. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-08-13",
    name: "PPI — July 2026",
    description: "Producer Price Index for July. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-09-15",
    name: "PPI — August 2026",
    description: "Producer Price Index for August. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-10-15",
    name: "PPI — September 2026",
    description: "Producer Price Index for September. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-11-13",
    name: "PPI — October 2026",
    description: "Producer Price Index for October. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },
  {
    date: "2026-12-15",
    name: "PPI — November 2026",
    description: "Producer Price Index for November. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/ppi/"
  },

  // ─── BLS — JOLTS ───────────────────────────────────────────────
  {
    date: "2026-02-04",
    name: "JOLTS — December 2025",
    description: "Job Openings and Labor Turnover Survey: measures job openings, hires, and separations. Key labor market indicator. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },
  {
    date: "2026-03-10",
    name: "JOLTS — January 2026",
    description: "Job Openings and Labor Turnover Survey for January 2026. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },
  {
    date: "2026-04-07",
    name: "JOLTS — February 2026",
    description: "Job Openings and Labor Turnover Survey for February 2026. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },
  {
    date: "2026-05-05",
    name: "JOLTS — March 2026",
    description: "Job Openings and Labor Turnover Survey for March 2026. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },
  {
    date: "2026-06-09",
    name: "JOLTS — April 2026",
    description: "Job Openings and Labor Turnover Survey for April 2026. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },
  {
    date: "2026-07-07",
    name: "JOLTS — May 2026",
    description: "Job Openings and Labor Turnover Survey for May 2026. Released 10:00 AM ET.",
    source: "BLS",
    time: "10:00 ET",
    importance: "medium",
    url: "https://www.bls.gov/jlt/"
  },

  // ─── BEA — GDP ─────────────────────────────────────────────────
  {
    date: "2026-02-20",
    name: "GDP — Q4 2025 (Advance)",
    description: "Advance estimate of Gross Domestic Product for Q4 2025. First of three GDP estimates; most market-moving. Rescheduled from Jan 29. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-04-29",
    name: "GDP — Q1 2026 (Advance)",
    description: "Advance estimate of Gross Domestic Product for Q1 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-05-28",
    name: "GDP — Q1 2026 (Second Estimate)",
    description: "Second estimate of Gross Domestic Product for Q1 2026, with more complete source data. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-06-25",
    name: "GDP — Q1 2026 (Third Estimate)",
    description: "Final (third) estimate of Gross Domestic Product for Q1 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-07-30",
    name: "GDP — Q2 2026 (Advance)",
    description: "Advance estimate of Gross Domestic Product for Q2 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-08-27",
    name: "GDP — Q2 2026 (Second Estimate)",
    description: "Second estimate of Gross Domestic Product for Q2 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-09-30",
    name: "GDP — Q2 2026 (Third Estimate)",
    description: "Final (third) estimate of Gross Domestic Product for Q2 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-10-29",
    name: "GDP — Q3 2026 (Advance)",
    description: "Advance estimate of Gross Domestic Product for Q3 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-11-25",
    name: "GDP — Q3 2026 (Second Estimate)",
    description: "Second estimate of Gross Domestic Product for Q3 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },
  {
    date: "2026-12-23",
    name: "GDP — Q3 2026 (Third Estimate)",
    description: "Final (third) estimate of Gross Domestic Product for Q3 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/gdp/gross-domestic-product"
  },

  // ─── BEA — Personal Income & Outlays (PCE) ────────────────────
  {
    date: "2026-02-20",
    name: "PCE & Personal Income — December 2025",
    description: "Personal Consumption Expenditures price index — the Fed's preferred inflation measure — plus personal income and spending data. Rescheduled from Jan 29. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-03-27",
    name: "PCE & Personal Income — February 2026",
    description: "PCE price index and personal income/outlays for February 2026. Key Fed inflation gauge. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-04-30",
    name: "PCE & Personal Income — March 2026",
    description: "PCE price index and personal income/outlays for March 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-05-29",
    name: "PCE & Personal Income — April 2026",
    description: "PCE price index and personal income/outlays for April 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-06-26",
    name: "PCE & Personal Income — May 2026",
    description: "PCE price index and personal income/outlays for May 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-07-31",
    name: "PCE & Personal Income — June 2026",
    description: "PCE price index and personal income/outlays for June 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-08-28",
    name: "PCE & Personal Income — July 2026",
    description: "PCE price index and personal income/outlays for July 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-09-25",
    name: "PCE & Personal Income — August 2026",
    description: "PCE price index and personal income/outlays for August 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-10-30",
    name: "PCE & Personal Income — September 2026",
    description: "PCE price index and personal income/outlays for September 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-11-25",
    name: "PCE & Personal Income — October 2026",
    description: "PCE price index and personal income/outlays for October 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },
  {
    date: "2026-12-23",
    name: "PCE & Personal Income — November 2026",
    description: "PCE price index and personal income/outlays for November 2026. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "high",
    url: "https://www.bea.gov/data/consumer-spending/main"
  },

  // ─── BLS — Employment Cost Index (ECI) ────────────────────────
  {
    date: "2026-01-30",
    name: "Employment Cost Index — Q4 2025",
    description: "Quarterly measure of changes in labor costs including wages and benefits. Closely watched by Fed as wage inflation indicator. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/eci/"
  },
  {
    date: "2026-04-30",
    name: "Employment Cost Index — Q1 2026",
    description: "Quarterly measure of changes in labor costs including wages and benefits. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/eci/"
  },
  {
    date: "2026-07-31",
    name: "Employment Cost Index — Q2 2026",
    description: "Quarterly measure of changes in labor costs including wages and benefits. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/eci/"
  },
  {
    date: "2026-10-30",
    name: "Employment Cost Index — Q3 2026",
    description: "Quarterly measure of changes in labor costs including wages and benefits. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bls.gov/eci/"
  },

  // ─── BLS — Productivity ────────────────────────────────────────
  {
    date: "2026-02-05",
    name: "Productivity & Costs — Q4 2025 (Prelim)",
    description: "Nonfarm business productivity and unit labor costs, preliminary estimate for Q4 2025. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "low",
    url: "https://www.bls.gov/productivity/"
  },
  {
    date: "2026-03-05",
    name: "Productivity & Costs — Q4 2025 (Revised)",
    description: "Revised estimate of nonfarm business productivity and unit labor costs for Q4 2025. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "low",
    url: "https://www.bls.gov/productivity/"
  },

  // ─── BEA — International Trade ─────────────────────────────────
  {
    date: "2026-03-05",
    name: "International Trade in Goods & Services — Jan 2026",
    description: "Monthly trade balance report showing exports and imports of goods and services. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
  },
  {
    date: "2026-04-02",
    name: "International Trade in Goods & Services — Feb 2026",
    description: "Monthly trade balance report. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
  },
  {
    date: "2026-05-07",
    name: "International Trade in Goods & Services — Mar 2026",
    description: "Monthly trade balance report. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
  },
  {
    date: "2026-06-04",
    name: "International Trade in Goods & Services — Apr 2026",
    description: "Monthly trade balance report. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
  },
  {
    date: "2026-07-09",
    name: "International Trade in Goods & Services — May 2026",
    description: "Monthly trade balance report. Released 8:30 AM ET.",
    source: "BEA",
    time: "08:30 ET",
    importance: "medium",
    url: "https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services"
  },

  // ─── BLS — Import & Export Prices ─────────────────────────────
  {
    date: "2026-02-12",
    name: "Import/Export Price Indexes — January 2026",
    description: "Monthly price indexes for U.S. imports and exports. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "low",
    url: "https://www.bls.gov/mxp/"
  },
  {
    date: "2026-03-12",
    name: "Import/Export Price Indexes — February 2026",
    description: "Monthly price indexes for U.S. imports and exports. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "low",
    url: "https://www.bls.gov/mxp/"
  },
  {
    date: "2026-04-09",
    name: "Import/Export Price Indexes — March 2026",
    description: "Monthly price indexes for U.S. imports and exports. Released 8:30 AM ET.",
    source: "BLS",
    time: "08:30 ET",
    importance: "low",
    url: "https://www.bls.gov/mxp/"
  },

  // ─── FED — Beige Book ──────────────────────────────────────────
  {
    date: "2026-01-14",
    name: "Beige Book",
    description: "Federal Reserve summary of commentary on current economic conditions by district. Published eight times per year, approximately two weeks before each FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-03-04",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions. Released approximately two weeks before the March FOMC meeting.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-04-15",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-06-03",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-07-15",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-09-02",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-10-14",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  },
  {
    date: "2026-11-25",
    name: "Beige Book",
    description: "Federal Reserve summary of current economic conditions by district.",
    source: "FED",
    time: "14:00 ET",
    importance: "medium",
    url: "https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm"
  }
];
