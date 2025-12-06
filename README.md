# Open Resume PDF Parser

A standalone TypeScript library for extracting and parsing resume data from PDF files.

## Features

- **Robust Parsing**: Extracts profile, work experience, education, projects, and skills from PDF resumes.
- **Type-Safe**: Written in TypeScript with full type definitions.

## Installation

```bash
npm install @prolaxu/open-resume-pdf-parser
```

## Usage

```typescript
import { parseResumeFromPdf } from "@prolaxu/open-resume-pdf-parser";

const fileUrl = "path/to/resume.pdf";

parseResumeFromPdf(fileUrl).then((resume) => {
  console.log(resume);
});
```

The returned `resume` object contains:

- `profile`: Name, email, phone, url, summary, location.
- `workExperiences`: Array of work experience entries.
- `educations`: Array of education entries.
- `projects`: Array of project entries.
- `skills`: Featured skills and descriptions.
- `custom`: Custom section data.

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm

### Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

### Building

To build the package for production (CJS and ESM formats):

```bash
npm run build
```

To run in watch mode during development:

```bash
npm run dev
```

### Testing

Run the test suite using Vitest:

```bash
npm test
```

## License

AGPL-3.0
