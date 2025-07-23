"use client";

import { Mail, MapPin, Clock, Phone, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = {
  instructor: "Проф. д. держ.упр. Олександр Валентинович Орлов",
  title: "професор кафедри публічної політики ",
  email: "o.v.orlov@karazin.ua",
  phone: "+380 ",
  office: " ",
  officeHours: " ",
  university: "Харківський національний університет імені В.Н. Каразіна",
  department: "Інститут державного управління"
};

const quickLinks = [
  { name: "Електронний журнал", url: "#" },
  { name: "Освітній портал", url: "#" },
  { name: "Бібліотека університету", url: "#" },
  { name: "Наукова бібліотека НАН України", url: "#" },
  { name: "Електронний каталог", url: "#" },
  { name: "Репозитарій університету", url: "#" }
];

export function CourseFooter() {
  console.log("CourseFooter component rendered");

  return (
    <section id="contact" data-macaly="contact-section" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 data-macaly="contact-title" className="text-3xl md:text-4xl font-bold mb-4">
            Контактна інформація
          </h2>
          <p data-macaly="contact-description" className="text-lg opacity-90 max-w-2xl mx-auto">
            Маєте питання про курс? Зв'яжіться з викладачем або відвідайте консультації
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{contactInfo.instructor}</h3>
                  <p className="opacity-90">{contactInfo.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 opacity-80" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="opacity-90 hover:opacity-100 transition-opacity underline"
                      onClick={() => console.log("Email link clicked")}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 opacity-80" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="opacity-90 hover:opacity-100 transition-opacity"
                      onClick={() => console.log("Phone link clicked")}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 opacity-80" />
                  <div>
                    <div className="font-semibold">Кабінет</div>
                    <div className="opacity-90">{contactInfo.office}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 opacity-80" />
                  <div>
                    <div className="font-semibold">Години консультацій</div>
                    <div className="opacity-90">{contactInfo.officeHours}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-sm opacity-90">
                  <div className="font-semibold mb-1">{contactInfo.university}</div>
                  <div>{contactInfo.department}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Корисні посилання</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                    onClick={() => {
                      console.log(`Quick link clicked: ${link.name}`);
                    }}
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h4 className="font-semibold mb-2">Важлива інформація</h4>
                <ul className="text-sm opacity-90 space-y-1">
                  <li>• Відвідування лекцій обов'язкове</li>
                  <li>• Здача завдань до встановленого терміну</li>
                  <li>• Дотримання академічної доброчесності</li>
                  <li>• Активна участь у дискусіях</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold">
                Методологічне та інформаційне забезпечення наукових досліджень
              </div>
            </div>
            <div className="text-sm opacity-75">
              © 2025 ННІ "Інститут державного управління" Харківського національного університету імені В.Н. Каразіна
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}