import { ReactNode } from 'react';
import './Table.scss';


interface TableDescriptionProps {
  children: ReactNode;
}

interface TableHeaderProps {
  children: ReactNode;
}

interface TableProps {
  children: ReactNode;
}

interface TableRowProps {
  children: ReactNode;
}

function TableRow ({ children }: TableRowProps) {
  return (
    <tr className='table-row'>
      { children }
    </tr>
  )
}

function TableDescription ({ children }: TableDescriptionProps) {
  return (
    <td className='table-description'>
      { children }
    </td>
  )
}

function TableHeader ({ children }: TableHeaderProps) {
  return (
    <th className='table-header'>
      { children }
    </th>
  )
}

function TableBody ({ children }: TableProps) {
  return (
    <table className='table'>
      <tbody>
        { children }
      </tbody>
    </table>
  )
}

export const Table = {
  Body: TableBody,
  Row: TableRow,
  Header: TableHeader,
  Description: TableDescription
}
