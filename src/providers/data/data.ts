import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

    constructor(public storage: Storage) {
    }
    getData() {
        return this.storage.get('iontodo');  
    }

    save(data){
        let newData = JSON.stringify(data);
        this.storage.set('iontodo', newData);
        console.log('saved' + newData);
    }
}
