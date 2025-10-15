
import { Button, Card} from 'antd';
import { GithubOutlined} from '@ant-design/icons';
import Frame from '../assets/Frame.png'; 
import Task from '../assets/TaskApp.png';

const projects = [
    {
    title: 'Application E-commerce Mobile',
    description: 'Interface utilisateur moderne pour une application de shopping avec expérience utilisateur optimisée.',
    image: Frame,
    tags: ['React Native', 'Figma', 'UX-UI Design'],
    github: '#',
    demo: 'https://www.figma.com/proto/iNiUuFYgiqQY1xqtQ0qgaA/Untitled?node-id=52-2770&t=fj5UaUd4V6Xu1btA-1&scaling=scale-down&content-scaling=fixed&page-id=52%3A1878&starting-point-node-id=52%3A2770'
    },
    {
    title: 'Gestionnaire de tâches — Application web intuitive',
    description: 'Elle permet d’ajouter, modifier, supprimer et organiser ses tâches par catégories, avec un système de filtrage et une interface simple et responsive.',
    image: Task,
    tags: ['Angular', 'D3.js', 'UX-UI Design'],
    github: '#',
    demo: 'https://www.figma.com/proto/WSgWwR4vDU5FIbjzYQIWj1/Untitled?1898&p=f&t=QO1H9wMYBgOUv4G4-1&scaling=scale-down-width&content-scaling=fixed&page-id=11%3A1897'
    },
    {
    title: 'Site Web Corporate',
    description: 'Site vitrine élégant avec animations fluides et design responsive.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20corporate%20website%20design%20with%20soft%20feminine%20colors%2C%20clean%20layout%2C%20modern%20typography%2C%20white%20background%2C%20professional%20business%20interface&width=400&height=300&seq=proj3&orientation=landscape',
    tags: ['React', 'SCSS', 'Web Design'],
    github: '#',
    demo: '#'
    }
    ];


const Projects = () => {
    return (

        <section id="projets" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-left mb-4">Mes Projets</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-16">
        Découvrez une sélection de mes projets récents, alliant créativité et <br></br>
        fonctionnalité pour créer des expériences utilisateur exceptionnelles.
            </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
        <Card
        key={index}
        className="hover-lift cursor-pointer border-0 shadow-lg rounded-2xl overflow-hidden"
        cover={
        <div className="h-48 overflow-hidden">
        <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
        </div>
        }
        >
        <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
        <span
        key={tagIndex}
        className="px-3 py-1 bg-pink-100 text-pink-600 text-sm rounded-full"
        >
        {tag}
        </span>
        ))}
        </div>
        <div className="flex space-x-3">
        <Button
        size="small"
        icon={<GithubOutlined />}
        className="!rounded-button whitespace-nowrap cursor-pointer"
        >
        GitHub
        </Button>
      {/* Demo */}
      {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir la démo de ${project.title}`}
                    >
                      <Button
                        type="primary"
                        size="small"
                        className="!rounded-button whitespace-nowrap cursor-pointer bg-pink-500 hover:bg-pink-600 border-pink-500"
                      >
                        Voir Demo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      type="primary"
                      size="small"
                      disabled
                      className="!rounded-button whitespace-nowrap bg-gray-300 border-gray-300"
                    >
                      Demo Indisponible
                    </Button>
                  )}
        {/* <Button
  type="primary"
  size="small"
  className="!rounded-button whitespace-nowrap cursor-pointer bg-pink-500 hover:bg-pink-600 border-pink-500"
  onClick={() => window.open('https://www.figma.com/proto/iNiUuFYgiqQY1xqtQ0qgaA/Untitled?node-id=52-2770&p=f&t=rFUiBNaN6GukZExp-1&scaling=scale-down&content-scaling=fixed&page-id=52%3A1878&starting-point-node-id=52%3A2770', '_blank')}
>
  Voir Demo
</Button> */}

        </div>
        </div>
        </Card>
        ))}
        </div>
        </div>
        </section>

        );
        };
export default Projects;