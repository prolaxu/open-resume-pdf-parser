import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { groupTextItemsIntoLines } from "../src/group-text-items-into-lines";
import { groupLinesIntoSections } from "../src/group-lines-into-sections";
import { extractResumeFromSections } from "../src/extract-resume-from-sections";
import type { TextItem } from "../src/types";

const FIXTURES_DIR = path.join(__dirname, "fixtures");

describe("Integration Tests", () => {
  it("should parse resume from text file content", () => {
    const textContent = fs.readFileSync(
      path.join(FIXTURES_DIR, "sample-resume.txt"),
      "utf-8"
    );

    // Mock TextItems from text file (simulating PDF read)
    // We assume each line in text file is a separate TextItem with some y-spacing
    const textItems: TextItem[] = textContent
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .map((line, index) => ({
        text: line,
        x: 0,
        y: index * 12, // Simulate line height
        width: 100,
        height: 12,
        fontName: "Times-Roman",
        hasEOL: true,
      }));

    const lines = groupTextItemsIntoLines(textItems);
    const sections = groupLinesIntoSections(lines);
    const resume = extractResumeFromSections(sections);

    // Verify Profile
    expect(resume.profile.name).toBe("Leonardo W. DiCaprio");
    expect(resume.profile.email).toBe("hello@open-resume.org");
    
    // Verify Work Experience
    expect(resume.workExperiences.length).toBeGreaterThan(0);
    expect(resume.workExperiences[0].company).toContain("OpenResume");
    
    // Verify Skills - simpler check as extraction depends on detailed rules
    // logic might split it differently depending on formatting
    expect(resume.skills.descriptions.length).toBeGreaterThan(0);
  });
});
