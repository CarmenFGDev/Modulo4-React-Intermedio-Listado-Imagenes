import { PetsApi, PictureInfoApi } from "./list.api-model";
 const host ='http://localhost:8080'; 
 const listCats: PictureInfoApi[] = [
    { id: 'gato2',
      picUrl: `${host}/cats/gato2.jpg`,
      title: 'Axel',
      selected: true,
      age:'4 months'
    },
    { id: 'gato3',
      picUrl: `${host}/cats/gato3.jpg`,
      title: 'Bruno',
      selected: false,
       age:'5 months'
    },
    { id: 'gato4',
      picUrl: `${host}/cats/gato4.jpg`,
      title: 'Lana',
      selected: true,
      age:'6 months'
    },
    { id: 'gato5',
      picUrl: `${host}/cats/gato5.jpg`,
      title: 'Michi',
      selected: false,
      age:'4 months'
    },
    { id: 'gato6',
      picUrl: `${host}/cats/gato6.jpg`,
      title: 'Asha',
      selected: true,
      age:'7 months'
    },
    { id: 'gato7',
       picUrl: `${host}/cats/gato7.jpg`,
      title: 'Rex',
      selected: false,
       age:'4 months'
    }

   ]
  
   const listDogs: PictureInfoApi[] = [
    { id: 'perro2',
      picUrl: `${host}/dogs/perro2.jpg`,
      title: 'Laika',
      selected: true,
      age: '8 months'
    },
    { id: 'perro3',
      picUrl: `${host}/dogs/perro3.jpg`,
      title: 'Tom',
      selected: false,
      age: '8 months'
    },
    { id: 'perro4',
      picUrl: `${host}/dogs/perro4.jpg`,
      title: 'Luna',
      selected: true,
      age: '5 months'
    },
    { id: 'perro5',
       picUrl: `${host}/dogs/perro5.jpg`,
      title: 'Nala',
      selected: false,
       age: '6 months'
    },
    { id: 'perro6',
      picUrl: `${host}/dogs/perro6.jpg`,
      title: 'Sandy',
      selected: false,
       age: '7 months'
    },
    { id: 'perro7',
       picUrl: `${host}/dogs/perro7.jpg`,
      title: 'Brisa',
      selected: true,
       age: '8 months'
    }
   ]

   export const pets: PetsApi ={
    cats: listCats,
    dogs: listDogs
  }   

  export const getAllPets = () : PetsApi =>
    {
      return pets;
    }