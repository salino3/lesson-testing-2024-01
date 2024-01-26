import React from 'react';

export const InputText: React.FC = () => {

    const [textValue, setTextValue] = React.useState<string>('');

const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event: React.ChangeEvent<HTMLInputElement>) => {

    setTextValue(event.target.value);
}


  return (
    <div>
        <input type="text"
         value={textValue}
         onChange={handleChange}
         />
    </div>
  )
}
