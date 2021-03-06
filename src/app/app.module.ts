import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { FilterChipComponent } from './filter-chip/filter-chip.component';
import { ProjectsComponent } from './projects/projects.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    ProjectCardComponent,
    SkillCardComponent,
    MainComponent,
    SkillsComponent,
    HeaderbarComponent,
    FilterChipComponent,
    ProjectsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
