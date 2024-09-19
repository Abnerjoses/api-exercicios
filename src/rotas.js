import musicasController from './controller/musicasController.js'
import tarefasController from './controller/tarefasController.js'

export default function adicionarRotas(servidor){
     servidor.use(musicasController, tarefasController);
}