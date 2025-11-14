'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import type { Advocate } from '@/types/advocate';
import ExpandableTable from './components/ExpandableTable';

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log('fetching advocates...');
    fetch('/api/advocates')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      })
      .catch((error) => {
        console.error('Failed to fetch advocates:', error);
        // TODO: Add user-facing error state
      });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchTermElement = document.getElementById('search-term');
    if (searchTermElement) {
      searchTermElement.innerHTML = searchTerm;
    }

    console.log('filtering advocates...');
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.some((s) =>
          s.toLowerCase().includes(searchTerm)
        ) ||
        advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main className="flex-container m-6">
      <div className="w-full flex-col">
        <h1 className="text-heading-1">Solace Advocates</h1>

        <div className="flex-row">
          <div className="flex-col">
            <p>
              Searching for: <span id="search-term"></span>
            </p>
            <div className="flex-row">
              <input
                className="input-text"
                placeholder="Search"
                onChange={onChange}
              />
              <button className="btn-primary" onClick={onClick}>
                Reset Search
              </button>
            </div>
          </div>
        </div>

        <ExpandableTable advocates={filteredAdvocates} />
      </div>
    </main>
  );
}
