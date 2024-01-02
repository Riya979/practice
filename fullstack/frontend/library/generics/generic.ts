interface Isecurity<T>{
    leg:T
    eyes:number
    nose?:number
}

let riya:Isecurity<number>={
    leg: 2,
    eyes: 2,

}
riya.nose=1

let chandana:Isecurity<string>={
    leg: "two legs",
    eyes: 2,
}

chandana.nose=1