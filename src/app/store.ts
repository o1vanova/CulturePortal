import { createContext } from 'react';
import Author from '../model/author';
import Member from '../model/member';

interface ContextProps {
  architects: Author[];
  members: Member[];
}

const StoreContext = createContext({
  architects: [
    {
      id: 1,
      name: 'data.architect1.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect1.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 2,
      name: 'data.architect2.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect2.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 3,
      name: 'data.architect3.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect3.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 4,
      name: 'data.architect4.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect4.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 5,
      name: 'data.architect5.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect5.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 6,
      name: 'data.architect6.name',
      timeLife: '',
      imgSrc: './images/arch.jpg',
      description: 'data.architect6.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
    {
      id: 7,
      name: 'data.architect7.name',
      timeLife: '1930 - 2010',
      imgSrc: './images/arch.jpg',
      description: 'data.architect7.description',
      works: [
        {
          date: '',
          description: '',
        },
      ],
    },
  ],
  members: [],
} as ContextProps);

export default StoreContext;
