import post from './post';

export default function* rootSaga() {
  yield [
    post()
  ];
};