"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const courseData = [
  {
    id: 1,
    title: "РОЗДІЛ 1. ТЕОРЕТИЧНІ ОСНОВИ НАУКОВОЇ ДІЯЛЬНОСТІ",
    color: "bg-blue-100 text-blue-800",
    lectures: [
      {
        id: "1.1",
        title: "Наука як система знань та діяльності",
        type: "lecture",
        topics: [
          "Поняття та сутність науки",
          "Типологія та класифікація наук", 
          "Наукове дослідження як основна форма наукової діяльності",
          "Структура та етапи наукового дослідження",
          "Особливості наукових досліджень у галузі публічного управління"
        ]
      },
      {
        id: "1.2",
        title: "Організація наукової діяльності",
        type: "practical",
        topics: [
          "Практичні вправи з визначення типів наукових досліджень",
          "Побудова структури наукового дослідження",
          "Формулювання теми, мети і завдань наукового дослідження", 
          "Групова робота: аналіз актуальних напрямів досліджень"
        ]
      },
      {
        id: "1.3", 
        title: "Методологія наукових досліджень",
        type: "lecture",
        topics: [
          "Поняття методології та методики наукових досліджень",
          "Рівні методології наукового пізнання",
          "Загальнонаукові та спеціальні методи досліджень",
          "Методологічні підходи до досліджень у галузі публічного управління",
          "Формування методологічного апарату дослідження"
        ]
      },
      {
        id: "1.4",
        title: "Методи наукових досліджень", 
        type: "practical",
        topics: [
          "Вибір методів дослідження відповідно до теми та мети",
          "Обґрунтування методології дослідження",
          "Кейс-метод: аналіз методологічного апарату дисертацій",
          "Індивідуальні завдання з розробки методології"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "РОЗДІЛ 2. ІНФОРМАЦІЙНЕ ЗАБЕЗПЕЧЕННЯ НАУКОВИХ ДОСЛІДЖЕНЬ",
    color: "bg-emerald-100 text-emerald-800",
    lectures: [
      {
        id: "2.1",
        title: "Основи інформаційних технологій у науково-дослідній діяльності",
        type: "lecture",
        topics: [
          "Поняття інформації та інформаційних технологій",
          "Еволюція та класифікація інформаційних технологій",
          "Структура та основні складові інформаційних технологій",
          "Інформаційні технології в системі наукового пізнання",
          "Тенденції розвитку інформаційних технологій у науковій сфері"
        ]
      },
      {
        id: "2.2",
        title: "Аналіз сучасних інформаційних технологій",
        type: "practical", 
        topics: [
          "Огляд сучасних інформаційних технологій для наукових досліджень",
          "Порівняльний аналіз різних типів інформаційних технологій",
          "Створення інформаційно-технологічної карти дослідження",
          "Презентація результатів групової роботи"
        ]
      },
      {
        id: "2.3",
        title: "Інформаційні системи в науковій діяльності",
        type: "lecture",
        topics: [
          "Поняття та сутність інформаційних систем",
          "Класифікація інформаційних систем",
          "Структура та архітектура сучасних інформаційних систем",
          "Технології 'клієнт-сервер' в інформаційних системах",
          "Життєвий цикл інформаційних систем"
        ]
      },
      {
        id: "2.4",
        title: "Робота з інформаційними системами",
        type: "practical",
        topics: [
          "Аналіз структури інформаційних систем наукового спрямування",
          "Практична робота з різними типами інформаційних систем", 
          "Проектування простої інформаційної системи",
          "Оцінка ефективності інформаційних систем"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "РОЗДІЛ 3. ПОШУК ТА ОБРОБКА НАУКОВОЇ ІНФОРМАЦІЇ",
    color: "bg-orange-100 text-orange-800", 
    lectures: [
      {
        id: "3.1",
        title: "Системи пошуку наукової інформації",
        type: "lecture",
        topics: [
          "Типологія систем пошуку наукової інформації",
          "Пошукові системи загального та спеціального призначення",
          "Наукометричні бази даних та їх використання",
          "Стратегії та методики пошуку наукової інформації",
          "Оцінка релевантності та достовірності знайденої інформації"
        ]
      },
      {
        id: "3.2",
        title: "Техніки пошуку наукової інформації",
        type: "practical",
        topics: [
          "Практична робота з науковими пошуковими системами",
          "Формування запитів для ефективного пошуку інформації",
          "Оцінка якості знайдених джерел",
          "Створення власної стратегії пошуку для дисертаційного дослідження"
        ]
      },
      {
        id: "3.3",
        title: "Системи зберігання наукової інформації", 
        type: "lecture",
        topics: [
          "Бази даних та банки наукової інформації",
          "Типологія та структура баз даних",
          "Реляційні та об'єктно-орієнтовані бази даних",
          "Репозитарії та електронні архіви",
          "Хмарні технології зберігання наукових даних"
        ]
      },
      {
        id: "3.4",
        title: "Робота з базами даних наукової інформації",
        type: "practical",
        topics: [
          "Практична робота з національними та міжнародними базами даних",
          "Робота з архівами наукових публікацій та репозитаріями",
          "Використання наукометричних баз даних (Scopus, Web of Science)",
          "Створення власної бази даних для дисертаційного дослідження"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "РОЗДІЛ 4. АНАЛІЗ ДАНИХ ТА ІНФОРМАЦІЙНО-АНАЛІТИЧНІ СИСТЕМИ",
    color: "bg-purple-100 text-purple-800",
    lectures: [
      {
        id: "4.1", 
        title: "Інформаційно-аналітичні системи в науковій діяльності",
        type: "lecture",
        topics: [
          "Сутність та функції інформаційно-аналітичних систем",
          "Типологія інформаційно-аналітичних систем",
          "Технології аналізу даних в інформаційних системах",
          "Системи підтримки прийняття рішень",
          "Експертні системи та їх застосування в наукових дослідженнях"
        ]
      },
      {
        id: "4.2",
        title: "Застосування інформаційно-аналітичних систем",
        type: "practical",
        topics: [
          "Аналіз даних за допомогою інформаційно-аналітичних систем",
          "Практична робота з системами статистичного аналізу",
          "Моделювання процесів прийняття рішень",
          "Оцінка результатів аналітичної обробки даних"
        ]
      },
      {
        id: "4.3",
        title: "Статистичні методи та системи аналізу даних",
        type: "lecture",
        topics: [
          "Статистичний аналіз даних у наукових дослідженнях",
          "Огляд статистичних пакетів та програм",
          "Технології обробки кількісних та якісних даних",
          "Візуалізація результатів статистичного аналізу",
          "Інтерпретація результатів статистичної обробки даних"
        ]
      },
      {
        id: "4.4",
        title: "Статистична обробка та візуалізація даних",
        type: "practical",
        topics: [
          "Робота зі статистичними програмами та пакетами",
          "Формування вибірки та підготовка даних до аналізу",
          "Методи статистичного аналізу та їх застосування",
          "Створення візуалізацій результатів дослідження"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "РОЗДІЛ 5. ПРАКТИЧНА РЕАЛІЗАЦІЯ ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ У НАУКОВИХ ДОСЛІДЖЕННЯХ",
    color: "bg-rose-100 text-rose-800",
    lectures: [
      {
        id: "5.1",
        title: "Технології представлення результатів наукових досліджень",
        type: "lecture", 
        topics: [
          "Сучасні вимоги до представлення наукових результатів",
          "Технології підготовки наукових публікацій",
          "Візуалізація наукових даних та результатів",
          "Інфографіка та її використання в наукових дослідженнях",
          "Мультимедійні презентації результатів досліджень"
        ]
      },
      {
        id: "5.2",
        title: "Підготовка наукових публікацій та презентацій",
        type: "practical",
        topics: [
          "Розробка структури наукової публікації",
          "Створення візуалізацій наукових даних",
          "Підготовка мультимедійної презентації результатів дослідження",
          "Представлення та обговорення підготовлених матеріалів"
        ]
      },
      {
        id: "5.3",
        title: "Етичні та правові аспекти використання інформаційних технологій у науковій діяльності",
        type: "lecture",
        topics: [
          "Академічна доброчесність у цифрову епоху",
          "Інтелектуальна власність та авторське право",
          "Системи перевірки на плагіат та їх використання",
          "Захист даних та інформаційна безпека в наукових дослідженнях", 
          "Етика цитування та використання інформаційних ресурсів"
        ]
      },
      {
        id: "5.4",
        title: "Академічна доброчесність та захист інформації",
        type: "practical",
        topics: [
          "Аналіз кейсів порушення академічної доброчесності",
          "Практична робота з системами перевірки на плагіат",
          "Розробка протоколів захисту дослідницьких даних",
          "Підсумкова презентація індивідуальних дослідницьких проектів"
        ]
      }
    ]
  }
];

export default function CourseStructure() {
  console.log("CourseStructure component rendered");
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (sectionId: number) => {
    console.log(`Toggling section ${sectionId}`);
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'lecture':
        return BookOpen;
      case 'practical':
        return Users;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'Лекція';
      case 'practical': 
        return 'Практичне заняття';
      default:
        return 'Заняття';
    }
  };

  return (
    <section id="course-structure" data-macaly="course-structure" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 data-macaly="structure-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Структура курсу
          </h2>
          <p data-macaly="structure-description" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Курс складається з 5 розділів, що охоплюють всі аспекти методологічного 
            та інформаційного забезпечення наукових досліджень
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {courseData.map((section, index) => (
            <Card 
              key={section.id} 
              className="card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Collapsible
                open={openSections.includes(section.id)}
                onOpenChange={() => toggleSection(section.id)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge className={section.color}>
                          Розділ {section.id}
                        </Badge>
                        <CardTitle className="text-left text-lg md:text-xl">
                          {section.title}
                        </CardTitle>
                      </div>
                      {openSections.includes(section.id) ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid gap-4">
                      {section.lectures.map((lecture, lectureIndex) => {
                        const Icon = getIcon(lecture.type);
                        return (
                          <Card 
                            key={lecture.id} 
                            className="border-l-4 border-l-primary/30 bg-muted/30"
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 mt-1">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Badge 
                                      variant={lecture.type === 'lecture' ? 'default' : 'secondary'}
                                      className="text-xs"
                                    >
                                      {getTypeLabel(lecture.type)}
                                    </Badge>
                                    <span className="text-sm font-medium text-muted-foreground">
                                      {lecture.id}
                                    </span>
                                  </div>
                                  <h4 className="font-semibold text-foreground mb-3">
                                    {lecture.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {lecture.topics.map((topic, topicIndex) => (
                                      <li 
                                        key={topicIndex}
                                        className="text-sm text-muted-foreground flex items-start"
                                      >
                                        <span className="text-primary mr-2 mt-1.5 flex-shrink-0">•</span>
                                        <span>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              console.log("View additional materials clicked");
              document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Переглянути додаткові матеріали
          </Button>
        </div>
      </div>
    </section>
  );
}
