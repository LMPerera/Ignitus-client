/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import { Data } from '../constants';
import { withErrorBoundary } from '../../ignitus-Internals';
import * as S from '../Styles';
import * as T from '../../ignitus-Helpers/emotion-Styles/shared';

const PureCoreTeam = ({ team }) => (
  <S.PureCoreTeam>
    <T.Title> Our Team </T.Title>
    <S.TeamContainer>{team}</S.TeamContainer>
  </S.PureCoreTeam>
);

const TeamItem = ({ item }) => {
  const [value, setValue] = React.useState(false);
  return (
    <S.TeamCard
      onMouseOver={() => setValue(true)}
      onMouseOut={() => setValue(false)}
    >
      <S.Section>
        <S.TeamItemImg src={item.img} alt={`avatar ${item.name}`} />
        <S.TeamItemTitle>{item.title}</S.TeamItemTitle>
        <T.Paragraph>{item.description}</T.Paragraph>
        <S.LinkWrapper toggle={value}>
          <T.Link href={item.linkedin} color="black">
            <i className="fa fa-linkedin-square" />
          </T.Link>
          <T.Link href={item.angellist} color="black">
            <i className="fa fa-angellist" />
          </T.Link>
        </S.LinkWrapper>
      </S.Section>
    </S.TeamCard>
  );
};

const CoreTeam = () => {
  const team = Data.map(item => <TeamItem item={item} />);
  return <PureCoreTeam team={team} />;
};

export default withErrorBoundary(CoreTeam);
