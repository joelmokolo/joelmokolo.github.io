# Excel sales dashboard — Assignment 2

**Type:** Training assignment · Excel dashboard  
**Context:** TS Academy data analytics training, with guidance from Ezekiel Aleke.  
**Files:** [Open the workbook](JoelMokolo_Assignment%202_Project.xlsx) · [View the dashboard image](Assignment%202.png)

![Excel sales dashboard showing sales-rep and product filters, timelines, four charts and KPI cards](Assignment%202.png)

## Question and method

The assignment asked for revenue, cost, profit and customer KPIs; pivot views of profit by product, revenue by sales representative, cost of goods sold by city and monthly customers; and an interactive dashboard. I worked with 2,098 sales rows, calculated revenue, COGS and profit in Excel, built pivot summaries and charts, and added controls for exploring the results.

The workbook contains `Sales Data`, `Sales_Data2`, `QA`, `Sales_Pivot`, `Sales_Dashboard` and the original `Instructions`. The screenshot shows the dashboard's sales-rep, product and customer-type slicers and date timelines. Those controls differ from the brief's suggested region and category slicers; the workbook shows the delivered version.

## What to check

1. Open `Sales_Dashboard` in desktop Excel to use the slicers and timelines. The PNG is a static view.
2. Inspect `Sales_Pivot` for the underlying pivot tables and chart sources.
3. Inspect formulas in `Sales Data` for unit cost, revenue, COGS and profit. The `QA` and second data sheet are retained to show the working file as submitted.

## Limitations

This is an academy practice dataset, not evidence of commercial sales. The screenshot is a filtered view: its KPI totals should not be read as unfiltered totals for all 2,098 rows. The assignment refers to a customer KPI, while the visible worksheet and pivots should be used to determine the exact count definition; I have not claimed a unique-customer measure without checking its underlying field. Currency symbols in the dashboard are formatting inherited from the exercise and do not establish a real transaction currency.
