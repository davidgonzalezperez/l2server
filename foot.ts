import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
cookies={};
  constructor(private cookieService: CookieService) { 
    
  }

  ngOnInit() {
      //Check Cookies on init, si existe oculta el div, sino lo muestra para que aceptes.
    const IsCookieExists: boolean = this.cookieService.check('L2ANTHARAS');
    if(IsCookieExists==true){
      document.getElementById("barraaceptacion").style.display="none";
    }
  }
  //Cuando damos al OK en las cookies, creamos una cookie propia , no volvera a saltar si tienes la cookie del server.
  CloseCookie(){
  
      this.cookies= {   
        Server: 'LineageIIAntharas',
        Version: '2.8 L2Off'
     };
      this.cookieService.set('L2ANTHARAS', JSON.stringify(this.cookies));
      document.getElementById("barraaceptacion").style.display="none";
    }
    
}


