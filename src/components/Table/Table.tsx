import { ReactNode } from 'react';
import './Table.scss';


interface TableDescriptionProps {
  children: ReactNode;
  extraClass?: string;
}

interface TableHeaderProps {
  children: ReactNode;
}

interface TableBodyProps {
  children: ReactNode;
}

interface TableRowProps {
  children: ReactNode;
}

interface TableWrapperProps {
  captionTitle?: string;
  children: ReactNode;
}

function TableRow ({ children }: TableRowProps) : JSX.Element {
  return (
    <tr className='table-row' onClick={() => (console.log('OLOW'))}>
      { children }
    </tr>
  )
}

function TableDescription ({ children, extraClass = '' }: TableDescriptionProps) {
  return (
    <td className={'table-description ' + extraClass}>
      { children }
    </td>
  )
}

function TableHeader ({ children }: TableHeaderProps) {
  return (
    <thead className='table-header'>
      { children }
    </thead>
  )
}

function TableBody ({ children }: TableBodyProps) {
  return (
    <tbody>
      { children }
    </tbody>
  )
}

function TableWrapper ({ children, captionTitle }: TableWrapperProps) {
  return (
    <table className='table-container'>
      <caption className='table-container--caption'>{captionTitle}</caption>
      { children }
    </table>
  )
}

// TableFoot

export const Table = {
  Table: TableWrapper,
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
  Description: TableDescription
}
