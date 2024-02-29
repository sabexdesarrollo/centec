export const PRINCIPLES = [
  {
    title: "Educación humanizante y transcendente",
    description:
      "Proporciona al estudiante herramientas que le permitan acompañar su proceso formativo motivándolo para la construcción de su desarrollo integral. Por ello concebimos la educación humanista y trascendente de la siguiente manera:",
    subPrinciples: [
      {
        title: "Humanista",
        description:
          "Ofrecemos una educación humanista con la visión de formar hombres y mujeres ciudadanos que asumen sus deberes y derechos con autonomía, libertad y decisión acorde con su proyecto de vida.",
      },
      {
        title: "Trascendencia",
        description:
          "Inculcamos comportamientos coherentes con sus propias convicciones y buscamos crear identidad en cuanto a criterios y cualidades que deben destacar a nuestros estudiantes.",
      },
    ],
  },
  {
    title: "Ético",
    description:
      "Orientamos para actuar en una sociedad que tiene identidad propia, tenemos en cuenta la cultura y el contexto social, valoramos el desarrollo integral del estudiante y de la comunidad, de tal forma que le permite interpretar y orientar su realidad circundante para no solo identificar los problemas sino buscar alternativas de solución y una reflexión sobre la realidad.",
  },

  {
    title: "Valoración de la persona",
    description:
      "Considera al estudiante como ser inacabado, complejo, racional, en proyecto, consciente de sus propios procesos y autodeterminación.",
  },
  {
    title: "Social",
    description:
      "Se educa en un sistema que propicia el crecimiento de la libertad de la persona, donde al interactuar con la sociedad se haga protagonista de su propia historia teniendo en cuenta la realidad que lo rodea.",
  },
  {
    title: "Intelectual",
    description:
      "Proyectamos formar la persona en lo físico, mental y espiritual a partir de una gama de conocimientos que amplíe su aprendizaje y le ofrezca posibilidades de vida, desarrollando su capacidad crítica, analítica, reflexiva e investigativa al igual que un mayor aprovechamiento y utilización del tiempo libre.",
  },
  {
    title: "Existencial",
    description:
      "Fomentamos el respeto a la individualidad de la persona, valorándolo como ser íntegro, digno de hacer parte de una sociedad, respetuoso de sus semejantes y comprometido con su ser y que hacer dentro del contexto social.",
  },
  {
    title: "Vocacional",
    description:
      "Orientamos a nuestros estudiantes para que se ubiquen responsablemente en nuestra sociedad, acorde con sus propias expectativas de vida para asegurarle un exitoso desempeño laboral.",
  },
];

export const SubPrincipleItem = ({ title, description }) => (
  <div>
    <h4 className="text-base font-semibold lg:text-lg text-gray-900">
      {title}
    </h4>
    <p className="text-gray-700 text-sm lg:text-base text-justify">{description}</p>
  </div>
);

export const PrincipleItem = ({ title, description, subPrinciples }) => (
  <li className="border-2 p-4 border-gray-200 rounded-xl shadow-lg">
    <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-base lg:text-lg text-gray-700 text-justify">{description}</p>
    {subPrinciples && (
      <div className="mt-4 grid gap-2">
        {subPrinciples.map((subPrinciple, index) => (
          <SubPrincipleItem key={index} {...subPrinciple} />
        ))}
      </div>
    )}
  </li>
);