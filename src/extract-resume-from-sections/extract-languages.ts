import type { ResumeSectionToLines } from "../types";
import { getSectionLinesByKeywords } from "./lib/get-section-lines";
import { getBulletPointsFromLines } from "./lib/bullet-points";

export const extractLanguages = (sections: ResumeSectionToLines) => {
  const lines = getSectionLinesByKeywords(sections, ["language", "languages", "mother tongue"]);
  const languages = getBulletPointsFromLines(lines);
  return { languages };
};
