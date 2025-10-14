"use client";

import { Card } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Bóng đá",
      period: "2022 - Hiện tại",
      icon: "⚽",
      color: "from-green-500 to-emerald-500",
      description:
        "Thành viên đội bóng đá khoa, tham gia các giải đấu nội bộ trường",
      achievements: [
        "Vô địch giải bóng đá khoa 2023",
        "Cầu thủ xuất sắc nhất tháng 10/2023",
      ],
      image: "/activities/act1.png",
    },
    {
      title: "Hoạt động tình nguyện",
      period: "2023 - Hiện tại",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
      description: "Tham gia các hoạt động từ thiện và tình nguyện cộng đồng",
      achievements: [
        "Tình nguyện viên xuất sắc 2023",
        "Tham gia 15+ hoạt động từ thiện",
      ],
      image: "/activities/act2.png",
    },
    {
      title: "Câu lạc bộ Lập trình",
      period: "2022 - Hiện tại",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      description: "Thành viên tích cực của CLB Lập trình HUTECH",
      achievements: [
        "Đội trưởng nhóm dự án mã nguồn mở",
        "Mentor cho sinh viên năm nhất",
      ],
      image: "/activities/act3.png",
    },
    {
      title: "Chạy bộ & Gym",
      period: "2023 - Hiện tại",
      icon: "🏃",
      color: "from-orange-500 to-red-500",
      description: "Duy trì thói quen tập luyện thể thao đều đặn",
      achievements: ["Hoàn thành Half Marathon 2024", "Tập gym 5 ngày/tuần"],
      image: "/activities/act4.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Hoạt Động & Sở Thích
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Khám phá các hoạt động thể thao, tình nguyện và sở thích của tôi
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <div className="relative aspect-video">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-3xl`}
                      >
                        {activity.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                          {activity.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {activity.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        Thành tích
                      </h3>
                      {activity.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cân Bằng Là Chìa Khóa
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tôi tin rằng sự cân bằng giữa công việc, học tập và các hoạt động
            ngoại khóa là chìa khóa để phát triển toàn diện. Các hoạt động này
            giúp tôi duy trì sức khỏe, kết nối với cộng đồng và phát triển kỹ
            năng mềm.
          </p>
        </div>
      </section>
    </main>
  );
}
