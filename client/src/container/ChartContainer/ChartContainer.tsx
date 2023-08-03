import styled from 'styled-components';
import SimpleLineChart from '../../components/lineCharts/SimpleLineChart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useGroupsValue } from '../../hooks/useGroupsValue';
import { Metric } from '../../utils/@types';
import EmptyResult from '../../components/lineCharts/EmptyResult';

export default function ChartContainer() {
  const { groupsValue } = useGroupsValue();

  const chartData = useSelector((state: RootState) => {
    if (!state.shopping.responseData?.results) {
      return [];
    }

    const m: Map<keyof Metric, Metric> = new Map();
    for (const { period, ratio, group } of state.shopping.responseData
      .results[0].data) {
      if (m.has(period)) {
        const existingData = m.get(period);
        existingData[group] = ratio;
        m.set(period, existingData);
      } else {
        m.set(period, { [group]: ratio });
      }
    }

    // Map 객체를 배열로 변환
    const chartData = Array.from(m, ([period, data]) => ({ period, ...data }));
    return chartData;
  });

  console.log(chartData);
  console.log(groupsValue);

  return (
    <StyledChartContainer>
      {chartData.length ? (
        <SimpleLineChart
          metrics={chartData}
          groups={groupsValue}
          groupName="대"
          xAxisDataKey="period"
        />
      ) : (
        <EmptyResult />
      )}
    </StyledChartContainer>
  );
}

export const StyledChartContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;
