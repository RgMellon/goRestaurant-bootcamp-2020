import React, { useCallback } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  SuccessContainer,
  SuccessText,
  GoHomeButton,
  GoHomeButtonText,
  FooterContainer,
} from './styles';

const OrderSucces: React.FC = () => {
  const { reset } = useNavigation();

  const handleNavigateToHome = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Home',
        },
      ],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <SuccessContainer>
        <Icon size={100} color="#C72828" name="check" />
      </SuccessContainer>
      <SuccessText> Pedido realizado com sucesso !</SuccessText>

      <FooterContainer>
        <GoHomeButton onPress={handleNavigateToHome}>
          <GoHomeButtonText> Voltar para Home</GoHomeButtonText>
        </GoHomeButton>
      </FooterContainer>
    </Container>
  );
};

export default OrderSucces;
