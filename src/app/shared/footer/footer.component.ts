import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  personalInfo$!: Observable<PersonalInfo>;
  currentYear = new Date().getFullYear();

  navigationLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💼' },
    { path: '/skills', label: 'Skills', icon: '💻' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/achievements', label: 'Achievements', icon: '🏆' },
    { path: '/education', label: 'Education', icon: '🎓' },
    { path: '/contact', label: 'Contact', icon: '📧' }
  ];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.personalInfo$ = this.portfolioService.getPersonalInfo();
  }

  openLinkedIn(url: string): void {
    window.open(url, '_blank');
  }

  openEmailClient(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

