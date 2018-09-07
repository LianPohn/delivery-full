import * as $ from "jquery";

export class DataStorageManager {
    constructor(){}

    public readItems(obj, prop){
        console.log("DataStorageManager.readItems has not been implemented.");
    }

    public writeItems(itemList){
        console.log("DataStorageManager.writeItems has not been implemented.");
    }
}

export class FileDataManager extends DataStorageManager {
    private filePath : string;

    constructor(filePath : string){
        super();
        console.log("constructor FileDataManager:" + filePath);
        this.filePath = filePath;
    }

    public readItems(obj, prop){
        $.get('assets/data/' + this.filePath, function(data){
            obj[prop] = data;
            return obj;
        })
    }

    public writeItems(itemList){
        //$.post()
        console.log("FileDataManager.writeItems has not been implemented.", itemList);
    }
}