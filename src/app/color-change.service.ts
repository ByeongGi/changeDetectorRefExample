import { Injectable, NgZone, ViewContainerRef } from '@angular/core';

@Injectable()
export class ColorChangeService {

  constructor() {}

  changeColorForComponent( 
      viewContainerRef : ViewContainerRef 
    , ngZone:NgZone ){
      ngZone.runOutsideAngular(() =>{     
        const el = viewContainerRef.element.nativeElement.querySelector('p');
        // console.log(el);
        el.style.backgroundColor = 'red';  
        setTimeout(() => {
          el.style.backgroundColor = 'white';
        }, 2000);     
      });
  }

}
