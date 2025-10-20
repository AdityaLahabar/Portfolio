import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Achievement } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent implements OnInit {
  achievements$!: Observable<Achievement[]>;
  certifications$!: Observable<Achievement[]>;
  awards$!: Observable<Achievement[]>;
  isVisible = false;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.achievements$ = this.portfolioService.getAchievements();

    this.certifications$ = this.achievements$.pipe(
      map(achievements => achievements.filter(achievement => achievement.type === 'certification'))
    );

    this.awards$ = this.achievements$.pipe(
      map(achievements => achievements.filter(achievement => achievement.type === 'award'))
    );

    // Trigger animation after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  trackByAchievement(index: number, achievement: Achievement): string {
    return `${achievement.title}-${achievement.date}`;
  }

  getAchievementIcon(type: 'certification' | 'award'): string {
    return type === 'certification' ? '🏆' : '🏅';
  }

  getAchievementClass(type: 'certification' | 'award'): string {
    return type === 'certification' ? 'certification' : 'award';
  }

  getYearsExperience(): number {
    return new Date().getFullYear() - 2021;
  }
}

