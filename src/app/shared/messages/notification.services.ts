import { EventEmitter } from "@angular/core";

export class NotificantionServices{
    
    notifier = new EventEmitter<string>()

    notify(message: string){
        this.notifier.emit(message)
    }
}

