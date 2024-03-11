import styled from 'styled-components';
import FONTS from '../../styles/fonts';
import COLORS from '../../styles/colors';

const BUTTON_SIZE = {
  large: `72rem`,
  medium: `32rem`,
  small: `28rem`,
  xSmall: `12rem`,
  full: '100%',
};

export const Primary56 = styled.button`
  ${FONTS.font18_Bold}
  color: ${COLORS.white};
  text-align: center;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  background-color: ${COLORS.purple600};
  width: ${({ $buttonSize }) => BUTTON_SIZE[$buttonSize]};
  border: 0.2rem solid ${COLORS.purple600};
  max-width: 72rem;
  width: 100%;

  &:disabled {
    background-color: ${COLORS.gray300};
    border: 0.2rem solid ${COLORS.gray300};
  }

  &:enabled {
    &:hover {
      background-color: ${COLORS.purple800};
      border: 0.2rem solid ${COLORS.purple800};
    }

    &:active {
      background-color: ${COLORS.purple800};
      border: 0.2rem solid ${COLORS.purple800};
    }

    &:focus {
      background-color: ${COLORS.purple800};
      border: 0.2rem solid ${COLORS.purple900};
    }

    @media (max-width: 1199px) {
      width: ${({ $tabletButtonSize }) => BUTTON_SIZE[$tabletButtonSize]};
    }

    @media (max-width: 767px) {
      width: ${({ $mobileButtonSize }) => BUTTON_SIZE[$mobileButtonSize]};
    }
  }
`;

export const Primary40 = styled(Primary56)`
  ${FONTS.font16_Regular}
  color: ${COLORS.white};
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  background-color: ${COLORS.purple600};
  border: 0.1rem solid ${COLORS.purple600};

  &:disabled {
    border: 0.1rem solid ${COLORS.gray300};
  }

  &:enabled {
    &:hover {
      border: 0.1rem solid ${COLORS.purple800};
    }

    &:active {
      border: 0.1rem solid ${COLORS.purple800};
    }

    &:focus {
      border: 0.1rem solid ${COLORS.purple900};
    }
  }
`;

export const Secondary40 = styled(Primary40)`
  color: ${COLORS.purple700};
  background-color: ${COLORS.white};

  &:disabled {
    background-color: ${COLORS.gray300};
    color: ${COLORS.white};
  }
  &:enabled {
    &:hover {
      background-color: ${COLORS.purple100};
    }

    &:active {
      background-color: ${COLORS.purple100};
    }

    &:focus {
      background-color: ${COLORS.white};
      border: 0.2rem solid ${COLORS.purple800};
    }
  }
`;

export const Outlined56 = styled.button`
  ${FONTS.font18_Bold}
  color : ${COLORS.gray900};
  text-align: center;
  padding: 1.4rem 1.6rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${COLORS.gray300};
  background-color: ${COLORS.white};

  &:disabled {
    background-color: ${COLORS.gray300};
    color: ${COLORS.white};
  }

  &:enabled {
    &:hover {
      background-color: ${COLORS.gray100};
    }

    &:active {
      background-color: ${COLORS.gray100};
    }

    &:focus {
      background-color: ${COLORS.white};
      border: 0.1rem solid ${COLORS.gray500};
    }
  }
`;

export const Outlined40 = styled(Outlined56)`
  ${FONTS.font16_Regular}
  color : ${COLORS.gray900};
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const Outlined36 = styled(Outlined40)`
  ${FONTS.font16_Regular}
  font-weight : 500;
  line-height: 2.4rem;
  padding: 0.6rem 1.6rem;
`;
