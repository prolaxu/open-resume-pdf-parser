import type { ResumeSectionToLines } from "../types";
import { getSectionLinesByKeywords } from "./lib/get-section-lines";
import { getBulletPointsFromLines } from "./lib/bullet-points";

export const extractCertifications = (sections: ResumeSectionToLines) => {
  const lines = getSectionLinesByKeywords(sections, [
    "certification",
    "certifications",
    "certificate",
    "certificates",
    "award",
    "awards",
    "honor",
    "honors",
    "achievement",
    "achievements"
  ]);
  const certifications = getBulletPointsFromLines(lines);
  return { certifications };
};
