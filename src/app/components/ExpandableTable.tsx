import classNames from 'classnames';
import { useState } from 'react';
import { formatPhoneNumber } from './formatPhoneNumber.util';

import type { Advocate } from '@/types/advocate';

const ExpandableTable = ({
  advocates,
}: {
  advocates: Advocate[];
}): JSX.Element => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleExpandedRow = (id: number | undefined): void => {
    if (!id) return;
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <table className={classNames('table', 'table-accordion')}>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>City</th>
          <th>Degree</th>
          <th>Specialties</th>
          <th>Years of Experience</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => {
          const isExpanded = expandedRows.has(advocate.id || 0);
          const isExpandable = advocate.specialties.length > 2;
          const displayedSpecialties =
            isExpanded || !isExpandable
              ? advocate.specialties
              : advocate.specialties.slice(0, 2);

          return (
            <>
              <tr
                key={`advocate-${advocate.id}`}
                className={classNames('expandable', isExpanded && 'expanded')}
              >
                <td>
                  {isExpandable && (
                    <button
                      className={classNames(
                        'toggle-row',
                        'toggle-row-arrow',
                        isExpanded && 'expanded'
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpandedRow(advocate.id);
                      }}
                    >
                      ▼
                    </button>
                  )}
                </td>
                <td>
                  {advocate.firstName} {advocate.lastName}
                </td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td
                  className={classNames(
                    'expandable-cell',
                    'relative',
                    'specialtiesColumn'
                  )}
                >
                  {displayedSpecialties.map((s, specialtyIndex) => (
                    <div key={`specialty-${advocate.id}-${specialtyIndex}`}>
                      {s}
                    </div>
                  ))}
                  {isExpandable && (
                    <button
                      className={classNames('toggle-row', 'toggle-row-link')}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpandedRow(advocate.id);
                      }}
                    >
                      {isExpanded ? '...Less' : '...More'}
                    </button>
                  )}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{formatPhoneNumber(advocate.phoneNumber)}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExpandableTable;
