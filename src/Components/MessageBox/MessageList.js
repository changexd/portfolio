import React from 'react';
import Container from '@material-ui/core/Container';
import {styled} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import useToggleState from '../GeneralFunction/useToggleState';

const ListContainer = styled(Container)({
  width: '50%',
  height: '100%',
  display: 'inline-block',
  verticalAlign: 'top',
  padding: '0',
  border: '3px solid #9B9B9B',
});
const ListHeader = styled(Container)({
  width: '100%',
  height: '10%',
  padding: '15px',
  textAlign: 'center',
  borderBottom: '3px solid #9B9B9B',
});

const InfoContainer = styled(Container)({
  width: '100%',
  height: '10%',
  padding: '15px',
  textAlign: 'center',
  borderBottom: '3px solid #4A4A4A',
  borderTop: 'none',
  backgroundColor: 'inherit',
});
const MessagePreview = {
  textAlign: 'left',
  margin: '0',
  textOverflow: 'ellipsis',
  height: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  letterSpacing: '2px',
};
const MessageTitle = {
  fontSize: '17px',
  fontWeight: 'bold',
  float: 'left',
  margin: '0',
};
////////////////////////////////
function MessageList({
  SetMessageStateWithLink,
  message,
  example,
  SortByRecentDate,
  SortByOlderDate,
}) {
  const [isToggled, ToggleSort] = useToggleState(false);
  return (
    <ListContainer>
      <ListHeader>
        <p style={{float: 'left'}}>訊息列表</p>
        <p
          onClick={() => {
            isToggled ? SortByOlderDate() : SortByRecentDate();
            ToggleSort();
          }}
          style={{float: 'right', cursor: 'pointer'}}
        >
          時間排序{isToggled ? '最舊↓' : '最新↓'}
        </p>
      </ListHeader>
      {example.map((example) => {
        return (
          <NavLink
            className='test'
            key={example.message}
            exact
            activeClassName='messageActive'
            to={`/MessageBox/${example.direction}`}
          >
            <InfoContainer
              onClick={() => {
                SetMessageStateWithLink(example);
              }}
            >
              <div style={{height: '50%'}}>
                <p style={MessageTitle}>{example.from}</p>
                <p style={{float: 'right', margin: '0'}}>{example.date}</p>
              </div>
              <div style={{height: '50%'}}>
                <p style={MessagePreview}> {example.message}</p>
              </div>
            </InfoContainer>
          </NavLink>
        );
      })}
    </ListContainer>
  );
}

export default MessageList;
