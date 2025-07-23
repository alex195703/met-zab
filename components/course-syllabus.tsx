"use client";

import { CheckCircle, Target, BookOpen, Users, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competencies = [
  {
    id: "ЗК-1",
    title: "Здатність до абстрактного мислення, аналізу та синтезу",
    description: "Формування навичок системного підходу до наукових досліджень"
  },
  {
    id: "ЗК-2", 
    title: "Здатність застосовувати знання у практичних ситуаціях",
    description: "Практичне використання методів та інструментів дослідження"
  },
  {
    id: "СК-3",
    title: "Здатність використовувати інформаційні технології",
    description: "Володіння сучасними IT-інструментами для наукової роботи"
  },
  {
    id: "СК-4",
    title: "Здатність до наукового дослідження та академічного письма",
    description: "Формування навичок написання наукових публікацій"
  }
];

const learningOutcomes = [
  "Знати теоретичні основи методології наукових досліджень",
  "Уміти обирати та застосовувати відповідні методи дослідження",
  "Володіти навичками роботи з науковими базами даних",
  "Уміти використовувати статистичні пакети для аналізу даних",
  "Знати принципи академічної доброчесності",
  "Володіти технологіями візуалізації результатів досліджень"
];

const assessmentStructure = [
  { component: "Поточний контроль", percentage: 60, items: [
    "Активність на семінарах - 10%",
    "Індивідуальні завдання - 20%", 
    "Модульні контрольні - 30%"
  ]},
  { component: "Підсумковий контроль", percentage: 40, items: [
    "Підсумковий іспит - 40%"
  ]}
];

const schedule = [
  { week: "1-2", topic: "Теоретичні основи наукової діяльності", type: "theory" },
  { week: "3-4", topic: "Методологія наукових досліджень", type: "practice" },
  { week: "5-6", topic: "Інформаційні технології в науці", type: "theory" },
  { week: "7-8", topic: "Інформаційні системи", type: "practice" },
  { week: "9-10", topic: "Пошук наукової інформації", type: "theory" },
  { week: "11-12", topic: "Аналіз даних", type: "practice" },
  { week: "13-14", topic: "Представлення результатів", type: "theory" },
  { week: "15", topic: "Академічна доброчесність", type: "practice" }
];

export function CourseSyllabus() {
  console.log("CourseSyllabus component rendered");

  return (
    <section id="syllabus" data-macaly="syllabus-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 data-macaly="syllabus-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Силабус курсу
          </h2>
          <p data-macaly="syllabus-description" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Детальна програма навчальної дисципліни з компетентностями, 
            результатами навчання та системою оцінювання
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Competencies */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <Target className="w-6 h-6" />
                <span>Компетентності</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competencies.map((comp, index) => (
                  <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-primary text-primary-foreground mt-0.5">
                        {comp.id}
                      </Badge>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {comp.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {comp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-primary">
                <CheckCircle className="w-6 h-6" />
                <span>Результати навчання</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Structure */}
        <Card className="mb-12 card-hover">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-primary">
              <Award className="w-6 h-6" />
              <span>Структура оцінювання</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {assessmentStructure.map((assessment, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-primary">
                      {assessment.component}
                    </h4>
                    <Badge className="bg-accent text-accent-foreground">
                      {assessment.percentage}%
                    </Badge>
                  </div>
                  <ul className="space-y-1">
                    {assessment.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-primary">
              <BookOpen className="w-6 h-6" />
              <span>Календарний план</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {schedule.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="min-w-[60px] justify-center">
                      {item.week} тиж
                    </Badge>
                    <span className="font-medium">{item.topic}</span>
                  </div>
                  <Badge 
                    className={
                      item.type === 'theory' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }
                  >
                    {item.type === 'theory' ? 'Теорія' : 'Практика'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}