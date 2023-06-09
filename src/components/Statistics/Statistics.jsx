import PropTypes from "prop-types";
import { StatisticsWrapper, Title, StatList, Item, Label, Percentage } from './Statistics.styled';



export const Statistics = ({title, stats}) => {
    return (
    <StatisticsWrapper>
        {title && <Title>{title}</Title>}
        <StatList>
        {stats.map(({id, label, percentage}) => {
            return (<Item key={id} length={stats.length}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
            </Item>);
          })
          }
        </StatList>
    </StatisticsWrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};