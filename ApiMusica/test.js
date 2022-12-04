let chai = require('chai');
let chaiHttp =require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp)
const url='https://ApiMusica2.ottol0.repl.co';

//Test Insercion 
describe('Inserta una cancion: ',()=>{                       
    it('deberia insertar una cancion', (done) => {       
              chai.request(url)
                       .post('/create')                       
                       .send({ artista: "Eladio Carrion", cancion:"Mbappe",album:"SEN2 KBRN VOL. 2",cita:"Tu sabe' que siempre va ser mejor que el anterior",url:"https://open.spotify.com/embed/track/2lmWwBLVJ2P0HX491zkYws?utm_source=generator" })                       
                       .end( function(err,res){
                                expect(res).to.have.status(200);
                                expect(res.text).to.be.a('string');                                
                                done();                           
                            });      
    }); 
}); 

//Test Consultar
describe('Obtener una Cancion: ',()=>{                       
    it('deberia obtener una cancion', (done) => {       
              chai.request(url)
                       .get('/canciones')                       
                       .send()                       
                       .end( function(err,res){
                                expect(res).to.have.status(200);
                                expect(res).to.be.json;                               
                                done();                           
                            });      
    }); 
}); 

//Test Modificar
describe('Obtiene personas: ',()=>{
    it('Deberia obtener todas las personas', (done) => {             
            chai.request(url)                                                  
                    .patch('/actualizar')                      
                    .send({cita:"Young rich nigga como Mbappe", cancion:"Mbappe"})                      
                    .end( function(err,res){
                            expect(res).to.have.status(200);
                            expect(res.text).to.be.a('string');                               
                            done();                          
                            });     
    });
});

//Test Delet
describe('Obtiene personas: ',()=>{
    it('Deberia obtener todas las personas', (done) => {             
            chai.request(url)                                                  
                    .delete('/eliminar')                      
                    .send({cancion:"Mbappe"})                      
                    .end( function(err,res){
                            expect(res).to.have.status(200);
                            expect(res.text).to.be.a('string');                               
                            done();                          
                            });     
    });
});
