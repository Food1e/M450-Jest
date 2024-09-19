import "@testing-library/jest-dom";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Page from './page';
import { sum } from './page';
import { TeamMember } from "./page";

const teamMembers = [
  { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
  { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
  { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
  { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
  { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
];

const mappedTeamMembers = teamMembers.map((member, index) => (
  <TeamMember
    key={index}
    member={member}
  />
))
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('renders correct heading', () => {
  render(<Page />);
  const heading = screen.getByText("Unser Team");
  expect(heading).toBeInTheDocument();
});

test('renders mapped TeamMembers', () => {
  render(<Page />);
  const map = screen.mappedTeamMembers;
  expect(map).toBe();
});