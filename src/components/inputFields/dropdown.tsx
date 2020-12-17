import React from 'react';

type Props = {
  valueLevel: string
  selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ valueLevel, selectHandler }: Props) => {

  return (
    <div>
      <select
        name="expr"
        id="expr"
        onChange={(e) => selectHandler(e)}
        value={valueLevel}
      >
        <option value="Chose">Chose</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};