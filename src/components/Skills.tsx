import {
  Monitor,
  Network,
  Radio,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      title: "IT Infrastructure",
      icon: <Network size={28} />,
      skills: [
        { name: "Windows Administration", level: 90 },
        { name: "Linux", level: 75 },
        { name: "TCP/IP", level: 85 },
        { name: "LAN/WAN", level: 88 },
      ],
    },
    {
      title: "Broadcast System",
      icon: <Radio size={28} />,
      skills: [
        { name: "Signal Monitoring", level: 85 },
        { name: "Streaming System", level: 80 },
        { name: "Media Server", level: 75 },
        { name: "Video Encoding", level: 78 },
      ],
    },
    {
      title: "Monitoring & Support",
      icon: <Monitor size={28} />,
      skills: [
        { name: "NOC Monitoring", level: 90 },
        { name: "Incident Handling", level: 88 },
        { name: "Technical Support", level: 92 },
        { name: "Remote Support", level: 90 },
      ],
    },
    {
      title: "Tools & Software",
      icon: <Wrench size={28} />,
      skills: [
        { name: "OBS Studio", level: 80 },
        { name: "VMix", level: 75 },
        { name: "Wireshark", level: 78 },
        { name: "TeamViewer", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-slate-900 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="section-header">
          <span className="section-badge">
            Technical Expertise
          </span>

          <h2 className="section-title">
            IT Broadcast
            <span className="section-highlight">
              {" "}Support Skills
            </span>
          </h2>

          <div className="section-divider"></div>

          <p className="section-description">
            Kemampuan teknis dalam mendukung
            infrastruktur IT, sistem broadcast,
            monitoring jaringan, serta troubleshooting
            operasional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                group
                rounded-3xl
                border
                border-slate-800
                bg-slate-950
                p-8
                transition-all
                duration-300
                hover:border-blue-500/50
                hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
              "
            >
              <div className="mb-8 flex items-center gap-4">
                <div
                  className="
                    rounded-xl
                    bg-blue-500/10
                    p-3
                    text-blue-400
                  "
                >
                  {group.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between">
                      <span className="text-slate-300">
                        {skill.name}
                      </span>

                      <span className="text-blue-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="
                          h-full
                          rounded-full
                          bg-linear-to-r
                          from-blue-500
                          to-cyan-400
                        "
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}