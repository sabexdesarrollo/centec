import {
  UserGroupIcon,
  CurrencyDollarIcon,
  UsersIcon,
  QueueListIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export const CARD = [
  {
    title: "Nuestra instutución",
    icon: BeakerIcon,
    urlPath: "/nuestra-institucion",
    submenu: [
      {
        title: "Nuestra misión y vision",
        urlPath: "/nuestra-institucion#mision-y-vision",
      },
      {
        title: "Principios institucionales",
        urlPath: "/nuestra-institucion#principios-institucionales",
      },
      {
        title: "Objetivos institucionales",
        urlPath: "/nuestra-institucion#objetivos-institucionales",
      },
    ],
  },
  {
    title: "Bienestar",
    icon: BuildingLibraryIcon,
    urlPath: "/bienestar",
    submenu: [
      {
        title: "Prácticas formativas",
        urlPath: "/bienestar#practicas-formativas",
      },
      {
        title: "Salidas pedagógicas",
        urlPath: "/bienestar#salidas-pedagogicas",
      },
      {
        title: "Egresados",
        urlPath: "/bienestar#egresados",
      },
      {
        title: "Solidaridad",
        urlPath: "/bienestar#solidaridad",
      },
    ],
  },
  {
    title: "Admisiones y financiación",
    icon: UsersIcon,
    urlPath: "/admisiones-y-financiacion",
    submenu: [
      {
        title: "Inscripción",
        urlPath: "/admisiones-y-financiacion#inscripcion",
      },
      {
        title: "Financiación",
        urlPath: "/admisiones-y-financiacion#financiacion",
      },
      {
        title: "Subsidios educativos",
        urlPath: "/admisiones-y-financiacion#subsidios-educativos",
      },
      {
        title: "Registro académico",
        urlPath: "/admisiones-y-financiacion#registro-academico",
      },
    ],
  },
  {
    title: "Programas técnicos laborales",
    icon: BookOpenIcon,
    urlPath: "/programas-tecnicos-laborales",
    submenu: [
      {
        title: "Sede villavicencio",
        urlPath: "/programas-tecnicos-laborales#sede-villavicencio",
      },
      {
        title: "Sede acacias",
        urlPath: "/programas-tecnicos-laborales#sede-acacias",
      },
      {
        title: "Sede granada",
        urlPath: "/programas-tecnicos-laborales#sede-granada",
      },
    ],
  },
  { title: "Colegio centec", urlPath: "/colegio-centec" },

  {
    title: "Educación continua",
    icon: BeakerIcon,
    urlPath: "/educacion-continua",
    submenu: [
      {
        title: "Diplomados",
        urlPath: "/educacion-continua#diplomados",
      },
      {
        title: "Seminarios",
        urlPath: "/educacion-continua#seminarios",
      },
      {
        title: "Cursos",
        urlPath: "/educacion-continua#cursos",
      },
    ],
  },
  {
    title: "Innovación y emprendimiento",
    urlPath: "/inoovacion-y-emprendimiento",
  },
];

export const NavigationMobil = [
  { title: "Nuestra instutución", urlPath: "/nuestra-institucion", icon: UserGroupIcon },
  {
    title: "Adminisiones y financiación",
    urlPath: "/admisiones-y-financiacion",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Programas técnicos laborales",
    urlPath: "/programas-tecnicos-laborales",
    icon: QueueListIcon,
  },
  { title: "Colegio centec", urlPath: "/colegio-centec", icon: BuildingLibraryIcon },
  { title: "Bienestar", urlPath: "/bienestar", icon: UsersIcon },
  { title: "Educación continua", urlPath: "/educacion-continua", icon: BookOpenIcon },
  { title: "Innovación y emprendimiento", urlPath: "/inoovacion-y-emprendimiento", icon: BeakerIcon },
];
