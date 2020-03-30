import React from 'react';

const List = (props) => {

    if (props.employees !== null) {
        const emps = props.employees.map(
            emp => {
                return (
                    <div className="col-sm-4" key={emp.id}>
                        <div className="card" style={{ width: 18 + "rem" }} >
                            <div className="card-body">
                                <h5 className="card-title">{emp.employee_name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">#{emp.id}</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Age: {emp.employee_age}</li>
                                <li className="list-group-item">Salary: {emp.employee_salary}</li>
                            </ul>
                        </div>
                        <br></br>
                    </div>
                )
            }
        );
        return (
            <div className="row">
                {emps}
            </div>);
    }
    return <p onClick={props.onClickFunc}>{props.status}</p>
}


export default List;