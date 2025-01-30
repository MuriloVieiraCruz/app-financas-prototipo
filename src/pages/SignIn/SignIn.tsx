import { Platform } from 'react-native'
import React from 'react'
import { 
  BackGround, 
  Container, 
  Logo, 
  AreaInput, 
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
 } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import SignListParam from '../../types/SignListParam';
import { useNavigation } from '@react-navigation/native';

type SignNavigationProp = StackNavigationProp<SignListParam, "SignIn">;

const SignIn: React.FC = () => {

  const navigation = useNavigation<SignNavigationProp>();

  return (
    <BackGround>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')}/>

        <AreaInput>
          <Input
            placeholder="Digite seu e-mail"
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite sua senha"
          />
        </AreaInput>

        <SubmitButton
          activeOpacity={0.8}
        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link
          onPress={navigation.navigate('SignUp')}
        >
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </BackGround>
  )
}

export default SignIn
