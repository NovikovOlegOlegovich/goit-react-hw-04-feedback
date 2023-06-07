import PropTypes from 'prop-types';
import { SectionWrapper, Title, Wrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Wrapper>{children} </Wrapper>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
