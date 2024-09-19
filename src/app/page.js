import React from "react";

export function sum (a, b) {
  return a + b;
}

const teamMembers = [
  { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
  { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
  { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
  { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
  { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
];


export const TeamMember = ({ member }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h2>{member.firstname} {member.lastname}</h2>
      <p>Position: {member.position}</p>
      <p>Alter: {member.age}</p>
      <p>Geschlecht: {member.gender === 'female' ? 'Weiblich' : 'Männlich'}</p>
    </div>
  )
}


const Page = () => {
  return (
    <div>
      <h1>Unser Team</h1>
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            member={member}
          />
        ))}
      </div>
    </div>
  )
}

export default Page;
