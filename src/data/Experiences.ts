const BroadcastMonitoring = Object.values(
  import.meta.glob(
    "../assets/experience/BroadcastMonitoring/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const TugasLuar = Object.values(
  import.meta.glob(
    "../assets/experience/TugasLuar/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const MCR = Object.values(
  import.meta.glob(
    "../assets/experience/MCR/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const TugasStudio = Object.values(
  import.meta.glob(
    "../assets/experience/TugasStudio/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

export const experiences = [
  {
    id: 1,
    title: "IT Broadcast Support",
    company: "PT Media Nusantara",
    period: "2024 - Sekarang",
    images: BroadcastMonitoring,
    description:
      "Monitoring sistem broadcast dan troubleshooting perangkat siaran.",
    tags: ["Broadcast", "Monitoring", "Network"],
  },

  {
    id: 2,
    title: "NOC Monitoring",
    company: "PT Media Nusantara",
    period: "2024",
    images: MCR,
    description:
      "Monitoring server dan jaringan selama operasional siaran.",
    tags: ["NOC", "Server", "Monitoring"],
  },

  {
    id: 3,
    title: "Technical Support",
    company: "PT Media Nusantara",
    period: "2023 - 2024",
    images: TugasStudio,
    description:
      "Memberikan dukungan teknis terhadap perangkat dan sistem yang digunakan.",
    tags: ["Technical", "Support", "Troubleshooting"],
  },

  {
    id: 4,
    title: "IT Infrastructure",
    company: "PT Media Nusantara",
    period: "2022 - 2023",
    images: TugasLuar,
    description:
      "Mengelola dan merawat infrastruktur teknologi informasi.",
    tags: ["Infrastructure", "Network", "System Administration"],
  }
];