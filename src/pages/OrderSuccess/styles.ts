import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
  position: relative;
`;

export const SuccessContainer = styled.View`
  width: 200px;
  height: 200px;
  background: #f0f0f5;
  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

export const SuccessText = styled.Text`
  color: #fafafa;
  margin-top: 80px;
  font-size: 18px;
  font-family: 'Poppins-Regular';
`;

export const GoHomeButton = styled.TouchableOpacity`
  /* background: #ffb84d; */

  border-radius: 8px;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 80%;
  /* margin-top: 80px; */
  padding: 10px;
  border: 1px solid #c72828;
  /* padding: 20px; */
`;

export const GoHomeButtonText = styled.Text`
  color: #c72828;
  font-size: 16px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #fff;
  padding: 20px;
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  justify-content: center;
  align-items: center;
`;
