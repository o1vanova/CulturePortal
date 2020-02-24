import React, { useState } from 'react';
//import { InputGroup, FormControl } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';
//import lang from '../../constants/languages';
//import Author from '../../model/author';
// interface AuthorInfo {
//   arrAuthor: Author;
// }
// interface AuthorInfo {
//   id: number;
//   imgSrc: string;
//   title: string;
//   description: string;
// } 
// const removeTodo = id => {
//   SetTodos(todos.filter(todo => {
//    return todo.id !== id;
// }))
// };
// const searchAuthor = (arrAuthor: any) => {
//   arrAuthor.map(item => {
//     console.log(item.id);
//   })
// }
const Search = ({sr}):JSX.Element => {
  const [ search, setSearch ] = useState('');
  return (
    <input
    type="text" 
    value={search}
    onChange={ event => {
      setSearch(event.target.value);
      sr(event.target.value);
      }
    }
    />
    );
 };


export default Search;
