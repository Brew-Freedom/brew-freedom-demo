# Brew-Freedom

## Training Compliance Checker (Data Demo)

This repository contains a simple, client-side **Training Compliance Checker** that validates structured CSV files to identify incomplete or non-compliant training records.

The project demonstrates how deterministic data checks can surface compliance gaps early using lightweight data validation logic.

---

## What the Demo Does

The live demo allows a user to:
1. Upload a CSV file
2. Validate required fields
3. Identify missing or incomplete training records

All processing happens in the browser using JavaScript.

---

## Required CSV Schema

The uploaded CSV must include the following columns:

- Employee Name  
- Unit  
- Training Name  
- Completion Status  

If any required column is missing, the checker flags the issue immediately.

---

## Validation Logic

The checker:
- Parses the uploaded CSV file
- Verifies the presence of required columns
- Flags missing or incomplete records
- Outputs a clear compliance status message

This establishes a repeatable pattern:
**structured input → rule-based validation → actionable signal**

---

## Purpose

This demo illustrates how compliance checks can be automated using simple, transparent data rules.

The same pattern can be extended to:
- Training completion audits
- Governance and readiness checks
- Data quality validation pipelines
- AI training data compliance workflows

---

## Live Demo

The demo is deployed as a static site using GitHub Pages and runs entirely in the browser.
