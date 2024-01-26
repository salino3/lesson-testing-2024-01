import React from "react";


interface Props {
  [key: string]: any;
};

export function titleCase(text: string) {
  
      if(typeof text !== 'string'){
        return alert('Error! the value must be a string');
      };

    const arr = text.split(' ');

    let finalValue: string = "";
    const result: string[] = [];
    for ( let item of arr) {
        if(item){
      if (item.startsWith("¿")) {

     result.push("¿" + item.charAt(1).toUpperCase() + item.slice(2).toLowerCase());
      }else {
       result.push(item[0].toUpperCase() + item.substring(1).toLowerCase());
       finalValue = result.join(' ')
      };
     } else {
       return "";
     };
    }

return finalValue;
}

export const ProfileCard: React.FC<Props> = ({
  name,
  surname,
  age,
  description,
}) => {
titleCase('hola joe');

  return (
  
    <div>

    </div>
  );
};
