//* Literal Type
// Todo: Literal type use kore amra custom type make korte pari like : 

type Status = "pending"
const status : Status = "pending"


//*Basic Union
// Todo: union use kore amra bolte pari je hoyto type ata hobe ba ota ar fole nirdharito type sara ar kono kisu value hisabe assain kora jabe na, ar fole amra multiple type ke aksathe korte pari

type Identity = string | number;
const id : Identity = 2323;



//* Literal Union
// Todo : Akhane amra Literal type and Union ke aksathe use korte parbo jar karone amara custom akadhik type make korte parbo...

type Role = "user" | "admin" | "manager";

const userRole : Role = "admin";


//* Object Union
//Todo : How to use Union in Object , exmple =>

type Admin = { id : number, role : "admin", privileges : string[]}
type Member = {id : number, role : "member", plans : string[]};

type User = Admin | Member ;


const user : User = {
    id : 23, 
    role : "member", 
    plans   : ["abdullah"]
}