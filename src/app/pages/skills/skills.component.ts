import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../models/portfolio.model';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  frontendSkills$!: Observable<Skill[]>;
  backendSkills$!: Observable<Skill[]>;
  toolsSkills$!: Observable<Skill[]>;
  isVisible = false;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.frontendSkills$ = this.portfolioService.getSkillsByCategory('frontend');
    this.backendSkills$ = this.portfolioService.getSkillsByCategory('backend');
    this.toolsSkills$ = this.portfolioService.getSkillsByCategory('tools');

    // Trigger animation after component loads
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  trackBySkill(index: number, skill: Skill): string {
    return skill.name;
  }

  getSkillIcon(iconName?: string): string {
    const iconMap: { [key: string]: string } = {
      'code': '💻',
      'sync': '🔄',
      'html': '🌐',
      'palette': '🎨',
      'view_module': '📱',
      'widgets': '🧩',
      'developer_mode': '☕',
      'settings': '⚙️',
      'dns': '🟢',
      'source': '📋',
      'task': '📊',
      'edit': '✏️',
      'api': '🔗',
      'bug_report': '🔍'
    };
    return iconMap[iconName || 'code'] || '🛠️';
  }
}

