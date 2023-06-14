import React from 'react';
const Validations = {
  isEmail: val => {
     let reg = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
    
    return reg.test(val);
  },
  isValidPassword: val => {
    // let reg = /^[\w\-\s]{8,}$/;
    //  let reg=/^.{8,}$/
       let reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    return reg.test(val);
  },
  isValidName: val => {
    let reg = /[a-zA-Z][a-zA-Z ]+$/;
    return reg.test(val);
  },
  comparePassword: (val1, val2) => {
    return val1 === val2;
  },
  isValidUserName:(val)=>{
    let reg = /^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/;
    //  let reg = /^[a-zA-Z. ]+(?[_-])$/;
    // let reg = /^[a-zA-Z]+$/;
    return reg.test(val);
  },
  isValidPhone:(val)=>{
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return reg.test(val);
  }
};
export default Validations;