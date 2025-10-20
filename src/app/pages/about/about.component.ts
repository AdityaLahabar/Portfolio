import { Component, OnInit } from '@angular/core';
import { PersonalInfo, Experience } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  experiences: Experience[] = [];

  constructor(private portfolioData: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioData.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });

    this.portfolioData.getExperiences().subscribe(exp => {
      this.experiences = exp;
    });
  }
}
