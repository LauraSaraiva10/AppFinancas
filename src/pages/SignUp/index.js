import React, { useState, useContext } from 'react';
import { Platform , ActivityIndicator} from 'react-native';
import { Background, Container, Logo, AreaInput, Input, 
SubmitButton, SubmitText } from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const{ signUp, loadingAuth } = useContext(AuthContext);

 //Registar user
 function handleSignUp(){
  signUp(email,password,nome);
 }

 return (
   <Background>
     <Container
      behavior={Platform.OS === 'ios' ? 'padding' : '' }
      enabled
     >
          <AreaInput>
           <Input
             placeholder="Nome"
             autoCorrect={false}
             autoCapitalize="none"
             value={nome}
             onChangeText={ (texto) => setNome(texto)}
           />
         </AreaInput>


         <AreaInput>
           <Input
             placeholder="Email"
             autoCorrect={false}
             autoCapitalize="none"
             value={email}
             onChangeText={ (texto) => setEmail(texto)}
           />
         </AreaInput>

         <AreaInput>
           <Input
             placeholder="Palavra-Passe"
             autoCorrect={false}
             autoCapitalize="none"
             value={password}
             secureTextEntry={true}
             onChangeText={ (texto) => setPassword(texto)}
           />
         </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
              loadingAuth ? (
                <ActivityIndicator size={20} color="#FFF" />
              ):(
                <SubmitText>Criar Conta</SubmitText>
              )
          }
        </SubmitButton>

     </Container>
   </Background>
  );
}