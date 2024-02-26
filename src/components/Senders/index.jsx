import styled from 'styled-components';
import COLORS from '../../utils/colors';

const Senders = ({ messageCount, messages }) => {
  return (
    <Container>
      <ProfileList>
        {messages.map((message) => (
          <Item key={message.id}>
            <img src={message.profileImageURL} />
          </Item>
        ))}
        {messageCount > 3 && <Item>+{messageCount - 3}</Item>}
      </ProfileList>
      <Description>
        <b>{messageCount}</b>명이 작성했어요!
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  border-right: 2px solid ${COLORS.gray200};
  padding-right: 20px;

  @media (max-width: 960px) {
    display: none;
  }
`;

const ProfileList = styled.ul`
  display: flex;
`;

const Description = styled.p`
  font-size: 1.8rem;
`;

const Item = styled.li`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  padding: 1px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    border: 1px solid ${COLORS.gray300};
  }
  &:not(:last-child) {
    margin-right: -10px;
  }
  img {
    border-radius: 50%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Senders;