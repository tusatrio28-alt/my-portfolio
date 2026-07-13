const hikingImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/hiking/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const campingImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/camping/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const touringImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/touring/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const bicycleImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/bicycling/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const runningImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/running/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

const photographyImages = Object.values(
  import.meta.glob(
    "../assets/hobbies/photography/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    }
  )
) as string[];

export const hobbies = [
  {
    id: 1,
    icon: "🏔️",
    title: "Hiking Mountain",
    subtitle: "Outdoor Adventure",
    location: "Mount Ciremai",
    description:
      "Menjelajahi jalur pendakian dan menikmati panorama alam dari puncak gunung.",
    images: hikingImages,
    tags: ["Hiking", "Nature", "Adventure"],
  },

  {
    id: 2,
    icon: "🏕️",
    title: "Camping",
    subtitle: "Outdoor Lifestyle",
    location: "Rancaupas",
    description:
      "Menikmati suasana alam dan membangun kerja sama tim melalui kegiatan berkemah.",
    images: campingImages,
    tags: ["Camping", "Nature", "Teamwork"],
  },

  {
    id: 3,
    icon: "🏍️",
    title: "Touring",
    subtitle: "Motorcycle Journey",
    location: "West Java",
    description:
      "Menjelajahi berbagai daerah dengan motor dan menikmati perjalanan jarak jauh.",
    images: touringImages,
    tags: ["Touring", "Travel", "Adventure"],
  },

  {
    id: 4,
    icon: "🚴",
    title: "Bicycling",
    subtitle: "Cycling",
    location: "Jakarta",
    description:
      "Menjaga kesehatan sekaligus menikmati perjalanan dengan sepeda.",
    images: bicycleImages,
    tags: ["Cycling", "BikeToWork"],
  },

  {
    id: 5,
    icon: "🏃",
    title: "Running",
    subtitle: "Workout",
    location: "Gelora Bung Karno",
    description:
      "Melatih konsistensi, daya tahan, dan menjaga kebugaran tubuh.",
    images: runningImages,
    tags: ["Running", "Health"],
  },

  {
    id: 6,
    icon: "📸",
    title: "Photography",
    subtitle: "Animals & Landscape",
    location: "Indonesia",
    description:
      "Mengabadikan momen satwa liar dan keindahan lanskap alam.",
    images: photographyImages,
    tags: ["Photography", "Animals", "Landscape"],
  },
];