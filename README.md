# Brew-Freedom

## Training Compliance Checker (Data Validation Demo)

This repository contains a lightweight **training compliance validation tool** that demonstrates how structured datasets can be programmatically checked for completeness and readiness.

The project focuses on **schema validation, deterministic rules, and clear compliance signaling**—core skills in data operations, governance, and AI pipeline support.

---

## What This Demo Does

The application allows a user to upload a CSV file and automatically validates it against a required schema.

Specifically, the demo:
- Parses structured CSV input
- Enforces required fields
- Flags missing or incomplete records
- Surfaces compliance gaps deterministically

All validation runs client-side for transparency and reproducibility.

---

## Input Schema

The checker expects a CSV file with the following required columns:

- `Employee Name`
- `Unit`
- `Training Name`
- `Completion Status`

If any required column is missing or contains incomplete entries, the dataset is flagged as non-compliant.

---

## Validation Logic

The system performs:
- Structural validation (required column presence)
- Record-level completeness checks
- Deterministic rule evaluation (no probabilistic inference)

This establishes a repeatable validation pipeline:

**structured data → schema enforcement → compliance signal**

---

## Output

The demo produces:
- Clear pass/fail compliance feedback
- Identification of missing or incomplete records
- Immediate visibility into data quality issues

Outputs are suitable for:
- Pre-deployment checks
- Audit preparation
- Governance workflows
- Downstream pipeline gating

---

## Relevance to Data & AI Operations

This project demonstrates foundational practices used in production data environments, including:
- Data quality validation
- Compliance readiness checks
- Input schema enforcement
- Early detection of operational risk

The same validation pattern scales to AI-related workflows such as:
- Training dataset readiness checks
- Documentation and provenance enforcement
- Deployment gating based on data quality criteria

---

## Deployment

The demo is deployed as a static site using GitHub Pages and runs entirely in the browser.
