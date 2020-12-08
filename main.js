// Botones
var btnAdd = document.getElementById("btnAdd");
var btnSearch = document.getElementById("btnSearch");
var btnDelete = document.getElementById("btnDelete");
var btnPrint = document.getElementById("btnPrint");
var btnInsert = document.getElementById("btnInsert");
var btnTravel = document.getElementById("btnTravel");

// Datos
var name = document.getElementById("name");
var time = document.getElementById("time");
var res = document.getAnimations("msg")

// Clases
class Base {
    constructor(name, time) {
        this.name = name
        this.time = time
        this.next = null
    }
}

class Lista {
    constructor()
    {
        this.start = null
        this.size = 0
    }

    agregarBase(travel){
        if(this.start === null){
            this.start = travel
            travel.next = this.start
        } else {
            let aux = this.start
            while(aux.next !== this.start) {
                aux = aux.next
            }
            aux.next = travel
            travel.next = this.start
        }
        this.size++
        return travel.name
    }
}