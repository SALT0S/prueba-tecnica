interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  title: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      title: "Activo: tarea 1",
      status: "active",
      createdAt: Date.now(),
    },
    {
      title: "Inactivo: tarea 2",
      status: "inactive",
      createdAt: Date.now() - 1000000,
    },
    {
      title: "Inactivo: tarea 3",
      status: "inactive",
      createdAt: Date.now() - 100000,
    },
  ],
};
