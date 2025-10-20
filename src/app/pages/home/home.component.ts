import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
  }

  scrollToSection(section: string): void {
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
