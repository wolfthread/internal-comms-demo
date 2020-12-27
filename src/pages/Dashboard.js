import React, { Component } from 'react';
import SubMenu from '../components/SubMenu';
import ChartsContainer from '../components/ChartsContainer';
import MetricsChart from '../components/charts/MetricsChart';
import HistoryBarChart from '../components/charts/HistoryBarChart';
import GrowthAreaChart from '../components/charts/GrowthAreaChart';
import StatisticsPercentAreaChart from '../components/charts/StatisticsPercentAreaChart';
// Statistics imports
// growth stats
import { growthTickets } from '../statistics/growthArea/growthTickets';
// history stats
import { ticketsByMonth } from '../statistics/historyBar/historyBarTicketsByMonth';
import { ticketsByYear } from '../statistics/historyBar/historyBarTicketsByYear';
// metrics stats
import { ticketsByUser } from '../statistics/metrics/metricsTicketsByUser';
import { ticketsByDepartment } from '../statistics/metrics/metricsTicketsByDepartment';
// percent stats
import { ticketsByStatusDptCalc } from '../utils/statistics/ticketsByStatusDptCalc';
import { ticketsByStatusUsersCalc } from '../utils/statistics/ticketsByStatusUsersCalc';

import { connect } from 'react-redux';
import { generateColors } from '../utils/colors/generateColors';
import { uuid } from 'uuidv4';

class Dashboard extends Component {
  state = {
    menuItems: [
      {
        icon: 'table',
        title: 'Overall',
      },
      {
        icon: 'chart pie',
        title: 'Metrics',
      },
      {
        icon: 'chart bar',
        title: 'History',
      },
      {
        icon: 'chart line',
        title: 'Growth',
      },
      {
        icon: 'percent',
        title: 'Statistics',
      },
    ],
    overall: { show: true, charts: [] },
    metrics: { show: false, charts: [] },
    history: { show: false, charts: [] },
    growth: { show: false, charts: [] },
    statistics: { show: false, charts: [] },
  };

  populateCharts = () => {
    this.setState({
      ...this.state,
      metrics: {
        ...this.state.metrics,
        charts: [
          {
            title: 'Tickets By User',
            chart: (
              <MetricsChart
                data={ticketsByUser(this.props.users, this.props.tickets).data}
                COLORS={generateColors(['blue', 'cyan'])}
                RADIAN={Math.PI / 180}
                width={400}
                height={400}
              />
            ),
          },
          {
            title: 'Tickets By Department',
            chart: (
              <MetricsChart
                data={
                  ticketsByDepartment(
                    this.props.departments,
                    this.props.tickets
                  ).data
                }
                COLORS={generateColors(['red'])}
                RADIAN={Math.PI / 180}
                width={400}
                height={400}
              />
            ),
          },
        ],
      },
      history: {
        ...this.state.history,
        charts: [
          {
            title: 'Tickets Created By Month',
            chart: (
              <HistoryBarChart
                data={ticketsByMonth(this.props.tickets, '2020')}
                width={500}
                height={300}
              />
            ),
          },
          {
            title: 'Tickets Created By Year',
            chart: (
              <HistoryBarChart
                data={ticketsByYear(this.props.tickets, '2020')}
                width={500}
                height={300}
              />
            ),
          },
        ],
      },
      growth: {
        ...this.state.growth,
        charts: [
          {
            title: 'Tickets Created Monthly',
            chart: (
              <GrowthAreaChart
                data={growthTickets(this.props.tickets, '2020', 'month')}
                yAxis={'Tickets Created'}
                width={500}
                height={300}
              />
            ),
          },
          {
            title: 'Tickets Created Yearly',
            chart: (
              <GrowthAreaChart
                data={growthTickets(this.props.tickets, '2020', 'year')}
                yAxis={'Tickets Created'}
                width={500}
                height={300}
              />
            ),
          },
        ],
      },
      statistics: {
        ...this.state.statistics,
        charts: [
          {
            title: 'Tickets By Status vs Departments',
            chart: (
              <StatisticsPercentAreaChart
                data={ticketsByStatusDptCalc(this.props.tickets)}
                width={500}
                height={300}
              />
            ),
          },
          {
            title: 'Tickets By Status vs Users',
            chart: (
              <StatisticsPercentAreaChart
                data={ticketsByStatusUsersCalc(this.props.tickets)}
                width={500}
                height={300}
              />
            ),
          },
        ],
      },
      overall: {
        ...this.state.overall,
        charts: [
          {
            title: 'Tickets Created By Month',
            chart: (
              <HistoryBarChart
                data={ticketsByMonth(this.props.tickets, '2020')}
                width={250}
                height={150}
              />
            ),
          },
          {
            title: 'Tickets Created By Year',
            chart: (
              <HistoryBarChart
                data={ticketsByYear(this.props.tickets, '2020')}
                width={250}
                height={150}
              />
            ),
          },
          {
            title: 'Tickets Created Monthly',
            chart: (
              <GrowthAreaChart
                data={growthTickets(this.props.tickets, '2020', 'month')}
                yAxis={'Tickets Created'}
                width={250}
                height={150}
              />
            ),
          },
          {
            title: 'Tickets Created Yearly',
            chart: (
              <GrowthAreaChart
                data={growthTickets(this.props.tickets, '2020', 'year')}
                yAxis={'Tickets Created'}
                width={250}
                height={150}
              />
            ),
          },
          {
            title: 'Tickets By Status vs Departments',
            chart: (
              <StatisticsPercentAreaChart
                data={ticketsByStatusDptCalc(this.props.tickets)}
                width={250}
                height={150}
              />
            ),
          },
          {
            title: 'Tickets By Status vs Users',
            chart: (
              <StatisticsPercentAreaChart
                data={ticketsByStatusUsersCalc(this.props.tickets)}
                width={250}
                height={150}
              />
            ),
          },
        ],
      },
    });
  };

  componentDidMount() {
    this.populateCharts();
  }

  toggleShowCharts = (category) => {
    if (category === 'overall') {
      this.setState({
        overall: { ...this.state.overall, show: true },
        metrics: { ...this.state.metrics, show: false },
        history: { ...this.state.history, show: false },
        growth: { ...this.state.growth, show: false },
        statistics: {
          ...this.state.statistics,
          show: false,
        },
      });
    } else {
      this.setState({
        ...this.state,
        overall: { ...this.state.overall, show: false },
        [category]: {
          ...this.state[category],
          show: !this.state[category].show,
        },
      });
    }
  };

  dashboardMenuItemRender = (icon, title) => {
    const loweredCaseTitle = title.toLowerCase();
    return {
      icon,
      title,
      action: () => {
        this.toggleShowCharts(loweredCaseTitle);
      },
      className: `ui item button ${
        this.state[loweredCaseTitle].show ? 'active' : ''
      }`,
    };
  };

  dashboardMenu = () => {
    let allMenu = [];
    for (let menuItem of this.state.menuItems) {
      allMenu.push(this.dashboardMenuItemRender(menuItem.icon, menuItem.title));
    }
    return allMenu;
  };

  renderCharts = () => {
    const allCharts = [];
    for (let item of this.state.menuItems) {
      const chart = item.title.toLocaleLowerCase();
      if (this.state[chart].show) {
        allCharts.push(
          <ChartsContainer charts={this.state[chart].charts} key={uuid()} />
        );
      }
    }
    return allCharts;
  };

  render() {
    return (
      <>
        <SubMenu menuItems={this.dashboardMenu()} visible={true} />
        {this.renderCharts()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    department: state.auth.department,
    user: state.auth.user,
    tickets: state.tickets.tickets,
    users: state.users.users,
    departments: state.departments.departments,
  };
};

export default connect(mapStateToProps)(Dashboard);
