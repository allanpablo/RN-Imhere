import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  
  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante Existe', 'Por favor, adicione outro participante, esse ja existe')
    }
    setParticipants(prevState => [...prevState,participantName]);
    setParticipantName('');
  }
  function handleParticipantRemove(name: string) {
   

    Alert.alert('Remover',`Remover ${name} ?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(participants.filter(partipant => partipant !== name))
      }
    ] )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do Participante" placeholderTextColor="#f5d5c5" onChangeText={setParticipantName} value={participantName} />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants} 
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=> <Text style={styles.listEmptyText}>Nenhum participante compareceu ainda!</Text>}
      />
    </View>
  );
}
