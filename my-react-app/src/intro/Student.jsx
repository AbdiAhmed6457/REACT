import PropTypes from 'prop-types';

function Student({name = "Guest", age = 0 , isStudent = true}) {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "yes" : "No"}</p>
    </div>
  );
}



export default Student;
