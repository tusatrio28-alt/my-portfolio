const monitoringImages = Object.values(
  import.meta.glob(
    "../assets/projects/monitoring/*.{jpg,png,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const networkImages = Object.values(
  import.meta.glob(
    "../assets/projects/monitoring/*.{jpg,png,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const serverImages = Object.values(
  import.meta.glob(
    "../assets/projects/monitoring/*.{jpg,png,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const documentationImages = Object.values(
  import.meta.glob(
    "../assets/projects/monitoring/*.{jpg,png,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const automationImages = Object.values(
  import.meta.glob(
    "../assets/projects/monitoring/*.{jpg,png,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

export const projects = [
  {
    id: 1,
    title: "Broadcast Monitoring System",
    category: "Broadcast Operation",

    location: "NOC Room",

    description:
      "Monitoring perangkat broadcast dan layanan siaran untuk memastikan ketersediaan sistem serta melakukan penanganan awal terhadap gangguan operasional.",

    images: monitoringImages,

    tags: [
      "Broadcast",
      "Monitoring",
      "NOC",
      "Troubleshooting",
    ],
  },

  {
    id: 2,
    title: "Network Infrastructure Support",
    category: "IT Infrastructure",

    location: "Data Center",

    description:
      "Melakukan konfigurasi dasar jaringan, monitoring konektivitas, dan troubleshooting perangkat jaringan untuk menjaga stabilitas layanan.",

    images: networkImages,

    tags: [
      "TCP/IP",
      "LAN",
      "WAN",
      "Switch",
    ],
  },

  {
    id: 3,
    title: "Linux Server Administration",
    category: "System Administration",

    location: "Server Room",

    description:
      "Melakukan maintenance server Linux, monitoring resource, dan dukungan operasional sistem yang digunakan dalam lingkungan broadcast.",

    images: serverImages,

    tags: [
      "Linux",
      "Ubuntu",
      "Server",
      "SSH",
    ],
  },

  {
    id: 4,
    title: "Technical Documentation",
    category: "Documentation",

    location: "Operations",

    description:
      "Pembuatan SOP, dokumentasi konfigurasi, dan laporan teknis untuk mendukung operasional serta transfer knowledge antar tim.",

    images: documentationImages,

    tags: [
      "SOP",
      "Documentation",
      "Reporting",
    ],
  },

  {
    id: 5,
    title: "System Automation",
    category: "Automation",

    location: "Lab Environment",

    description:
      "Pengembangan script sederhana untuk otomatisasi monitoring dan pengumpulan log guna meningkatkan efisiensi operasional.",

    images: automationImages,

    tags: [
      "Python",
      "Bash",
      "Automation",
      "Logs",
    ],
  },
];