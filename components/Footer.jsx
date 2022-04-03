import React from 'react';
import { ChevronDown, Camera } from 'react-feather';
import styled from 'styled-components';
import theme from '../config/theme';
import Header from './Header';
import Link from 'next/link';
import Image from 'next/image';
import { tablet } from './utils/responsive';

const Container = styled.div`
  display: block;
`;
const LowerSide = styled.div`
  background-color: ${theme.colors.white};
  min-height: 42vh;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  ${tablet({
    display: 'none',
  })};
`;
const Bottom = styled.div`
  background-color: ${theme.colors.white};
  padding: 64px;
  display: flex;
  justify-content: space-between;
  & div:nth-child(2),
  & div:nth-child(3) {
    ${tablet({
      display: 'none',
    })};
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-shrink: none;
  padding: 0 24px;
  & a {
    margin: 4px 0;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
`;

const Footer = () => {
  return (
    <Container>
      <Header icon={<ChevronDown color={theme.colors.white} />} />
      <LowerSide>
        <Section>
          <h3>About Us</h3>
          <Link href="/">
            <a>Address</a>
          </Link>
          <Link href="/">
            <a>FAQ</a>
          </Link>

          <h3>Contact Us</h3>
          <Link href="/">
            <a>Website</a>
          </Link>
          <Link href="/">
            <a>Phone</a>
          </Link>
          <br />
          <Social>
            <div>
              <Image
                src={'/social/instagram.png'}
                width={24}
                height={24}
                alt={'social'}
              />
            </div>
            <div>
              <Image
                src={'/social/facebook.png'}
                width={24}
                height={24}
                alt={'social'}
              />
            </div>
            <div>
              <Image
                src={'/social/tg.png'}
                width={24}
                height={24}
                alt={'social'}
              />
            </div>
            <div>
              <Image
                src={'/social/youtube.png'}
                width={24}
                height={24}
                alt={'social'}
              />
            </div>
          </Social>
        </Section>
        <Section>
          <h2>Our Partners</h2>
          <div>
            <Image
              src={'/logo/cam-logo.png'}
              width={240}
              height={33}
              alt={'social'}
            />
          </div>

          <div>
            <Image
              src={'/logo/worldlearn.png'}
              width={261}
              height={71}
              alt={'social'}
            />
          </div>
        </Section>
        <Section>
          <div>
            <Image
              src={'/logo/ntu.png'}
              width={94}
              height={106}
              alt={'social'}
            />
          </div>
          <div>
            <Image
              src={'/logo/unesco.png'}
              width={240}
              height={65}
              alt={'social'}
            />
          </div>
        </Section>
        <Section>
          <div>
            <Image
              src={'/logo/portsmouth.png'}
              width={226}
              height={105}
              alt={'social'}
            />
          </div>
        </Section>
        <Section>
          <div>
            <Image
              src={'/logo/educluster.png'}
              width={240}
              height={105}
              alt={'social'}
            />
          </div>
        </Section>
      </LowerSide>
      <Bottom>
        <Section>© Все права защищены 2019 - 2022</Section>
        <Section style={{ width: '820px' }}>
          <div>
            <Image
              src={'/logo/uzinfocom.png'}
              width={112}
              height={12}
              alt={'social'}
            />
          </div>
        </Section>
        <Section style={{ flexDirection: 'row', width: '420px' }}>
          <div>Site visitors:</div>
          <div>Total for today:</div>
          <div>Real time:</div>
        </Section>
      </Bottom>
    </Container>
  );
};

export default Footer;
