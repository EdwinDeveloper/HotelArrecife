export class apartment{
    /*id_apartment:number;
    location:string;
    code:string;
    description:string;
    direcction:string
    status_free:boolean;
    constructor(id_aparment,location,code,description,direcction,status_free){
        this.id_apartment=id_aparment;
        this.location=location;
        this.code=code;
        this.description=description;
        this.direcction=direcction;
        this.status_free=status_free;
    }*/
    constructor(public id_apartment:number,
                public location:string,
                public code:string,
                public description:string,
                public direction:string,
                public status_free:boolean,
                public price:number
                )
    {
        
    }
}