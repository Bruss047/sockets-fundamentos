
class Usuarios{

    constructor(){
        this.personas=[];
        }

       agregarPersona(id,nombre,sala){

            let persona={
                id,nombre,sala
            };

            this.personas.push(persona);
            return this.personas;
       } 

       getPersona(id){
           let persona= this.personas.filter(person =>person.id === id)[0];//[0] para que encuentre un unico registro

           return persona;
       }

       getPersonas(){
           return this.personas;
       }

       getPersonasPorSala(sala){
            let personasEnSala= this.personas.filter(persona=>persona.sala===sala);
            return personasEnSala;
       }

       borrarPersona(id){
            let personaBorrada = this.getPersona(id);
            this.personas= this.personas.filter(persona=>{ //Esta funcion devuelve un nuevo arreglo que se va a guardar en "this.personas" - elimina a las personas desconectadas
            return persona.id !=id

        });

        return personaBorrada; //retorno persona eliminada

       }


}

module.exports={

    Usuarios
}