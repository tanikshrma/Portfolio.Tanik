import { GraduationCap, Briefcase } from "lucide-react";

export default function Resume() {
  const experience = [
    {
      date: "2025 - Present (1+ Year)",
      title: "Web Designer & Front-End Developer",
      institution: "Creative Monk",
      description: "Design and develop responsive websites using HTML, CSS, and JavaScript, Tailwind CSS, React, WordPress. Create modern UI/UX designs in Figma with a focus on performance, usability, and visual consistency."
    },
    {
      date: "2024 - 2025",
      title: "WordPress Designer",
      institution: "S4 Web Services",
      description: "Designed and developed responsive WordPress websites based on client requirements. Created clean, user-friendly interfaces with a focus on usability and visual consistency. Customized themes, layouts, and functionality to deliver polished digital experiences."
    }
  ];

  const education = [
    {
      date: "2022 - 2023",
      title: "Web Designing",
      institution: "BigBoxx Professionals Academy, Chandigarh"
    },
    {
      date: "2021 - 2022",
      title: "Diploma in Multilingual Computer Application",
      institution: "SIVT - Hamirpur"
    },
    {
      date: "2018 - 2021",
      title: "Bachelor of Business Administration",
      institution: "Netaji Subhash Chandra Bose Memorial Utkrisht PG College, Hamirpur"
    },
    {
      date: "2017 - 2018",
      title: "12th - Science",
      institution: "Govt.(Boys) Senior Sec. School, Hamirpur"
    },
    {
      date: "2015 - 2016",
      title: "10th",
      institution: "Govt. High School, Khiah"
    }
  ];


  return (
    <section id="resume" className="py-12 md:py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-2 block">QUALIFICATIONS & HISTORY</span>
          <h2 className="text-5xl md:text-7xl font-['Anton'] uppercase text-white">RESUME</h2>
        </div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider">EXPERIENCE</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-[2px] before:bg-gray-800">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-red-600 ring-4 ring-gray-950 -translate-x-1/2" />
                  <span className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 text-[10px] font-bold text-red-500 tracking-widest mb-2">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <h5 className="text-sm font-semibold text-gray-300 mb-2">{item.institution}</h5>
                  {item.description && (
                    <p className="text-sm text-gray-400 leading-relaxed bg-gray-900/50 p-4 border border-gray-800/80">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wider">EDUCATION</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-[2px] before:bg-gray-800">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-red-600 ring-4 ring-gray-950 -translate-x-1/2" />
                  <span className="inline-block px-3 py-1 bg-gray-900 border border-gray-800 text-[10px] font-bold text-red-500 tracking-widest mb-2">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <h5 className="text-sm font-medium text-gray-400">{item.institution}</h5>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
