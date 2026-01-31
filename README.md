---Training Compliance Checker Interface](assets/screenshots/training-compliance-ui.png)

##  Interactive Data Intake Interface

This project includes a lightweight web interface that enables users to upload structured CSV files for compliance validation.

The interface serves as a **data ingestion layer**, enforcing schema requirements before any analysis is performed.

### Interface Capabilities
- Drag-and-drop CSV upload
- Schema validation against required fields
- Immediate feedback on data readiness
- Deterministic processing (no black-box inference)

### Required CSV Columns
- `Employee Name`
- `Unit`
- `Training Name`
- `Completion Status`

By validating structure at upload time, the system prevents incomplete or malformed data from entering the compliance pipeline.

> This interface mirrors how AI training datasets can be gated for compliance before model development or deployment.
