import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { 
  BackGround, 
  Container,
  AreaInput, 
  Input,
  SubmitButton,
  SubmitText,
 } from '../styles/styles';

const SignUp = () => {
  return (
    <BackGround>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
       <AreaInput>
        <Input
          placeholder='Nome'
        />
       </AreaInput>
       <AreaInput>
        <Input
          placeholder='E-mail'
        />
       </AreaInput>
       <AreaInput>
        <Input
          placeholder='Senha'
        />
       </AreaInput>

       <SubmitButton>
        <SubmitText>Cadastrar</SubmitText>
       </SubmitButton>

      </Container>

    </BackGround>
  )
}

export default SignUp

const styles = StyleSheet.create({})