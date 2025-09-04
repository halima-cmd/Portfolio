
import { Button, Card, Form, Input, Progress, Modal } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, BehanceOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const projects = [
    {
    title: 'Application E-commerce Mobile',
    description: 'Interface utilisateur moderne pour une application de shopping avec expérience utilisateur optimisée.',
    image: 'https://readdy.ai/api/search-image?query=modern%20mobile%20shopping%20app%20interface%20design%20with%20clean%20white%20background%2C%20pink%20and%20beige%20color%20scheme%2C%20elegant%20product%20cards%2C%20minimalist%20layout%2C%20professional%20UI%20design%20showcase&width=400&height=300&seq=proj1&orientation=landscape',
    tags: ['React Native', 'Figma', 'UX Design'],
    github: '#',
    demo: '#'
    },
    {
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec visualisations de données et interface intuitive.',
    image: 'https://readdy.ai/api/search-image?query=clean%20analytics%20dashboard%20interface%20with%20soft%20pastel%20colors%2C%20data%20visualization%20charts%2C%20modern%20UI%20elements%2C%20white%20background%2C%20professional%20design%20aesthetic&width=400&height=300&seq=proj2&orientation=landscape',
    tags: ['Angular', 'D3.js', 'UI Design'],
    github: '#',
    demo: '#'
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
        <Button
        type="primary"
        size="small"
        className="!rounded-button whitespace-nowrap cursor-pointer bg-pink-500 hover:bg-pink-600 border-pink-500"
        >
        Voir Demo
        </Button>
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