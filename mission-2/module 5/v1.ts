//? akta web site kemne kaj kore?

/**Ans : 
Jokhon akta clint kono server ke request kore and response pay ata ke (Request - Response MODEL) bole .

And ai client and serverer maje je communication ar structure hoise ake  (Client - Server ARCHITECTURE) bole.
 */

//? Jokhon kono web URL ke hit kora hoy pore ki hoy ?

/**
 * Like URL (https://web.com/form)
 *
 * akhane URL ar 3 ta part ase :
 * 1. {https://} PROTOCOL {
 *  protocol mane golo rule and regulation,
 *  duniyate anek gulo protocol ase but url ar khetre 2 ta use hoy :
 *      - HTTP -> Hyper Text Transfer Protocol
 *      - HTTPS -> Hyper Text Transfer Protocol Secure
 * }
 * 2. {web.com} website Name {
 *  Kono akta web site ke khuje ber korar jonno jei name use hoy takeii website name bole
 * }
 *3. {/form} Resource {
 akta web site ar ki information dekhte chaitasi setar jonno resouce amader kaje lage , resource hoite pare : /about, /blog, /form, /singIn, /signUp  etc
 }
 */

//? So can we found web site by there name ? Ans:No

// why cholo buja jak

// Jokhon amra kono website ar name diya tare search dite try kori tokhon ata age jay
// TODO : DNS ar kase (Data Name Server)
// DNS tar vetor sei name throte akta number pabe like : (https://130.50.134.132:443)
// TODO : DNS server ke je number ta send kore take IP address bole

//* Summary : Client tar website name paday DNS ke IP address ar jonno pore ai IP address diya website ke khuje ber kore

// ai je (https://130.50.134.132:443) ase akhane amra jani akta protocol ase then akta ip address ase and sobar last a akta port ase
// ai port ta holo bujay apni kon resource a jete chan

//? HTTP Request ar vetor ki ki thake

/**
 * - method : GET, POST, POST, DELETE
 * - request Headers : Host thake mane ata koi host kora ase (our domain name), Accept-Encoding : gzip, deflate, br (mane se ki form a data grohon korbe ata bujay)
 * - Request Body : send krito data
 */

// TODO : ata server a gele server ai data dekhe buje oy kichaise and now or ki kora lagbe then server akta HTTP Response paday

//? HTTP Response ar vetor ja thake :

/**
 * - Status Code : Jar maddhome buja jay response ta ki type ar good or bed etc
 * - Headers : {
 *  ->Access-Control-Allow-Credentials: true; (tar mane amra akhane cookies padaite pari,credential type jure dite pari)
 *  -> Content-Type : atar dekhte bujay kon type ar content amader ditase
 * }
 * - Body : Server theke send kora data client ar jonno
 */

//? TCP/IP Socket Connection  ki ?
// aker odik application ar moddhe akta system ja use kore data transfer kora hoy
// TCP - Transmission Control Protocol -> Data kon format a jabe ta nirdes kore
// IP - Internet Protocol -> Data kon destination a jabe ta buja jay
// Protocol - Rules & Regulation mane kisu sorto jure dite pari

//Todo : Ai sob kisu jure dileii client and server TCP/IP use data transfer korte pare

//? Client theke all data server a send kora hoy?

// na, amra data ke coto coto kore venge padai naile amader server slow hoite pare, traffic overload hoite pare, amader kono data haraiya jaite pare

// servere ai data Chank by Chank data alomelo vabe jaite pare to TCP ta sajay pore reasamble kore
// same for client : server theke response taw chank chank kore jay to pore abar tao reasmble kora hoy
