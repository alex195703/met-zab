"use client";

import { BookOpen, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CourseHero() {
  console.log("CourseHero component rendered");
  
  const stats = [
    { icon: BookOpen, label: "Лекцій", value: "10" },
    { icon: Users, label: "Практичних занять", value: "10" },
    { icon: Clock, label: "Розділів", value: "5" },
    { icon: Award, label: "Кредитів ECTS", value: "4" },
  ];

  return (
    <section data-macaly="hero-section" className="section-gradient min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 
            data-macaly="main-title" 
            className="text-4xl md:text-6xl font-bold text-gradient mb-6 leading-tight"
          >
            Методологічне та інформаційне забезпечення наукових досліджень
          </h1>
          
          <p 
            data-macaly="course-description" 
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Комплексний курс для аспрантів зі спеціальності публічне управління та адміністрування, 
            що поєднує теоретичні основи наукової діяльності з практичними навичками 
            використання сучасних інформаційних технологій у дослідженнях.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => {
                console.log("Navigate to course structure clicked");
                document.getElementById('course-structure')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Почати навчання
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              onClick={() => {
                console.log("View syllabus clicked");
                document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Переглянути програму
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="p-4 bg-white/80 backdrop-blur-sm border-primary/10 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}