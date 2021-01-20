import React from 'react';
import Container from '@material-ui/core/Container';
import {styled} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core/';
const MessageTextContainer = styled(Container)({
  fontSize: '1.5rem',
  width: '50%',
  height: '100%',
  backgroundColor: '#FFFFFF',
  display: 'inline-block',
  verticalAlign: 'top',
  padding: '0',
  backgroundColor: 'inherit',
});
const TextHeader = styled(Container)({
  width: '100%',
  height: '10%',
  padding: '15px',
  textAlign: 'left',
  position: 'relative',
});
const TextTitle = styled(Typography)({
  fontSize: '17px',
  margin: '0',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
});
const ContentContainer = styled(Container)({
  width: '100%',
  height: '90%',
  padding: '15px',
  textAlign: 'left',
  position: 'relative',
  padding: '15px',
  lineHeight: '25px',
  letterSpacing: '2px',
});
function MessageText({message, from}) {
  return (
    <MessageTextContainer>
      <TextHeader>
        <TextTitle>{from}</TextTitle>
      </TextHeader>
      <ContentContainer>{message}</ContentContainer>
    </MessageTextContainer>
  );
}

export default MessageText;
