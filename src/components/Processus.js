import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faRocket,faDraftingCompass, faCube, faCheckCircle,faBook } from "@fortawesome/free-solid-svg-icons";


 const processSteps = [
    {
      title: "Recherche",
      description:
        "Analyse approfondie des besoins utilisateurs et étude de marché pour comprendre les enjeux",
      icon: faSearch,
  
    },

    {
        title: "User Stories",
        description:
          "Rédaction détaillée des spécifications fonctionnelles et des scénarios d'utilisation",
        icon: faBook,
      },

    {
      title: "Idéation",
      description:
        "Brainstorming collaboratif et génération d'idées créatives pour explorer toutes les possibilités",
      icon: faLightbulb,
   
    },
    {
      title: "Wireframe",
      description:
        "Création de maquettes fonctionnelles pour structurer l'architecture de l'information",
      icon: faDraftingCompass,

    },
    {
      title: "Prototype",
      description:
        "Développement de prototypes interactifs haute-fidélité pour valider les concepts",
      icon: faCube,

    },
    {
      title: "Tests",
      description:
        "Tests utilisateurs rigoureux et itérations continues pour optimiser l'expérience",
      icon: faCheckCircle,

    },
  ];



const Processus = () => {
    return (

        <section id="process"
        className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/5 via-transparent to-[#F7A8A8]/5"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-6">
          <div className="text-left mb-20 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 text-left mb-4">
              Mon Processus de Design
            </h2>

            <p className="text-lg text-gray-600  max-w-3xl leading-relaxed">
              Une approche méthodique et collaborative, structurée en 6 étapes
              clés,<br/> pour transformer vos idées en solutions design innovantes et
              centrées utilisateur.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-grid-line ${index < 3 ? "lg:mb-8" : ""}`}
              >
                <div className="process-card rounded-3xl p-8 h-full">
                  <div className="flex items-start">

                    <div className="process-icon-wrapper w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg mr-6">
                    <FontAwesomeIcon icon={step.icon} className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                    <h3 className="playfair text-2xl font-semibold text-black mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-[#FADADD]/30">
              <div className="w-3 h-3 bg-[#F7A8A8] rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">
                Un processus itératif et centré utilisateur
              </span>
              <div
                className="w-3 h-3 bg-[#FADADD] rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
   );
};

export default Processus;