function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default (req, res) => {
  const dates = ['2019-10-22', '2015-03-24', '2017-09-20'];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    },
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    },
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    },
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    },
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    },
    {
      created_at: new Date(dates[getRandomInt(2)]),
      retweet_count: 5,
      favorite_count: 10,
      retweeted: false,
      favorited: true,
      text: 'Hello World',
      user: {
        name: 'Ekin Abalıoğlu',
        profile_image_url_https: 'https://source.unsplash.com/random/300x300',
        screen_name: 'ekinndev'
      }
    }
  ]);
};
