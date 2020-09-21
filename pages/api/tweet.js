function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default (req, res) => {
  const dates = ['2019-10-22', '2015-03-24', '2017-09-20'];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      name: 'Ekin Abalıoğlu',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Batuhan Öz',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Test',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Buğrahan Boztepe',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Beren Saat',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Salih Kaan',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'JS Turkey',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Made With Next',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Armağan',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Discord',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    },
    {
      name: 'Api Test',
      photo: 'https://source.unsplash.com/random/300x300',
      message: 'Hello World',
      date: new Date(dates[getRandomInt(2)]),
      rt: 3,
      answer: 5
    }
  ]);
};
