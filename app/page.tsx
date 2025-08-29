"use client";

import Navigation from "@/components/navigation";
import CourseHero from "@/components/course-hero";
import CourseStructure from "@/components/course-structure";
import CourseResources from "@/components/course-resources";
import CourseSyllabus from "@/components/course-syllabus";
import CourseFooter from "@/components/course-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <CourseHero />
      </div>
      <CourseStructure />
      <CourseResources />
      <CourseSyllabus />
      <CourseFooter />
    </main>
  );
}
