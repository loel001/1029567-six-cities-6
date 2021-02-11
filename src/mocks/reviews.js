const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }, {
    comment: `Bad.`,
    date: `2020-04-08T14:12:56.569Z`,
    id: 4,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: `Stepan`
    }
  }, {
    comment: `Good.`,
    date: `2020-05-08T14:13:56.569Z`,
    id: 3,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: `Ann`
    }
  }
];
