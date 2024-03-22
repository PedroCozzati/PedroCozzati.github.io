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
    onMouseEnter(event: any): void {
      event.target.click();
  }

  items =[
    {
      title:"Pipeline Airflow - Linkedin",
      image:"https://www.sicara.fr/hubfs/Copy%20of%20dimension%20site%20%20%2816%29.jpg",
      description:"",
      link:'https://github.com/PedroCozzati/pipeline-airflow-etl-linkedin'
    },
    {
      title:"NY Times Subjects",
      image:"https://scontent.fcgh67-1.fna.fbcdn.net/v/t39.30808-6/350535703_659199556062511_6399672460381730787_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZlZ-1OlDiAEAX8wmpPv&_nc_ht=scontent.fcgh67-1.fna&oh=00_AfCsNAsE97AzT42zwiv4i7vfe0FqSRPwSJxVfphjHvXerg&oe=6603886B",
      description:"",
      link:'https://github.com/PedroCozzati/ny-times-subject-by-month'
    },
    {
      title:"Streanlit - Análise Linkedin",
      image:"http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg",
      description:"",
      link:'https://github.com/PedroCozzati/streamlit-analise-linkedin'
    },
    {
      title:"Jogo da trilha",
      image:"https://user-images.githubusercontent.com/80106385/277243596-4d482e91-f19b-4996-bed3-58caadc87c72.png",
      description:"",
      link:'https://github.com/PedroCozzati/Jogo_Da_Trilha_PvP_EngIII'
    },
    {
      title:"ChatBot",
      image:"https://private-user-images.githubusercontent.com/80106385/308280670-d21a98cf-74fd-4ea8-a038-eb71342482bb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTExMzQ4MjgsIm5iZiI6MTcxMTEzNDUyOCwicGF0aCI6Ii84MDEwNjM4NS8zMDgyODA2NzAtZDIxYTk4Y2YtNzRmZC00ZWE4LWEwMzgtZWI3MTM0MjQ4MmJiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzIyVDE5MDg0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU3ZDc3YThjMWViMWY3ZGNlZTg1MmQyNDIwZjJlNzYxZjgwOGI2YzBhZDgwODFjODkyNjA2ZjQ0MDNiYmNhOWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.A18BO_8uIejZtAo4JgD1rX8vFm9JiX3wP0BthiFOao8",
      description:"",
      link:'https://github.com/PedroCozzati/chatbot'
    },
    
    {
      title:"App financeiro",
      image:"https://user-images.githubusercontent.com/80106385/224726023-231a5512-f90c-41c4-b51f-b7b876002d68.png",
      description:"Aplicativo de controle financeiro",
      link:'https://github.com/PedroCozzati/financial_control'

    }
    


  ]
  obj = {}
  
  scroll(id:string) {

    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }
}
