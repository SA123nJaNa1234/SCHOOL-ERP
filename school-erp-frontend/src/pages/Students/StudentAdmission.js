import React from 'react';

const StudentDetail = ({ student }) => {
    if (!student) {
        return <div>No student details available.</div>;
    }

    return (
        <div>
            <h1>{student.name}</h1>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Email: {student.email}</p>
            <p>Address: {student.address}</p>
        </div>
    );
};

export default StudentDetail;