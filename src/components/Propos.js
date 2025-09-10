import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFigma,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAngular,
  faGithub,
  faJava,
  faJira,
  faVuejs,
  faNodeJs,
  faDocker,
  faKeycdn
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faFigma, name: 'Figma' },
  { icon: faCode, name: 'VS Code' },
  { icon: faHtml5, name: 'HTML5' },
  { icon: faCss3Alt, name: 'CSS3' },
  { icon: faJsSquare, name: 'JavaScript' },
  { icon: faJsSquare, name: 'TypeScript' },
  { icon: faReact, name: 'React' },
  { icon: faAngular, name: 'Angular' },
  { icon: faVuejs, name: 'Vue JS' },
  { icon: faNodeJs, name: 'Next JS' },
  { icon: faDocker, name: 'Docker' },
  { icon: faGithub, name: 'GitHub' },
  { icon: faJava, name: 'Tailwind CSS' },
  { icon: faJira, name: 'Jira' },

  
];

const Navbar = () => {
  return (
    <section id="a-propos" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">À propos de moi</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionnée par l'intersection entre design et technologie, je combine ma formation en design UX/UI avec mes compétences en développement front-end pour créer des solutions digitales exceptionnelles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Avec plus de 4 ans d'expérience, j'accompagne mes clients dans la conception et la réalisation de leurs projets numériques, de l'idée initiale jusqu'à la mise en production.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mon approche centrée utilisateur et ma maîtrise des technologies modernes me permettent de livrer des produits à la fois beaux, fonctionnels et performants.
            </p>
          </div>

          {/* Icônes */}
          <div className="grid grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover-lift cursor-pointer"
              >
                <FontAwesomeIcon icon={skill.icon} className="text-3xl text-pink-500 mb-2" />
                <span className="text-sm text-gray-600 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
