// export class TodoItem {
//     description: string;
//     action: string;

//     constructor(description: string, action: string) {
//         this.description = description;
//         this.action = action;
//     }
// }


// Alternatif Yöntem

// export class TodoItem {
//     constructor(public description: string, public action: string) { //public ya da private(private tanımladığımız nesneye ulaşamayız) tanımlaması yapmazsak hata alırız ve böylece propa gerek kalmadı
//         this.description = description;
//         this.action = action;
//     }
// }
// const td = new TodoItem("spor","yes"); //tsconfig.json dosyasındaki false olayı yerine constructor da tanımlayabiliriz

// Alternatif Yöntem

export interface TodoItem {
             description: string;
             action: boolean;
        }
   