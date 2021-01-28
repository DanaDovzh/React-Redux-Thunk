import { createIdGenerator } from '../../helpers/functions';

const starId = createIdGenerator(1);

const initialState = {
  users: [
    {
      id: starId.next().value,
      name: 'Arkasha',
      username: '@arkasha',
      avatar: 'https://40.media.tumblr.com/08ee8030fcc6e5eb51f03943acf5a55c/tumblr_nshr7oMkJD1tzmepto2_1280.png',
    },
    {
      id: starId.next().value,
      name: 'George',
      username: '@george',
      avatar: 'https://img.huffingtonpost.com/asset/5a97132a1e000008087ad1bb.jpeg',
    },
    {
      id: starId.next().value,
      name: 'Carl',
      username: '@carl',
      avatar: 'https://i.pinimg.com/736x/7e/82/43/7e82435744d6114a29aa981b266d7c15.jpg',
    },
    {
      id: starId.next().value,
      name: 'Pavlo',
      username: '@pasgCactus',
      avatar: 'https://i.pinimg.com/236x/11/d3/13/11d3132042cd1da0bd4e222a46f6d989--eyewear-lwren-scott.jpg',
    },
    {
      id: starId.next().value,
      name: 'Pedro',
      username: '@fjdkjg',
      avatar: 'https://miro.medium.com/max/800/1*tirwCMwFhnBpQZ-qVS29FQ.jpeg',
    },
    {
      id: starId.next().value,
      name: 'Efistahij',
      username: '@yourFriend',
      avatar: 'https://i.pinimg.com/originals/e0/35/26/e0352679ee7c0d5b7202ba394f7f31ba.jpg',
    },
    {
      id: starId.next().value,
      name: 'Brothers Stepanku',
      username: '@dreeam',
      avatar: 'https://i.pinimg.com/originals/5f/57/86/5f5786c167b0fe3ab53be9665a39452d.jpg',
    },
    {
      id: starId.next().value,
      name: 'Hoan',
      username: '@hoan',
      avatar: 'https://i.pinimg.com/originals/7c/c9/01/7cc901eca7aa1d2bde67d52081c24f1e.jpg',
    }
  ],
};

export const actionsType = {
  addUser: 'ADD_USER',
};

export function rootReducerUser(state = initialState, action) {
  switch (action.type) {
    case actionsType.addUser: {
      const { name, username, avatar } = action.newUser;
      const newPostAdd = {
        id: starId.next().value,
        name: name,
        username: username,
        avatar: avatar
      }
      return {
        ...state, users: [...state.users, newPostAdd]
      }
    };
    default: {
      return state;
    }
  }
}