import { Injectable } from '@angular/core';
import { Achievement, Education, Experience, PersonalInfo, Project, Skill } from '../models/portfolio.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  private personalInfo: PersonalInfo = {
    name: 'Aditya Kashirao Lahabar',
    title: 'Senior Systems Engineer | Angular Developer',
    tagline: 'Building high-performance, scalable web applications with Angular',
    email: 'adityalahabar@gmail.com',
    phone: '+91-9168489525',
    location: 'Pune | Nagpur, Maharashtra',
    linkedin: 'https://linkedin.com/in/aditya-lahabar-6a01291a3',
    bio: 'Passionate Angular Developer with 4+ years of experience at Infosys Limited, specializing in building scalable, user-centric web applications. Expert in multi-tenant architecture, multilingual support, and responsive design. Strong background in Angular 17+, RxJS, and modern web technologies.'
  };

  private experiences: Experience[] = [
    {
      company: 'Infosys Limited',
      position: 'Senior Systems Engineer',
      location: 'Pune',
      startDate: 'January 2023',
      endDate: 'Present',
      description: 'Angular Developer (Wingspan)',
      responsibilities: [
        'Developed and optimized features for admin module, playlist updates, and access management',
        'Implemented multi-tenant user interfaces using Angular structural and attribute directives',
        'Enhanced code performance and implemented responsive dark/light themes',
        'Integrated Angular HTTP Client with REST APIs for seamless functionality',
        'Built scalable applications with multi-tenant and multilingual support using RxJS',
        'Verified client-specific translations and contributed to secure multi-tenant architectures',
        'Participated in daily Scrum calls and Agile project management using Jira'
      ],
      technologies: ['Angular 17+', 'RxJS', 'HTML', 'CSS', 'TypeScript', 'Git', 'Markdown']
    },
    {
      company: 'Infosys Limited',
      position: 'Systems Engineer',
      location: 'Pune',
      startDate: 'September 2021',
      endDate: 'December 2022',
      description: 'Java Developer (UBS)',
      responsibilities: [
        'Developed and implemented backend CRUD operations using Microservices architecture with Spring Boot',
        'Designed and created UBS API endpoints to perform CRUD operations',
        'Integrated data from multiple APIs and transformed it into consistent outputs'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs']
    }
  ];

  private skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend', icon: 'code' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: 'code' },
    { name: 'RxJS', level: 85, category: 'frontend', icon: 'sync' },
    { name: 'HTML', level: 95, category: 'frontend', icon: 'html' },
    { name: 'CSS', level: 90, category: 'frontend', icon: 'palette' },
    { name: 'Bootstrap', level: 85, category: 'frontend', icon: 'view_module' },
    { name: 'Angular Material', level: 85, category: 'frontend', icon: 'widgets' },
    { name: 'JavaScript', level: 85, category: 'frontend', icon: 'code' },
    { name: 'Core Java', level: 80, category: 'backend', icon: 'developer_mode' },
    { name: 'Spring Boot', level: 75, category: 'backend', icon: 'settings' },
    { name: 'Node.js', level: 70, category: 'backend', icon: 'dns' },
    { name: 'Git', level: 85, category: 'tools', icon: 'source' },
    { name: 'Jira', level: 80, category: 'tools', icon: 'task' },
    { name: 'VS Code', level: 90, category: 'tools', icon: 'edit' },
    { name: 'Postman', level: 85, category: 'tools', icon: 'api' },
    { name: 'Chrome DevTools', level: 85, category: 'tools', icon: 'bug_report' }
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'Wingspan Platform',
      description: 'Enterprise-level learning management system with multi-tenant architecture, featuring admin modules, playlist management, and comprehensive access control. Implemented responsive design with dark/light theme support.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['Angular 17+', 'RxJS', 'TypeScript', 'Angular Material', 'REST APIs'],
      featured: true
    },
    {
      id: 2,
      title: 'Multi-Tenant Dashboard',
      description: 'Developed a sophisticated multi-tenant dashboard with tenant-specific views, ensuring data isolation and security. Implemented structural and attribute directives for dynamic UI rendering.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['Angular', 'RxJS', 'TypeScript', 'Bootstrap', 'REST APIs'],
      featured: true
    },
    {
      id: 3,
      title: 'Multilingual Web Application',
      description: 'Built a scalable web application with comprehensive multilingual support, handling client-specific translations and localization. Optimized performance using RxJS operators like forkJoin and switchMap.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['Angular', 'RxJS', 'i18n', 'TypeScript', 'HTML/CSS'],
      featured: true
    },
    {
      id: 4,
      title: 'UBS Microservices API',
      description: 'Designed and implemented RESTful API endpoints using Spring Boot and Microservices architecture. Integrated multiple data sources and ensured consistent, reliable outputs.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL'],
      featured: false
    },
    {
      id: 5,
      title: 'ShopSmart – Angular E-commerce',
      description: 'ShopSmart – Angular E-commerce A sample ecommerce web app built using Angular, showcasing the typical shopping flow: browsing products, adding items to cart, and proceeding to checkout. It provides a clean and modern UI, making it useful both as a demonstration of Angular-based ecommerce design and as a starting point for customization.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      techStack: ['Angular', 'RxJS', 'TypeScript', 'Bootstrap', 'REST APIs'],
      featured: true
    },
    {
      id: 6,
      title: 'PowerFit Gym Management',
      description: 'PowerFit Gym Management App A web-based application demonstrating a gym management system built with Angular. The app allows for member and trainer management, scheduling of classes, tracking workouts and payments, and includes a clean, intuitive UI designed for gym staff and administrators to manage daily operations efficiently.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      techStack: ['Angular', 'RxJS','Bootstrap', 'TypeScript', 'HTML/CSS'],
      featured: true
    },
  ];

  private achievements: Achievement[] = [
    {
      title: 'Infosys Certified Java Programmer',
      issuer: 'Infosys',
      date: '2021',
      type: 'certification'
    },
    {
      title: 'Infosys Certified Java SE 8 Developer',
      issuer: 'Infosys',
      date: '2021',
      type: 'certification'
    },
    {
      title: 'Infosys Global Agile Developer Certification',
      issuer: 'Infosys',
      date: '2022',
      type: 'certification'
    },
    {
      title: 'Infosys Certified Java SE 8 Professional',
      issuer: 'Infosys',
      date: '2022',
      type: 'certification'
    },
    {
      title: 'Infosys Certified Web Developer',
      issuer: 'Infosys',
      date: '2023',
      type: 'certification'
    },
     {
      title: 'Infosys Certified Generative AI Practitioner',
      issuer: 'Infosys',
      date: '2025',
      type: 'certification'
    },
    {
      title: 'Eminence Award 2024',
      issuer: 'Infosys - Nagpur DC',
      date: '2024',
      type: 'award',
      description: 'Awarded for exceptional performance and contributions'
    },

  ];

  private education: Education[] = [
    {
      institution: 'Rajiv Gandhi College Of Engineering And Research',
      degree: 'Bachelor of Engineering',
      field: 'Information Technology',
      location: 'Nagpur, India',
      startYear: 2017,
      endYear: 2021
    },
    {
      institution: 'Kamla Nehru Mahavidyalaya, Nagpur',
      degree: 'HSC',
      field: 'Information Technology',
      location: 'Nagpur, India',
      startYear: 2015,
      endYear: 2017
    }
  ];

  getPersonalInfo(): Observable<PersonalInfo> {
    return of(this.personalInfo);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.experiences);
  }

  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }

  getSkillsByCategory(category: 'frontend' | 'backend' | 'tools'): Observable<Skill[]> {
    return of(this.skills.filter(skill => skill.category === category));
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(project => project.featured));
  }

  getAchievements(): Observable<Achievement[]> {
    return of(this.achievements);
  }

  getEducation(): Observable<Education[]> {
    return of(this.education);
  }
}
