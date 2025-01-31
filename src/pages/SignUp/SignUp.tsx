import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { 
  BackGround, 
  Container,
  AreaInput, 
  Input,
  SubmitButton,
  SubmitText,
 } from '../styles/styles';
import { useAuthContext } from '../../contexts/auth'

const SignUp = () => {

  const { signUp } = useAuthContext();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSignUp() {
    await signUp(name, email, password);
  }

  return (
    <BackGround>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
       <AreaInput>
        <Input
          placeholder='Nome'
          value={name}
          onChangeText={setName}
        />
       </AreaInput>
       <AreaInput>
        <Input
          placeholder='E-mail'
          value={email}
          onChangeText={setEmail}
        />
       </AreaInput>
       <AreaInput>
        <Input
          placeholder='Senha'
          value={password}
          onChangeText={setPassword}
        />
       </AreaInput>

       <SubmitButton onPress={handleSignUp}>
        <SubmitText>Cadastrar</SubmitText>
       </SubmitButton>

      </Container>

    </BackGround>
  )
}

export default SignUp

const styles = StyleSheet.create({})