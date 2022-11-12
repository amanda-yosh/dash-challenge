import { ReactNode, InputHTMLAttributes } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './SearchBar.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

function Input (props: InputProps) {
  return (
    <input className='input' { ...props } />
  )
}

interface InputBoxProps {
  children: ReactNode;
}

function InputBox ({children}: InputBoxProps) {
  return (
    <div className='inputBox'>
      {children}
    </div>
  );
}

function SearchBar () {
  function report() {
    alert('Busca realizada!')
  }

  return (
    <label className='search' htmlFor="search">
      <InputBox>
        <BiSearchAlt />
        <Input name="search" id="search" type="text" placeholder={'Buscar'} />
        <button className='search__report' type='button' onClick={report}>Reportar</button>
      </InputBox>
    </label>
  );
}

export default SearchBar;
