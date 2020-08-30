// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import "./style.css";
import axios from "axios";

// importing moment 
import moment from 'moment';


console.log(moment().format())


const Table = () => {

  //set up a state for rows and columns 
  const [rows, setRow] = useState([]);
  const [columns, setColumns] = useState([
    {
      label: 'picture',
      field: 'picture',
      sort: 'asc',
      width: 100
    },
    {
      label: 'first',
      field: 'first',
      sort: 'asc',
      width: 150
    },
    {
      label: 'last',
      field: 'last',
      sort: 'asc',
      width: 150
    },
    {
      label: 'dob',
      field: 'dob',
      sort: 'asc',
      width: 150
    },
    {
      label: 'email',
      field: 'email',
      sort: 'asc',
      width: 200
    },
    {
      label: 'phone',
      field: 'phone',
      sort: 'asc',
      width: 150
    }
  ]);
 

  // this will run everytime the page is loaded 
  useEffect(() => {
    async function getUsers() {
      // use this API to get random users 
      let res = await axios.get('https://randomuser.me/api/?results=50&nat=us')
      console.log(res.data.results); 
      let people = res.data.results.map(person => {
        return {
          first: person.name.first,
          last: person.name.last,
          dob: person.dob.date, // add moment.js to this 
          email: person.email,
          phone: person.phone,
          picture: <img src={person.picture.thumbnail} alt={person.name.first} />
        }
      });
      setRow(people); 
    }
    getUsers()
  }, [])


  return (
    <MDBDataTable
      // responsive
      className='table'
      striped
      bordered
      small
      data={{columns,rows}}
    />
  );
}

export default Table;