import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';
import { Education as EducationModel } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education$!: Observable<EducationModel[]>;
  isVisible = false;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.education$ = this.portfolioService.getEducation();

    // Trigger animation after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  trackByEducation(index: number, education: EducationModel): string {
    return `${education.institution}-${education.degree}`;
  }

  calculateDuration(startYear: number, endYear: number): string {
    const duration = endYear - startYear;
    return duration === 1 ? '1 year' : `${duration} years`;
  }

  getFieldIcon(field: string): string {
    const fieldIcons: { [key: string]: string } = {
      'Information Technology': '💻',
      'Computer Science': '💻',
      'Engineering': '⚙️',
      'Software Engineering': '🛠️'
    };
    return fieldIcons[field] || '🎓';
  }
}

