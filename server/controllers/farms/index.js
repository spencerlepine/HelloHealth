const axios = require('axios');
const config = require('../../config/config');

const allFarms = [
  {
    id: 11,
    name: 'Marcus Degnen',
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profile_image:
      'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    farm_rating: 4,
  },
  {
    id: 1,
    name: 'Hermina Baguley',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    profile_image:
      'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    farm_rating: 5,
  },
  {
    id: 2,
    name: 'Demetria Geldard',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    profile_image:
      'https://images.unsplash.com/photo-1543051932-6ef9fecfbc80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=724&q=800',
    farm_rating: 5,
  },
  {
    id: 4,
    name: 'Cosetta Dorning',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    profile_image:
      'https://images.unsplash.com/photo-1506801842916-2927e4dcf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    farm_rating: 2,
  },
  {
    id: 5,
    name: 'Markos Durnford',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    profile_image:
      'https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    farm_rating: 3,
  },
  {
    id: 6,
    name: 'Maurita Bramontd',
    description:
      ',Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque',
    profile_image:
      'https://images.unsplash.com/photo-1503762687835-129cc7a277e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
    farm_rating: 4,
  },
  {
    id: 7,
    name: 'Cosetta Dorning',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    profile_image:
      'https://images.unsplash.com/photo-1506801842916-2927e4dcf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    farm_rating: 2,
  },
  {
    id: 8,
    name: 'Markos Durnford',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    profile_image:
      'https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    farm_rating: 3,
  },
  {
    id: 9,
    name: 'Maurita Bramontd',
    description:
      ',Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque',
    profile_image:
      'https://images.unsplash.com/photo-1503762687835-129cc7a277e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
    farm_rating: 4,
  },
];

module.exports = {
  getAllFarms: (req, res) => {
    // HERE
    res.status(200).json(allFarms);

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  getOneFarm: (req, res) => {
    if (req.params.id === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }
    const { id } = req.query;

    // HERE
    res.status(200).json({
      id: 11,
      user_id: 'mdegnen0',
      email: 'mdegnen0@admin.ch',
      name: 'Marcus Degnen',
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profile_image:
        'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      farm_rating: 4,
      video_link:
        'https://www.youtube.com/watch?v=0q0TXV8PyNY&ab_channel=ExploreFarmLife',
      products: [
        {
          id: 1,
          product_name: 'Shrimp - 16/20, Iqf, Shell On',
          product_description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          product_cost: 24,
          product_inventory: 9,
          product_image:
            'https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80',
          product_rating: 2,
          farm_id: 11,
          nutritionFacts: {
            serving_size: 5,
            calories: 355,
            caloriesFat: 166,
            fat: 321,
            fatPerc: 2,
            satFat: 69,
            satFatPerc: 17,
            transFat: 92,
            transFatPerc: 21,
            protein: 291,
            dietaryFiber: 172,
            dietaryFiberPerc: 4,
            carbohydrates: 161,
            carbohydratesPerc: 10,
            cholesterol: 36,
            cholesterolPerc: 14,
            sodium: 49,
            sodiumPerc: 13,
            sugars: 7,
            sugarsPerc: 7,
          },
        },
        {
          id: 4,
          product_name: 'Lid - Translucent, 3.5 And 6 Oz',
          product_description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          product_cost: 23.81,
          product_inventory: 4,
          product_image:
            'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
          product_rating: 4,
          farm_id: 11,
          nutritionFacts: {
            serving_size: 5,
            calories: 464,
            caloriesFat: 206,
            fat: 100,
            fatPerc: 2,
            satFat: 69,
            satFatPerc: 17,
            transFat: 92,
            transFatPerc: 21,
            protein: 291,
            dietaryFiber: 172,
            dietaryFiberPerc: 4,
            carbohydrates: 161,
            carbohydratesPerc: 10,
            cholesterol: 36,
            cholesterolPerc: 14,
            sodium: 49,
            sodiumPerc: 13,
            sugars: 7,
            sugarsPerc: 7,
          },
        },
      ],
    });

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  getFarmProducts: (req, res) => {
    const { userId } = req.body;

    // HERE
    res.status(201).json({
      products: [
        {
          id: 1,
          product_name: 'Shrimp - 16/20, Iqf, Shell On',
          product_description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          product_cost: 24,
          product_inventory: 9,
          product_image:
            'https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80',
          product_rating: 2,
          farm_id: 11,
        },
        {
          id: 4,
          product_name: 'Lid - Translucent, 3.5 And 6 Oz',
          product_description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
          product_cost: 23.81,
          product_inventory: 4,
          product_image:
            'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
          product_rating: 4,
          farm_id: 11,
        },
      ],
    });
    // res.status(400).send('Invalid endpoint parameters');
  },
};
