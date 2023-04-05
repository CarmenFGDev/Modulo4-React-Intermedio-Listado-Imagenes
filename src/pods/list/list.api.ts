import { PictureInfoApi } from "./list.api-model";
  const listCats: PictureInfoApi[] = [
    { id: 'gato2',
      picUrl: "gato2.jpg",
      title: 'Axel',
      selected: true
    },
    { id: 'gato3',
      picUrl: "gato3.jpg",
      title: 'Bruno',
      selected: false
    },
    { id: 'gato4',
      picUrl: "gato4.jpg",
      title: 'Lana',
      selected: false
    },
    { id: 'gato5',
       picUrl: "gato5.jpg",
      title: 'Michi',
      selected: false
    },
    { id: 'gato6',
      picUrl: "gato6.jpg",
      title: 'Asha',
      selected: false
    },
    { id: 'gato7',
       picUrl: "gato7.jpg",
      title: 'Rex',
      selected: false
    }

   ]
  
   const listDogs: PictureInfoApi[] = [
    { id: 'perro2',
      picUrl: "perro2.jpg",
      title: 'perro2',
      selected: true
    },
    { id: 'perro3',
      picUrl: "perro3.jpg",
      title: 'perro3',
      selected: false
    },
    { id: 'perro4',
      picUrl: "perro4.jpg",
      title: 'perro4',
      selected: false
    },
    { id: 'perro5',
       picUrl: "perro5.jpg",
      title: 'perro5',
      selected: false
    },
    { id: 'perro6',
      picUrl: "perro6.jpg",
      title: 'perro6',
      selected: false
    },
    { id: 'perro7',
       picUrl: "perro7.jpg",
      title: 'perro7',
      selected: false
    }
   ]

  export interface IPets{
    cats: PictureInfoApi[];
    dogs: PictureInfoApi[];
  }   

  export const pets: IPets ={
    cats: listCats,
    dogs: listDogs
  }   

  export const getAllPets = (animal: string) : PictureInfoApi[] =>
    {
      return pets[animal];
    }