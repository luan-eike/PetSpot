import { Alert } from 'react-native';
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
    Alert.alert(message["erro"]) //mostra na tela a mensagem de erro
    
    // aqui é o que retorn quando clica em confirmar presença na tela de eventos da comunidade
  }