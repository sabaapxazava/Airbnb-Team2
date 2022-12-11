import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class EventManagerService{

  autEventHandler: EventEmitter<any> = new EventEmitter()
  loginEventHTMLHandler: EventEmitter<any> = new EventEmitter()
  logoutEventHTMLHandler: EventEmitter<any> = new EventEmitter()

  constructor() {

    this.autEventHandler.subscribe({
      next: (msg: any) => {
        
          if(msg.type === 'login'){
            this.loginEventHandler(msg.body)
          }

          if(msg.type === 'logout'){
            this.logoutEventHandler(msg.body)
          }

      }
    })
  }


  /**
   * @description
   * This method used for handle login event
   *
   * @param data
   */
  loginEventHandler(data: Record<string, any>):void{
    this.loginEventHTMLHandler.emit(data)
  }

  /**
   * @description
   * This method used for handle logout event
   *
   * @param data
   * @return
   */
  logoutEventHandler(data: string):void{
    this.logoutEventHTMLHandler.emit()
  }

}
