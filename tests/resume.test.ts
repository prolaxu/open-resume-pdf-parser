import { describe, it, expect } from "vitest";
import {
  initialResumeState,
  initialProfile,
  initialWorkExperience,
  initialEducation,
  initialProject,
  initialSkills,
  initialCustom,
} from "../src/extract-resume-from-sections/resume";

describe("resume initial state", () => {
  it("should have correct initial profile", () => {
    expect(initialResumeState.profile).toEqual(initialProfile);
    expect(initialProfile).toEqual({
      name: "",
      summary: "",
      email: "",
      phone: "",
      location: "",
      url: "",
    });
  });

  it("should have correct initial work experience structure", () => {
    expect(initialResumeState.workExperiences).toHaveLength(1);
    expect(initialResumeState.workExperiences[0]).toEqual(initialWorkExperience);
    expect(initialWorkExperience).toEqual({
      company: "",
      jobTitle: "",
      date: "",
      descriptions: [],
    });
  });

  it("should have correct initial education structure", () => {
    expect(initialResumeState.educations).toHaveLength(1);
    expect(initialResumeState.educations[0]).toEqual(initialEducation);
    expect(initialEducation).toEqual({
      school: "",
      degree: "",
      gpa: "",
      date: "",
      descriptions: [],
    });
  });

  it("should have correct initial project structure", () => {
    expect(initialResumeState.projects).toHaveLength(1);
    expect(initialResumeState.projects[0]).toEqual(initialProject);
    expect(initialProject).toEqual({
      project: "",
      date: "",
      descriptions: [],
    });
  });

  it("should have correct initial skills structure", () => {
    expect(initialResumeState.skills).toEqual(initialSkills);
    expect(initialSkills.featuredSkills).toHaveLength(6);
    expect(initialSkills.descriptions).toEqual([]);
  });

  it("should have correct initial custom section structure", () => {
    expect(initialResumeState.custom).toEqual(initialCustom);
    expect(initialCustom).toEqual({
      descriptions: [],
    });
  });
});
