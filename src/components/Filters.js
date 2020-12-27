import React from 'react';
import Dropdown from './custom-dropdown/dropdown/Dropdown';
import SearchBar from '../components/SearchBar';

function Filters({
  role,
  style,
  departments,
  priorities,
  statuses,
  handleFilter,
  filterDepartment,
  filterPriority,
  filterStatus,
  resetFilters,
  filterAlphaUp,
  filterAlphaDown,
  handleOnSearch,
  searchTerms,
}) {
  return (
    <>
      {role === 'Administrator' ? (
        <div className="column" style={style}>
          <Dropdown
            customBtnStyle={{
              color: 'white',
              backgroundColor: '#a5673f',
              borderColor: '#a5673f',
              fontSize: '0.8rem',
            }}
            customIconStyle={{
              borderTop: '4px solid white',
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
            }}
            customdropdownListStyle={{
              position: 'absolute',
              zIndex: '1',
              color: 'black',
              backgroundColor: 'white',
              textAlign: 'left',
            }}
            customLiStyle={{
              padding: '5px',
            }}
            placeholder={'Filter By Department'}
            choices={
              departments
                ? departments
                    .map((choice) => choice.name)
                    .concat('All Departments')
                : null
            }
            name="Department"
            handleChoice={(choice) => handleFilter('department', choice)}
          />
        </div>
      ) : null}
      <div className="column" style={style}>
        <Dropdown
          customBtnStyle={{
            color: 'white',
            backgroundColor: '#db2828',
            borderColor: '#db2828',
            fontSize: '0.8rem',
          }}
          customIconStyle={{
            borderTop: '4px solid white',
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
          }}
          customdropdownListStyle={{
            position: 'absolute',
            zIndex: '1',
            color: 'black',
            backgroundColor: 'white',
            textAlign: 'left',
          }}
          customLiStyle={{
            padding: '5px',
          }}
          placeholder={'Filter By Priority'}
          choices={
            priorities
              ? priorities.map((choice) => choice).concat('All Priorities')
              : null
          }
          name="Priority"
          handleChoice={(choice) => handleFilter('priority', choice)}
        />
      </div>
      <div className="column" style={style}>
        <Dropdown
          customBtnStyle={{
            color: 'white',
            backgroundColor: '#21BA45',
            borderColor: '#21BA45',
            fontSize: '0.8rem',
          }}
          customIconStyle={{
            borderTop: '4px solid white',
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
          }}
          customdropdownListStyle={{
            position: 'absolute',
            zIndex: '1',
            color: 'black',
            backgroundColor: 'white',
            textAlign: 'left',
          }}
          customLiStyle={{
            padding: '5px',
          }}
          placeholder={'Filter By Status'}
          choices={
            statuses
              ? statuses.map((choice) => choice).concat('All Statuses')
              : null
          }
          name="Status"
          handleChoice={(choice) => handleFilter('status', choice)}
        />
      </div>
      <div className="column" style={style}>
        <div className="ui icon buttons">
          <button className="ui button">
            <i className="sort alphabet up icon" onClick={filterAlphaUp}></i>
          </button>
          <button className="ui button">
            <i
              className="sort alphabet down icon"
              onClick={filterAlphaDown}
            ></i>
          </button>
          <button className="ui button" onClick={resetFilters}>
            <i className="sync icon"></i>
          </button>
        </div>
      </div>
      <div className="column" style={style}>
        <SearchBar
          placeholder="Search"
          icon={'search icon'}
          style={style}
          handleOnSearch={handleOnSearch}
          searchTerms={searchTerms}
        />
      </div>
    </>
  );
}

export default Filters;
