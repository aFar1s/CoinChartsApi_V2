# Project2CoinChartsApi

This application was designed to import cryptocurrency data from various APIs and present the data in a manner that is usable to a trader.

Features:

- Currency selector to display desired currency.

- Search field that fliters the input text such that the result need not be an exact match. ie. 'tcoin' will still return 'bitcoin' as one of the matches instead of requiring and input of 'bitcoin'.

- Main page endpoints include Logo, Name, Ticker symbol, Price in selected currency, Market Capitalisation in selected currency and Percentage Price Change over 7 days in green for % > 1 or red for % < 1.

- Sorting feature to sort the data in the desired manner.

- Clickable components to display historical charts and more detailed endpoints(STILL DOING)

Libraries used:

- mui
- react-chartjs-2
- axios

API:

- https://www.coingecko.com/en/api/documentation?

postmortem:

1. Definately need to improve the code design
2.
