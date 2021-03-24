import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
    const [state, setState] = useState({
        name: null,
        email: null,
        phone: null,
        gender: null,
        city: null,
        check: false,
        list: [],
    });

    const onChangeHendler = (value, name) => {
        const cloneState = { ...state };
        cloneState[name] = value;
        setState(cloneState);
        console.log(value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const cloneState = { ...state };
        const data = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            gender: state.gender,
            city: state.city,
            check: state.check,
        };
        cloneState.list.push(data);
        setState(cloneState);
        const cloneClean={...state}
        cloneClean.name='';
        cloneClean.email='';
        cloneClean.phone='';
        cloneClean.gender="";
        cloneClean.city='';
        cloneClean.check=false;
        setState(cloneClean)
    };

    const onClickHendler=(id)=>{
        const cloneState = { ...state };
        cloneState.list.splice(id,1);
        setState(cloneState);
    }

    console.log(`state`, state);

    return (
        <div className="">
            <div className="row mt-3">
                <div className="col-3">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={state.name}
                                onChange={(e) => onChangeHendler(e.target.value, "name")}
                                placeholder="Enter name"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={state.email}
                                onChange={(e) => onChangeHendler(e.target.value, "email")}
                                placeholder="Enter email"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={state.phone}
                                onChange={(e) => onChangeHendler(e.target.value, "phone")}
                                placeholder="Phone Number"
                            ></input>
                        </div>

                        <div className="form-group"></div>
                        <div className="form-row">
                            <div
                                className="form-check form-check-inline"
                                onChange={(e) => onChangeHendler(e.target.value, "gender")}
                            >
                                <label className="form-label ">Gender</label>
                                <input
                                    className="form-check-input ml-3"
                                    type="radio"
                                    name="gender"
                                    value={state.gender}
                                    
                                ></input>
                                <label className="form-check-label">female</label>
                                <input
                                    className="form-check-input ml-3"
                                    type="radio"
                                    name="gender"
                                    value={state.gender}
                                ></input>
                                <label className="form-check-label">male</label>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label className="">City</label>
                                <select
                                    value={state.city}
                                    className="form-control"
                                    onChange={(e) => onChangeHendler(e.target.value, "city")}
                                >
                                    <option>Choose...</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Nilphamari">Nilphamari</option>
                                </select>
                            </div>
                        </div>
                        <div
                            className="form-check"

                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={state.check}
                                name="check"
                                checked={state.check}
                                
                                onChange={(e) => onChangeHendler(e.target.checked, "check")}
                            ></input>
                            <label className="form-check-label">Check me</label>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">
                            Submit
            </button>
                    </form>
                </div>
                <div className="col-9">
                    <div className="">
                        <input type="serach" placeholder="Search"  className="float-right m-3"></input>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            
                            <tr>
                                
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">Status</th>
                                <th scope="col">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.list.map((data, id) => (
                                    <tr>
                                        <td>{id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.city}</td>
                                        <td>{data.check?<p>Yes</p>:<p>No</p>}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">Edit</button>
                                            <button onClick={()=>onClickHendler(id)} className="btn btn-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}
