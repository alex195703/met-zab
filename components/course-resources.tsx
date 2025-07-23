"use client";

import { ExternalLink, Download, BookOpen, Database, Search, Users, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Наукометричні бази даних",
    description: "Доступ до провідних міжнародних баз наукових публікацій",
    items: [
      { name: "Web of Science", url: "https://webofknowledge.com", icon: Database },
      { name: "Scopus", url: "https://scopus.com", icon: Database },
      { name: "Google Scholar", url: "https://scholar.google.com", icon: Search },
      { name: "ResearchGate", url: "https://researchgate.net", icon: Users }
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Статистичні пакети програм",
    description: "Програмне забезпечення для аналізу даних та візуалізації",
    items: [
      { name: "SPSS", url: "https://ibm.com/spss", icon: BookOpen },
      { name: "R Project", url: "https://r-project.org", icon: BookOpen },
      { name: "Python", url: "https://python.org", icon: BookOpen },
      { name: "Stata", url: "https://stata.com", icon: BookOpen }
    ],
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Системи управління посиланнями",
    description: "Інструменти для організації та форматування джерел",
    items: [
      { name: "Zotero", url: "https://zotero.org", icon: BookOpen },
      { name: "Mendeley", url: "https://mendeley.com", icon: BookOpen },
      { name: "EndNote", url: "https://endnote.com", icon: BookOpen },
      { name: "RefWorks", url: "https://refworks.proquest.com", icon: BookOpen }
    ],
    color: "bg-orange-50 border-orange-200"
  },
  {
    title: "Перевірка на плагіат",
    description: "Системи забезпечення академічної доброчесності",
    items: [
      { name: "StrikePlagiarism", url: "https://strikeplagiarism.com", icon: Search },
      { name: "Unicheck", url: "https://unicheck.com", icon: Search },
      { name: "Antiplagiat", url: "https://antiplagiat.ua", icon: Search },
      { name: "Turnitin", url: "https://turnitin.com", icon: Search }
    ],
    color: "bg-purple-50 border-purple-200"
  }
];

const courseInfo = {
  instructor: "Проф. д-р Іван Петренко",
  email: "i.petrenko@university.edu.ua", 
  office: "Корпус A, кімната 305",
  officeHours: "Понеділок, Середа 14:00-16:00",
  credits: "4 кредити ECTS",
  duration: "15 тижнів",
  assessment: "Поточний контроль + Підсумковий іспит"
};

export function CourseResources() {
  console.log("CourseResources component rendered");

  return (
    <section id="resources" data-macaly="resources-section" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 data-macaly="resources-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Корисні ресурси та матеріали
          </h2>
          <p data-macaly="resources-description" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Збірка найважливіших інструментів та ресурсів для успішного 
            проведення наукових досліджень
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources.map((category, index) => (
            <Card 
              key={index} 
              className={`card-hover ${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between p-3 bg-white/70 rounded-lg border border-white/50"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          console.log(`Opening external link: ${item.url}`);
                          window.open(item.url, '_blank');
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Information */}
        <Card className="max-w-4xl mx-auto card-hover bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">
              Інформація про курс
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Викладач</div>
                    <div className="text-muted-foreground">{courseInfo.instructor}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">{courseInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Кабінет</div>
                    <div className="text-muted-foreground">{courseInfo.office}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold">Години консультацій</div>
                    <div className="text-muted-foreground">{courseInfo.officeHours}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-3">Деталі курсу</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Кредити:</span>
                      <Badge variant="secondary">{courseInfo.credits}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Тривалість:</span>
                      <Badge variant="secondary">{courseInfo.duration}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Оцінювання:</span>
                      <Badge variant="secondary">Змішане</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => {
                      console.log("Download syllabus clicked");
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Завантажити силабус
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      console.log("Contact instructor clicked");
                      window.location.href = `mailto:${courseInfo.email}`;
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Зв'язатися з викладачем
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}