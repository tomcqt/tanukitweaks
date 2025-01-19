import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { ReactComponent as GroupsIcon } from '@material-design-icons/svg/outlined/group.svg';
import { ReactComponent as PersonIcon } from '@material-design-icons/svg/outlined/person.svg';
import { ReactComponent as SmartToyIcon } from '@material-design-icons/svg/outlined/smart_toy.svg';
import { ReactComponent as SchoolIcon } from '@material-design-icons/svg/round/school.svg'


export const Badge = ({ icon, label, domain }) => (
  <div className='account-role'>
    {icon}
    {label}
    {domain && <span className='account-role__domain'>{domain}</span>}
  </div>
);

Badge.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node,
  domain: PropTypes.node,
};

Badge.defaultProps = {
  icon: <PersonIcon />,
};

export const GroupBadge = () => (
  <Badge icon={<GroupsIcon />} label={<FormattedMessage id='account.badges.group' defaultMessage='Group' />} />
);

export const AutomatedBadge = () => (
  <Badge icon={<SmartToyIcon />} label={<FormattedMessage id='account.badges.bot' defaultMessage='Automated' />} />
);

// Grade Badges (EPIC!)

export const FifthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.fifth' defaultMessage='5th Grade' />} />
);

export const SixthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.sixth' defaultMessage='6th Grade' />} />
);

export const SeventhGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.seventh' defaultMessage='7th Grade' />} />
);

export const EighthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.eighth' defaultMessage='8th Grade' />} />
);

export const NinthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.ninth' defaultMessage='Freshman' />} />
);

export const TenthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.tenth' defaultMessage='Sophomore' />} />
);

export const EleventhGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.eleventh' defaultMessage='Junior' />} />
);

export const TwelthGradeBadge = () => (
  <Badge icon={<SchoolIcon />} label={<FormattedMessage id='account.badges.grades.twelth' defaultMessage='Senior' />} />
);