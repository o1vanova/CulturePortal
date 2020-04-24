import { createContext } from 'react';
import Author from '../model/author';
import Member from '../model/member';
import data from './mock.json';

interface ContextProps {
  architects: Author[];
  members: Member[];
}

const StoreContext = createContext({
  architects: data.architects,
  members: data.members,
} as ContextProps);

export default StoreContext;
