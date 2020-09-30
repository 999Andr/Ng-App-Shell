import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shell';
  
  message;
  
  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.message = isPlatformBrowser(platformId) ?  
    this.appMessage("Browser") : this.appMessage("App Shell")
  }
  
  ngOnInit() { 
    setTimeout(() => { return this.showTime(); }, 1000); 
  }
  
  private appMessage(arg) { 
    console.log(`renderer by ${arg}`); 
    return `renderer by ${arg}`;
  }
  
  showTime() { 
    
    if (this.message == "renderer by Browser") {   
      return localStorage.getItem('First_Contentful_Paint');
    }
  
  }

}

