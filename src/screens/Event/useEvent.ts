import { ToastAndroid } from 'react-native';
import { API_URL } from '../ip.json';

export const handleConfirm = async (eventJson: Record<string, any>) => {
  
    const resposta = await fetch('http://' + API_URL + '/api/eventos/1/confirmar',
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',}, 
        body: JSON.stringify({ "id_user": eventJson['creatorId'], "id_evento": eventJson['id'] })
      }
    )
    const message = await resposta.json();
    console.log(message) //mostra o retorno no log
    ToastAndroid.show(message['erro'], ToastAndroid.SHORT); //mostra na tela do celular se dar erro
    
    // aqui é o que retorn quando clica em confirmar presença na tela de eventos da comunidade
  }