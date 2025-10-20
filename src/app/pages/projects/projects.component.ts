import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { Project } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects$!: Observable<Project[]>;
  filteredProjects$!: Observable<Project[]>;
  private filterSubject = new BehaviorSubject<string>('all');
  currentFilter$ = this.filterSubject.asObservable();
  isVisible = false;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.projects$ = this.portfolioService.getProjects();

    this.filteredProjects$ = combineLatest([
      this.projects$,
      this.currentFilter$
    ]).pipe(
      map(([projects, filter]) => {
        if (filter === 'all') {
          return projects;
        } else if (filter === 'featured') {
          return projects.filter(project => project.featured);
        }
        return projects;
      })
    );

    // Trigger animation after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  getTechStackColor(index: number): string {
    const colors = [
      'var(--accent-color)',
      'var(--accent-secondary)',
      '#10b981',
      '#f59e0b',
      '#ef4444',
      '#8b5cf6'
    ];
    return colors[index % colors.length];
  }
}

