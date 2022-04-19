

export type myValidation = {
    clause: string;
    valid: boolean;
  }[];
  
export const validateEmail = (email: string): myValidation => {
    const isNotEmpty = email !== ""
    return [
      {
        clause: "email must be a valid email address",
        valid: isNotEmpty,
      },
    ];
  };


  export const anyError = (v: myValidation): boolean => {
    for (var i = 0; i< v.length; i++) {
      if (v[i].valid === false) return true
    }
    return false
  }

export const validatefirstName = (firstName: string): myValidation  =>{
    var isLongEnough = firstName.length > 5 
    return [{
      clause: "First Name must be at least 6 characters long",
      valid: isLongEnough
    }]
  }
export  const validateLastName = (lastName: string): myValidation  =>{
    var isLongEnough = lastName.length > 5 
    return [{
      clause: "Last Name must be at least 6 characters long",
      valid: isLongEnough
    }]
  }
 export const validatePhonenum = (phoneNum: string): myValidation  =>{
    var isLongEnough = phoneNum.length > 8
    return [{
      clause: "Phone Number must be at least 6 characters long",
      valid: isLongEnough
    }]
  }
 export const validateAddr = (addr: string): myValidation  =>{
    var isLongEnough = addr.length > 15
    return [{
      clause: "Address must be at least 15 characters long",
      valid: isLongEnough
    }]
  }