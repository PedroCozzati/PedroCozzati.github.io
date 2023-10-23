import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  items =[
  
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
