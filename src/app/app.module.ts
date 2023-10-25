import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { CarouselModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    ProjectsComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    IconModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [IconSetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
