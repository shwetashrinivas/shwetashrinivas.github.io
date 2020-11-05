import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ProfileComponent, HeaderComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
