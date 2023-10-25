import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  showProjects:any
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1720px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.showProjects =false
      } else {
         this.showProjects =true
      }
    });
  }


  items =[
    {
      title:"Java Sprint Boot",
      image:"https://www.ibm.com/content/dam/adobe-cms/instana/media_logo/Spring.component.complex-narrative-xl.ts=1690565631163.png/content/adobe-cms/br/pt/products/instana/supported-technologies/spring-boot-performance-monitoring/_jcr_content/root/table_of_contents/body/content_section_styled/content-section-body/complex_narrative/logoimage",
      description:"Crud basico para treinamento",
      link:'https://github.com/PedroCozzati/Java-Spring-Boot-Alura'
    },
    {
      title:"Manipulação de dados com python",
      image:"https://spectrum.ieee.org/media-library/the-python-logo-on-top-of-imagery-representing-dna-sequencing-or-other-data.jpg?id=33364099&width=1200&height=900",
      description:"Projeto da area de dados",
      link:'https://github.com/PedroCozzati/python-engdados'
    },
    {
      title:"Jogo da trilha",
      image:"https://user-images.githubusercontent.com/80106385/277243596-4d482e91-f19b-4996-bed3-58caadc87c72.png",
      description:"Feito em angular",
      link:'https://github.com/PedroCozzati/Jogo_Da_Trilha_PvP_EngIII'
    },
    {
      title:"App financeiro",
      image:"https://user-images.githubusercontent.com/80106385/224726023-231a5512-f90c-41c4-b51f-b7b876002d68.png",
      description:"Aplicativo de controle financeiro",
      link:'https://github.com/PedroCozzati/financial_control'
    },
    {
      title:"Whatsapp",
      image:"https://user-images.githubusercontent.com/80106385/277244294-4f51b4ba-767a-42bc-8ae1-180144a3dce0.png",
      description:"Um dos primeiros projetos",
      link:'https://github.com/PedroCozzati/python-engdados'
    }


  ]
  obj = {}
  
  scroll(id:string) {

    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }
}
