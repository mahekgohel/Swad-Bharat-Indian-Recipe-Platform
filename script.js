// Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // User data storage
    let currentUser = null;
    let wishlist = [];
    let contacts = [];
    let userRecipes = [];
    // ========== STATE RECIPES DATA START ==========
    // State recipes data
    const stateRecipes = {
      'gujarat': {
        title: 'Gujarati Recipes',
        subtitle: 'Discover the sweet and savory flavors of Gujarat',
        recipes: [
          {
            id: 'gujarat-dhokla',
            name: 'Dhokla',
            image: 'https://th.bing.com/th/id/OIP.4Ak8jJTBB2Gi30FA3KvyKAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Dhokla is a popular Gujarati snack that is soft, spongy, and savory. Made from fermented rice and chickpea batter, it is steamed to perfection and tempered with mustard seeds and curry leaves.',
            ingredients: [
              '1 cup chickpea flour (besan)',
              '1 cup semolina (sooji)',
              '1 cup yogurt',
              '1 tsp ginger-green chili paste',
              '1 tsp fruit salt (eno)',
              '1 tsp sugar',
              'Salt to taste',
              '2 tbsp oil',
              '1 tsp mustard seeds',
              '1 tsp sesame seeds',
              'Few curry leaves',
              '2 green chilies, slit',
              '2 tbsp chopped coriander',
              '1 tbsp grated coconut'
            ],
            instructions: [
              'Mix chickpea flour, semolina, yogurt, ginger-chili paste, sugar, and salt in a bowl.',
              'Add water to make a smooth batter of pouring consistency.',
              'Cover and let it ferment for 3-4 hours.',
              'Grease a steaming plate and keep it ready.',
              'Add fruit salt to the batter and mix gently.',
              'Pour the batter into the greased plate and steam for 15-20 minutes.',
              'Check with a toothpick - if it comes out clean, dhokla is ready.',
              'For tempering, heat oil and add mustard seeds, sesame seeds, curry leaves, and green chilies.',
              'Pour the tempering over the dhokla and garnish with coriander and coconut.',
              'Cut into pieces and serve with green chutney.'
            ],
            tips: 'For soft dhokla, make sure the batter is of right consistency - neither too thick nor too thin.'
          },
          {
            id: 'gujarat-khandvi',
            name: 'Khandvi',
            image: 'https://th.bing.com/th/id/OIP.XtkTzdU5kJJZzOuL6yEeGQHaFj?w=241&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Khandvi is a savory snack made from gram flour and buttermilk, rolled into delicate, soft rolls and tempered with spices.',
            ingredients: [
              '1 cup gram flour (besan)',
              '1 cup buttermilk',
              '1/2 tsp turmeric powder',
              '1 tsp ginger-green chili paste',
              'Salt to taste',
              '2 tbsp oil',
              '1 tsp mustard seeds',
              '1 tsp sesame seeds',
              '2 green chilies, chopped',
              '2 tbsp grated coconut',
              '2 tbsp chopped coriander'
            ],
            instructions: [
              'Mix gram flour, buttermilk, turmeric, ginger-chili paste, and salt to make a smooth batter.',
              'Cook the batter on low heat, stirring continuously until it thickens.',
              'Spread the mixture thinly on a greased surface while still hot.',
              'Let it cool for 5-7 minutes, then cut into strips and roll them.',
              'Prepare tempering with oil, mustard seeds, sesame seeds, and green chilies.',
              'Pour the tempering over khandvi rolls.',
              'Garnish with coconut and coriander.',
              'Serve immediately.'
            ],
            tips: 'Spread the mixture quickly while it is still hot for perfect rolls.'
          },

          {
            id: 'gujarat-thepla',
            name: 'Thepla',
            image: 'https://www.masalakorb.com/wp-content/uploads/2020/09/Gujarati-Methi-Thepla-Recipe-V1.jpg',
            time: '25 min',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Soft, thin flatbreads made with fenugreek leaves and spices, perfect for breakfast or snacks.',
            ingredients: [
              '2 cups whole wheat flour',
              '1 cup fresh fenugreek leaves (methi), chopped',
              '1 tsp turmeric powder',
              '1 tsp red chili powder',
              '1 tsp cumin powder',
              '2 tbsp yogurt',
              '1 tsp ginger-green chili paste',
              'Salt to taste',
              'Water as needed',
              'Oil for cooking'
            ],
            instructions: [
              'Mix all ingredients and knead into a soft dough.',
              'Divide dough into small balls, roll thinly.',
              'Cook on a hot pan with little oil until golden spots appear.',
              'Serve hot with yogurt or pickle.'
            ],
            tips: 'Use fresh methi leaves for the best flavor.'
          },
          {
            id: 'gujarat-fafda',
            name: 'Fafda',
            image: 'https://exotikalhub.com/wp-content/uploads/2021/11/Fafda-Gujarat-2.png',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Crispy, deep-fried gram flour strips, typically served with chutney and fried chilies.',
            ingredients: [
              '2 cups gram flour (besan)',
              '1/4 tsp baking soda',
              '1/2 tsp turmeric powder',
              'Salt to taste',
              '2 tbsp oil',
              'Water to knead',
              'Oil for deep frying'
            ],
            instructions: [
              'Mix flour, baking soda, turmeric, salt, and oil.',
              'Knead with water into smooth dough.',
              'Roll into thin strips and deep fry until crisp.',
              'Serve hot with chutney or fried chilies.'
            ],
            tips: 'Roll thin for maximum crispiness.'
          },
          {
            id: 'gujarat-handvo',
            name: 'Handvo',
            image: 'https://tse4.mm.bing.net/th/id/OIP.x48jjsE6QZ1Z7oaoJqtbmgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Savory vegetable cake made from rice, lentils, and bottle gourd.',
            ingredients: [
              '1 cup rice',
              '1/2 cup chana dal',
              '1/2 cup toor dal',
              '1 cup grated bottle gourd (lauki)',
              '1 tsp ginger-green chili paste',
              '1/2 tsp turmeric powder',
              'Salt to taste',
              '2 tbsp oil',
              '1 tsp mustard seeds',
              '1 tsp sesame seeds',
              'Curry leaves'
            ],
            instructions: [
              'Soak rice and dals, grind to coarse paste.',
              'Add bottle gourd, spices, and salt.',
              'Let batter ferment 4-5 hours.',
              'Pour into greased pan, temper with mustard seeds, sesame, and curry leaves.',
              'Bake or steam until golden brown.'
            ],
            tips: 'Grate bottle gourd finely for soft texture.'
          },
          {
            id: 'gujarat-sev-tameta',
            name: 'Sev Tameta',
            image: 'https://th.bing.com/th/id/R.0e6288f70070eab724a9c91f699edd10?rik=Ybo0FAafJ7jQ6g&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f0-Archanas-Kitchen-Recipes%2f2020%2fGujarati_Sev_Tamatar_Nu_Shaak_Recipe_video_3_1600.jpg&ehk=EfbqojRoGQiwksty8crU0rD1LQ8mUOaghpTPgVu28HM%3d&risl=&pid=ImgRaw&r=0',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy tomato curry topped with crispy gram flour sev.',
            ingredients: [
              '4 large tomatoes, chopped',
              '2 green chilies, chopped',
              '1/2 tsp turmeric powder',
              '1 tsp cumin seeds',
              'Salt to taste',
              '2 tbsp oil',
              '1 cup sev (gram flour noodles)',
              'Coriander leaves for garnish'
            ],
            instructions: [
              'Heat oil, add cumin seeds and green chilies.',
              'Add tomatoes, turmeric, and salt. Cook until soft.',
              'Top with sev and garnish with coriander.',
              'Serve hot with roti or rice.'
            ],
            tips: 'Add sev just before serving to retain crispiness.'
          },
          {
            id: 'gujarat-dhansak',
            name: 'Dal Dhokli',
            image: 'https://www.licious.in/blog/wp-content/uploads/2021/08/Licious_Dhansak-001-e1628856470877.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Wheat flour dumplings cooked in a spicy lentil curry.',
            ingredients: [
              '1 cup wheat flour',
              '2 cups cooked toor dal (pigeon peas)',
              '1/2 tsp turmeric powder',
              '1 tsp red chili powder',
              'Salt to taste',
              '1 tsp mustard seeds',
              '2 tbsp oil',
              '2 green chilies, chopped',
              'Coriander leaves'
            ],
            instructions: [
              'Mix flour, salt, and water to make dough. Roll into small dumplings.',
              'Cook dal with spices until boiling.',
              'Add dumplings and simmer until cooked.',
              'Tempering with oil, mustard seeds, and chilies. Garnish with coriander.'
            ],
            tips: 'Ensure dumplings are evenly sized for uniform cooking.'
          },
          {
            id: 'gujarat-khichu',
            name: 'Khichu',
            image: 'https://www.cookingcarnival.com/wp-content/uploads/2023/01/Khichu-3.jpg',
            time: '25 min',
            difficulty: 'Easy',
            servings: '2-3 people',
            description: 'Steamed spicy rice flour dough, typically eaten with oil and pickle.',
            ingredients: [
              '1 cup rice flour',
              '2 cups water',
              '1 tsp cumin seeds',
              '1/2 tsp chili powder',
              'Salt to taste',
              '2 tsp oil'
            ],
            instructions: [
              'Boil water with cumin, chili powder, and salt.',
              'Add rice flour gradually, stirring continuously.',
              'Cook till it thickens, drizzle oil and steam 5-10 minutes.',
              'Serve hot with oil or pickle.'
            ],
            tips: 'Stir constantly to avoid lumps.'
          },
          {
            id: 'gujarat-muthiya',
            name: 'Muthiya',
            image: 'https://i.ytimg.com/vi/rBW6VzH5pJw/maxresdefault.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Steamed or fried gram flour and vegetable dumplings with spices.',
            ingredients: [
              '1 cup gram flour (besan)',
              '1 cup grated bottle gourd',
              '1/2 tsp turmeric powder',
              '1 tsp ginger-green chili paste',
              'Salt to taste',
              '2 tbsp oil',
              '1 tsp mustard seeds',
              '1 tsp sesame seeds',
              'Curry leaves'
            ],
            instructions: [
              'Mix all ingredients to form dough.',
              'Shape into cylindrical dumplings.',
              'Steam for 15-20 minutes or shallow fry.',
              'Tempering with mustard seeds, sesame, and curry leaves.'
            ],
            tips: 'Steam first for soft texture, fry later for extra crispiness.'

          }
        ]
      },

      'bihar': {
        title: 'Bihari Recipes',
        subtitle: 'Traditional flavors from the heart of Bihar',
        recipes: [
          {
            id: 'bihar-litti-chokha',
            name: 'Litti Chokha',
            image: 'https://st1.latestly.com/wp-content/uploads/2024/02/Litti-Chokha.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Whole wheat dough balls stuffed with spiced roasted gram flour, served with mashed roasted vegetables.',
            ingredients: [
              'For Litti: 2 cups whole wheat flour, 1 cup sattu, 2 tbsp mustard oil, 1 tsp carom seeds, 1 tsp nigella seeds, 1 tsp fennel seeds, 2 chopped green chilies, 1 tbsp lemon juice, salt to taste',
              'For Chokha: 2 large eggplants, 4 tomatoes, 3-4 garlic cloves, 2 green chilies, 1 chopped onion, 2 tbsp mustard oil, fresh coriander'
            ],
            instructions: [
              'Prepare dough with wheat flour, salt, and water.',
              'Mix sattu with spices and mustard oil for stuffing.',
              'Stuff dough balls, shape into round littis, bake or roast until golden.',
              'Roast vegetables, mash for chokha, mix with onions, mustard oil, and coriander.',
              'Serve littis with chokha and ghee.'
            ],
            tips: 'Roast littis on low heat for even cooking and perfect texture.'
          },
          {
            id: 'bihar-mutton-korma',
            name: 'Bihari Mutton Korma',
            image: 'https://rumkisgoldenspoon.com/wp-content/uploads/2023/04/Mutton-korma.jpg',
            time: '90 min',
            difficulty: 'Hard',
            servings: '4-5 people',
            description: 'Rich, spicy mutton curry slow-cooked with aromatic spices, signature dish of Bihar.',
            ingredients: [
              '500g mutton pieces',
              '2 onions, sliced',
              '2 tomatoes, chopped',
              '1 cup yogurt',
              '2 tsp ginger-garlic paste',
              '1 tsp red chili powder',
              '1 tsp garam masala',
              'Salt to taste',
              '3 tbsp oil',
              'Coriander leaves for garnish'
            ],
            instructions: [
              'Marinate mutton with yogurt, ginger-garlic paste, chili powder, and salt for 1-2 hours.',
              'Heat oil, sauté onions until golden.',
              'Add tomatoes and cook till soft.',
              'Add mutton, cook on low flame until tender.',
              'Sprinkle garam masala, garnish with coriander, serve hot.'
            ],
            tips: 'Cook on low flame for tender and juicy mutton.'
          },
          {
            id: 'bihar-sattu-paratha',
            name: 'Sattu Paratha',
            image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ysxm8.img?w=768&h=480&m=6',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Whole wheat parathas stuffed with spiced sattu flour, served with chutney or yogurt.',
            ingredients: [
              '2 cups whole wheat flour, 1 cup sattu, 1 tbsp mustard oil, 1 tsp carom seeds, 1-2 chopped green chilies, 1 tbsp coriander, salt to taste, water to knead dough'
            ],
            instructions: [
              'Knead wheat flour into soft dough.',
              'Mix sattu with spices and oil for filling.',
              'Stuff dough, roll, and cook on hot griddle with oil until golden.',
              'Serve with yogurt or pickle.'
            ],
            tips: 'Ensure sattu filling is dry to avoid tearing parathas.'
          },
          {
            id: 'bihar-ghughni',
            name: 'Ghughni',
            image: 'https://curlytales.com/wp-content/uploads/2023/04/Chana-Ghugni-768x514.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Spicy curry made with dried yellow peas, served as snack or side dish.',
            ingredients: [
              '1 cup dried yellow peas (soaked overnight), 2 onions, 2 tomatoes, 2 green chilies, 1 tsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp cumin seeds, salt, 2 tbsp oil, coriander for garnish'
            ],
            instructions: [
              'Cook peas until soft.',
              'Sauté cumin, onions, and ginger-garlic paste in oil.',
              'Add tomatoes, turmeric, salt, cook until gravy forms.',
              'Add peas, simmer 10 min, garnish with coriander.'
            ],
            tips: 'Soak peas overnight for soft texture.'
          },
          {
            id: 'bihar-pua',
            name: 'Pua',
            image: 'https://www.recipefunnel.com/images/recipe/bihari-pua-recipe-1648540805442.webp',
            time: '25 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Sweet, deep-fried Indian pancakes, often served during festivals.',
            ingredients: [
              '1 cup wheat flour, 1/2 cup sugar, 1/2 cup milk, 1/4 tsp cardamom, oil for frying'
            ],
            instructions: [
              'Mix flour, sugar, milk, cardamom to make batter.',
              'Fry small portions in hot oil until golden.',
              'Drain excess oil, serve hot.'
            ],
            tips: 'Medium flame gives even cooking without burning.'
          },
          {
            id: 'bihar-thekua',
            name: 'Thekua',
            image: 'https://th.bing.com/th/id/R.2518aad62ebaf7fe72b10eaa57ab95c5?rik=YbeJX2NoDTiUCA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5Yp0HgBv7ps%2fX7T2MjTgECI%2fAAAAAAAANQI%2f4qonM2FS23Eq-9oVku-J08TBlQUs3FcNgCLcBGAsYHQ%2fs16000%2fThekua%252Brecipe.JPG&ehk=npys4MuR%2fV1B7l0i2POzI7uelof7tHGERl%2fT0my%2f2kE%3d&risl=&pid=ImgRaw&r=0',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet, deep-fried cookie made from wheat flour, jaggery, and ghee, popular in Chhath Puja.',
            ingredients: [
              '2 cups wheat flour, 1/2 cup jaggery powder, 2 tbsp ghee, 1/4 tsp cardamom, water as needed, oil for frying'
            ],
            instructions: [
              'Mix flour, jaggery, ghee, cardamom into dough.',
              'Shape into small discs, deep fry until golden brown.',
              'Cool and serve.'
            ],
            tips: 'Oil should be medium-hot for perfect crisp Thekua.'
          },
          {
            id: 'bihar-malai-khaja',
            name: 'Malai Khaja',
            image: 'https://tse2.mm.bing.net/th/id/OIP.ivhNQjwaWVMSCEgux1a5BgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Sweet, layered crispy pastry soaked in sugar syrup.',
            ingredients: [
              '2 cups all-purpose flour, 1/2 cup ghee, 1/4 cup milk, 1 cup sugar syrup, 1/4 tsp cardamom'
            ],
            instructions: [
              'Mix flour and ghee into dough, roll thin.',
              'Cut into strips, twist, fry until golden.',
              'Dip in sugar syrup, serve after cooling.'
            ],
            tips: 'Fry on medium heat to keep crispiness.'
          },
          {
            id: 'bihar-chicken-curry',
            name: 'Bihari Chicken Curry',
            image: 'https://purendesi.in/wp-content/uploads/2024/06/Bihari-Chicken-Curry-Recipe.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spicy chicken curry with traditional Bihari flavors and masalas.',
            ingredients: [
              '500g chicken, 2 onions, 2 tomatoes, 2 tsp ginger-garlic paste, 1 tsp turmeric, 1 tsp red chili powder, 1 tsp garam masala, salt, 3 tbsp oil'
            ],
            instructions: [
              'Sauté onions until golden, add ginger-garlic paste.',
              'Add tomatoes and spices, cook till soft.',
              'Add chicken, simmer until tender.',
              'Sprinkle garam masala and serve hot.'
            ],
            tips: 'Cook slowly on low flame for juicy chicken.'
          },
          {
            id: 'bihar-tilkut',
            name: 'Tilkut',
            image: 'https://i.ytimg.com/vi/tPcI06wirls/maxresdefault.jpg',
            time: '30 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Sweet made from sesame seeds and jaggery, crunchy and flavorful.',
            ingredients: [
              '1 cup sesame seeds, 1/2 cup jaggery, 1 tsp ghee'
            ],
            instructions: [
              'Roast sesame seeds lightly.',
              'Melt jaggery with ghee, mix in seeds.',
              'Spread on greased plate, cut into squares when slightly cool.'
            ],
            tips: 'Shape quickly while syrup is hot.'
          }
        ]
      },
     'punjab': {
        title: 'Punjabi Recipes',
        subtitle: 'Rich and hearty flavors from Punjab',
        recipes: [
          {
            id: 'punjab-Butter-chicken',
            name: 'Butter Chicken',
            image: 'https://tse1.mm.bing.net/th/id/OIP.WqAIHoxTa4qhkuVufh3sKQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Classic Punjabi dish with tender chicken in creamy tomato-based gravy.',
            ingredients: [
              '500g boneless chicken, cubed',
              '1 cup yogurt',
              '2 tbsp ginger-garlic paste',
              '1 tsp red chili powder',
              '1 tsp garam masala',
              'Salt to taste',
              '4 large tomatoes, pureed',
              '2 onions, finely chopped',
              '1 cup cashew paste',
              '1/2 cup fresh cream',
              '4 tbsp butter',
              '1 tsp kasuri methi',
              '1 tsp sugar',
              '1 tbsp tomato ketchup',
              'Spices: cumin, coriander powder, turmeric'
            ],
            instructions: [
              'Marinate chicken with yogurt, ginger-garlic paste, and spices for 2 hours.',
              'Grill or pan-fry chicken until slightly charred.',
              'Sauté onions in butter until golden, add tomato puree, cook till oil separates.',
              'Add cashew paste and spices, cook 5 min.',
              'Add chicken, simmer 10 min, then add cream, kasuri methi, sugar.',
              'Garnish with butter and cream, serve with naan or rice.'
            ],
            tips: 'For authentic flavor, use charcoal for smoking the chicken.'
          },
          {
            id: 'punjab-chole',
            name: 'Chole (Chickpea Curry)',
            image: 'https://tse1.mm.bing.net/th/id/OIP.KfPJeoTMABP7FX1lDAscpwHaGO?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Spicy, tangy chickpea curry cooked with onions, tomatoes, and Punjabi spices.',
            ingredients: [
              '2 cups chickpeas (soaked overnight)',
              '2 onions, chopped',
              '2 tomatoes, chopped',
              '2 green chilies, chopped',
              '1 tsp ginger-garlic paste',
              '1 tsp cumin seeds',
              '1 tsp turmeric powder',
              '1 tsp garam masala',
              'Salt to taste',
              '2 tbsp oil',
              'Coriander leaves for garnish'
            ],
            instructions: [
              'Cook chickpeas until soft.',
              'Heat oil, add cumin, onions, and sauté until golden.',
              'Add ginger-garlic paste, tomatoes, turmeric, salt, and cook till thick.',
              'Add chickpeas, simmer 10 min, sprinkle garam masala.',
              'Garnish with coriander and serve with bhature or rice.'
            ],
            tips: 'Use canned chickpeas for quicker version.'
          },
          {
            id: 'punjab-paneer-butter-masala',
            name: 'Paneer Butter Masala',
            image: 'https://tse4.mm.bing.net/th/id/OIP.C5Ak0hfrxpNCaf7MOjMbGwHaHZ?w=599&h=598&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '35 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Soft paneer cubes in creamy tomato gravy, rich in flavor.',
            ingredients: [
              '250g paneer, cubed',
              '2 onions, chopped',
              '3 tomatoes, pureed',
              '1/2 cup fresh cream',
              '2 tbsp butter',
              '1 tsp ginger-garlic paste',
              '1 tsp red chili powder',
              '1/2 tsp turmeric',
              '1 tsp garam masala',
              'Salt to taste',
              'Coriander leaves for garnish'
            ],
            instructions: [
              'Sauté onions and ginger-garlic paste in butter until golden.',
              'Add tomato puree and spices, cook till oil separates.',
              'Add paneer, cook 5-7 min, then add cream and garam masala.',
              'Garnish with coriander and serve with naan or rice.'
            ],
            tips: 'Use fresh cream for rich, smooth gravy.'
          },
          {
            id: 'punjab-rajma',
            name: 'Rajma (Kidney Bean Curry)',
            image: 'https://tse4.mm.bing.net/th/id/OIP.yHMOkKWPFk89DOH-AgqchQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Red kidney beans cooked in onion-tomato masala, classic Punjabi comfort food.',
            ingredients: [
              '1 cup red kidney beans (soaked overnight)',
              '2 onions, chopped',
              '2 tomatoes, chopped',
              '2 green chilies, chopped',
              '1 tsp ginger-garlic paste',
              '1 tsp cumin seeds',
              '1/2 tsp turmeric powder',
              '1 tsp red chili powder',
              '1 tsp garam masala',
              'Salt to taste',
              '2 tbsp oil',
              'Coriander leaves for garnish'
            ],
            instructions: [
              'Cook kidney beans until soft.',
              'Heat oil, add cumin, onions, sauté, then ginger-garlic paste.',
              'Add tomatoes and spices, cook till thick gravy forms.',
              'Add beans, simmer 10 min, garnish with coriander.'
            ],
            tips: 'Soak beans overnight for soft and evenly cooked curry.'
          },
          {
            id: 'punjab-biryani-chicken',
            name: 'Punjabi Chicken Biryani',
            image: 'https://static.wixstatic.com/media/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg/v1/fill/w_864,h_576,al_c,lg_1,q_85/91e241_76e634b7ab52498e82533ba79b747b55~mv2.jpg',
            time: '70 min',
            difficulty: 'Hard',
            servings: '4-5 people',
            description: 'Fragrant basmati rice layered with spiced chicken, slow-cooked for flavors to blend.',
            ingredients: [
              '500g chicken, 2 cups basmati rice, 2 onions sliced, 2 tomatoes, 1/2 cup yogurt, 2 tbsp ginger-garlic paste, 1 tsp turmeric, 1 tsp red chili powder, 1 tsp garam masala, 4 cups water, 3 tbsp oil, salt'
            ],
            instructions: [
              'Marinate chicken with yogurt, spices, and ginger-garlic paste.',
              'Fry onions until golden, add tomatoes and chicken, cook partially.',
              'Parboil rice with salt and a bit of oil.',
              'Layer chicken and rice in pot, cover and cook on low flame 20-25 min.',
              'Serve hot with raita or salad.'
            ],
            tips: 'Do not stir after layering rice to maintain separate grains.'
          },
          {
            id: 'punjab-gulab-jamun',
            name: 'Gulab Jamun',
            image: 'https://tse3.mm.bing.net/th/id/OIP.kq4e7jHaSt3t1BAKFKVjNgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Deep-fried soft milk dumplings soaked in sugar syrup, classic Indian dessert.',
            ingredients: [
              '1 cup milk powder, 1/4 cup flour, 2 tbsp ghee, milk to knead, sugar syrup (1 cup sugar + 1/2 cup water + cardamom)'
            ],
            instructions: [
              'Mix milk powder, flour, ghee and milk to form smooth dough.',
              'Shape small balls and fry until golden brown.',
              'Soak in warm sugar syrup for 10-15 min.',
              'Serve warm or at room temperature.'
            ],
            tips: 'Keep syrup warm, do not over-soak gulab jamuns.'
          },
          {
            id: 'punjab-jalebi',
            name: 'Jalebi',
            image: 'https://th.bing.com/th/id/OIP.-73mEN93LFQm-bHGTITUVgHaE8?w=251&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Crispy, deep-fried spirals soaked in sugar syrup, popular dessert.',
            ingredients: [
              '1 cup all-purpose flour, 2 tbsp yogurt, 1/4 tsp turmeric powder, water for batter, sugar syrup, oil for frying'
            ],
            instructions: [
              'Make smooth batter with flour, yogurt, turmeric, water; ferment 1-2 hours.',
              'Pipe batter into hot oil in spiral shapes, fry until golden.',
              'Dip fried jalebi in warm sugar syrup and serve.'
            ],
            tips: 'Batter consistency should be smooth for perfect spirals.'
          },
          {
            id: 'punjab-saag-paneer',
            name: 'Saag Paneer',
            image: 'https://th.bing.com/th/id/OIP.JFbZ0KkdAgG2DOzIB92G6QAAAA?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spinach cooked with spices and paneer cubes, a classic Punjabi vegetarian dish.',
            ingredients: [
              '500g spinach, 200g paneer cubes, 1 onion chopped, 2 tomatoes, 1 tsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp red chili powder, 2 tbsp oil, salt'
            ],
            instructions: [
              'Blanch spinach and grind to paste.',
              'Sauté onions, add tomatoes, ginger-garlic paste, spices.',
              'Add spinach paste and cook 10 min.',
              'Add paneer cubes, simmer 5 min, serve hot.'
            ],
            tips: 'Use fresh spinach for vibrant green saag.'
          },
          {
            id: 'punjab-kulfi',
            name: 'Kulfi',
            image:'https://tse2.mm.bing.net/th/id/OIP.t6nN-2IP4m-qC79ZazpfywHaFE?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '8 hours (freezing)',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Traditional Punjabi ice cream made with condensed milk and cardamom.',
            ingredients: [
              '1 liter full-fat milk, 1/2 cup sugar, 1/4 tsp cardamom powder, chopped nuts (optional)'
            ],
            instructions: [
              'Boil milk, simmer until thickened.',
              'Add sugar and cardamom, mix well.',
              'Pour into molds, freeze 6-8 hours.',
              'Serve chilled, garnish with nuts if desired.'
            ],
            tips: 'Stir milk continuously while reducing to avoid burning.'
          }
        ]
      },
      'Andhra-Pradesh': {
    title: 'Andhra Pradesh Recipes',
    subtitle: 'Spicy and flavorful dishes from Andhra Pradesh',
    recipes: [
        {
            id: 'andhra-pulihora',
            name: 'Pulihora (Tamarind Rice)',
            image: 'https://www.mypunepulse.com/wp-content/uploads/2024/08/Andhra-Pulihora.jpg',
            time: '25 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy and spicy tamarind rice flavored with curry leaves and peanuts.',
            ingredients: [
                '2 cups cooked rice',
                '2 tbsp tamarind paste',
                '1 tsp mustard seeds',
                '1 tsp chana dal',
                '1 tsp urad dal',
                '2 green chilies, chopped',
                '2 tbsp peanuts',
                'Few curry leaves',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard seeds, chana dal, urad dal, green chilies, peanuts, and curry leaves.',
                'Add tamarind paste and a little water, cook 2-3 min.',
                'Mix with cooked rice, adjust salt, serve warm.'
            ],
            tips: 'Use fresh tamarind paste for authentic tangy flavor.'
        },
        {
            id: 'andhra-pesarattu',
            name: 'Pesarattu (Green Gram Dosa)',
            image: 'https://www.kannammacooks.com/wp-content/uploads/pesarattu.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Crispy dosa made from green gram (moong dal), often served with chutney.',
            ingredients: [
                '1 cup green gram (moong dal), soaked overnight',
                '1-2 green chilies',
                '1 inch ginger',
                'Salt to taste',
                'Oil for cooking'
            ],
            instructions: [
                'Grind soaked moong dal with chilies and ginger into smooth batter.',
                'Heat griddle, pour batter, spread thin, drizzle oil around edges.',
                'Cook until crisp, flip, cook other side briefly.',
                'Serve with coconut chutney or ginger chutney.'
            ],
            tips: 'Use medium heat to get crispy yet soft dosa inside.'
        },
        {
            id: 'andhra-chepala-pulusu',
            name: 'Chepala Pulusu (Fish Curry)',
            image: 'https://vismaifood.com/storage/app/uploads/public/287/b6d/6c1/thumb__1200_0_0_0_auto.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Tangy and spicy fish curry cooked with tamarind and traditional Andhra spices.',
            ingredients: [
                '500g fish pieces',
                '2 onions, chopped',
                '2 tomatoes, chopped',
                '2 tsp tamarind paste',
                '1 tsp chili powder',
                '1/2 tsp turmeric',
                '1 tsp mustard seeds',
                '2 green chilies, slit',
                'Curry leaves',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard seeds, curry leaves, green chilies.',
                'Sauté onions and tomatoes with turmeric and chili powder.',
                'Add tamarind paste, water, and bring to boil.',
                'Add fish pieces, simmer until cooked, garnish with coriander.'
            ],
            tips: 'Use fresh tamarind for authentic tangy taste.'
        },
        {
            id: 'andhra-pootharekulu',
            name: 'Pootharekulu',
            image: 'https://images.slurrp.com/prod/articles/e2rqwdvhk3a.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Delicate thin rice paper sweets filled with jaggery and dry fruits.',
            ingredients: [
                'Thin rice starch sheets',
                '1/2 cup jaggery',
                '1/4 cup grated coconut',
                'Chopped cashews and almonds'
            ],
            instructions: [
                'Melt jaggery and mix with coconut and dry fruits.',
                'Place filling between two rice paper sheets, fold gently.',
                'Serve as delicate sweet.'
            ],
            tips: 'Handle rice sheets carefully to prevent tearing.'
        },
        {
            id: 'andhra-gongura-pachadi',
            name: 'Gongura Pachadi (Sorrel Leaf Chutney)',
            image: 'https://th.bing.com/th/id/R.2d57ae81ea415a02127a93dd9dc4bfe4?rik=pTdZT4tyk706Rw&riu=http%3a%2f%2fwww.faskitchen.com%2fwp-content%2fuploads%2f2015%2f08%2fgongura-pachadi.jpg&ehk=8ePD03Az0UG6%2fEwVH7nOx6M9jmnKXwkW0fTKDL2FG84%3d&risl=&pid=ImgRaw&r=0',
            time: '20 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy and spicy chutney made with gongura leaves, a staple in Andhra cuisine.',
            ingredients: [
                '1 cup gongura leaves',
                '2 green chilies',
                '1 tsp mustard seeds',
                '1/2 tsp fenugreek seeds',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard and fenugreek seeds.',
                'Add cleaned gongura leaves and sauté till soft.',
                'Grind with green chilies and salt to make chutney.',
                'Serve with rice or roti.'
            ],
            tips: 'Use fresh gongura leaves for best flavor.'
        },
        {
            id: 'andhra-mirchi-bajji',
            name: 'Mirchi Bajji (Chili Fritters)',
            image: 'https://i.pinimg.com/originals/29/aa/98/29aa98e2f7ce65e03fe27823c0ba2489.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Spicy green chilies stuffed with tangy filling, dipped in chickpea batter and deep-fried.',
            ingredients: [
                '8-10 large green chilies',
                '1 cup gram flour (besan)',
                '1/2 tsp turmeric',
                '1/2 tsp chili powder',
                'Salt to taste',
                'Oil for frying'
            ],
            instructions: [
                'Make batter with gram flour, turmeric, chili powder, and salt.',
                'Stuff chilies with filling (optional), dip in batter.',
                'Deep fry until golden brown and crisp.',
                'Serve hot with chutney.'
            ],
            tips: 'Use medium-hot oil to cook evenly without burning.'
        },
        {
            id: 'andhra-poorna-ladoo',
            name: 'Poornam Ladoo',
            image: 'https://img.freepik.com/premium-photo/motichur-laddu-food-photography-photo-realistic_950002-598169.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet round balls made from chana dal, jaggery, and cardamom.',
            ingredients: [
                '1 cup chana dal, roasted',
                '1/2 cup jaggery, grated',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee'
            ],
            instructions: [
                'Grind roasted chana dal to coarse powder.',
                'Mix with melted jaggery and cardamom, form balls.',
                'Roll in ghee for shine and texture.',
                'Serve at room temperature.'
            ],
            tips: 'Cool mixture slightly before shaping to avoid sticking.'
        },
        {
            id: 'andhra-chekka-pulusu',
            name: 'Chekka Pulusu (Mutton Curry)',
            image: 'https://www.awesomecuisine.com/wp-content/uploads/2012/02/Andhra-Pulusu-1.jpg',
            time: '80 min',
            difficulty: 'Hard',
            servings: '4-5 people',
            description: 'Spicy Andhra-style mutton curry slow-cooked with tamarind and aromatic spices.',
            ingredients: [
                '500g mutton, 2 onions, 2 tomatoes, 2 tsp tamarind paste, 2 tsp ginger-garlic paste, 1 tsp chili powder, 1/2 tsp turmeric, salt, oil as required'
            ],
            instructions: [
                'Sauté onions with ginger-garlic paste and spices in oil.',
                'Add tomatoes and cook till soft.',
                'Add mutton and tamarind paste, cook on low flame until tender.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Cook slowly on low flame for tender, flavorful meat.'
        },
        {
            id: 'andhra-pootharekulu-sweet',
            name: 'Pootharekulu Sweet Variation',
            image: 'https://sitarafoods.com/wp-content/uploads/2022/07/01-43.jpg',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Traditional Andhra sweet made with thin rice paper and jaggery filling.',
            ingredients: [
                'Thin rice sheets, 1/2 cup jaggery, 1/4 cup coconut, chopped dry fruits'
            ],
            instructions: [
                'Place jaggery-coconut mixture between rice sheets, fold carefully.',
                'Serve as delicate Andhra sweet.'
            ],
            tips: 'Handle sheets carefully to prevent tearing.'
        }
    ]

},
'Arunachal-Pradesh': {
    title: 'Arunachal Pradesh Recipes',
    subtitle: 'Traditional and flavorful dishes from Arunachal Pradesh',
    recipes: [
        {
            id: 'arunachal-thukpa',
            name: 'Thukpa (Noodle Soup)',
            image: 'https://www.cookshideout.com/wp-content/uploads/2014/04/Instant-Pot-Thukpa-FI.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Hot and hearty noodle soup with vegetables and meat.',
            ingredients: [
                '200g noodles',
                '100g chicken or pork (optional)',
                '1 carrot, julienned',
                '1 capsicum, sliced',
                '1 onion, chopped',
                '2 cloves garlic, minced',
                '1 tsp soy sauce',
                'Salt and pepper to taste',
                '2 tbsp oil'
            ],
            instructions: [
                'Heat oil, sauté garlic and onions until fragrant.',
                'Add meat (if using) and cook until done.',
                'Add vegetables and stir-fry 2-3 min.',
                'Add water, bring to boil, add noodles, cook until tender.',
                'Season with soy sauce, salt, and pepper. Serve hot.'
            ],
            tips: 'Use fresh noodles for better texture.'
        },
        {
            id: 'arunachal-apong',
            name: 'Apong (Rice Beer)',
            image: 'https://www.lifeberrys.com/img/article/arunachal9-1671626796-lb.jpg',
            time: '120 min (fermentation time not included)',
            difficulty: 'Hard',
            servings: '4-6 people',
            description: 'Traditional fermented rice beer popular in Arunachal Pradesh.',
            ingredients: [
                '2 cups rice',
                '1/4 tsp yeast or traditional starter culture',
                'Water as required'
            ],
            instructions: [
                'Cook rice and let it cool.',
                'Mix with starter culture or yeast.',
                'Place in a clean jar, cover, and let ferment for 24-48 hours.',
                'Strain and serve chilled.'
            ],
            tips: 'Use clean utensils to avoid contamination.'
        },
        {
            id: 'arunachal-thalipeeth-style-rice-cake',
            name: 'Thalipeeth-style Rice Cake',
            image: 'https://img.freepik.com/premium-photo/maharashtrn-kakdi-thalipeeth-punjabi-cucumber-paratha-made-from-fresh-grated-kheera-breakfast-serve-it-along-with-yogurt_466689-4325.jpg?size=626&ext=jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed rice cake with a slightly tangy flavor, often eaten with chutney.',
            ingredients: [
                '2 cups rice flour',
                '1/2 cup water',
                'Salt to taste',
                'Optional: grated coconut for garnish'
            ],
            instructions: [
                'Mix rice flour with water and salt to make smooth dough.',
                'Shape into small cakes and steam for 20-25 min.',
                'Serve warm with chutney or curry.'
            ],
            tips: 'Steam on medium heat for fluffy texture.'
        },
        {
            id: 'arunachal-axone-pork',
            name: 'Axone Pork (Fermented Soybean Pork Curry)',
            image: 'https://i.ytimg.com/vi/v29exQI-JdE/maxresdefault.jpg',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy pork curry cooked with fermented soybeans (axone), a traditional Naga and Apatani dish.',
            ingredients: [
                '500g pork, cut into pieces',
                '2 tbsp axone (fermented soybeans)',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2-3 green chilies',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and green chilies.',
                'Add pork and cook until browned.',
                'Add tomatoes, turmeric, and axone, cook 20-25 min until pork is tender.',
                'Adjust salt and serve hot with rice.'
            ],
            tips: 'Soak axone in water before cooking to reduce strong smell.'
        },
        {
            id: 'arunachal-ema-datsi',
            name: 'Ema Datshi (Chili-Cheese Curry)',
            image: 'https://media.sublimetrails.com/uploads/media/blog/bhutan-cuisine/ema-datshi.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy chili and cheese curry, inspired from neighboring regions, adapted in Arunachal.',
            ingredients: [
                '6-8 green chilies',
                '100g cheese, cubed',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                'Salt to taste',
                '1 tsp oil'
            ],
            instructions: [
                'Heat oil, sauté onions until golden.',
                'Add tomatoes and cook until soft.',
                'Add chilies and cook 5 min.',
                'Add cheese, stir until melted, adjust salt, serve hot.'
            ],
            tips: 'Use mild green chilies if you prefer less heat.'
        },
        {
            id: 'arunachal-king-mushroom-stir-fry',
            name: 'King Mushroom Stir Fry',
            image: 'https://img.freepik.com/free-photo/stir-fried-king-oyster-mushroom-oyster-sauce_1339-56213.jpg?size=626&ext=jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Quick stir-fried mushrooms with minimal spices, highlighting fresh produce.',
            ingredients: [
                '200g king mushrooms, sliced',
                '1 onion, sliced',
                '2 cloves garlic, minced',
                '1 tsp soy sauce',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté garlic and onions.',
                'Add mushrooms, stir-fry 5-7 min until cooked.',
                'Add soy sauce and salt, cook 2 more min, serve hot.'
            ],
            tips: 'Do not overcook mushrooms to retain texture.'
        },
        {
            id: 'arunachal-pork-with-bamboo-shoots',
            name: 'Pork with Bamboo Shoots',
            image: 'https://asianinspirations.com.au/wp-content/uploads/2019/01/R00088_Stir-Fried_Bamboo_Shoots_with_Pork-2-619x412.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Traditional pork curry cooked with tender bamboo shoots.',
            ingredients: [
                '500g pork',
                '1 cup bamboo shoots, chopped',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2-3 green chilies',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and green chilies in oil.',
                'Add pork and cook until browned.',
                'Add tomatoes and bamboo shoots, simmer until pork is tender.',
                'Serve hot with rice.'
            ],
            tips: 'Use fresh bamboo shoots for authentic flavor.'
        }
    ]
},
'Assam': {
    title: 'Assamese Recipes',
    subtitle: 'Authentic and traditional dishes from Assam',
    recipes: [
        {
            id: 'assam-lacha-pitha',
            name: 'Assam Lacha Pitha (Rice Pancake)',
            image: 'https://tse3.mm.bing.net/th/id/OIP.MH0itucg4zfAZTqL25uYYAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional rice flour pancake, soft inside and crisp outside.',
            ingredients: [
                '2 cups rice flour',
                '1 cup water',
                'Salt to taste',
                'Oil for cooking'
            ],
            instructions: [
                'Mix rice flour, water, and salt to form a soft dough.',
                'Divide into small balls and roll into thin pancakes.',
                'Heat a pan, cook each side until lightly golden.',
                'Serve hot with jaggery or curry.'
            ],
            tips: 'Roll thin for a crispier texture.'
        },
        {
            id: 'assam-khar',
            name: 'Khar (Alkaline Vegetable Curry)',
            image: 'https://mews.in/wp-content/uploads/2022/01/khar-is-a-assam-traditional-dish.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Unique Assamese curry made with raw papaya and alkaline extract.',
            ingredients: [
                '1 raw papaya, peeled and chopped',
                '2 tbsp Khar (alkaline extract from sun-dried banana peel)',
                '1 tsp mustard seeds',
                'Salt to taste',
                '2 tbsp oil'
            ],
            instructions: [
                'Heat oil, add mustard seeds and sauté.',
                'Add papaya pieces and sauté 2-3 min.',
                'Add Khar, water, and salt, simmer until papaya is cooked.',
                'Serve with steamed rice.'
            ],
            tips: 'Adjust Khar quantity for mild or strong flavor.'
        },
        {
            id: 'assam-aloo-pitika',
            name: 'Aloo Pitika (Mashed Potato)',
            image: 'https://www.foodcazt.com/wp-content/uploads/2023/03/Aloo-Pitika-Recipe.jpg',
            time: '20 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Simple mashed potato dish with mustard oil and green chilies.',
            ingredients: [
                '3-4 boiled potatoes',
                '1-2 green chilies, chopped',
                '1 tsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Mash boiled potatoes in a bowl.',
                'Add chopped green chilies, mustard oil, and salt.',
                'Mix well and serve as side dish.'
            ],
            tips: 'Use freshly boiled potatoes for best taste.'
        },
        {
            id: 'assam-masor-tenga',
            name: 'Masor Tenga (Tangy Fish Curry)',
            image: 'https://i.pinimg.com/736x/25/bb/6a/25bb6a7c37b422c408ad5bf71d76d5d4.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Light and tangy fish curry made with tomatoes or lemon.',
            ingredients: [
                '500g fish pieces',
                '2 tomatoes, chopped',
                '1 tsp turmeric powder',
                '1-2 green chilies',
                'Salt to taste',
                '2 tbsp oil'
            ],
            instructions: [
                'Heat oil, add turmeric and fish pieces, fry lightly.',
                'Add tomatoes and green chilies, cook 5-10 min.',
                'Add water, simmer until fish is cooked.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Use freshwater fish for authentic taste.'
        },
        {
            id: 'assam-bamboo-shoot-curry',
            name: 'Oya Senga (Bamboo Shoot Curry)',
            image: 'https://junifoods.com/wp-content/uploads/2024/06/Bamboo-Shoot-Curry-Tama-Ko-Tarkari-%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80-2.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional Assamese curry made with bamboo shoots.',
            ingredients: [
                '1 cup bamboo shoots, chopped',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '1 tsp mustard seeds',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard seeds.',
                'Add onions, sauté until golden.',
                'Add bamboo shoots and tomatoes, cook 20 min.',
                'Add salt, serve hot with rice.'
            ],
            tips: 'Use fresh bamboo shoots for authentic flavor.'
        },
        {
            id: 'assam-smoked-pork',
            name: 'Smoked Pork Curry',
            image: 'https://tse2.mm.bing.net/th/id/OIP.Oa15CInJBLTlTdPol9MWRwAAAA?w=450&h=300&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy smoked pork cooked with minimal spices, traditional tribal recipe.',
            ingredients: [
                '500g smoked pork',
                '2 onions, chopped',
                '2 tomatoes, chopped',
                '2-3 green chilies',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and chilies until golden.',
                'Add pork and cook until lightly browned.',
                'Add tomatoes and salt, simmer 20-25 min.',
                'Serve hot with rice.'
            ],
            tips: 'Use smoked pork for authentic flavor.'
        },
        {
            id: 'assam-mushroom-stir-fry',
            name: 'King Mushroom Stir Fry',
            image: 'https://www.jocooks.com/wp-content/uploads/2020/09/beef-mushroom-stir-fry-1-18.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Quick stir-fried mushrooms with minimal spices, highlighting fresh produce.',
            ingredients: [
                '200g king mushrooms, sliced',
                '1 onion, sliced',
                '2 cloves garlic, minced',
                '1 tsp soy sauce',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté garlic and onions.',
                'Add mushrooms, stir-fry 5-7 min until cooked.',
                'Add soy sauce and salt, cook 2 more min, serve hot.'
            ],
            tips: 'Do not overcook mushrooms to retain texture.'
        },
        {
            id: 'assam-papaya-fish-curry',
            name: 'Papaya Fish Curry',
            image: 'https://th.bing.com/th/id/R.6406b666085e99b6e4909df9df4253be?rik=eg13rM06osB1gg&riu=http%3a%2f%2fnoobcook.com%2fwp-content%2fuploads%2f2012%2f02%2fassamfish.jpg&ehk=8Vu%2buMkLRFGliFltESaneDH0TNALTEGwcfVG2Pb3VkU%3d&risl=&pid=ImgRaw&r=0',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Unique Assamese curry combining fish and tender papaya.',
            ingredients: [
                '300g fish pieces',
                '1 cup papaya, chopped',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2 green chilies',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and green chilies.',
                'Add fish, lightly fry 5 min.',
                'Add tomatoes and papaya, simmer until fish is cooked.',
                'Serve with rice.'
            ],
            tips: 'Papaya adds natural sweetness to balance tangy curry.'
        },
        {
            id: 'assam-pitha',
            name: 'Til Pitha (Sweet Rice Cake)',
            image: 'https://th.bing.com/th/id/R.6955b886b870ea527b9a863d37d1a3a8?rik=2foPAiERMSESCw&riu=http%3a%2f%2fwww.discovereast.in%2fwp-content%2fuploads%2f2020%2f08%2f116365747_291007048778909_5879092139224217897_n.jpg&ehk=hpVysGG1nQ1NXhkoePWty8B0Nu3hGqcWyzHTqkQUkz0%3d&risl=&pid=ImgRaw&r=0',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Assamese traditional dessert made from rice flour and sesame seeds.',
            ingredients: [
                '2 cups rice flour',
                '1/2 cup jaggery',
                '1/4 cup sesame seeds',
                'Water as required',
                'Ghee for greasing'
            ],
            instructions: [
                'Mix rice flour with water to form a soft dough.',
                'Roll into thin pancakes, fill with jaggery and sesame mixture.',
                'Fold and steam or lightly pan-fry.',
                'Serve warm as dessert.'
            ],
            tips: 'Use freshly roasted sesame seeds for better aroma.'
        }
    ]
},
'Chhattisgarh': {
    title: 'Chhattisgarh Recipes',
    subtitle: 'Authentic and traditional dishes from Chhattisgarh',
    recipes: [
        {
            id: 'chhattisgarh-faraa',
            name: 'Faraa (Steamed Rice Dumplings)',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhigtMQK8_Ess02eVlgTG7wQ_s8SgRKunKfw5JkoyfAbab2doNwAilyZiOV4-G4kvUTPHM5hZVzxdsGON9EMDWSUbH6WwolAfQaQnvsIIux9R13xGKD5Ix0HOf33FRSl3KzWBWU9GsToc_n/s1600/fara+or+goojha+or+peetha.NEF-003.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed rice dumplings, soft and mildly spiced, a traditional Chhattisgarhi dish.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup grated coconut',
                '2 green chilies, chopped',
                'Salt to taste',
                'Water as required'
            ],
            instructions: [
                'Mix rice flour with water and salt to form a soft dough.',
                'Shape into small dumplings and fill with coconut-chili mixture.',
                'Steam for 15-20 min until cooked.',
                'Serve hot with chutney or curry.'
            ],
            tips: 'Use medium-coarse rice flour for best texture.'
        },
        {
            id: 'chhattisgarh-chana-sattu',
            name: 'Chana Sattu Ladoo',
            image: 'https://tse1.explicit.bing.net/th/id/OIP.mJ7KJ6o5Re_ssYv9y2kgcQHaIS?w=1072&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Sweet and nutritious ladoos made from roasted gram flour (sattu) and jaggery.',
            ingredients: [
                '1 cup roasted gram flour (sattu)',
                '1/2 cup jaggery, grated',
                '2 tbsp ghee',
                '1/4 tsp cardamom powder'
            ],
            instructions: [
                'Melt jaggery with ghee, mix with sattu and cardamom.',
                'Form into small round ladoos while warm.',
                'Let them cool and serve as dessert.'
            ],
            tips: 'Cool slightly before shaping to avoid sticking.'
        },
        {
            id: 'chhattisgarh-tilgur',
            name: 'Tilgur (Sesame Sweet)',
            image: 'https://www.chhattisgarhtourism.co.in/images/cuisine/tilgur.jpg',
            time: '20 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Chhattisgarhi sweet made from sesame seeds and jaggery, crunchy and tasty.',
            ingredients: [
                '1 cup sesame seeds',
                '1/2 cup jaggery, grated'
            ],
            instructions: [
                'Roast sesame seeds lightly.',
                'Melt jaggery, mix with sesame seeds, and shape into small balls.',
                'Serve at room temperature.'
            ],
            tips: 'Use fresh sesame seeds for aroma.'
        },
        {
            id: 'chhattisgarh-bafauri',
            name: 'Bafauri (Steamed Lentil Fritters)',
            image: 'https://cookilicious.com/wp-content/uploads/2019/01/chana-dal-11-595x893.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Healthy steamed snack made from gram flour and spices.',
            ingredients: [
                '1 cup gram flour (besan)',
                '1/2 tsp turmeric',
                '1-2 green chilies, chopped',
                'Salt to taste',
                'Water as required',
                'Oil for greasing'
            ],
            instructions: [
                'Mix gram flour with water, turmeric, chilies, and salt to form a thick batter.',
                'Grease small molds or a plate, pour batter, and steam for 15-20 min.',
                'Serve hot as a snack.'
            ],
            tips: 'Do not overfill molds for even cooking.'
        },
        {
            id: 'chhattisgarh-chana-rice',
            name: 'Chana Samosa Curry',
            image: 'https://st1.latestly.com/wp-content/uploads/2023/10/Chana-Samosa.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional curry made with black chickpeas, spices, and herbs.',
            ingredients: [
                '1 cup black chickpeas, soaked overnight',
                '2 onions, chopped',
                '2 tomatoes, chopped',
                '1 tsp turmeric powder',
                '1 tsp cumin seeds',
                '2-3 green chilies',
                'Salt and oil as required'
            ],
            instructions: [
                'Boil chickpeas until soft.',
                'Heat oil, sauté cumin seeds, onions, and green chilies.',
                'Add tomatoes, turmeric, and cooked chickpeas, simmer 10 min.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Use fresh herbs like coriander for garnish.'
        },
        {
            id: 'chhattisgarh-chana-jhariya',
            name: 'Chana Jhariya (Spicy Chickpea Stir Fry)',
            image: 'https://th.bing.com/th/id/R.38ed397bc93c8127a04b2bae74edb805?rik=vzwJLbJVslu%2beQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Ji68CK4AcwA%2fVQqcfuqUY_I%2fAAAAAAAADxc%2fz0F39Qdb2tw%2fs1600%2fSpicy%252BChana%252BFry%252B3.JPG&ehk=Okd2HevoZQNg53RThg%2bOBZuFzSuVstX561DYOCRZQOw%3d&risl=&pid=ImgRaw&r=0',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Quick and spicy stir-fried chickpeas, perfect for a snack or side dish.',
            ingredients: [
                '1 cup boiled chickpeas',
                '2 green chilies, chopped',
                '1 tsp mustard seeds',
                '1/2 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard seeds and green chilies.',
                'Add chickpeas, turmeric, and salt, stir-fry 5-7 min.',
                'Serve hot.'
            ],
            tips: 'Use fresh green chilies for authentic spice.'
        },
        {
            id: 'chhattisgarh-til-khoya-ladoo',
            name: 'Til Khoya Ladoo',
            image: 'https://www.whiskaffair.com/wp-content/uploads/2017/02/DSC2160.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet balls made from sesame seeds and khoya, a rich dessert.',
            ingredients: [
                '1 cup sesame seeds',
                '1/2 cup khoya',
                '1/2 cup jaggery or sugar'
            ],
            instructions: [
                'Roast sesame seeds lightly.',
                'Melt jaggery or sugar, add khoya, mix well with sesame seeds.',
                'Shape into small balls and serve.'
            ],
            tips: 'Cool slightly before shaping to avoid sticking.'
        },
        {
            id: 'chhattisgarh-chicken-saag',
            name: 'Chicken Saag (Spinach Chicken Curry)',
            image: 'https://tse3.mm.bing.net/th/id/OIP.NbfaDaRqXyr2KcRMik0QowAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Chicken cooked with fresh spinach and traditional Chhattisgarhi spices.',
            ingredients: [
                '500g chicken, chopped',
                '2 cups spinach, chopped',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2 green chilies',
                '1 tsp turmeric powder',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and green chilies.',
                'Add chicken and turmeric, cook until browned.',
                'Add tomatoes and spinach, simmer 15-20 min until chicken is cooked.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Use fresh spinach for bright color and flavor.'
        },
        {
            id: 'chhattisgarh-poha-ladoo',
            name: 'Poha Ladoo (Flattened Rice Sweet)',
            image: 'https://www.lathiskitchen.org/wp-content/uploads/2018/10/0697A4E3-746C-4C3D-91E4-104C82B9B3D8.jpeg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet balls made from flattened rice, jaggery, and nuts.',
            ingredients: [
                '2 cups poha (flattened rice)',
                '1/2 cup jaggery, grated',
                '1/4 cup chopped nuts',
                '2 tbsp ghee'
            ],
            instructions: [
                'Roast poha lightly in ghee.',
                'Melt jaggery, mix with poha and nuts.',
                'Shape into small balls and serve.'
            ],
            tips: 'Use roasted nuts for added crunch.'
        }
    ]
},
'Goa': {
    title: 'Goan Recipes',
    subtitle: 'Spicy and flavorful dishes from Goa',
    recipes: [
        {
            id: 'goa-fish-curry',
            name: 'Goan Fish Curry',
            image: 'https://1.bp.blogspot.com/-rqiq1yGAWGE/Xb9RN0J9ftI/AAAAAAAAX1g/t0aO_o4VbtM0Q29tyU4SO6X7yLrQFuuzgCLcBGAsYHQ/s1600/goan%2Bfish%2Bcurry%2B17.JPG',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Tangy and spicy Goan fish curry made with coconut milk and tamarind.',
            ingredients: [
                '500g fish pieces',
                '1 cup coconut milk',
                '2 onions, chopped',
                '2 tomatoes, chopped',
                '2 tsp Goan curry paste',
                '2-3 green chilies',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and green chilies.',
                'Add tomatoes and curry paste, cook 5-7 min.',
                'Add fish and coconut milk, simmer 15-20 min.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Use fresh coconut milk for authentic flavor.'
        },
        {
            id: 'goa-prawn-balchao',
            name: 'Prawn Balchao',
            image: 'https://tse1.mm.bing.net/th/id/OIP.4GUfBXHlMHKCYu1HpMV5egHaF-?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Hard',
            servings: '3-4 people',
            description: 'Spicy and tangy Goan prawn pickle-like curry.',
            ingredients: [
                '300g prawns',
                '2 onions, chopped',
                '2 tbsp vinegar',
                '2 tsp chili powder',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and spices.',
                'Add prawns and vinegar, cook until done.',
                'Cool and serve as side dish with rice.'
            ],
            tips: 'Marinate prawns for extra flavor.'
        },
        {
            id: 'goa-xacuti',
            name: 'Chicken Xacuti',
            image: 'https://farm5.staticflickr.com/4184/33938478823_591c7eaccc_o_d.jpg',
            time: '70 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Rich Goan chicken curry with roasted spices and coconut.',
            ingredients: [
                '500g chicken',
                '2 onions, chopped',
                '2 tbsp roasted coconut',
                '2 tsp Xacuti spice mix',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions in oil until golden.',
                'Add chicken and spices, cook 10 min.',
                'Add roasted coconut and water, simmer until chicken is cooked.',
                'Serve hot with rice.'
            ],
            tips: 'Use freshly roasted spices for best aroma.'
        },
        {
            id: 'goa-vegetable-curry',
            name: 'Goan Vegetable Curry',
            image: 'https://th.bing.com/th/id/R.c29b6f66c91aae24df0b1bfa5c9846a0?rik=MlgtZZm0PfIYQA&riu=http%3a%2f%2fwww.sonisfood.com%2fwp-content%2fuploads%2f2018%2f03%2fGoan-Vegetable-Curry-7-1.jpg&ehk=CnQ%2byLLMKMTHEzj0qpAAZSvS0wX5G7e25eBJB%2bf4b2k%3d&risl=&pid=ImgRaw&r=0',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Coconut-based curry with mixed vegetables.',
            ingredients: [
                '1 cup diced vegetables (carrot, beans, peas)',
                '1 cup coconut milk',
                '1 onion, chopped',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, sauté onions and turmeric.',
                'Add vegetables, cook 5 min.',
                'Add coconut milk, simmer until vegetables are tender.',
                'Serve hot with rice.'
            ],
            tips: 'Use fresh vegetables for better flavor and texture.'
        },
        {
            id: 'goa-sorpotel',
            name: 'Goan Pork Sorpotel',
            image: 'https://th.bing.com/th/id/R.f0e4434393b35e7455885062f041ced3?rik=TL9y%2broN%2fGTMQA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-2EFfiHHm8mc%2fVYnY1FjmkYI%2fAAAAAAAABN4%2f8gfiyKQRx7Y%2fs1600%2fSS.jpg&ehk=X%2bzTsz9bUoVnB4A5jOt%2fJGgphznK8jgs5aH3f5Kzf0o%3d&risl=&pid=ImgRaw&r=0',
            time: '90 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy and tangy pork curry, a traditional Goan dish.',
            ingredients: [
                '500g pork, chopped',
                '2 onions, chopped',
                '2 tbsp vinegar',
                '2 tsp chili powder',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Cook pork with turmeric and salt until browned.',
                'Sauté onions and chili powder, add vinegar.',
                'Combine with pork, simmer until tender.',
                'Serve with rice or bread.'
            ],
            tips: 'Marinate pork overnight for deep flavor.'
        },
        {
            id: 'goa-bebinca',
            name: 'Bebinca (Goan Layered Dessert)',
            image: 'https://socialchefpriyanka.com/wp-content/uploads/2023/08/bebinca-featured-goan-desserts.jpg',
            time: '120 min',
            difficulty: 'Hard',
            servings: '6 people',
            description: 'Traditional Goan layered coconut and egg dessert.',
            ingredients: [
                '1 cup coconut milk',
                '1 cup sugar',
                '6 eggs',
                '1/2 cup flour',
                'Ghee for greasing'
            ],
            instructions: [
                'Mix coconut milk, sugar, eggs, and flour to form batter.',
                'Grease pan, pour a thin layer, bake until set.',
                'Repeat layers until batter is finished.',
                'Cool, slice, and serve.'
            ],
            tips: 'Use medium heat for even layers.'
        },
        {
            id: 'goa-cashew-chicken',
            name: 'Cashew Chicken Curry',
            image: 'https://alisonspantry.com.sg/wp-content/uploads/2017/10/Vietnamese-Style-Cashew-Chicken-Curry-MAIN.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Rich chicken curry with ground cashews for creamy texture.',
            ingredients: [
                '500g chicken',
                '1/2 cup cashew nuts, ground',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2 tsp chili powder',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions until golden.',
                'Add chicken and cook 10 min.',
                'Add tomatoes and ground cashews, simmer 20 min.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Soak cashews for smoother paste.'
        },
        {
            id: 'goa-sarapatel',
            name: 'Goan Sarapatel',
            image: 'https://www.bautrip.com/images/food/gulas-food-prague.jpg',
            time: '90 min',
            difficulty: 'Hard',
            servings: '4-5 people',
            description: 'Spicy pork and liver curry cooked with vinegar.',
            ingredients: [
                '500g pork and liver',
                '2 onions, chopped',
                '2 tsp chili powder',
                '2 tbsp vinegar',
                'Salt and oil as required'
            ],
            instructions: [
                'Cook pork and liver with salt and spices until done.',
                'Sauté onions and chili powder, add vinegar.',
                'Combine with meat, simmer 30 min.',
                'Serve with rice or bread.'
            ],
            tips: 'Marinate meat for a few hours for better taste.'
        },
        {
            id: 'goa-sannas',
            name: 'Sannas (Steamed Sweet Rice Cakes)',
            image: 'https://aromaticessence.co/wp-content/uploads/2016/09/IMG_0348.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet fermented rice cakes, often served with curry.',
            ingredients: [
                '2 cups rice flour',
                '1/2 cup coconut milk',
                '1/2 tsp yeast',
                '1/4 cup sugar',
                'Water as required'
            ],
            instructions: [
                'Mix rice flour, coconut milk, sugar, and yeast to form batter.',
                'Let ferment 2-3 hours.',
                'Pour into molds, steam 20-25 min until cooked.',
                'Serve warm.'
            ],
            tips: 'Ensure batter is light and airy for soft texture.'
        }
    
          ]
          
      }, 
      'Haryana': {
    title: 'Haryanvi Recipes',
    subtitle: 'Traditional and rustic dishes from Haryana',
    recipes: [
        {
            id: 'haryana-bajra-roti',
            name: 'Bajra Roti',
            image: 'https://tse2.mm.bing.net/th/id/OIP.gQaWpPQqLwAUe6kWuj1VKAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Traditional pearl millet flatbread, rustic and healthy.',
            ingredients: [
                '2 cups bajra flour',
                'Warm water as required',
                'Salt to taste'
            ],
            instructions: [
                'Mix bajra flour and salt, knead with warm water into dough.',
                'Roll into rotis and cook on hot tawa until done.',
                'Serve with ghee or curry.'
            ],
            tips: 'Serve hot for best taste.'
        },
        {
            id: 'haryana-besan-ladoo',
            name: 'Besan Ladoo',
            image: 'https://3.bp.blogspot.com/-3JIVmqaHWiA/W4OC9Xi2k_I/AAAAAAAAIuI/b_gIiS-e_K4LgRGPHWeiY2xkBvT1CvHrgCLcBGAs/s1600/Besan+Ladoo+Recipe+Festive+Sweet+4.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Sweet balls made from gram flour, ghee, and sugar.',
            ingredients: [
                '1 cup gram flour (besan)',
                '1/2 cup ghee',
                '1/2 cup sugar',
                '1/4 tsp cardamom powder'
            ],
            instructions: [
                'Roast besan in ghee until aromatic.',
                'Add sugar and cardamom, mix well.',
                'Form into small balls and serve.'
            ],
            tips: 'Cool slightly before shaping.'
        },
        {
            id: 'haryana-saag',
            name: 'Sarson ka Saag',
            image: 'https://www.thespruceeats.com/thmb/eNFix30ziI9jYXcqkwmdHcKLNoI=/3863x2578/filters:fill(auto,1)/sarson-ka-saag-makki-ki-roti-popular-north-indian-main-course-menu-usually-prepared-in-winter-season-894138360-5ac8005a43a1030036c6eb5f.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Mustard leaf curry, a winter specialty of Haryana.',
            ingredients: [
                '2 cups mustard greens, chopped',
                '1 onion, chopped',
                '2 green chilies',
                '1 tsp ginger paste',
                'Salt and ghee as required'
            ],
            instructions: [
                'Boil mustard greens, mash lightly.',
                'Sauté onion, ginger, and chilies in ghee, add greens.',
                'Cook 10 min and serve hot with makki ki roti.'
            ],
            tips: 'Add butter for richer flavor.'
        },
        {
            id: 'haryana-bajra-khichdi',
            name: 'Bajra Khichdi',
            image: 'https://recipes.timesofindia.com/photo/73419237.cms',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Nutritious khichdi made from bajra and lentils.',
            ingredients: [
                '1 cup bajra (pearl millet)',
                '1/2 cup moong dal',
                'Salt to taste',
                'Water as required'
            ],
            instructions: [
                'Cook bajra and moong dal with water and salt until soft.',
                'Serve hot with ghee.'
            ],
            tips: 'Use pressure cooker for faster cooking.'
        },
        {
            id: 'haryana-murg-korma',
            name:'Haryanvi Chicken Korma',
            image:'https://tse3.mm.bing.net/th/id/OIP.dCPbVYqIEtWdrIqglzwZpwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rich chicken curry with yogurt and spices.',
            ingredients: [
                '500g chicken',
                '1 cup yogurt',
                '1 onion, chopped',
                '2 tsp ginger-garlic paste',
                '2 tsp garam masala',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and ginger-garlic paste in oil.',
                'Add chicken and cook 10 min.',
                'Add yogurt and garam masala, simmer until chicken is cooked.',
                'Serve hot with roti or rice.'
            ],
            tips: 'Cook on low flame for tender chicken.'
        },
        {
            id: 'haryana-paneer-butter-masala',
            name: 'Paneer Butter Masala',
            image: 'https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES-819x1024.jpeg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Creamy tomato-based paneer curry, popular in Haryana households.',
            ingredients: [
                '200g paneer, cubed',
                '2 tomatoes, pureed',
                '2 tbsp cream',
                '1 tsp ginger-garlic paste',
                'Salt and butter as required'
            ],
            instructions: [
                'Sauté ginger-garlic paste in butter.',
                'Add tomato puree and cook 5-7 min.',
                'Add paneer and cream, simmer 5 min.',
                'Serve hot with roti or naan.'
            ],
            tips: 'Add kasuri methi for extra flavor.'
        },
        {
            id: 'haryana-lassi',
            name: 'Sweet Lassi',
            image: 'https://rachnas-kitchen.com/wp-content/uploads/2015/07/lassi-700x932.jpg',
            time: '10 min',
            difficulty: 'Easy',
            servings: '2-3 people',
            description: 'Refreshing yogurt-based sweet drink.',
            ingredients: [
                '2 cups yogurt',
                '1/2 cup sugar',
                '1/2 tsp cardamom powder',
                'Ice cubes as required'
            ],
            instructions: [
                'Blend yogurt, sugar, and cardamom until smooth.',
                'Serve chilled with ice cubes.'
            ],
            tips: 'Adjust sugar according to taste.'
        },
        {
            id: 'haryana-gajar-halwa',
            name: 'Gajar Halwa',
            image: 'https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Carrot-based sweet dessert with milk, sugar, and ghee.',
            ingredients: [
                '4-5 large carrots, grated',
                '1 cup milk',
                '1/2 cup sugar',
                '2 tbsp ghee',
                'Nuts for garnish'
            ],
            instructions: [
                'Cook grated carrots in milk until soft.',
                'Add sugar and ghee, cook until mixture thickens.',
                'Garnish with nuts and serve warm.'
            ],
            tips: 'Use fresh carrots for better sweetness.'
        },
        {
            id: 'haryana-bajre-ki-kheer',
            name: 'Bajre Ki Kheer',
            image: 'https://purendesi.in/wp-content/uploads/2024/08/Bajre-ki-kheer.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Sweet pudding made from pearl millet and milk.',
            ingredients: [
                '1 cup bajra (pearl millet), roasted',
                '4 cups milk',
                '1/2 cup sugar',
                '2 tbsp ghee',
                'Cardamom powder as required'
            ],
            instructions: [
                'Cook roasted bajra in milk until soft.',
                'Add sugar, ghee, and cardamom, simmer 10 min.',
                'Serve warm or chilled.'
            ],
            tips: 'Stir constantly to prevent sticking.'
        }
    ]
},
'Himachal-Pradesh': {
    title: 'Himachal Pradesh Recipes',
    subtitle: 'Traditional and flavorful dishes from Himachal Pradesh',
    recipes: [
        {
            id: 'himachal-dham',
            name: 'Dham',
            image: 'https://media.istockphoto.com/photos/dham-traditional-food-of-himachal-pradesh-himachali-kangri-dham-thali-picture-id1421270274?k=20&m=1421270274&s=170667a&w=0&h=vbHvjUPAqrZJvxJdVhcGdgMOI6StBLPu2TtcJH4S7A4=',
            time: '120 min',
            difficulty: 'Hard',
            servings: '6-8 people',
            description: 'Festive traditional meal consisting of rice, dal, and kadhi, usually served during celebrations.',
            ingredients: [
                '1 cup rice',
                '1 cup mixed lentils',
                'Spices (turmeric, chili, salt)',
                'Ghee and oil as required'
            ],
            instructions: [
                'Cook lentils with spices and ghee.',
                'Prepare kadhi separately.',
                'Serve with plain rice and pickles.'
            ],
            tips: 'Traditionally cooked in earthen pots for authentic taste.'
        },
        {
            id: 'himachal-chana-dal',
            name: 'Chana Dal with Spinach',
            image: 'https://mandala.food/wp-content/uploads/2023/07/Chana-Dal-and-Spinach.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Nutritious lentil curry with fresh spinach.',
            ingredients: [
                '1 cup chana dal',
                '2 cups spinach, chopped',
                '1 onion, chopped',
                '1 tsp cumin seeds',
                'Salt and oil as required'
            ],
            instructions: [
                'Cook chana dal until soft.',
                'Sauté onion and cumin seeds, add spinach.',
                'Combine with cooked dal, simmer 10 min.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Use fresh spinach for better color and flavor.'
        },
        {
            id: 'himachal-chicken-kadhi',
            name: 'Chicken Kadhi',
            image: 'https://kingofspices.co.nz/wp-content/uploads/2023/10/Kadai-Chicken.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Himachali style chicken curry with yogurt base and mild spices.',
            ingredients: [
                '500g chicken',
                '1 cup yogurt',
                '1 onion, chopped',
                '1 tsp ginger-garlic paste',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onion and ginger-garlic paste in oil.',
                'Add chicken, cook 10 min.',
                'Add yogurt and simmer until chicken is tender.',
                'Serve with rice.'
            ],
            tips: 'Use fresh yogurt for creamy texture.'
        },
        {
            id: 'himachal-tudkiya-bhat',
            name: 'Tudkiya Bhat',
            image: 'https://www.tripbeam.com/blog/wp-content/uploads/2023/06/Tudkiya-Bhath.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed rice cooked with lentils, yogurt, and spices.',
            ingredients: [
                '1 cup rice',
                '1/2 cup yellow lentils',
                '1/2 cup yogurt',
                'Spices and ghee as required'
            ],
            instructions: [
                'Cook rice and lentils together.',
                'Add yogurt and spices, simmer 10 min.',
                'Serve hot garnished with ghee.'
            ],
            tips: 'Use medium heat to prevent sticking.'
        },
        {
            id: 'himachal-chana-chowkha',
            name: 'Chana Chowkha',
            image: 'https://www.cookwithkushi.com/wp-content/uploads/2020/02/chana_masala_punjabi_chole.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Spicy black chickpea stir fry, a simple Himachali dish.',
            ingredients: [
                '1 cup boiled black chickpeas',
                '1 onion, chopped',
                '2 green chilies',
                '1 tsp mustard seeds',
                'Salt and oil as required'
            ],
            instructions: [
                'Heat oil, add mustard seeds and onions.',
                'Add boiled chickpeas and chilies, sauté 10 min.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Use fresh green chilies for authentic taste.'
        },
        {
            id: 'himachal-tribeni-ladoo',
            name: 'Tribeni Ladoo',
            image: 'https://nishamadhulika.com/imgpst/featured/til_gur_besan_laddu.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet Himachali ladoos made from gram flour, jaggery, and coconut.',
            ingredients: [
                '1 cup gram flour',
                '1/2 cup jaggery',
                '1/4 cup grated coconut',
                '2 tbsp ghee'
            ],
            instructions: [
                'Roast gram flour and coconut in ghee.',
                'Add jaggery, mix well and shape into ladoos.',
                'Serve at room temperature.'
            ],
            tips: 'Cool slightly before shaping to avoid sticking.'
        },
        {
            id: 'himachal-andele-ke-kofte',
            name: 'Andele Ke Kofte (Egg Kofta Curry)',
            image: 'https://i.ytimg.com/vi/ZYj-mdpHl6c/maxresdefault.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Egg balls cooked in flavorful Himachali curry.',
            ingredients: [
                '4 boiled eggs',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '1 tsp ginger-garlic paste',
                'Salt and oil as required'
            ],
            instructions: [
                'Mash eggs, form balls.',
                'Prepare onion-tomato gravy with spices.',
                'Add egg balls, simmer 10 min.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Do not overcook egg balls in gravy to prevent cracking.'
        },
        {
            id: 'himachal-apple-halwa',
            name: 'Apple Halwa',
            image: 'https://tse2.mm.bing.net/th/id/OIP.3YI4FGtpbbqS3jFTpE4kxwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Himachali dessert made from local apples, ghee, and sugar.',
            ingredients: [
                '2 cups peeled and chopped apples',
                '1/2 cup sugar',
                '2 tbsp ghee',
                '1/4 tsp cardamom powder'
            ],
            instructions: [
                'Cook apples in ghee until soft.',
                'Add sugar and cardamom, cook until mixture thickens.',
                'Serve warm.'
            ],
            tips: 'Use tart Himachali apples for authentic taste.'
        },
        {
            id: 'himachal-chana-gud-ladoo',
            name: 'Chana Gud Ladoo',
            image: 'https://i.ytimg.com/vi/L-E76dodezI/oardefault.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDlZsls3tjFu6RcsGCLjEa1mAbWRQ',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet made from roasted chickpeas and jaggery, popular in Himachal.',
            ingredients: [
                '1 cup roasted chickpeas',
                '1/2 cup jaggery, grated',
                '2 tbsp ghee'
            ],
            instructions: [
                'Grind roasted chickpeas to coarse powder.',
                'Mix with melted jaggery and ghee, form balls.',
                'Serve at room temperature.'
            ],
            tips: 'Cool slightly before shaping.'
        }
    ]
},
'Jharkhand': {
    title: 'Jharkhand Recipes',
    subtitle: 'Authentic and rustic dishes from Jharkhand',
    recipes: [
        {
            id: 'jharkhand-dhokar-dalna',
            name: 'Dhokar Dalna',
            image: 'https://1.bp.blogspot.com/-kVGK4-a4PeM/WCyfrOQBmbI/AAAAAAAAK7A/aZ0fY90v41Qrx8HLLy2eK1zMxS1Zdt5lgCLcB/s1600/dhokar-dalna3.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Fried lentil cakes cooked in spicy gravy.',
            ingredients: [
                '1 cup chana dal',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Soak and grind dal to form dough.',
                'Shape into cakes, fry until golden.',
                'Prepare onion-tomato gravy, add fried cakes, simmer 10 min.',
                'Serve hot with rice.'
            ],
            tips: 'Cool cakes slightly before adding to gravy.'
        },
        {
            id: 'jharkhand-thekua',
            name: 'Thekua',
            image: 'https://static.vecteezy.com/system/resources/previews/016/283/640/large_2x/thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh-bihar-and-jharkhand-offering-for-the-chhat-festival-free-photo.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Sweet deep-fried Jharkhand snack made from wheat flour and jaggery.',
            ingredients: [
                '1 cup wheat flour',
                '1/2 cup jaggery',
                '2 tbsp ghee',
                'Cardamom powder as required'
            ],
            instructions: [
                'Mix flour, jaggery, and ghee to form dough.',
                'Shape into small discs, deep fry until golden.',
                'Cool and serve.'
            ],
            tips: 'Use low-medium heat to avoid burning.'
        },
        {
            id: 'jharkhand-litti-chokha',
            name: 'Litti Chokha',
            image: 'https://3.bp.blogspot.com/-_FfX3NziQfk/WkLy1kW43sI/AAAAAAAAWr8/zRdL3e8uWt8Ipz_2P0EaM15igEJ8tT5NACLcBGAs/s1600/2.JPG',
            time: '90 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Baked wheat balls stuffed with sattu served with mashed vegetables.',
            ingredients: [
                '1 cup wheat flour',
                '1/2 cup sattu (roasted gram flour)',
                '1 tsp spices (cumin, chili, salt)',
                'Oil as required'
            ],
            instructions: [
                'Prepare dough with wheat flour, stuff with spiced sattu.',
                'Bake or roast until golden brown.',
                'Serve with mashed potato and tomato chokha.'
            ],
            tips: 'Use ghee while stuffing for richer taste.'
        },
        {
            id: 'jharkhand-dalma',
            name: 'Dalma',
            image: 'https://www.seema.com/wp-content/uploads/2022/04/Dalma-recipe.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Lentil and vegetable stew with traditional Jharkhand spices.',
            ingredients: [
                '1 cup lentils',
                '1 cup mixed vegetables',
                '1 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Cook lentils and vegetables with turmeric and salt.',
                'Tempering with oil and spices, combine and simmer 10 min.',
                'Serve hot with rice.'
            ],
            tips: 'Use seasonal vegetables for best taste.'
        },
        {
            id: 'jharkhand-chicken-curry',
            name: 'Jharkhand Chicken Curry',
            image: 'https://buddymantra.com/wp-content/uploads/2020/07/Mutton-Curry-Lamb-Curry-560x839.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spicy chicken curry made with aromatic Jharkhand spices.',
            ingredients: [
                '500g chicken',
                '1 onion, chopped',
                '2 tomatoes, chopped',
                '2 tsp ginger-garlic paste',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and ginger-garlic paste.',
                'Add chicken and cook 10 min.',
                'Add tomatoes, simmer until chicken is cooked.',
                'Serve hot with rice.'
            ],
            tips: 'Use medium heat to retain moisture.'
        },
        {
            id: 'jharkhand-handia',
            name: 'Handia (Rice Beer)',
            image: 'https://www.datocms-assets.com/75079/1723751175-style-school-sticky-rice-beer-1.jpg',
            time: '1440 min',
            difficulty: 'Hard',
            servings: '6-8 people',
            description: 'Traditional fermented rice beverage, mildly alcoholic.',
            ingredients: [
                '2 cups rice',
                'Handia starter culture',
                'Water as required'
            ],
            instructions: [
                'Cook rice and mix with starter culture.',
                'Keep in warm place for 1-2 days to ferment.',
                'Serve chilled.'
            ],
            tips: 'Use clean utensils to prevent contamination.'
        },
        {
            id: 'jharkhand-imarti',
            name: 'Imarti',
            image: 'https://th.bing.com/th/id/R.dcb7f662117f40d2fd7174594fb83c08?rik=zhsQJQ8vVsdSEA&riu=http%3a%2f%2fwww.indianrecipeinfo.com%2fwp-content%2fuploads%2f2011%2f11%2fImarti.jpg&ehk=pqMNAcCtWjWdWFR2YOj6ZliVwHpzlcY0dYFguf4K0Gg%3d&risl=&pid=ImgRaw&r=0',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Deep-fried sweet made from urad dal flour, soaked in sugar syrup.',
            ingredients: [
                '1 cup urad dal flour',
                '1 cup sugar',
                'Water as required',
                'Oil for frying'
            ],
            instructions: [
                'Make thick batter, pipe into hot oil in circular shapes.',
                'Fry until golden, soak in sugar syrup 5 min.',
                'Serve warm.'
            ],
            tips: 'Use medium heat for even frying.'
        },
        {
            id: 'jharkhand-ladoo',
            name: 'Chana Dal Ladoo',
            image: 'https://img-global.cpcdn.com/recipes/3c92842b6c8e8a91/1200x630cq70/photo.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet balls made from roasted chana dal and jaggery.',
            ingredients: [
                '1 cup roasted chana dal',
                '1/2 cup jaggery',
                '2 tbsp ghee'
            ],
            instructions: [
                'Grind chana dal coarsely.',
                'Mix with melted jaggery and ghee, form balls.',
                'Serve at room temperature.'
            ],
            tips: 'Cool slightly before shaping.'
        },
        {
            id: 'jharkhand-kheer',
            name: 'Rice Kheer',
            image:'https://www.thedeliciouscrescent.com/wp-content/uploads/2020/07/Rice-Kheer-3.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet pudding made from rice, milk, sugar, and cardamom.',
            ingredients: [
                '1 cup rice',
                '4 cups milk',
                '1/2 cup sugar',
                'Cardamom powder and nuts as garnish'
            ],
            instructions: [
                'Cook rice in milk until soft.',
                'Add sugar and cardamom, simmer 10 min.',
                'Garnish with nuts and serve.'
            ],
            tips: 'Stir frequently to prevent sticking.'
        }
    ]
},
'Karnataka': {
    title: 'Karnataka Recipes',
    subtitle: 'Flavorsome and diverse dishes from Karnataka',
    recipes: [
        {
            id: 'karnataka-bisi-bele-bath',
            name: 'Bisi Bele Bath',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy lentil-rice dish, signature of Karnataka cuisine.',
            ingredients: [
                '1 cup rice',
                '1/2 cup toor dal',
                'Spices (turmeric, chili, garam masala)',
                'Ghee as required'
            ],
            instructions: [
                'Cook rice and dal together with spices.',
                'Add ghee and garnish with coriander.',
                'Serve hot.'
            ],
            tips: 'Add fried cashews for crunchy texture.'
        },
        {
            id: 'karnataka-ragi-mudde',
            name: 'Ragi Mudde',
            image: 'https://www.sharmispassions.com/wp-content/uploads/2019/06/ragi-mudde5.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Finger millet balls, a staple food in Karnataka.',
            ingredients: [
                '1 cup ragi flour',
                '2 cups water',
                'Salt as required'
            ],
            instructions: [
                'Boil water with salt, gradually add ragi flour while stirring.',
                'Cook until thick, shape into balls.',
                'Serve with sambar or curry.'
            ],
            tips: 'Use medium heat and stir constantly to avoid lumps.'
        },
        {
            id: 'karnataka-mysore-pak',
            name: 'Mysore Pak',
            image: 'https://thefoodietravels.com/wp-content/uploads/2023/06/Mysore-Pak-is-a-1.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Rich and buttery gram flour sweet from Mysore.',
            ingredients: [
                '1 cup gram flour',
                '1 cup ghee',
                '1 cup sugar'
            ],
            instructions: [
                'Roast gram flour in ghee until aromatic.',
                'Add sugar syrup, cook until thick.',
                'Pour into greased tray, cool and cut into pieces.'
            ],
            tips: 'Use generous ghee for authentic texture.'
        },
        {
            id: 'karnataka-masala-dosa',
            name: 'Masala Dosa',
            image: 'https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa-1024x683.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '2-3 people',
            description: 'Crispy rice crepe filled with spicy potato filling.',
            ingredients: [
                '1 cup rice, soaked',
                '1/4 cup urad dal, soaked',
                '2 potatoes, boiled and mashed',
                'Spices and oil as required'
            ],
            instructions: [
                'Grind rice and dal into batter, ferment 6-8 hours.',
                'Prepare potato masala with spices.',
                'Cook dosa on hot griddle, fill with potato masala.',
                'Serve with chutney and sambar.'
            ],
            tips: 'Use medium heat for crisp dosa.'
        },
        {
            id: 'karnataka-koddel',
            name: 'Koddel (Vegetable Stew)',
            image: 'https://carameltintedlife.com/wp-content/uploads/2022/02/kerala-vegetable-stew-ishtew-5-720x720.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Mild vegetable curry with coconut milk from Malnad region.',
            ingredients: [
                '1 cup mixed vegetables',
                '1 cup coconut milk',
                '1 tsp ginger-garlic paste',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté vegetables with ginger-garlic paste.',
                'Add coconut milk, simmer until vegetables are tender.',
                'Serve hot with rice.'
            ],
            tips: 'Use fresh coconut milk for authentic flavor.'
        },
        {
            id: 'karnataka-benne-masala-dosa',
            name: 'Benne Masala Dosa',
            image: 'https://th.bing.com/th/id/R.c2c898d86f202d76b24f3592622c2af6?rik=XnpGlbjNEReuOA&riu=http%3a%2f%2fwww.vegrecipesofindia.com%2fwp-content%2fuploads%2f2016%2f01%2fbenne-dosa-davangere-style.jpg&ehk=jGC%2fSRHtrSo0%2fmoYALjjQuVijwWZ7k3AVQcdilJn02I%3d&risl=&pid=ImgRaw&r=0',
            time: '60 min',
            difficulty: 'Medium',
            servings: '2-3 people',
            description: 'Butter-laden masala dosa from Karnataka.',
            ingredients: [
                'Dosa batter',
                'Potato masala',
                'Generous butter'
            ],
            instructions: [
                'Pour batter on griddle, cook till golden.',
                'Spread butter, fill with potato masala.',
                'Serve hot.'
            ],
            tips: 'Use unsalted butter for authentic taste.'
        },
        {
            id: 'karnataka-neer-dosa',
            name: 'Neer Dosa',
            image: 'https://www.idfreshfood.com/wp-content/uploads/2020/12/afeafe.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Thin, soft rice crepe from coastal Karnataka.',
            ingredients: [
                '1 cup rice, soaked',
                'Salt and water as required'
            ],
            instructions: [
                'Grind rice with water to thin batter, ferment 2-3 hours.',
                'Pour thin layer on hot griddle, cook 1-2 min.',
                'Serve with coconut chutney or curry.'
            ],
            tips: 'Batter should be very thin for soft dosa.'
        },
        {
            id: 'karnataka-coconut-ladoo',
            name: 'Coconut Ladoo',
            image: 'https://aromaticessence.co/wp-content/uploads/2021/07/coconut_laddu_4.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet balls made from grated coconut and condensed milk.',
            ingredients: [
                '2 cups grated coconut',
                '1 cup condensed milk',
                'Cardamom powder as required'
            ],
            instructions: [
                'Cook coconut with condensed milk until mixture thickens.',
                'Cool slightly, shape into balls.',
                'Serve at room temperature.'
            ],
            tips: 'Cool before shaping to prevent sticking.'
        },
        {
            id: 'karnataka-obattu',
            name: 'Obattu / Holige',
            image: 'https://img.freepik.com/premium-photo/puran-poli-puran-roti-holige-obbattu-bobbattlu-is-indian-sweet-flatbread-from-maharashtra_466689-88917.jpg?w=2000',
            time: '90 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet stuffed flatbread, popular festival dessert.',
            ingredients: [
                'Wheat flour dough',
                'Sweet filling (chana dal + jaggery)',
                'Ghee for cooking'
            ],
            instructions: [
                'Roll dough, fill with sweet mixture, fold and roll again.',
                'Cook on tawa with ghee until golden.',
                'Serve warm.'
            ],
            tips: 'Ensure filling is dry to prevent leakage while cooking.'
        }
    ]
},
'Kerala': {
    title: 'Kerala Recipes',
    subtitle: 'Flavorful and coconut-rich dishes from Kerala',
    recipes: [
        {
            id: 'kerala-appam',
            name: 'Appam',
            image: 'https://vismaifood.com/storage/app/uploads/public/8a4/fe0/5c0/thumb__1200_0_0_0_auto.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Soft and fluffy rice pancake, perfect for breakfast.',
            ingredients: [
                '1 cup rice, soaked',
                '1/4 cup cooked rice',
                '1/2 tsp yeast',
                'Salt as required'
            ],
            instructions: [
                'Grind soaked rice with cooked rice and yeast into batter.',
                'Ferment 6-8 hours.',
                'Pour on hot pan, cook till edges crisp and center soft.',
                'Serve with stew or curry.'
            ],
            tips: 'Use medium heat for best texture.'
        },
        {
            id: 'kerala-puttu',
            name: 'Puttu',
            image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/05/09075733/Puttu-and-Kadala-curry.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Steamed rice flour layered with coconut, a breakfast specialty.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup grated coconut',
                'Water and salt as required'
            ],
            instructions: [
                'Mix rice flour with water and salt to crumbly texture.',
                'Layer rice flour and coconut in puttu maker.',
                'Steam 10-12 min, serve with banana or curry.'
            ],
            tips: 'Use fresh coconut for authentic flavor.'
        },
        {
            id: 'kerala-fish-molee',
            name: 'Fish Molee',
            image: 'https://1.bp.blogspot.com/-ZNzYTeDrxyw/Xgksk4TlIwI/AAAAAAAAYVc/SMrhlUluGaUenpGTUoUAoSQdg-smg4WYQCLcBGAsYHQ/s1600/fish%2Bmolly%2B2.JPG',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Kerala-style fish curry in coconut milk, mildly spiced.',
            ingredients: [
                '500g fish',
                '1 onion, chopped',
                '1 tsp ginger-garlic paste',
                '1 cup coconut milk',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and ginger-garlic paste.',
                'Add fish and lightly fry.',
                'Pour coconut milk, simmer until fish cooked.',
                'Serve with rice.'
            ],
            tips: 'Do not boil coconut milk to prevent curdling.'
        },
        {
            id: 'kerala-vegetable-stew',
            name: 'Vegetable Stew',
            image: 'https://lifemadesweeter.com/wp-content/uploads/Whole30-Vegan-Stew-Recipe-Photo-Vegan-Keto-Whole30.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Mild curry made with coconut milk and vegetables.',
            ingredients: [
                '1 cup mixed vegetables',
                '1 cup coconut milk',
                '1 tsp ginger, chopped',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté ginger and vegetables.',
                'Add coconut milk and simmer 10-15 min.',
                'Serve hot with appam or idiyappam.'
            ],
            tips: 'Use tender vegetables for best flavor.'
        },
        {
            id: 'kerala-beef-ulla-masala',
            name: 'Beef Ulla Masala',
            image: 'https://tasteasianfood.com/wp-content/uploads/2023/06/beef-masala-5-recipe-square.jpeg.webp',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spicy Kerala-style beef curry with onions and coconut.',
            ingredients: [
                '500g beef',
                '2 onions, chopped',
                '2 tsp ginger-garlic paste',
                '2 tsp chili powder',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and ginger-garlic paste.',
                'Add beef and cook until brown.',
                'Add spices, simmer till tender.',
                'Serve hot with rice.'
            ],
            tips: 'Cook slowly for tender beef.'
        },
        {
            id: 'kerala-kappa-biryani',
            name: 'Kappa Biryani (Tapioca Biryani)',
            image: 'https://lh4.ggpht.com/_OGMa3JuKVTk/TbUXSyrHuNI/AAAAAAAAGKA/OgfxpqoaeWk/DSC_0209_thumb25.jpg?imgmax=800',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Kerala-style biryani made with boiled tapioca and spices.',
            ingredients: [
                '2 cups boiled tapioca',
                '1 onion, chopped',
                '2 tsp chili powder',
                '1 tsp garam masala',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and spices.',
                'Add tapioca, mix gently, cook 10 min.',
                'Serve hot with coconut chutney.'
            ],
            tips: 'Do not mash tapioca while cooking.'
        },
        {
            id: 'kerala-ela-ada',
            name: 'Ela Ada',
            image: 'https://tse1.mm.bing.net/th/id/OIP.pSmn_TFTJ0jQ4u9Du8wEuwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Steamed rice flour dumplings with jaggery and coconut, wrapped in banana leaves.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup grated coconut',
                '1/4 cup jaggery',
                'Banana leaves for wrapping'
            ],
            instructions: [
                'Prepare rice flour dough.',
                'Mix coconut and jaggery for filling.',
                'Wrap in banana leaves, steam 10-12 min.',
                'Serve warm.'
            ],
            tips: 'Use fresh banana leaves for aroma.'
        },
        {
            id: 'kerala-palada-payasam',
            name: 'Palada Payasam',
            image: 'https://images.slurrp.com/prod/recipe_images/transcribe/set%209/Palada-Payasam.webp',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rice ada cooked in milk and sugar, a classic Kerala dessert.',
            ingredients: [
                '1/2 cup rice ada',
                '3 cups milk',
                '1/2 cup sugar',
                '2 tbsp ghee'
            ],
            instructions: [
                'Cook ada in milk until soft.',
                'Add sugar and ghee, simmer 5-7 min.',
                'Serve warm or chilled.'
            ],
            tips: 'Use full-fat milk for rich taste.'
        },
        {
            id: 'kerala-unniyappam',
            name: 'Unniyappam',
            image: 'https://vaya.in/recipes/wp-content/uploads/2018/11/Unniyappam-Recipe.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Small sweet fried dumplings made from rice flour, jaggery, and banana.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup jaggery',
                '1 ripe banana, mashed',
                'Oil for frying'
            ],
            instructions: [
                'Mix all ingredients into batter.',
                'Deep fry small portions until golden.',
                'Serve warm.'
            ],
            tips: 'Use medium heat to cook evenly.'
        }
    ]
},
'Madhya-Pradesh': {
    title: 'Madhya Pradesh Recipes',
    subtitle: 'Hearty and traditional dishes from Madhya Pradesh',
    recipes: [
        {
            id: 'mp-bafla',
            name: 'Bafla',
            image: 'https://tse1.mm.bing.net/th/id/OIP.wZxereJEMCTF_iPbQsYb9AHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Wheat flour balls, boiled and then roasted, served with ghee and dal.',
            ingredients: [
                '1 cup wheat flour',
                '1/4 tsp salt',
                'Water for kneading',
                'Ghee for serving'
            ],
            instructions: [
                'Knead flour with water to form dough.',
                'Shape into balls, boil until cooked.',
                'Roast on tawa, serve with dal and ghee.'
            ],
            tips: 'Serve hot for authentic taste.'
        },
        {
            id: 'mp-poha',
            name: 'Poha',
            image: 'https://pipingpotcurry.com/wp-content/uploads/2020/12/Poha-Recipe-indori-Piping-Pot-Curry.jpg',
            time: '25 min',
            difficulty: 'Easy',
            servings: '2-3 people',
            description: 'Flattened rice cooked with onions, green chilies, and peanuts.',
            ingredients: [
                '1 cup poha (flattened rice)',
                '1 onion, chopped',
                '2 green chilies, chopped',
                '2 tbsp peanuts',
                'Salt and oil as required'
            ],
            instructions: [
                'Rinse poha and drain.',
                'Sauté onions, chilies, and peanuts in oil.',
                'Add poha, salt, mix well, cook 2-3 min.',
                'Serve hot.'
            ],
            tips: 'Sprinkle lemon juice for tangy flavor.'
        },
        {
            id: 'mp-chhena-poda',
            name: 'Chhena Poda',
            image: 'https://gayathriscookspot.com/wp-content/uploads/2023/05/Chenna-Poda-3.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Baked cottage cheese dessert, sweet and spongy.',
            ingredients: [
                '250g chhena (cottage cheese)',
                '1/2 cup sugar',
                '2 tbsp semolina',
                'Cardamom powder as required'
            ],
            instructions: [
                'Mix chhena with sugar, semolina, and cardamom.',
                'Bake at 180°C for 30-35 min.',
                'Cool and serve.'
            ],
            tips: 'Use fresh chhena for soft texture.'
        },
        {
            id: 'mp-rogan-josh',
            name: 'Rogan Josh',
            image: 'https://recipes.timesofindia.com/photo/53192600.cms',
            time: '80 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy mutton curry rich in aromatic spices.',
            ingredients: [
                '500g mutton',
                '2 onions, chopped',
                '2 tsp ginger-garlic paste',
                '1 tsp chili powder, 1/2 tsp turmeric',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and ginger-garlic paste.',
                'Add mutton and spices, cook 10 min.',
                'Add water, simmer 60 min until tender.',
                'Serve hot.'
            ],
            tips: 'Cook slowly for tender meat.'
        },
        {
            id: 'mp-korma',
            name: 'Mutton Korma',
            image: 'https://recipes.timesofindia.com/thumb/52554168.cms?imgsize=572669&width=800&height=800',
            time: '70 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rich and creamy mutton curry with yogurt and nuts.',
            ingredients: [
                '500g mutton',
                '1/2 cup yogurt',
                '2 onions, fried',
                'Spices as required',
                'Salt and oil'
            ],
            instructions: [
                'Blend fried onions with yogurt and spices.',
                'Cook mutton with this paste until tender.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Use low flame for rich flavor.'
        },
        {
            id: 'mp-sev-tamatar',
            name: 'Sev Tamatar',
            image: 'https://th.bing.com/th/id/R.7a0a5d571b1f1d23ce61b02655974c05?rik=kQbov%2bqVHiM%2blw&riu=http%3a%2f%2fwww.vegrecipesofindia.com%2fwp-content%2fuploads%2f2014%2f12%2fsev-tamatar-recipe.jpg&ehk=jdU2Ae3Z3kqAlyQ%2b2ohNy8RJL8B37SR1rvnbhpKNY30%3d&risl=&pid=ImgRaw&r=0',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tomato curry topped with crispy gram flour noodles.',
            ingredients: [
                '2 tomatoes, pureed',
                '1 cup sev (fried gram flour noodles)',
                '1 tsp spices',
                'Salt and oil'
            ],
            instructions: [
                'Cook tomato puree with spices.',
                'Pour over sev, serve hot.'
            ],
            tips: 'Add sev just before serving to retain crispiness.'
        },
        {
            id: 'mp-bhutte-ka-khees',
            name: 'Bhutte ka Khees',
            image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/bhutte-ka-kees-recipe-1.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Grated corn cooked with spices, popular in MP.',
            ingredients: [
                '2 cups grated corn',
                '1 tsp ginger paste',
                '1 tsp chili powder',
                'Salt and oil'
            ],
            instructions: [
                'Cook corn with spices until soft.',
                'Serve warm.'
            ],
            tips: 'Use fresh corn for sweetness.'
        },
        {
            id: 'mp-malai-gulab',
            name: 'Malai Gulab',
            image: 'https://candidtreat.com/wp-content/uploads/2021/10/Cream-gulab-jamun-recipe-6-scaled-1.jpeg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Soft milk-based dessert soaked in sugar syrup.',
            ingredients: [
                '1 cup milk',
                '1/2 cup sugar',
                '2 tbsp ghee'
            ],
            instructions: [
                'Prepare dough from milk and ghee, shape balls.',
                'Fry and soak in sugar syrup.',
                'Serve warm.'
            ],
            tips: 'Do not overcook milk while making dough.'
        },
        {
            id: 'mp-petha',
            name: 'Petha',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4HzY19T4tTymI2qgUOUCj0tDmlKwJD4xg4jIr-PDx5t52juh1nQsPR-P8DCiFUob_Uu2KyeWbGt17B4075keDpmA0GH1ORtsliR0RlRxQKIpJHC56hyphenhyphenn9sEniOhY8AsHfCIYVuRzcDk0/w1200-h630-p-k-no-nu/68_Petha.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Sweet made from ash gourd, soft and translucent.',
            ingredients: [
                '1 cup ash gourd, peeled',
                '1 cup sugar',
                '1/2 tsp cardamom'
            ],
            instructions: [
                'Boil ash gourd until soft.',
                'Cook with sugar and cardamom until translucent.',
                'Cool and serve.'
            ],
            tips: 'Soak in syrup for better taste.'
        }
    ]
},
'Maharashtra': {
    title: 'Maharashtra Recipes',
    subtitle: 'Traditional Maharashtrian cuisine with a mix of flavors',
    recipes: [
        {
            id: 'maharashtra-puran-poli',
            name: 'Puran Poli',
            image: 'https://tse1.mm.bing.net/th/id/OIP.D9ybaEqeCqcF7CJgY_Z2nQHaKC?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Sweet flatbread stuffed with lentil and jaggery filling.',
            ingredients: [
                '1 cup chana dal, cooked',
                '1/2 cup jaggery',
                '2 cups wheat flour',
                'Ghee for cooking'
            ],
            instructions: [
                'Prepare sweet chana dal filling.',
                'Stuff in wheat flour dough, roll flat.',
                'Cook on tawa with ghee until golden.',
                'Serve warm.'
            ],
            tips: 'Ensure filling is dry for easy rolling.'
        },
        {
            id: 'maharashtra-vada-pav',
            name: 'Vada Pav',
            image: 'https://tse1.mm.bing.net/th/id/OIP.UoMdRCrgOp_sn0N1o9T35wHaLG?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '2-3 people',
            description: 'Spicy potato fritter sandwiched in bread, Mumbai street food.',
            ingredients: [
                '2 potatoes, boiled',
                '1 cup gram flour',
                'Spices as required',
                'Pav (bread buns), oil for frying'
            ],
            instructions: [
                'Mash potatoes with spices, shape into balls.',
                'Coat in gram flour batter, deep fry.',
                'Serve in pav with chutney.'
            ],
            tips: 'Serve hot for best taste.'
        },
        {
            id: 'maharashtra-poha',
            name: 'Poha',
            image: 'https://i.pinimg.com/originals/27/01/1a/27011a33efb0da3ba63c33ed0a463c09.jpg',
            time: '20 min',
            difficulty: 'Easy',
            servings: '2-3 people',
            description: 'Flattened rice cooked with onions, green chilies, and peanuts.',
            ingredients: [
                '1 cup poha',
                '1 onion, chopped',
                '2 green chilies, chopped',
                '2 tbsp peanuts',
                'Salt and oil as required'
            ],
            instructions: [
                'Rinse poha, drain.',
                'Sauté onions, chilies, peanuts in oil.',
                'Add poha, salt, cook 2-3 min.',
                'Serve hot with lemon.'
            ],
            tips: 'Add fresh coriander for aroma.'
        },
        {
            id: 'maharashtra-misal-pav',
            name: 'Misal Pav',
            image: 'https://tse2.mm.bing.net/th/id/OIP.HHDz9QdhThCLI2vSwdRBRAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy sprouted bean curry served with pav.',
            ingredients: [
                '1 cup sprouted moth beans',
                '1 onion, chopped',
                'Spices as required',
                'Oil for cooking'
            ],
            instructions: [
                'Cook beans with onions and spices until tender.',
                'Serve hot with pav and chutney.'
            ],
            tips: 'Garnish with farsan for crunch.'
        },
        {
            id: 'maharashtra-bharli-vangi',
            name: 'Bharli Vangi',
            image: 'https://tse1.mm.bing.net/th/id/OIP.aTXw5VElrnQ1IgQcbzANqAHaF0?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Stuffed eggplant cooked with spicy masala.',
            ingredients: [
                '4 small eggplants',
                '1/2 cup peanut-coconut masala',
                'Oil and spices as required'
            ],
            instructions: [
                'Stuff eggplants with masala.',
                'Cook on low flame till tender.',
                'Serve hot with roti or rice.'
            ],
            tips: 'Pierce eggplants to cook evenly.'
        },
        {
            id: 'maharashtra-chicken-kolhapuri',
            name: 'Chicken Kolhapuri',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/09/kolhapuri-chicken-recipe.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spicy chicken curry from Kolhapur.',
            ingredients: [
                '500g chicken',
                '2 onions, chopped',
                '2 tsp Kolhapuri masala',
                'Salt and oil as required'
            ],
            instructions: [
                'Sauté onions and spices.',
                'Add chicken, cook until done.',
                'Serve hot with rice.'
            ],
            tips: 'Use fresh masala for authentic taste.'
        },
        {
            id: 'maharashtra-prawn-koliwada',
            name: 'Prawn Koliwada',
            image: 'https://rupal-bhatikar.com/wp-content/uploads/2020/07/DSC03664-1-1238x1536.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Crispy deep-fried spiced prawns, coastal specialty.',
            ingredients: [
                '250g prawns',
                '1/2 cup gram flour',
                'Spices and salt',
                'Oil for frying'
            ],
            instructions: [
                'Marinate prawns with spices and gram flour.',
                'Deep fry until golden.',
                'Serve hot with chutney.'
            ],
            tips: 'Use medium-hot oil to fry evenly.'
        },
        {
            id: 'maharashtra-ukadiche-modak',
            name: 'Ukadiche Modak',
            image: 'https://tse4.mm.bing.net/th/id/OIP.bWvqpmuPeHWETzPsWv5uvAHaJz?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Steamed dumplings with coconut and jaggery filling, favorite festival sweet.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup grated coconut',
                '1/4 cup jaggery',
                'Water and ghee as required'
            ],
            instructions: [
                'Prepare rice flour dough.',
                'Make coconut-jaggery filling, fill dough, shape modaks.',
                'Steam 10-12 min, serve warm.'
            ],
            tips: 'Use fresh coconut for best taste.'
        },
        {
            id: 'maharashtra-kaju-badam-ladoo',
            name: 'Kaju Badam Ladoo',
            image: 'https://indiasweethouse.in/cdn/shop/files/ChocoAlmond.jpg?v=1685445682&width=720',
            time: '40 min',
            difficulty: 'Easy',
            servings: '4-5 people',
            description: 'Sweet balls made with cashews, almonds, and sugar.',
            ingredients: [
                '1/2 cup cashews',
                '1/2 cup almonds',
                '1/2 cup sugar',
                '2 tbsp ghee'
            ],
            instructions: [
                'Grind nuts coarsely, mix with sugar and ghee.',
                'Shape into balls, serve at room temperature.'
            ],
            tips: 'Cool slightly before shaping to avoid sticking.'
        }
    ]
},
'Manipur': {
    title: 'Manipur Recipes',
    subtitle: 'Flavorful and traditional dishes from Manipur',
    recipes: [
        {
            id: 'manipur-ekaak',
            name: 'Eromba',
            image: 'https://i.pinimg.com/736x/24/bd/9d/24bd9df282d5a875e55ab9c03b1cbf9e.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy mashed vegetables with fermented fish, signature Manipuri dish.',
            ingredients: [
                '2 medium-sized potatoes, boiled and peeled',
                '1 cup yam or taro, boiled and peeled',
                '1/2 cup fermented fish (ngari)',
                '2-3 green chilies, chopped',
                '1 small onion, chopped',
                '1 tbsp mustard oil',
                'Salt to taste',
                'Coriander leaves for garnish'
            ],
            instructions: [
                'Boil the potatoes and yam until soft, then mash them lightly in a large bowl.',
                'In a small pan, heat mustard oil, sauté chopped onions and green chilies until fragrant.',
                'Add the fermented fish (ngari) and cook for 2-3 minutes, allowing its aroma to infuse.',
                'Mix the sautéed mixture with the mashed vegetables, adjusting salt to taste.',
                'Garnish with chopped coriander leaves and serve with steamed rice.'
            ],
            tips: 'Use fresh ngari for authentic taste and pungency.'
        },
        {
            id: 'manipur-chicken-nga-thongba',
            name: 'Chicken Nga Thongba (Chicken with Herbs)',
            image: 'https://rootsandleisure.com/wp-content/uploads/2019/08/IMG_20190809_161546_127.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Manipur-style chicken cooked with local herbs and minimal spices.',
            ingredients: [
                '500g chicken, cut into pieces',
                '1 medium-sized onion, finely chopped',
                '3 cloves garlic, minced',
                '1 inch ginger, grated',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Fresh local herbs (optional)',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a heavy-bottomed pan until hot and slightly smoking.',
                'Add onions, garlic, ginger, and green chilies; sauté until onions turn golden brown.',
                'Add turmeric and black pepper, then stir in the chicken pieces to coat evenly with spices.',
                'Pour water, cover, and simmer on medium-low flame for 35-40 minutes, stirring occasionally to prevent sticking.',
                'Once the chicken is tender and cooked through, add fresh local herbs for aroma and mix well.',
                'Serve hot with steamed rice or local bread.'
            ],
            tips: 'Do not overcook chicken; it should remain juicy and flavorful.'
        },
        {
            id: 'manipur-fish-nga-thongba',
            name: 'Fish Nga Thongba (Steamed Fish with Herbs)',
            image: 'https://www.licious.in/blog/wp-content/uploads/2021/12/Licious-Blog-Shoot11700-1024x1024.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed fish cooked with minimal spices and herbs, typical Manipuri preparation.',
            ingredients: [
                '500g freshwater fish fillets',
                '1 small onion, chopped',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Fresh coriander leaves and herbs',
                'Salt to taste'
            ],
            instructions: [
                'Clean the fish thoroughly and cut into medium-sized pieces.',
                'In a pan, heat mustard oil until it starts smoking lightly, then sauté onions and green chilies until soft.',
                'Add turmeric and salt, stir to combine, then gently place fish pieces in the pan.',
                'Pour water carefully, cover, and let the fish steam for 15-20 minutes on low heat.',
                'Once cooked, sprinkle fresh coriander leaves and any local herbs, cover for 2-3 minutes, then serve.',
                'Pair with steamed rice for a wholesome meal.'
            ],
            tips: 'Handle fish gently to avoid breaking pieces during cooking.'
        },
        {
            id: 'manipur-choila',
            name: 'Aloo Choila (Spicy Mashed Potatoes)',
            image: 'https://img.freepik.com/premium-photo/mashed-potatoes-spicy-curry-known-as-aloo-ka-bharta_960396-578960.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Spicy mashed potatoes with mustard oil and green chilies.',
            ingredients: [
                '3 medium potatoes, boiled and peeled',
                '2 green chilies, chopped',
                '1 small onion, finely chopped',
                '1 tbsp mustard oil',
                'Salt to taste',
                'Fresh coriander for garnish'
            ],
            instructions: [
                'Boil and peel potatoes, then mash lightly using a fork.',
                'In a small pan, heat mustard oil until it starts to smoke, then sauté onions and green chilies until aromatic.',
                'Mix the sautéed mixture with the mashed potatoes, add salt to taste, and stir well.',
                'Garnish with fresh coriander and serve as a side with rice or flatbread.'
            ],
            tips: 'Serve immediately for best flavor; mustard oil aroma fades over time.'
        },
        {
            id: 'manipur-singju',
            name: 'Singju (Spicy Vegetable Salad)',
            image: 'https://www.friedeye.com/wp-content/uploads/2014/01/sinji.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Traditional Manipuri salad made with shredded vegetables and spicy dressing.',
            ingredients: [
                '1 cup cabbage, finely shredded',
                '1/2 cup lotus stem, thinly sliced',
                '1/4 cup carrot, grated',
                '2-3 green chilies, finely chopped',
                '2 tbsp roasted sesame seeds',
                '1 tbsp mustard oil',
                'Salt and local spices to taste'
            ],
            instructions: [
                'Combine shredded cabbage, lotus stem, and grated carrot in a large mixing bowl.',
                'In a small pan, roast sesame seeds lightly, then crush coarsely.',
                'Add green chilies, mustard oil, salt, and roasted sesame seeds to the vegetables.',
                'Mix thoroughly to coat the vegetables with the spices evenly.',
                'Serve fresh as a crunchy side dish or appetizer.'
            ],
            tips: 'Use fresh vegetables for crisp texture; avoid over-mixing.'
        },
        {
            id: 'manipur-yongchak-saroi',
            name: 'Yongchak Saroi (Spicy Ivy Gourd Stir Fry)',
            image: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/05/Ivy-Gourd-Stir-Fry-L1-WP-WT.jpg?w=600&ssl=1',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Ivy gourd stir-fried with spices and mustard oil, typical Manipuri side dish.',
            ingredients: [
                '200g ivy gourd, sliced',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Wash and slice ivy gourd thinly.',
                'Heat mustard oil in a pan, add onions and green chilies, sauté until golden brown.',
                'Add turmeric and salt, then stir in ivy gourd slices.',
                'Cook on medium flame for 15-20 minutes, stirring occasionally, until tender but not mushy.',
                'Serve hot as a side with rice or flatbread.'
            ],
            tips: 'Maintain medium flame; high heat may burn the mustard oil aroma.'
        },
        {
            id: 'manipur-hawaijar',
            name: 'Hawaijar (Fermented Fish Curry)',
            image: 'https://img.freepik.com/premium-photo/fish-curry-with-fermented-bean-paste-yummy-fish-curry-food-image-photography_1020697-612595.jpg',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Fermented fish curry with strong flavor, very traditional in Manipur.',
            ingredients: [
                '200g fermented fish (ngari)',
                '1 medium onion, chopped',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan until hot, add onions and green chilies, sauté until onions turn golden.',
                'Add turmeric and salt, then mix in the fermented fish carefully.',
                'Pour water and bring to a gentle boil.',
                'Simmer on low heat for 25-30 minutes until flavors are well blended.',
                'Serve hot with steamed rice, traditionally in small portions due to strong flavor.'
            ],
            tips: 'Handle fermented fish carefully; flavor is very pungent but authentic.'
        },
        {
            id: 'manipur-akhong-houba',
            name: 'Akhong Houba (Bamboo Shoot Curry)',
            image: 'https://www.nationalgerichtrezepte.de/wp-content/uploads/2024/12/nationalgericht-myanmar-bamboo-shoot-curry-1734443553-dadb.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Bamboo shoots cooked with vegetables and spices, signature dish in Manipur.',
            ingredients: [
                '1 cup bamboo shoots, sliced',
                '1 medium potato, cubed',
                '1 small carrot, cubed',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Boil bamboo shoots in water for 10 minutes to reduce bitterness.',
                'Heat mustard oil in a pan, add green chilies, potatoes, and carrots, sauté lightly.',
                'Add turmeric and salt, then stir in bamboo shoots.',
                'Cover and simmer on low flame for 20 minutes until all vegetables are tender.',
                'Serve hot with steamed rice or traditional flatbread.'
            ],
            tips: 'Use fresh bamboo shoots; canned ones may alter the authentic flavor.'
        },
        {
            id: 'manipur-singju-sweet-variation',
            name: 'Sweet Singju Variation',
            image: 'https://i.ytimg.com/vi/GKG0GuC8CJ0/maxresdefault.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Traditional Manipuri salad with a sweet twist using jaggery and coconut.',
            ingredients: [
                '1 cup cabbage, shredded',
                '1/4 cup grated coconut',
                '2 tbsp jaggery syrup',
                '2 green chilies, chopped',
                'Salt to taste'
            ],
            instructions: [
                'Shred cabbage finely and place in a mixing bowl.',
                'Add grated coconut and green chilies.',
                'Pour jaggery syrup gradually, mix well to coat all ingredients evenly.',
                'Add a pinch of salt to balance sweetness, serve fresh as a side or appetizer.'
            ],
            tips: 'Serve immediately; jaggery can make vegetables soggy if left too long.'
        }
    ]
},
'Meghalaya': {
    title: 'Meghalaya Recipes',
    subtitle: 'Traditional dishes from the hills of Meghalaya',
    recipes: [
        {
            id: 'meghalaya-jadoh',
            name: 'Jadoh (Spiced Rice with Pork)',
            image: 'https://gayathriscookspot.com/wp-content/uploads/2018/11/Jadoh-1.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Red rice cooked with pork, typical Khasi dish.',
            ingredients: [
                '2 cups red rice',
                '500g pork, chopped into cubes',
                '1 medium onion, chopped',
                '2-3 cloves garlic, minced',
                '1 tsp ginger paste',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '4 cups water',
                'Salt to taste',
                'Fresh coriander for garnish'
            ],
            instructions: [
                'Wash the red rice thoroughly and soak for 15-20 minutes.',
                'Heat mustard oil in a heavy-bottomed pot, sauté onions, garlic, and ginger until fragrant and golden.',
                'Add turmeric, black pepper, and chopped pork; sear the meat on all sides until lightly browned.',
                'Add water and bring to a boil, then reduce flame and simmer covered for 30-35 minutes until pork is tender.',
                'Drain the soaked rice and add it to the pork mixture, cook covered on low flame until rice is soft and absorbs all flavors.',
                'Garnish with fresh coriander leaves before serving. Serve hot as a wholesome meal.'
            ],
            tips: 'Use red rice for authentic flavor; avoid overcooking to keep grains separate.'
        },
        {
            id: 'meghalaya-duhbarik',
            name: 'Duhbarik (Smoked Pork Curry)',
            image: 'https://i0.wp.com/atmykitchen.net/wp-content/uploads/2021/10/20211001_2024295345597226999519014.jpg?resize=638%2C931&ssl=1',
            time: '70 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Smoked pork cooked slowly with minimal spices, traditional Khasi preparation.',
            ingredients: [
                '500g smoked pork pieces',
                '1 medium onion, sliced',
                '3-4 garlic cloves, minced',
                '1 tsp ginger paste',
                '2-3 green chilies, chopped',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a deep pan, sauté onions, garlic, and ginger until golden brown.',
                'Add smoked pork pieces and stir well to coat with oil and spices.',
                'Add green chilies, black pepper, and salt; mix evenly.',
                'Pour water, cover, and cook on low flame for 40-45 minutes, stirring occasionally to prevent sticking.',
                'Check pork for tenderness and flavor, adjust seasoning, and serve hot with steamed rice.'
            ],
            tips: 'Smoked pork gives unique aroma; avoid adding too much water to retain flavor.'
        },
        {
            id: 'meghalaya-pukhlein',
            name: 'Pukhlein (Steamed Rice Cake)',
            image: 'https://th.bing.com/th/id/OIP.ukhEtQz6e-Od67zrvP55_QHaLH?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Soft and fluffy rice cake, often served with curry or chutney.',
            ingredients: [
                '2 cups rice flour',
                '1/2 cup grated coconut',
                '1/4 cup jaggery syrup',
                '1 cup water',
                'A pinch of salt'
            ],
            instructions: [
                'Mix rice flour with grated coconut and a pinch of salt in a bowl.',
                'Gradually add water and jaggery syrup to form smooth batter.',
                'Grease small bowls or molds with oil and pour batter into them.',
                'Steam the molds in a steamer or large pot for 25-30 minutes until set.',
                'Cool slightly and remove from molds carefully. Serve warm with curry or chutney.'
            ],
            tips: 'Do not overfill molds; allow space for batter to expand while steaming.'
        },
        {
            id: 'meghalaya-tungtap',
            name: 'Tungtap (Fermented Soybean Curry)',
            image: 'https://i.pinimg.com/originals/04/1b/08/041b0871349a7ba650f94365039245fe.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Fermented soybean curry, staple in Garo cuisine, tangy and flavorful.',
            ingredients: [
                '1 cup fermented soybeans (soaked overnight)',
                '1 medium onion, chopped',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, sauté onions and green chilies until onions are golden brown.',
                'Add turmeric and salt, then stir in the soaked fermented soybeans.',
                'Add water, cover, and simmer for 20-25 minutes until soybeans are tender and flavors are blended.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Fermented soybeans have strong aroma; cook on low flame to retain texture.'
        },
        {
            id: 'meghalaya-pork-with-bamboo-shoot',
            name: 'Pork with Bamboo Shoot',
            image: 'https://miro.medium.com/max/656/1*6KA-bd-L7rfq1S58ab455g.jpeg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Tender pork cooked with bamboo shoots and minimal spices, Garo style.',
            ingredients: [
                '400g pork, cubed',
                '1 cup bamboo shoots, sliced',
                '1 medium onion, chopped',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and green chilies until fragrant.',
                'Add turmeric and salt, then add pork cubes and sear on medium flame until slightly brown.',
                'Add bamboo shoots and water, cover, and simmer for 30-35 minutes until pork is tender.',
                'Serve hot with rice or flatbread.'
            ],
            tips: 'Use fresh bamboo shoots for authentic taste; canned ones may alter flavor.'
        },
        {
            id: 'meghalaya-chicken-with-rice',
            name: 'Chicken with Sticky Rice',
            image: 'https://img.freepik.com/premium-photo/fried-chicken-with-sticky-rice_1339-169696.jpg',
            time: '55 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Chicken cooked with sticky rice in traditional Khasi style.',
            ingredients: [
                '2 cups sticky rice, soaked 1 hour',
                '500g chicken pieces',
                '1 medium onion, chopped',
                '2 cloves garlic, minced',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '3 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions, garlic, and green chilies until fragrant.',
                'Add turmeric and chicken pieces, sear until lightly browned.',
                'Add water and soaked sticky rice, bring to a boil, then reduce flame and simmer for 25-30 minutes.',
                'Check rice and chicken for tenderness, adjust salt, and serve hot.'
            ],
            tips: 'Sticky rice cooks faster than normal rice; monitor water to prevent overcooking.'
        },
        {
            id: 'meghalaya-pork-stew',
            name: 'meghalaya Pork Stew',
            image: 'https://th.bing.com/th/id/OIP.aUQDK4AfYvAIbxmFb8yKogHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Hearty pork stew with vegetables and mild spices.',
            ingredients: [
                '500g pork, cubed',
                '1 carrot, chopped',
                '1 potato, cubed',
                '1 onion, chopped',
                '2 green chilies, chopped',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '2 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and green chilies until onions are soft.',
                'Add pork, sear until slightly browned on all sides.',
                'Add chopped carrot and potato, sprinkle black pepper and salt.',
                'Pour water, cover, and simmer for 35-40 minutes until pork and vegetables are tender.',
                'Serve hot with steamed rice or flatbread.'
            ],
            tips: 'Simmer on low flame to retain flavors and tender meat.'
        },
        {
            id: 'meghalaya-jaggery-cake',
            name: 'Jaggery Cake (Sweet Dessert)',
            image:'https://farm2.staticflickr.com/1932/45668288671_976a4047ec_o_d.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional sweet cake made with rice flour and jaggery, Meghalaya style.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup jaggery, melted',
                '1/4 cup grated coconut',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee',
                '1/2 cup water'
            ],
            instructions: [
                'Mix rice flour, grated coconut, and cardamom powder in a bowl.',
                'Gradually add melted jaggery and water to form a smooth batter.',
                'Grease a baking dish or mold with ghee and pour the batter.',
                'Steam or bake for 25-30 minutes until set and firm.',
                'Cool slightly, cut into pieces, and serve warm or at room temperature.'
            ],
            tips: 'Use freshly grated coconut for better aroma and taste.'
        }
    ]
},
'Mizoram': {
    title: 'Mizoram Recipes',
    subtitle: 'Authentic Mizo dishes with fresh local ingredients',
    recipes: [
        {
            id: 'mizoram-bai',
            name: 'Bai (Vegetable and Bamboo Shoot Soup)',
            image: 'https://tse2.mm.bing.net/th/id/OIP.E3KRQVfOvh3CjFjJrItmUwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Healthy soup made with bamboo shoots and leafy vegetables, staple in Mizoram.',
            ingredients: [
                '1 cup bamboo shoots, sliced',
                '1 cup mustard greens or local leafy vegetables',
                '1 medium potato, diced',
                '1 medium carrot, sliced',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '4 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a large pot, sauté green chilies lightly for aroma.',
                'Add diced potatoes, carrots, and bamboo shoots; stir well for 5 minutes.',
                'Add turmeric powder and salt, then pour in water and bring to a boil.',
                'Reduce flame, cover, and simmer for 20-25 minutes until vegetables are tender.',
                'Add leafy vegetables last, cook for another 5 minutes until soft but bright green.',
                'Serve hot as a healthy soup with rice or flatbread.'
            ],
            tips: 'Do not overcook leafy greens; retain bright color and nutrients.'
        },
        {
            id: 'mizoram-sawhchiar',
            name: 'Sawhchiar (Smoked Pork with Bamboo Shoot)',
            image:'https://tse1.explicit.bing.net/th/id/OIP.j4GQTK_QO3Z9_9lCtlX7EQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '65 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Smoked pork cooked with bamboo shoots and minimal spices, Mizo specialty.',
            ingredients: [
                '500g smoked pork, cubed',
                '1 cup bamboo shoots, sliced',
                '1 medium onion, chopped',
                '2-3 green chilies, chopped',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a heavy-bottomed pan, sauté onions and green chilies until onions turn golden.',
                'Add smoked pork, stir well to coat pieces with oil and spices.',
                'Add bamboo shoots and water, mix gently.',
                'Cover and simmer on low heat for 35-40 minutes until pork is tender and flavors blend.',
                'Serve hot with steamed rice or traditional Mizo bread.'
            ],
            tips: 'Smoked pork adds authentic flavor; avoid high heat to prevent burning.'
        },
        {
            id: 'mizoram-vawksa-khar',
            name: 'Vawksa Khar (Smoked Pork with Alkaline Leaf Extract)',
            image: 'https://i.ytimg.com/vi/HSDJXvbB-Cc/maxresdefault.jpg',
            time: '70 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Traditional Mizo dish with smoked pork and fermented alkaline extract from local leaves.',
            ingredients: [
                '500g smoked pork, cubed',
                '2 tbsp alkaline leaf extract (or substitute with baking soda solution)',
                '1 medium onion, chopped',
                '2-3 green chilies, chopped',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, sauté onions and green chilies until fragrant.',
                'Add smoked pork, stir to coat with oil and spices.',
                'Pour in water and alkaline leaf extract, mix well.',
                'Cover and cook on low heat for 35-40 minutes until pork is tender and flavors are balanced.',
                'Serve hot with steamed rice or flatbread.'
            ],
            tips: 'Alkaline leaf extract is key; adds authentic Mizo flavor and slight tanginess.'
        },
        {
            id: 'mizoram-chicken-der',
            name: 'Chicken Der (Spicy Chicken Curry)',
            image: 'https://cdn.prod.website-files.com/64931d2aee18510b47f4bb1f/664b98e665f4119f10178e1e_Achari-Chicken-Recipe-Cover-Image.jpg',
            time: '55 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Mizo-style spicy chicken curry with minimal spices and fresh herbs.',
            ingredients: [
                '500g chicken, cut into pieces',
                '1 medium onion, chopped',
                '3 cloves garlic, minced',
                '1 inch ginger, grated',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tsp black pepper powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, sauté onions, garlic, ginger, and green chilies until golden brown and aromatic.',
                'Add turmeric and black pepper, then add chicken pieces, coating evenly with spices.',
                'Pour water, cover, and simmer on medium-low flame for 30-35 minutes until chicken is tender and cooked through.',
                'Check seasoning, adjust salt, and serve hot with steamed rice or Mizo flatbread.'
            ],
            tips: 'Use fresh chicken for tender meat; do not overcook.'
        },
        {
            id: 'mizoram-fish-with-leaves',
            name: 'Smoked Fish with Leafy Greens',
            image: 'https://ketocycle.diet/blog/app/uploads/2023/03/Smoked-salmon-and-cherry-tomato-salad.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Smoked freshwater fish cooked with local leafy greens.',
            ingredients: [
                '400g smoked fish, cleaned and cut',
                '1 cup mustard greens or spinach',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, sauté onions and green chilies until aromatic.',
                'Add smoked fish pieces carefully, stir gently to coat with oil and spices.',
                'Add water and leafy greens, mix gently.',
                'Cover and simmer for 15-20 minutes until fish is cooked and greens are tender.',
                'Serve hot with rice.'
            ],
            tips: 'Handle fish gently to maintain shape and texture.'
        },
        {
            id: 'mizoram-bamboo-shoot-curry',
            name: 'Bamboo Shoot Curry',
            image: 'https://junifoods.com/wp-content/uploads/2024/06/Bamboo-Shoot-Curry-Tama-Ko-Tarkari-%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80-2.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Bamboo shoots cooked with mild spices, healthy and flavorful.',
            ingredients: [
                '2 cups bamboo shoots, sliced',
                '1 medium potato, cubed',
                '1 carrot, sliced',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Boil bamboo shoots in water for 5-10 minutes to remove bitterness.',
                'Heat mustard oil in a pan, sauté onions and green chilies until fragrant.',
                'Add turmeric and salt, then add potatoes and carrots, stir for 5 minutes.',
                'Add bamboo shoots, pour water, cover, and simmer for 20 minutes until all vegetables are tender.',
                'Serve hot with rice or flatbread.'
            ],
            tips: 'Do not overcook bamboo shoots; they retain crunch and flavor.'
        },
        {
            id: 'mizoram-rice-cake-sweet',
            name: 'Sweet Rice Cake (Mizo Dessert)',
            image: 'https://i0.wp.com/msshiandmrhe.com/wp-content/uploads/2023/01/WeChat-Image_20230104224638.jpg?fit=1280%2C1707&ssl=1',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional sweet cake made with rice flour and jaggery.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup jaggery, melted',
                '1/4 cup grated coconut',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee',
                '1/2 cup water'
            ],
            instructions: [
                'Mix rice flour, grated coconut, and cardamom powder in a bowl.',
                'Gradually add melted jaggery and water to form smooth batter.',
                'Grease a baking dish with ghee and pour the batter.',
                'Steam or bake for 25-30 minutes until firm.',
                'Cool slightly, cut into pieces, and serve.'
            ],
            tips: 'Use fresh grated coconut for aroma; serve warm for best taste.'
        },
        {
            id: 'mizoram-vegetable-stir-fry',
            name: 'Mizo Vegetable Stir Fry',
            image: 'https://www.connoisseurusveg.com/wp-content/uploads/2015/03/miso_tofu_stir_fry_featured.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Fresh local vegetables stir-fried with minimal spices, healthy side dish.',
            ingredients: [
                '1 cup cabbage, shredded',
                '1/2 cup carrots, sliced',
                '1/2 cup beans, chopped',
                '2 green chilies, chopped',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, add green chilies and sauté briefly.',
                'Add vegetables, sprinkle salt, and stir-fry on medium heat for 15-20 minutes until tender but still crisp.',
                'Serve hot as a side dish with rice or flatbread.'
            ],
            tips: 'Do not overcook to maintain crunchiness and nutrition.'
        }
    ]
},
'Nagaland': {
    title: 'Nagaland Recipes',
    subtitle: 'Traditional dishes from Nagaland with smoky and spicy flavors',
    recipes: [
        {
            id: 'nagaland-smoked-pork-with-bamboo-shoot',
            name: 'Smoked Pork with Bamboo Shoot',
            image: 'https://tse3.mm.bing.net/th/id/OIP.tZNHL33c0tQ9T06HQvIByAHaH8?rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Smoky and spicy pork cooked with bamboo shoots, a Naga delicacy.',
            ingredients: [
                '500g smoked pork, cubed',
                '1 cup bamboo shoots, sliced',
                '1 medium onion, chopped',
                '3-4 green chilies, chopped',
                '2 cloves garlic, minced',
                '1 tsp ginger paste',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a heavy-bottomed pan, sauté onions, garlic, and ginger until golden and aromatic.',
                'Add smoked pork, stir well, and sear on medium flame until lightly browned.',
                'Add green chilies, bamboo shoots, and water; mix gently.',
                'Cover and simmer on low flame for 35-40 minutes until pork is tender and flavors blend.',
                'Serve hot with steamed rice or sticky rice.'
            ],
            tips: 'Use fresh bamboo shoots for authentic taste; control heat to avoid burning spices.'
        },
        {
            id: 'nagaland-rice-beans-pork',
            name: 'Axone Pork with Rice',
            image: 'https://www.lordbyronskitchen.com/wp-content/uploads/2019/06/2-10.jpg',
            time: '70 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Fermented soybean (Axone) cooked with pork and served with rice.',
            ingredients: [
                '200g axone (fermented soybeans)',
                '400g pork, cubed',
                '1 medium onion, chopped',
                '3 cloves garlic, minced',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Soak axone in water for 10 minutes to soften.',
                'Heat mustard oil, sauté onion, garlic, and green chilies until golden brown.',
                'Add pork cubes and sear until slightly browned.',
                'Mix in axone and water, cover, and simmer for 35-40 minutes on low flame.',
                'Serve hot with steamed rice for a traditional Naga meal.'
            ],
            tips: 'Axone has strong aroma; cook on low flame to maintain flavor balance.'
        },
        {
            id: 'nagaland-smoked-fish-curry',
            name: 'Smoked Fish Curry',
            image: 'https://th.bing.com/th/id/OIP.8dliCRDroyuKpdoOXdfsbAHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Smoky freshwater fish cooked with Naga spices.',
            ingredients: [
                '400g smoked fish, cleaned',
                '1 medium tomato, chopped',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and green chilies until fragrant.',
                'Add tomatoes and turmeric, cook until tomatoes are soft.',
                'Add smoked fish, gently mix, then pour water and simmer for 15-20 minutes.',
                'Serve hot with rice or flatbread.'
            ],
            tips: 'Handle fish gently to prevent breaking; do not overcook.'
        },
        {
            id: 'nagaland-stir-fried-vegetables',
            name: 'Naga Stir-Fried Vegetables',
            image: 'https://asimplepalate.com/wp-content/uploads/2019/03/vegetable-stir-fry-4-1024x1536.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Fresh local vegetables stir-fried with mustard oil and minimal spices.',
            ingredients: [
                '1 cup cabbage, shredded',
                '1/2 cup carrots, sliced',
                '1/2 cup beans, chopped',
                '2 green chilies, chopped',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, add green chilies and sauté briefly.',
                'Add all vegetables, sprinkle salt, and stir-fry for 15-20 minutes until tender but crisp.',
                'Serve hot as a side dish.'
            ],
            tips: 'Do not overcook to retain crunch and nutrition.'
        },
        {
            id: 'nagaland-bamboo-shoot-curry',
            name: 'Bamboo Shoot Curry',
            image: 'https://junifoods.com/wp-content/uploads/2024/06/Bamboo-Shoot-Curry-Tama-Ko-Tarkari-%E0%A4%A4%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%A4%E0%A4%B0%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80-2.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Tangy and lightly spiced bamboo shoot curry.',
            ingredients: [
                '2 cups bamboo shoots, sliced',
                '1 medium potato, cubed',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Boil bamboo shoots for 5 minutes to reduce bitterness.',
                'Heat mustard oil, sauté onions and chilies until fragrant.',
                'Add turmeric, potatoes, and bamboo shoots, pour water, cover, and simmer 20 minutes.',
                'Serve hot with rice.'
            ],
            tips: 'Use fresh bamboo shoots for authentic flavor.'
        },
        {
            id: 'nagaland-rice-cake',
            name: 'Sweet Rice Cake',
            image: 'https://kimchimari.com/wp-content/uploads/2020/06/Injeolmi-Rice-Cake.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional sweet cake made with rice flour and jaggery.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup jaggery, melted',
                '1/4 cup grated coconut',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee',
                '1/2 cup water'
            ],
            instructions: [
                'Mix rice flour, grated coconut, and cardamom.',
                'Add jaggery and water gradually to form smooth batter.',
                'Grease a mold with ghee, pour batter, and steam 25-30 minutes.',
                'Cool slightly, cut into pieces, and serve warm.'
            ],
            tips: 'Fresh grated coconut enhances aroma and taste.'
        },
        {
            id: 'nagaland-spicy-chicken',
            name: 'Naga Spicy Chicken',
            image: 'https://khinskitchen.com/wp-content/uploads/2020/06/korean-spicy-chicken.jpg',
            time: '55 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spicy chicken cooked with Naga chili and local herbs.',
            ingredients: [
                '500g chicken, cut into pieces',
                '3-4 Naga chilies (or substitute), chopped',
                '1 medium onion, chopped',
                '2 cloves garlic, minced',
                '1 tsp ginger paste',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onion, garlic, and ginger until golden.',
                'Add chicken pieces and sear until slightly brown.',
                'Add chopped Naga chilies and water, cover, and simmer 30 minutes.',
                'Check seasoning and serve hot with rice.'
            ],
            tips: 'Naga chilies are extremely hot; adjust quantity carefully.'
        },
        {
            id: 'nagaland-fish-with-herbs',
            name: 'Smoked Fish with Local Herbs',
            image: 'https://c8.alamy.com/comp/KP8J4J/smoked-fish-with-fresh-herbs-KP8J4J.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Smoked fish cooked with aromatic local herbs.',
            ingredients: [
                '400g smoked fish, cleaned',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and green chilies.',
                'Add smoked fish, turmeric, and salt; mix gently.',
                'Pour water, cover, and simmer 15-20 minutes.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Do not stir too much to keep fish intact.'
        }
    ]
},
'Odisha': {
    title: 'Odisha Recipes',
    subtitle: 'Authentic dishes from Odisha with traditional flavors',
    recipes: [
        {
            id: 'odisha-pakhala-rice',
            name: 'Pakhala Bhata (Fermented Rice)',
            image: 'https://ebhubaneswar.com/wp-content/uploads/2022/06/pampa-12.jpg',
            time: '12 hr (fermentation) + 15 min prep',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Fermented rice soaked in water, served with curd and fried vegetables, a staple summer dish.',
            ingredients: [
                '2 cups cooked rice',
                '2-3 cups water',
                '1/2 cup curd',
                '1 medium onion, sliced',
                '1-2 green chilies, chopped',
                '1 tsp mustard seeds',
                '2 tbsp oil',
                'Salt to taste',
                'Fried vegetables like brinjal or potato for garnish'
            ],
            instructions: [
                'Allow cooked rice to cool and soak in water overnight to ferment slightly.',
                'Heat oil in a pan, add mustard seeds and sliced onions, fry until golden.',
                'Add green chilies and fried vegetables, sauté briefly.',
                'Mix the fermented rice with curd, add salt, and top with sautéed vegetables.',
                'Serve chilled or at room temperature.'
            ],
            tips: 'Use fresh rice and clean water; fermentation improves taste and digestion.'
        },
        {
            id: 'odisha-machha-tenga',
            name: 'Machha Tenga (Tangy Fish Curry)',
            image: 'https://img.freepik.com/premium-photo/assamese-fish-tenga-tangy-fish-curry_1174497-41176.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Tangy and lightly spiced fish curry using tamarind and fresh herbs.',
            ingredients: [
                '500g fish (rohu or catla), cleaned',
                '2 tbsp tamarind paste',
                '1 medium onion, chopped',
                '1 tomato, chopped',
                '2-3 green chilies, chopped',
                '1 tsp turmeric powder',
                '1 tsp cumin seeds',
                '2 tbsp mustard oil',
                '2 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil in a pan, sauté cumin seeds until aromatic.',
                'Add onions and green chilies, fry until golden.',
                'Add chopped tomatoes, turmeric, and tamarind paste; cook for 5 minutes.',
                'Add fish pieces and water, cover, and simmer 15-20 minutes until fish is cooked.',
                'Adjust salt and serve hot with steamed rice.'
            ],
            tips: 'Use fresh tamarind for authentic tangy flavor.'
        },
        {
            id: 'odisha-dahi-pakhala',
            name: 'Dahi Pakhala (Curd Rice)',
            image: 'https://tse2.mm.bing.net/th/id/OIP.UdX5KjQg_8AyknUcC4RFMwHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '20 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Curd mixed with cooked rice, tempered with spices for light and cooling dish.',
            ingredients: [
                '2 cups cooked rice',
                '1/2 cup curd',
                '1 tsp mustard seeds',
                '2 dried red chilies',
                'A pinch of asafoetida',
                '2 tbsp oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat oil in a small pan, add mustard seeds, dried red chilies, and asafoetida; fry briefly.',
                'Mix curd into cooked rice, add salt and tempering.',
                'Serve chilled or at room temperature.'
            ],
            tips: 'Use slightly sour curd for best taste.'
        },
        {
            id: 'odisha-khicede',
            name: 'Khicede (Savory Rice and Lentil Porridge)',
            image: 'https://tse1.mm.bing.net/th/id/OIP.liG0cvBZDmhYpYCQ_2a1YQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rice and lentils cooked with mild spices, often offered during festivals.',
            ingredients: [
                '1 cup rice',
                '1/2 cup moong dal',
                '1 medium onion, chopped',
                '1 tsp cumin seeds',
                '1 tsp turmeric powder',
                '2 tbsp ghee or oil',
                '4 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Wash rice and dal, soak for 15 minutes.',
                'Heat ghee, add cumin seeds and onions, sauté until golden.',
                'Add turmeric, soaked rice, dal, and water.',
                'Cook on medium flame until rice and lentils are soft and porridge-like.',
                'Adjust salt and serve warm.'
            ],
            tips: 'Stir occasionally to prevent sticking to bottom.'
        },
        {
            id: 'odisha-kanika',
            name: 'Kanika (Sweet Fragrant Rice)',
            image: 'https://blogger.googleusercontent.com/img/a/AVvXsEj3ZiYCirCMN8a15fjzHTSY8jmorSKe0BsmwwPebLvAiVXAh5tsGbRpwAbVfuYL6JYSrtqY63aZrY64DOLBghYJJSuUwiBnY0H7MfwRdBIUVc4nWhXL-9m_uA7t9SFRcQKQb1SIpZfMQBC5V5G8QLjZYqT4mp-CmP6brmwXtHifgFHX0HD4W3FSUpnp=w640-h438',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Fragrant sweet rice flavored with cardamom and ghee.',
            ingredients: [
                '2 cups basmati rice',
                '3 tbsp ghee',
                '1/4 cup sugar',
                '4-5 cardamom pods, crushed',
                '1/4 cup grated coconut (optional)',
                '2 1/2 cups water',
                'A pinch of salt'
            ],
            instructions: [
                'Wash and soak rice for 20 minutes.',
                'Heat ghee in a pan, add rice and sauté for 2-3 minutes.',
                'Add water, sugar, cardamom, and salt; cook until rice is fluffy and dry.',
                'Garnish with grated coconut and serve warm.'
            ],
            tips: 'Do not overcook; rice should be separate and fluffy.'
        },
        {
            id: 'odisha-chenna-poda',
            name: 'Chhena Poda (Baked Cheese Dessert)',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxmxwJaQmB6JIdEvJ5-WVJDqnSXF72XGZtiqwedXekL34uFn-XnvKbTmVy5Heg8yQXgogZ2rtYGjEAWuxiefxIDC6A8bCSdZ5mnXCa9cNGWI41Zn4Gg6X-T1xlQiS_0wp4Hhy3DQskD2uv/s1600/IMG_4086.JPG',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Oven-baked dessert made from fresh chhena, sugar, and cardamom.',
            ingredients: [
                '500g fresh chhena (paneer)',
                '1/2 cup sugar',
                '1/4 tsp cardamom powder',
                '2 tbsp semolina (rava)',
                '2 tbsp ghee',
                'Chopped nuts for garnish'
            ],
            instructions: [
                'Preheat oven to 180°C (350°F).',
                'Knead chhena with sugar, cardamom, and semolina until smooth.',
                'Grease a baking dish with ghee, pour chhena mixture.',
                'Bake for 40-45 minutes until top turns golden brown.',
                'Cool slightly, garnish with nuts, and serve.'
            ],
            tips: 'Ensure chhena is soft and fresh for smooth texture.'
        },
        {
            id: 'odisha-macha-khanda',
            name: 'Macha Khanda (Fish Curry with Mustard)',
            image: 'https://i.ytimg.com/vi/su2lGSTGE-8/maxresdefault.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Traditional Odia fish curry with mustard paste and spices.',
            ingredients: [
                '500g freshwater fish, cleaned',
                '2 tbsp mustard paste',
                '1 medium onion, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                '2 tbsp mustard oil',
                '1 cup water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and green chilies.',
                'Add turmeric and mustard paste, cook 2-3 minutes.',
                'Add fish pieces and water, simmer 15-20 minutes.',
                'Check seasoning and serve hot with rice.'
            ],
            tips: 'Use freshly ground mustard paste for authentic flavor.'
        },
        {
            id: 'odisha-pitha',
            name: 'Poda Pitha (Sweet Rice Cake)',
            image: 'https://i.pinimg.com/736x/66/7d/bf/667dbf6a4f869eab2fb3b1c881a62c92.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed or baked sweet rice cake, popular during festivals.',
            ingredients: [
                '1 cup rice flour',
                '1/2 cup grated jaggery',
                '1/4 cup grated coconut',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee',
                '1/2 cup water'
            ],
            instructions: [
                'Mix rice flour, jaggery, coconut, and cardamom.',
                'Add water gradually to form batter, grease molds with ghee.',
                'Steam for 25-30 minutes until set.',
                'Cool slightly and serve.'
            ],
            tips: 'Use freshly grated coconut for aroma and taste.'
        }
    ]
},
'Rajasthan': {
    title: 'Rajasthan Recipes',
    subtitle: 'Rich and flavorful dishes from Rajasthan with royal heritage',
    recipes: [
        {
            id: 'rajasthan-dal-bati-churma',
            name: 'Dal Baati Churma',
            image: 'https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-dal-baati-churma.jpg',
            time: '1 hr 30 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Traditional Rajasthani dish with baked wheat balls, lentil curry, and sweet crushed wheat.',
            ingredients: [
                'For Baati: 2 cups whole wheat flour, 4 tbsp ghee, 1/2 tsp salt, water as required',
                'For Dal: 1 cup mixed lentils (moong, chana, toor), 1 onion, 2 tomatoes, 1 tsp ginger-garlic paste, 1 tsp cumin seeds, 1 tsp turmeric, 1 tsp red chili powder, 2 tbsp ghee, salt to taste',
                'For Churma: 1 cup whole wheat flour, 3 tbsp ghee, 1/2 cup powdered sugar'
            ],
            instructions: [
                'Baati: Mix flour, ghee, salt, and water to form firm dough. Shape into small balls and bake at 180°C for 25-30 minutes until golden. Serve hot, dipped in ghee.',
                'Dal: Cook lentils until soft. Heat ghee, sauté cumin, onions, ginger-garlic paste, add tomatoes, turmeric, red chili powder, and cooked dal. Simmer 10 minutes and serve with baati.',
                'Churma: Roast flour in ghee until aromatic, cool, and mix with sugar. Serve as dessert alongside baati.'
            ],
            tips: 'Ensure baati is baked evenly; churna should be crumbly and sweet.'
        },
        {
            id: 'rajasthan-laal-maas',
            name: 'Laal Maas (Spicy Mutton Curry)',
            image: 'https://tse2.mm.bing.net/th/id/OIP.nDFqJFyQMptWgy1jc0PxSgHaNK?cb=12&w=768&h=1365&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '1 hr 15 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Fiery red mutton curry from Rajasthan, cooked with red chilies and aromatic spices.',
            ingredients: [
                '500g mutton, cut into pieces',
                '3-4 dried red chilies, soaked and ground',
                '2 onions, finely chopped',
                '1 tsp ginger-garlic paste',
                '1 tsp cumin seeds',
                '1 tsp coriander powder',
                '1/2 tsp turmeric powder',
                '2 tbsp mustard oil',
                '2 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté cumin seeds and onions until golden.',
                'Add ginger-garlic paste and sauté for 2 minutes.',
                'Add red chili paste, turmeric, coriander, and salt. Fry 5 minutes on medium flame.',
                'Add mutton pieces, coat well with masala, and pour water.',
                'Cover and simmer for 45-50 minutes until mutton is tender and gravy thick.',
                'Serve hot with bajra roti or steamed rice.'
            ],
            tips: 'Use good quality red chilies; slow cooking enhances flavor.'
        },
        {
            id: 'rajasthan-gatte-ki-sabzi',
            name: 'Gatte Ki Sabzi',
            image: 'https://tse4.mm.bing.net/th/id/OIP.b5C5-R24YhWJwEJH7GoXkwAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Gram flour dumplings cooked in spicy yogurt-based curry.',
            ingredients: [
                'For Gatte: 1 cup gram flour, 2 tbsp oil, 1/4 tsp turmeric, 1/2 tsp red chili powder, 1/2 tsp salt, water as needed',
                'For Curry: 1 cup yogurt, 1 tsp cumin seeds, 1 tsp coriander powder, 1/2 tsp turmeric, 1 tsp red chili powder, 2 tbsp oil, salt to taste, 2 cups water'
            ],
            instructions: [
                'Gatte: Mix gram flour, spices, and water to form firm dough. Roll into cylinders, boil 10-12 minutes, drain, and slice into 1-inch pieces.',
                'Curry: Heat oil, add cumin, add yogurt whisked with spices. Simmer 5 minutes, add gatte slices, cook 10-15 minutes until gravy thickens.',
                'Serve hot with chapati or rice.'
            ],
            tips: 'Boil gatte properly to avoid raw flour taste; whisk yogurt to prevent curdling.'
        },
        {
            id: 'rajasthan-kachori',
            name: 'Rajasthani Kachori',
            image: 'https://images.healthshots.com/healthshots/hi/uploads/2022/03/30175856/Pyaz-kachori-recipe.jpg',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Crispy deep-fried pastry filled with spiced lentil mixture.',
            ingredients: [
                'For Dough: 2 cups all-purpose flour, 4 tbsp oil, 1/2 tsp salt, water as needed',
                'For Filling: 1/2 cup urad dal, soaked and ground coarsely, 1 tsp fennel seeds, 1 tsp cumin seeds, 1 tsp coriander powder, 1/2 tsp red chili powder, salt to taste, 2 tbsp oil'
            ],
            instructions: [
                'Prepare dough by mixing flour, oil, salt, and water, set aside 20 minutes.',
                'Prepare filling by roasting dal with spices and sautéing with oil until aromatic.',
                'Roll small portions of dough, fill with dal mixture, seal edges, and deep-fry until golden brown.',
                'Serve hot with chutney.'
            ],
            tips: 'Ensure filling is dry to avoid kachori bursting while frying.'
        },
        {
            id: 'rajasthan-bajra-roti',
            name: 'Bajra Roti',
            image: 'https://ministryofcurry.com/wp-content/uploads/2022/08/Bajri-Bhakri_-17-1024x1536.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Traditional pearl millet flatbread, healthy and gluten-free.',
            ingredients: [
                '2 cups bajra (pearl millet) flour',
                'Warm water as needed',
                'Salt to taste'
            ],
            instructions: [
                'Mix flour and salt, gradually add warm water to form soft dough.',
                'Divide dough into small balls, roll into thick flatbreads.',
                'Cook on hot tawa, flipping both sides until cooked.',
                'Serve hot with ghee, curries, or dal.'
            ],
            tips: 'Use warm water to make dough pliable; cook on medium heat for softness.'
        },
        {
            id: 'rajasthan-malpuas',
            name: 'Malpua (Sweet Pancake)',
            image: 'https://tse1.mm.bing.net/th/id/OIP.oHx_uxDFpmCFTjo8pBhCRgHaLG?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Fried sweet pancakes soaked in sugar syrup, festive dessert.',
            ingredients: [
                '1 cup all-purpose flour',
                '1/4 cup semolina',
                '1/2 cup milk',
                '1/4 cup sugar',
                '1/4 tsp cardamom powder',
                'Oil for frying',
                'Sugar syrup: 1/2 cup sugar + 1/4 cup water'
            ],
            instructions: [
                'Mix flour, semolina, milk, sugar, and cardamom to form smooth batter.',
                'Heat oil in a pan, pour small portions of batter to form pancakes.',
                'Fry until golden on both sides, remove and drain.',
                'Dip fried pancakes in warm sugar syrup for 2-3 minutes.',
                'Serve warm.'
            ],
            tips: 'Batter should be slightly thick; ensure oil is hot but not smoking.'
        },
        {
            id: 'rajasthan-laal-maas-biryani',
            name: 'Laal Maas Biryani',
            image: 'https://c.ndtvimg.com/2024-06/v60q573g_biryani_625x300_17_June_24.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
            time: '1 hr 30 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy mutton biryani with Laal Maas curry flavor.',
            ingredients: [
                '500g mutton, cooked in Laal Maas masala',
                '2 cups basmati rice',
                '1 large onion, fried golden',
                '1/4 cup yogurt',
                '1 tsp garam masala',
                '2 tbsp ghee',
                '2 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Cook rice until 70% done, set aside.',
                'Layer partially cooked rice with Laal Maas mutton curry in a heavy pan.',
                'Top with fried onions, yogurt, and ghee.',
                'Cover tightly, cook on low flame 20 minutes for dum cooking.',
                'Serve hot.'
            ],
            tips: 'Use heavy-bottomed vessel for even cooking; adjust chili for heat preference.'
        },
        {
            id: 'rajasthan-ghevar',
            name: 'Ghevar (Rajasthani Sweet)',
            image: 'https://img.freepik.com/premium-photo/popular-traditional-indian-rajasthani-sweet-item-dessert-called-ghevar-ghewar_57665-8381.jpg',
            time: '1 hr',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Crispy disc-shaped sweet soaked in sugar syrup, often made during Teej and Raksha Bandhan.',
            ingredients: [
                '1 cup all-purpose flour',
                '1/4 cup ghee, melted',
                '1/2 cup milk',
                '1/4 cup water',
                'Sugar syrup: 1 cup sugar + 1/2 cup water + cardamom',
                'Oil for deep frying'
            ],
            instructions: [
                'Mix flour, ghee, milk, and water to make smooth batter.',
                'Heat oil in deep frying pan, pour batter in circular motion to form disc shape.',
                'Fry until golden and crisp, drain excess oil.',
                'Dip in warm sugar syrup for 2-3 minutes, remove and cool.',
                'Serve as festive dessert.'
            ],
            tips: 'Maintain medium flame while frying; batter should flow easily.'
        }
    ]
},
'Sikkim': {
    title: 'Sikkim Recipes',
    subtitle: 'Delicious and hearty dishes from Sikkim, blending Tibetan and Nepali flavors',
    recipes: [
        {
            id: 'sikkim-momo',
            name: 'Momos (Steamed Dumplings)',
            image: 'https://1.bp.blogspot.com/-xaeLKD4vj1A/YCi3eo5T85I/AAAAAAAAAHA/D6C1A6EHdQIFkTqYpPvQoM6ffYdmghogQCLcBGAsYHQ/s1276/IMG_20210214_110659.jpg',
            time: '60 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Steamed dumplings stuffed with minced meat or vegetables, served with spicy chutney.',
            ingredients: [
                'For dough: 2 cups all-purpose flour, 1/4 tsp salt, water as needed',
                'For filling: 200g minced chicken or vegetables, 1 onion chopped, 2 garlic cloves minced, 1 tsp ginger paste, 2 tbsp soy sauce, 1 tsp pepper, salt to taste'
            ],
            instructions: [
                'Prepare dough by mixing flour, salt, and water, knead until smooth, cover and rest 20 minutes.',
                'Mix filling ingredients thoroughly.',
                'Roll dough into small circles, place filling in center, fold and seal edges.',
                'Steam for 12-15 minutes until cooked.',
                'Serve hot with spicy tomato or chili chutney.'
            ],
            tips: 'Do not overfill momos; seal edges well to prevent leakage during steaming.'
        },
        {
            id: 'sikkim-phagshapa',
            name: 'Phagshapa (Pork with Radish and Chilies)',
            image: 'https://static.wixstatic.com/media/2741ca_cda3ca5ea0434585ae82188e80ac9501~mv2.jpeg/v1/crop/x_0,y_43,w_1022,h_758/fill/w_648,h_481,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PHAGSHAPA.jpeg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy and savory pork cooked with radish and dried chilies, a Sikkimese delicacy.',
            ingredients: [
                '400g pork, cubed',
                '1 medium radish, cubed',
                '2 dried red chilies, chopped',
                '2 cloves garlic, minced',
                '1 tsp ginger paste',
                '2 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté garlic, ginger, and red chilies until aromatic.',
                'Add pork, sear on medium heat until slightly browned.',
                'Add radish, cover, and simmer 20-25 minutes until pork is tender.',
                'Serve hot with steamed rice or flatbread.'
            ],
            tips: 'Use tender pork pieces; radish absorbs flavors well.'
        },
        {
            id: 'sikkim-thukpa',
            name: 'Thukpa (Noodle Soup)',
            image: 'https://milkandcardamom.com/wp-content/uploads/2014/07/Thukpa.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Warm and hearty noodle soup with vegetables or meat, perfect for cold weather.',
            ingredients: [
                '200g noodles',
                '1 cup chicken or vegetables',
                '1 medium onion, chopped',
                '2 cloves garlic, minced',
                '1 tsp ginger paste',
                '1 tsp soy sauce',
                '1 tsp chili sauce',
                '2 tbsp oil',
                '4 cups water',
                'Salt to taste'
            ],
            instructions: [
                'Heat oil, sauté onion, garlic, and ginger until soft.',
                'Add chicken or vegetables, cook 5 minutes.',
                'Add water, soy sauce, and chili sauce, bring to boil.',
                'Add noodles, cook 5-7 minutes until soft.',
                'Serve hot with fresh coriander garnish.'
            ],
            tips: 'Do not overcook noodles; add them last to retain texture.'
        },
        {
            id: 'sikkim-sukuti',
            name: 'Sukuti (Dried Meat Stir-Fry)',
            image: 'https://i.pinimg.com/736x/22/d2/4b/22d24b1a94be9704bf4394af4c169efc.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Stir-fried dried meat with local spices, a popular snack or side dish.',
            ingredients: [
                '200g dried meat, shredded',
                '1 onion, chopped',
                '2 cloves garlic, minced',
                '1 tsp chili powder',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and garlic until aromatic.',
                'Add dried meat and chili powder, stir-fry 10-15 minutes until slightly crispy.',
                'Serve as snack or side with rice.'
            ],
            tips: 'Use tender dried meat; cook on medium flame to avoid burning.'
        },
        {
            id: 'sikkim-gundruk-soup',
            name: 'Gundruk Soup',
            image: 'https://1.bp.blogspot.com/-bKuoGHXPcQc/XwWPiMFQC7I/AAAAAAAABLs/pnB3Nl95c2w_PSiPCLuVLaEKICiwH9POACLcBGAsYHQ/s1600/Gundruk%2Bko%2Bjhol%2Bnepalifood%2Bnepal.jpg',
            time: '35 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy fermented leafy vegetable soup, rich in probiotics and flavor.',
            ingredients: [
                '1 cup gundruk (fermented leafy greens)',
                '1 medium potato, cubed',
                '1 onion, chopped',
                '2 cloves garlic, minced',
                '2 cups water',
                '1 tsp mustard seeds',
                '1 tbsp oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat oil, sauté mustard seeds, onion, and garlic until golden.',
                'Add potato and gundruk, sauté 5 minutes.',
                'Add water, simmer 15 minutes until potato is cooked.',
                'Serve hot with a sprinkle of fresh herbs.'
            ],
            tips: 'Rinse gundruk lightly to reduce excessive sourness.'
        },
        {
            id: 'sikkim-phagshapa-rice',
            name: 'Phagshapa with Rice',
            image: 'https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/09/Phagshapa.webp',
            time: '50 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy pork and radish served with steamed rice for a wholesome meal.',
            ingredients: [
                '400g pork, cubed',
                '1 medium radish, cubed',
                '2 dried chilies, chopped',
                '2 cloves garlic, minced',
                '1 tsp ginger paste',
                '2 cups steamed rice',
                '2 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Prepare phagshapa as described previously.',
                'Serve hot over steamed rice for a traditional Sikkimese meal.'
            ],
            tips: 'Ensure pork is tender for a perfect meal.'
        },
        {
            id: 'sikkim-sweet-rice-pudding',
            name: 'Sel Roti Inspired Rice Pudding',
            image: 'https://delishglobe.com/wp-content/uploads/2025/05/Sel-Roti-Nepali-Rice-Doughnut.png',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Sweet rice pudding flavored with cardamom and milk, a local dessert.',
            ingredients: [
                '1 cup rice, soaked 30 min',
                '2 cups milk',
                '1/2 cup sugar',
                '1/4 tsp cardamom powder',
                '2 tbsp ghee',
                'Chopped nuts for garnish'
            ],
            instructions: [
                'Cook rice in milk until soft and thickened.',
                'Add sugar, cardamom, and ghee, simmer 5 minutes.',
                'Garnish with chopped nuts and serve warm.'
            ],
            tips: 'Stir continuously to avoid sticking to bottom.'
        },
        {
            id: 'sikkim-vegetable-stir-fry',
            name: 'Sikkimese Mixed Vegetable Stir-Fry',
            image: 'https://th.bing.com/th/id/R.abda8038d85cd3d42aebad9ee9831484?rik=BeiyUBDS%2fL0esw&riu=http%3a%2f%2fwww.yummyfoodrecipes.com%2fresources%2fpicture%2forg%2fStir-Fried-Mixed-Vegetables-in-Butter-Recipe.jpg&ehk=e5HmVjF0hksJmovNS3Cg3zLeHNCzth%2boHcmI41cdUbI%3d&risl=&pid=ImgRaw&r=0',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Local vegetables stir-fried lightly with mustard oil and minimal spices.',
            ingredients: [
                '1 cup cabbage, shredded',
                '1/2 cup carrots, sliced',
                '1/2 cup beans, chopped',
                '2 green chilies, chopped',
                '1 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Heat mustard oil, add green chilies and sauté 1 minute.',
                'Add vegetables, salt, and stir-fry 10-15 minutes until tender but crisp.',
                'Serve hot as a side dish.'
            ],
            tips: 'Do not overcook to retain crunchiness and nutrients.'
        }
    ]
},               
'Tamil-Nadu': {
    title: 'Tamil Nadu Recipes',
    subtitle: 'Spicy and flavorful dishes from Tamil Nadu with rich traditional taste',
    recipes: [
        {
            id: 'tamil-nadu-idli-sambar',
            name: 'Idli with Sambar',
            image: 'https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg',
            time: '1 hr 30 min (fermentation) + 20 min prep',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Steamed rice cakes served with spicy lentil and vegetable sambar.',
            ingredients: [
                'For Idli: 2 cups rice, 1 cup urad dal, 1/2 tsp fenugreek seeds, water as needed, salt',
                'For Sambar: 1 cup toor dal, 2-3 cups water, 1 carrot, 1 drumstick, 1 tomato, 1 onion, 1 tbsp tamarind paste, 1 tsp mustard seeds, 1 tsp sambar powder, curry leaves, salt to taste, 2 tbsp oil'
            ],
            instructions: [
                'Soak rice and urad dal separately for 4-6 hours. Grind to smooth batter, ferment overnight.',
                'Steam batter in idli molds 10-12 minutes until cooked.',
                'Sambar: Cook dal until soft, heat oil, add mustard seeds, onions, curry leaves, sambar powder, tamarind paste, and vegetables; simmer 15-20 minutes.',
                'Serve hot idlis with sambar.'
            ],
            tips: 'Ensure fermentation for soft idlis; adjust tamarind for desired tanginess.'
        },
        {
            id: 'tamil-nadu-dosa',
            name: 'Dosa',
            image: 'https://cdn.shopify.com/s/files/1/3028/7274/articles/1582305526_1582305520_1582305364_1582305349_1582304487_1582304482_1582297507_1582297420_1582297166_1582297160_Masala_Dosa_1.jpg?v=1582305529',
            time: '1 hr 30 min (fermentation) + 20 min cooking',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Crispy fermented rice and urad dal crepes served with chutney.',
            ingredients: [
                '2 cups rice, 1 cup urad dal, 1/2 tsp fenugreek seeds, water as needed, salt',
                'Oil for cooking'
            ],
            instructions: [
                'Soak rice and dal, grind to smooth batter, ferment overnight.',
                'Heat griddle, pour a ladle of batter, spread thin, drizzle oil around edges.',
                'Cook until golden and crisp, flip if desired, serve with coconut chutney.'
            ],
            tips: 'Use medium heat to get crispy yet soft dosa inside.'
        },
        {
            id: 'tamil-nadu-chicken-chettinad',
            name: 'Chicken Chettinad',
            image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/03/ChickenChettinad.webp',
            time: '1 hr',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy chicken curry with aromatic Chettinad masala.',
            ingredients: [
                '500g chicken, cut into pieces',
                '2 onions, finely chopped',
                '2 tomatoes, chopped',
                '2 tsp ginger-garlic paste',
                '1 tsp turmeric powder',
                '2 tsp red chili powder',
                '2 tsp coriander powder',
                '1 tsp fennel seeds, roasted and ground',
                '2 tbsp oil, salt to taste',
                '2 cups water'
            ],
            instructions: [
                'Heat oil, sauté onions until golden, add ginger-garlic paste and cook 2 minutes.',
                'Add tomatoes and cook until soft, add turmeric, chili, coriander, and fennel powder.',
                'Add chicken, coat well, add water, cover, and simmer 35-40 minutes until chicken is tender.',
                'Serve hot with rice or roti.'
            ],
            tips: 'Roast spices freshly for authentic Chettinad flavor.'
        },
        {
            id: 'tamil-nadu-pongal',
            name: 'Ven Pongal',
            image: 'https://www.indianveggiedelight.com/wp-content/uploads/2021/11/ven-pongal-featured.jpg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Creamy rice and moong dal dish tempered with black pepper, cumin, and ghee.',
            ingredients: [
                '1 cup rice, 1/4 cup moong dal, 2 cups water, 1 tsp black pepper, 1 tsp cumin seeds, 2 tbsp ghee, curry leaves, salt to taste'
            ],
            instructions: [
                'Cook rice and moong dal together until soft and mushy.',
                'Heat ghee, add cumin seeds, black pepper, and curry leaves; pour over cooked rice.',
                'Mix well and serve hot with coconut chutney.'
            ],
            tips: 'Adjust ghee for creaminess; freshly crushed pepper enhances flavor.'
        },
        {
            id: 'tamil-nadu-medhu-vada',
            name: 'Medhu Vada',
            image: 'https://tse1.mm.bing.net/th/id/OIP.9U6dXwh9oB731D9cbDEY2wHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Crispy lentil doughnuts, a popular South Indian snack.',
            ingredients: [
                '1 cup urad dal, soaked 4-6 hours, 1 green chili chopped, 1 tsp ginger, curry leaves, salt, oil for deep frying'
            ],
            instructions: [
                'Grind urad dal into smooth batter, mix with chili, ginger, curry leaves, and salt.',
                'Shape into doughnuts and deep-fry until golden brown.',
                'Serve hot with coconut chutney or sambar.'
            ],
            tips: 'Do not add water while grinding; ensures fluffy texture.'
        },
        {
            id: 'tamil-nadu-meen-kuzhambu',
            name: 'Meen Kuzhambu (Fish Curry)',
            image: 'https://tse2.mm.bing.net/th/id/OIP.0pLkVA6ONn7CUHKNSBKORgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Tangy and spicy fish curry with tamarind and coconut.',
            ingredients: [
                '500g fish, 1 onion chopped, 2 tomatoes chopped, 1 tbsp tamarind paste, 1 tsp chili powder, 1 tsp turmeric, 1/2 tsp mustard seeds, 1 cup coconut milk, 2 tbsp oil, salt to taste'
            ],
            instructions: [
                'Heat oil, add mustard seeds, onions, and fry until golden.',
                'Add tomatoes, turmeric, chili powder, and tamarind paste; cook 5 minutes.',
                'Add fish and coconut milk, simmer 10-12 minutes until fish is cooked.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Use firm fish for best results; do not overcook.'
        },
        {
            id: 'tamil-nadu-adai',
            name: 'Adai (Lentil Pancake)',
            image: 'https://farm4.staticflickr.com/3788/9404300999_96121accc0_z.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Savory pancake made from mixed lentils, spicy and filling.',
            ingredients: [
                '1/2 cup chana dal, 1/2 cup toor dal, 1/4 cup rice, 2 green chilies, 1/2 tsp turmeric, salt, oil for cooking'
            ],
            instructions: [
                'Soak dals and rice for 3-4 hours, grind with chilies and turmeric to form thick batter.',
                'Heat griddle, pour batter, spread thin, drizzle oil around edges.',
                'Cook until golden and crisp on both sides. Serve with coconut chutney or jaggery.'
            ],
            tips: 'Batter should be thick but pourable; medium flame ensures crisp exterior.'
        },
        {
            id: 'tamil-nadu-payasam',
            name: 'Rava Kesari (Semolina Pudding)',
            image: 'https://i0.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/08/Rava-Kesari-1.jpg?resize=1024%2C683',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet semolina pudding flavored with saffron and ghee.',
            ingredients: [
                '1/2 cup semolina (rava), 1/2 cup sugar, 2 cups water, 2 tbsp ghee, a pinch of saffron, 2 tbsp chopped cashews and raisins'
            ],
            instructions: [
                'Roast semolina in ghee until aromatic.',
                'Boil water, add saffron, pour over roasted semolina, cook until water absorbed.',
                'Add sugar, cashews, and raisins, cook 5 minutes.',
                'Serve warm.'
            ],
            tips: 'Stir constantly to prevent lumps; garnish generously for aroma.'
        },
        {
            id: 'tamil-nadu-mysore-pak',
            name: 'Mysore Pak',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/08/mysore-pak.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4-5 people',
            description: 'Rich sweet made from gram flour, ghee, and sugar.',
            ingredients: [
                '1 cup gram flour, 1 cup sugar, 1/2 cup ghee, 1/4 cup water'
            ],
            instructions: [
                'Roast gram flour lightly until aromatic.',
                'Prepare sugar syrup with water, pour gradually into roasted flour while stirring.',
                'Add ghee slowly, stir until mixture thickens and leaves sides of pan.',
                'Pour into greased tray, cool, cut into pieces and serve.'
            ],
            tips: 'Constant stirring ensures smooth texture; do not overcook.'
        }
    ]
},
'Telangana': {
    title: 'Telangana Recipes',
    subtitle: 'Spicy and hearty dishes from Telangana with bold flavors',
    recipes: [
        {
            id: 'telangana-hyderabadi-biryani',
            name: 'Hyderabadi Biryani',
            image: 'https://efoodsdirect.co.uk/wp-content/uploads/2021/09/Hyderabadi-Biryani1_11zon.jpg',
            time: '1 hr 30 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Fragrant rice layered with spicy marinated chicken or mutton.',
            ingredients: [
                '2 cups basmati rice, 500g chicken, 1 cup yogurt, 2 onions sliced, 1 tbsp ginger-garlic paste, 1 tsp turmeric, 2 tsp red chili powder, 1 tsp garam masala, 2 cups water, 2 tbsp ghee, salt to taste'
            ],
            instructions: [
                'Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt 30 min.',
                'Cook rice 70% done.',
                'Layer rice and chicken in heavy-bottomed pan, top with fried onions, ghee, and garam masala.',
                'Cover tightly, cook on low flame 20-25 min for dum cooking.',
                'Serve hot with raita.'
            ],
            tips: 'Use heavy-bottomed vessel for even cooking; soak rice 30 min before cooking.'
        },
        {
            id: 'telangana-pulihora',
            name: 'Pulihora (Tamarind Rice)',
            image: 'https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/07/Pulihora-1.jpg?resize=800%2C533&ssl=1',
            time: '25 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy tamarind rice with spices and peanuts.',
            ingredients: [
                '2 cups cooked rice, 2 tbsp tamarind paste, 1 tsp mustard seeds, 1 tsp chana dal, 1 tsp urad dal, 2 green chilies chopped, 2 tbsp peanuts, few curry leaves, salt, 2 tbsp oil'
            ],
            instructions: [
                'Heat oil, add mustard seeds, chana dal, urad dal, peanuts, green chilies, and curry leaves; sauté 2-3 min.',
                'Add tamarind paste, 1/4 cup water, cook 2 min.',
                'Mix with rice, adjust salt, serve warm.'
            ],
            tips: 'Use fresh tamarind paste for authentic tangy taste.'
        },
        {
            id: 'telangana-saaru',
            name: 'Gongura Saaru',
            image: 'https://1.bp.blogspot.com/-6ADE2E125lI/VzAOn1oohcI/AAAAAAAAJoI/PJc5u2FOkQ8T9dxQYJdQBDCw7rC-Uo2OgCLcB/s1600/gongura%2Bpickle.jpg',
            time: '30 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Tangy curry made with gongura leaves and spices.',
            ingredients: [
                '1 cup gongura leaves, 2 green chilies, 1 tsp mustard seeds, 1/2 tsp fenugreek seeds, 1 onion chopped, salt, 2 tbsp oil, 1/4 tsp turmeric'
            ],
            instructions: [
                'Heat oil, add mustard seeds and fenugreek, sauté 1 min.',
                'Add onions, turmeric, green chilies, cook 3-4 min.',
                'Add gongura leaves, sauté until soft.',
                'Add water, simmer 5-7 min. Serve with rice.'
            ],
            tips: 'Use fresh leaves; adjust tanginess with less or more sautéing.'
        },
        {
            id: 'telangana-pesarattu',
            name: 'Pesarattu (Green Gram Dosa)',
            image: 'https://thegrandsweets.com/wp-content/uploads/2022/10/GREEN-GRAM-DOSA-PESARATTU-MIX.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Crispy dosa made from soaked green gram, served with chutney.',
            ingredients: [
                '1 cup green gram (moong dal), soaked overnight, 1-2 green chilies, 1 inch ginger, salt, oil for cooking'
            ],
            instructions: [
                'Grind soaked moong dal with green chilies and ginger into smooth batter.',
                'Heat griddle, pour batter, spread thin, drizzle oil around edges.',
                'Cook until crisp, serve with coconut or ginger chutney.'
            ],
            tips: 'Use medium heat for crisp outer and soft inner texture.'
        },
        {
            id: 'telangana-natu-kozhi-curry',
            name: 'Natu Kodi Curry (Country Chicken Curry)',
            image: 'https://ruchipalace.com/wp-content/uploads/2022/06/Natu-Kodi-Curry-Country-Chicken-.jpg',
            time: '1 hr',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy Telangana country chicken curry cooked with traditional spices.',
            ingredients: [
                '500g country chicken, 2 onions, 2 tomatoes, 2 tsp ginger-garlic paste, 1 tsp turmeric, 2 tsp chili powder, 1 tsp coriander powder, 1 tsp garam masala, 2 tbsp oil, salt, 1 cup water'
            ],
            instructions: [
                'Heat oil, sauté onions until golden, add ginger-garlic paste and cook 2 min.',
                'Add tomatoes, turmeric, chili, coriander powder; cook 5 min.',
                'Add chicken, coat with masala, add water, simmer 40-45 min until tender.',
                'Serve hot with steamed rice or chapati.'
            ],
            tips: 'Cook on low flame for tender chicken; use country chicken for authentic taste.'
        },
        {
            id: 'telangana-bhindi-fry',
            name: 'Telangana Bhindi Fry',
            image: 'https://tse2.mm.bing.net/th/id/OIP.BBPQ8VdsAKkcsbZ6JgoDigAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Spicy and dry okra stir-fry with Telangana-style spices.',
            ingredients: [
                '250g bhindi, chopped, 1 onion chopped, 1 tsp turmeric, 1 tsp chili powder, 1 tsp coriander powder, salt, 2 tbsp oil'
            ],
            instructions: [
                'Heat oil, sauté onions until golden.',
                'Add bhindi and spices, cook 15-20 min on medium flame until tender and slightly crisp.',
                'Serve hot as side dish with rice.'
            ],
            tips: 'Do not cover while cooking; keeps bhindi crisp.'
        },
        {
            id: 'telangana-jowar-roti',
            name: 'Jowar Roti',
            image: 'https://tse3.mm.bing.net/th/id/OIP.4NdR-BT2YhBzmz6M8r4LHgHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Traditional sorghum flatbread, gluten-free and nutritious.',
            ingredients: [
                '2 cups jowar flour, warm water as needed, salt to taste'
            ],
            instructions: [
                'Mix flour and salt, add warm water gradually to form soft dough.',
                'Divide into balls, roll into flatbreads, cook on hot griddle flipping both sides until done.',
                'Serve hot with curry or chutney.'
            ],
            tips: 'Use warm water for pliable dough; cook on medium heat for softness.'
        },
        {
            id: 'telangana-pootharekulu',
            name: 'Telangana Pootharekulu Sweet',
            image: 'https://www.greatindiansweets.com/wp-content/uploads/2022/09/Atreyapuram-Putharekulu.webp',
            time: '60 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Delicate rice paper sweet with jaggery and dry fruits.',
            ingredients: [
                'Thin rice sheets, 1/2 cup jaggery, 1/4 cup grated coconut, chopped almonds and cashews'
            ],
            instructions: [
                'Melt jaggery, mix with coconut and dry fruits.',
                'Place filling between two rice sheets, fold carefully.',
                'Serve as delicate Telangana sweet.'
            ],
            tips: 'Handle rice sheets gently to avoid tearing.'
        }
    ]
},
'Tripura': {
    title: 'Tripura Recipes',
    subtitle: 'Authentic dishes from Tripura with traditional flavors and tribal influences',
    recipes: [
        {
            id: 'tripura-mui-chingri',
            name: 'Mui Chingri (Smoked Prawn Curry)',
            image: 'https://maunikagowardhan.co.uk/wp-content/uploads/2016/01/Keralan-Prawn-Curry.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Smoked prawns cooked in a spicy and tangy gravy with local herbs.',
            ingredients: [
                '300g smoked prawns, 2 onions chopped, 2 tomatoes chopped, 1 tsp turmeric, 2 tsp chili powder, 2 tsp mustard oil, 1 tsp ginger-garlic paste, salt to taste, 1 cup water'
            ],
            instructions: [
                'Heat mustard oil, sauté onions until golden, add ginger-garlic paste and cook 2 minutes.',
                'Add tomatoes, turmeric, chili powder, cook until oil separates.',
                'Add smoked prawns, water, simmer 20 min until cooked.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Use freshly smoked prawns for authentic flavor.'
        },
        {
            id: 'tripura-berma',
            name: 'Berma (Dried Fish Curry)',
            image: 'https://i.ytimg.com/vi/K5tBmmZErRA/maxresdefault.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Fermented dried fish cooked with onions, garlic, and spices.',
            ingredients: [
                '200g dried fish, 1 onion chopped, 2 garlic cloves minced, 1 tsp chili powder, 2 tbsp mustard oil, salt to taste'
            ],
            instructions: [
                'Heat mustard oil, sauté onions and garlic until golden.',
                'Add chili powder and dried fish, cook 10-15 minutes until fish softens and flavors blend.',
                'Serve hot with rice.'
            ],
            tips: 'Soak dried fish briefly to remove excess salt.'
        },
        {
            id: 'tripura-mui-bhat',
            name: 'Mui Bhat (Tripuri Rice)',
            image: 'https://www.crazymasalafood.com/wp-content/images/2023/07/kanai-diye-bhaat-768x480.jpeg',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Steamed rice flavored with local herbs and aromatic leaves.',
            ingredients: [
                '2 cups rice, 2 cups water, 1 tsp oil, few curry leaves, salt to taste'
            ],
            instructions: [
                'Rinse rice, soak 15 minutes.',
                'Boil water with oil, curry leaves, and salt, add rice, simmer 15-20 min until fluffy.',
                'Serve as a staple with curries.'
            ],
            tips: 'Use aromatic leaves for authentic taste.'
        },
        {
            id: 'tripura-veg-thali',
            name: 'Tripura Vegetable Thali',
            image: 'https://images.slurrp.com/prod/articles/gxe0i8wegl9.webp?impolicy=slurrp-20210601&width=1200&height=675',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'A wholesome platter with local seasonal vegetables and dal.',
            ingredients: [
                'Assorted vegetables (pumpkin, beans, spinach), 1 cup moong dal, 1 onion, 2 tomatoes, 1 tsp turmeric, 2 tsp mustard oil, salt'
            ],
            instructions: [
                'Cook moong dal with turmeric and salt until soft.',
                'Sauté onions and tomatoes with mustard oil, add vegetables, cook 15-20 min.',
                'Serve with rice, dal, and pickles.'
            ],
            tips: 'Use fresh vegetables for best taste.'
        },
        {
            id: 'tripura-chicken-mozha',
            name: 'Chicken Mozha',
            image: 'https://th.bing.com/th/id/R.3fda0a149be6f66df65dfe5222745f08?rik=TYWdkA9n7%2bUTBA&riu=http%3a%2f%2fwww.omahasteaks.com%2fgifs%2f990x594%2fck138.jpg&ehk=bgpnRO%2fPFls5mCr5QkF%2fI%2bPuYIpq6wiMvZQnEsEM8K0%3d&risl=&pid=ImgRaw&r=0',
            time: '1 hr',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Traditional Tripuri chicken curry with aromatic spices and herbs.',
            ingredients: [
                '500g chicken, 2 onions chopped, 2 tomatoes chopped, 1 tsp turmeric, 2 tsp chili powder, 1 tsp ginger-garlic paste, 2 tbsp mustard oil, salt, 1 cup water'
            ],
            instructions: [
                'Heat mustard oil, sauté onions until golden, add ginger-garlic paste, cook 2 min.',
                'Add tomatoes and spices, cook until oil separates.',
                'Add chicken and water, simmer 35-40 min until tender.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Cook slowly for tender meat and rich flavor.'
        },
        {
            id: 'tripura-puli-dhok',
            name: 'Puli Dhok (Tamarind Rice)',
            image: 'https://someindiangirl.com/wp-content/uploads/2023/03/Tamarind-Rice-33-of-9-1024x1536.jpg',
            time: '25 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Tangy rice flavored with tamarind and spices.',
            ingredients: [
                '2 cups cooked rice, 2 tbsp tamarind paste, 1 tsp mustard seeds, 1 tsp chana dal, 2 green chilies chopped, 2 tbsp peanuts, few curry leaves, 2 tbsp oil, salt'
            ],
            instructions: [
                'Heat oil, add mustard seeds, chana dal, peanuts, green chilies, curry leaves, sauté 2-3 min.',
                'Add tamarind paste, 1/4 cup water, cook 2 min.',
                'Mix with rice, adjust salt, serve warm.'
            ],
            tips: 'Use fresh tamarind for authentic tangy flavor.'
        },
        {
            id: 'tripura-fish-fry',
            name: 'Tripuri Fish Fry',
            image: 'https://1.bp.blogspot.com/-dmr7TvaMJ7c/WRyLh1RZjlI/AAAAAAAAIF4/uPHo3WFtctE8ZS34-s0mkRyNRkU-2-SzgCLcB/s1600/0000000000000000000000A%2B%25281%2529.jpg',
            time: '30 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Spicy pan-fried fish coated with local masalas.',
            ingredients: [
                '300g fish, 1 tsp turmeric, 1 tsp chili powder, 1 tsp coriander powder, salt, 2 tbsp mustard oil'
            ],
            instructions: [
                'Marinate fish with turmeric, chili, coriander, and salt 15 min.',
                'Heat mustard oil, fry fish on medium heat 4-5 min each side until crisp.',
                'Serve hot as appetizer or side dish.'
            ],
            tips: 'Do not overcrowd pan; fry in batches for crispiness.'
        },
        {
            id: 'tripura-pithe',
            name: 'Pithe (Rice Cake Sweet)',
            image: 'https://cookishcreation.com/wp-content/uploads/2021/11/Vapa-Pitha-Cookish-Creation.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Sweet rice flour dumplings stuffed with coconut and jaggery.',
            ingredients: [
                '1 cup rice flour, 1/2 cup grated coconut, 1/2 cup jaggery, water to knead, ghee for greasing'
            ],
            instructions: [
                'Mix rice flour with water to form soft dough.',
                'Prepare filling with coconut and jaggery.',
                'Shape dough around filling into dumplings, steam 15-20 min.',
                'Serve warm with ghee.'
            ],
            tips: 'Ensure tight sealing of dough to prevent filling leakage.'
        },
        {
            id: 'tripura-khar',
            name: 'Khar (Banana Stem Curry)',
            image: 'https://tse1.explicit.bing.net/th/id/OIP.d41zCYE4QmAeGLCkvJImfwHaJ4?cb=12&w=900&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional Tripuri dish with raw banana stem, mildly spiced.',
            ingredients: [
                '1 cup banana stem chopped, 1 onion, 2 green chilies, 1 tsp mustard seeds, 2 tbsp mustard oil, salt'
            ],
            instructions: [
                'Heat mustard oil, add mustard seeds, sauté onions and chilies.',
                'Add banana stem, salt, cook 15-20 min until tender.',
                'Serve hot as side with rice.'
            ],
            tips: 'Use tender banana stem for soft texture.'
        }
    ]
},
'Uttarakhand': {
    title: 'Uttarakhand Recipes',
    subtitle: 'Wholesome and traditional dishes from the Himalayan region of Uttarakhand',
    recipes: [
        {
            id: 'uttarakhand-kafuli',
            name: 'Kafuli (Spinach and Green Leaf Curry)',
            image: 'https://images.slurrp.com/prod/articles/i0vauby5er.webp',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Thick, creamy curry made with spinach and fenugreek leaves, flavored with local spices.',
            ingredients: [
                '2 cups spinach, 1 cup fenugreek leaves, 1 onion chopped, 2 tomatoes chopped, 1 tsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp cumin seeds, 2 tbsp ghee, salt to taste'
            ],
            instructions: [
                'Blanch spinach and fenugreek leaves, grind to smooth paste.',
                'Heat ghee, add cumin seeds and onions, sauté until golden.',
                'Add ginger-garlic paste, tomatoes, turmeric, cook 5 min.',
                'Add leaf paste, simmer 15 min until thickened.',
                'Serve hot with rice or chapati.'
            ],
            tips: 'Use fresh, tender leaves for best taste; avoid overcooking to retain nutrients.'
        },
        {
            id: 'uttarakhand-ras',
            name: 'Chainsoo (Black Gram Dal)',
            image: 'https://i.pinimg.com/originals/01/8d/7c/018d7c6bb13ab9c7377195ddef9742c3.png',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Spiced black gram dal, roasted and cooked to rich consistency.',
            ingredients: [
                '1 cup black gram dal (urad), 2 tbsp ghee, 1 tsp cumin seeds, 1 onion chopped, 1 tsp ginger-garlic paste, 1 tsp chili powder, salt'
            ],
            instructions: [
                'Dry roast black gram dal until aromatic, then grind coarsely.',
                'Heat ghee, add cumin seeds, onions, sauté until golden, add ginger-garlic paste.',
                'Add ground dal and 2 cups water, simmer 30-35 min until cooked.',
                'Add chili powder, adjust salt, serve hot.'
            ],
            tips: 'Roasting enhances the flavor; stir continuously while cooking to avoid sticking.'
        },
        {
            id: 'uttarakhand-bhangjeera-bhatt',
            name: 'Bhangjeera Bhatt (Soybean Curry)',
            image: 'https://i.pinimg.com/originals/98/71/85/98718569a2a536eb99663c0343a440eb.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Local soybean curry flavored with Himalayan spices.',
            ingredients: [
                '1 cup black soybeans, 1 onion chopped, 2 tomatoes chopped, 1 tsp turmeric, 1 tsp chili powder, 2 tbsp mustard oil, salt, 2 cups water'
            ],
            instructions: [
                'Soak soybeans 4-5 hours, boil until tender.',
                'Heat mustard oil, sauté onions, add tomatoes, turmeric, chili powder, cook 5 min.',
                'Add boiled soybeans, water, simmer 20 min.',
                'Serve hot with rice.'
            ],
            tips: 'Ensure soybeans are tender before adding to curry for smooth texture.'
        },
        {
            id: 'uttarakhand-aalu-ke-rase',
            name: 'Aloo Ke Rase (Potato Curry)',
            image: 'https://tse3.mm.bing.net/th/id/OIP.C2uwnyXo7fH4nIgdR4YjHgHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '30 min',
            difficulty: 'Easy',
            servings: '3-4 people',
            description: 'Simple potato curry with spices and ghee, popular in Kumaoni cuisine.',
            ingredients: [
                '3 medium potatoes, 1 onion chopped, 1 tsp ginger paste, 1/2 tsp turmeric, 1 tsp cumin seeds, 2 tbsp ghee, 2 cups water, salt'
            ],
            instructions: [
                'Peel and cube potatoes, boil until slightly tender.',
                'Heat ghee, add cumin seeds, onions, ginger, sauté until golden.',
                'Add turmeric, potatoes, water, simmer 10-15 min until cooked.',
                'Serve hot with steamed rice or rotis.'
            ],
            tips: 'Use waxy potatoes for firm texture; adjust water for consistency.'
        },
        {
            id: 'uttarakhand-rasgulla',
            name: 'Rasgulla',
            image: 'https://www.palatesdesire.com/wp-content/uploads/2022/09/rasgulla-recipe@palates-desire.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Soft and spongy cheese balls soaked in sugar syrup.',
            ingredients: [
                '1 liter milk, 2 tbsp lemon juice, 1 cup sugar, 2 cups water, 2-3 cardamom pods'
            ],
            instructions: [
                'Boil milk, curdle with lemon juice, strain to get chhena (paneer).',
                'Knead chhena until smooth, shape into balls.',
                'Boil sugar and water with cardamom, add balls, simmer 10-12 min.',
                'Cool and serve chilled.'
            ],
            tips: 'Knead chhena properly for soft texture; maintain low flame while boiling syrup.'
        },
        {
            id: 'uttarakhand-chhafuli-alu',
            name: 'Chhafuli Aloo (Potato with Spinach)',
            image: 'https://i.pinimg.com/originals/a4/7e/fe/a47efe2ec46e335dc3691d54910e1d96.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Potatoes cooked with spinach in a mild, flavorful curry.',
            ingredients: [
                '2 cups spinach, 2 potatoes cubed, 1 onion chopped, 1 tsp cumin seeds, 1 tsp turmeric, 2 tbsp ghee, salt'
            ],
            instructions: [
                'Blanch spinach, grind into paste.',
                'Heat ghee, add cumin seeds, onions, sauté 3-4 min.',
                'Add turmeric, potatoes, sauté 2 min, add spinach paste, simmer 15 min.',
                'Serve with rice or roti.'
            ],
            tips: 'Do not overcook spinach to retain vibrant green color.'
        },
        {
            id: 'uttarakhand-gahat-ke-dum',
            name: 'Gahat Ke Dum (Soybean Dum Curry)',
            image: 'https://c8.alamy.com/comp/REJ3XE/masala-soya-chunk-curry-made-using-soyabean-nuggets-and-spices-protein-rich-food-from-india-REJ3XE.jpg',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Slow-cooked soybean curry with aromatic spices.',
            ingredients: [
                '1 cup black soybeans, 1 onion, 2 tomatoes, 1 tsp ginger-garlic paste, 1 tsp chili powder, 1/2 tsp turmeric, 2 tbsp mustard oil, salt'
            ],
            instructions: [
                'Boil soybeans until soft.',
                'Heat oil, sauté onions, ginger-garlic paste, tomatoes, turmeric, chili powder 5 min.',
                'Add soybeans, simmer 20-25 min, adjust salt.',
                'Serve with rice.'
            ],
            tips: 'Simmer slowly to allow flavors to blend well.'
        },
        {
            id: 'uttarakhand-kheer',
            name: 'Uttarakhand Style Kheer',
            image: 'https://www.hindustantimes.com/ht-img/img/2024/09/16/original/paneer_kheer_1726480694797.jpg',
            time: '45 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Rice pudding made with milk, sugar, and dry fruits.',
            ingredients: [
                '1/2 cup rice, 1 liter milk, 1/2 cup sugar, 2 tbsp ghee, 2 tbsp cashews, 2 tbsp raisins, cardamom powder'
            ],
            instructions: [
                'Boil milk, add rice, cook until soft and creamy.',
                'Add sugar, ghee, cashews, raisins, cardamom powder, cook 5 min.',
                'Serve hot or chilled.'
            ],
            tips: 'Stir constantly to avoid sticking; add dry fruits towards end for crunch.'
        },
        {
            id: 'uttarakhand-phanu',
            name: 'Phanu (Lentil Curry)',
            image: 'https://tse2.mm.bing.net/th/id/OIP.DSqkGfRo6TjOXrWc8ei0ywHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'A hearty lentil curry typical in Garhwali cuisine.',
            ingredients: [
                '1 cup black lentils, 1 onion chopped, 2 tomatoes chopped, 1 tsp ginger-garlic paste, 1/2 tsp turmeric, 1 tsp chili powder, 2 tbsp ghee, salt, 2 cups water'
            ],
            instructions: [
                'Boil lentils until tender.',
                'Heat ghee, sauté onions and ginger-garlic paste, add tomatoes, turmeric, chili powder 5 min.',
                'Add lentils, simmer 15-20 min, adjust salt.',
                'Serve with rice or roti.'
            ],
            tips: 'Simmer gently to blend flavors without breaking lentils.'
        }
    ]
},
'Uttar-Pradesh': {
    title: 'Uttar Pradesh Recipes',
    subtitle: 'Delicious traditional dishes from the heart of North India',
    recipes: [
        {
            id: 'up-kebabs',
            name: 'Galouti Kebab',
            image: 'https://tse1.explicit.bing.net/th/id/OIP.9y_tR-vEGM5phVkM8sSXgwHaLG?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '1 hr',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Soft, flavorful minced meat kebabs from Lucknow, rich in aromatic spices.',
            ingredients: [
                '500g minced lamb, 1 tsp ginger-garlic paste, 1 tsp chili powder, 1 tsp garam masala, 1 tbsp ghee, salt, 1 egg, 2 tbsp bread crumbs'
            ],
            instructions: [
                'Mix minced meat with all spices, egg, and bread crumbs; knead until smooth.',
                'Shape into small patties, refrigerate 30 min.',
                'Heat ghee in a pan, shallow fry kebabs until golden and cooked through.',
                'Serve hot with green chutney or parathas.'
            ],
            tips: 'Use fine minced meat for soft texture; avoid overcooking.'
        },
        {
            id: 'up-biryani',
            name: 'Awadhi Biryani',
            image: 'https://www.licious.in/blog/wp-content/uploads/2022/11/Shutterstock_639330364-530x530.jpg',
            time: '1 hr 30 min',
            difficulty: 'Hard',
            servings: '4-5 people',
            description: 'Aromatic layered rice and meat dish from Lucknow, slow-cooked with saffron and spices.',
            ingredients: [
                '2 cups basmati rice, 500g chicken/mutton, 2 onions, 2 tomatoes, 1 tsp ginger-garlic paste, 1 tsp turmeric, 1 tsp chili powder, 1/2 tsp saffron, 2 tbsp ghee, 4 cups water, salt, whole spices (cumin, cardamom, cloves, bay leaf)'
            ],
            instructions: [
                'Marinate meat with spices and ginger-garlic paste 30 min.',
                'Fry onions until golden, add meat and tomatoes, cook until tender.',
                'Parboil rice with saffron and whole spices.',
                'Layer rice and meat in a heavy-bottomed pan, cook on low flame 20-25 min (dum).',
                'Serve hot with raita.'
            ],
            tips: 'Use heavy-bottomed pan for even cooking; maintain low flame during dum.'
        },
        {
            id: 'up-korma',
            name: 'Mughlai Korma',
            image: 'https://www.easycookingwithmolly.com/wp-content/uploads/2012/05/mughlai-chicken-korma-4.jpg',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rich creamy curry made with meat, yogurt, and aromatic spices.',
            ingredients: [
                '500g chicken/mutton, 1 cup yogurt, 2 onions, 1 tsp ginger-garlic paste, 1 tsp turmeric, 1 tsp chili powder, 1 tsp garam masala, 2 tbsp ghee, salt'
            ],
            instructions: [
                'Heat ghee, sauté onions until golden, add ginger-garlic paste and cook 2 min.',
                'Add spices, yogurt, meat; cook covered 35-40 min until tender.',
                'Garnish with fried onions and coriander, serve hot with naan or rice.'
            ],
            tips: 'Use fresh yogurt to prevent curdling; cook on medium flame for creaminess.'
        },
        {
            id: 'up-veg-pulao',
            name: 'Vegetable Pulao',
            image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/pulao-veg-pulao.jpg',
            time: '40 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Fragrant rice cooked with seasonal vegetables and mild spices.',
            ingredients: [
                '2 cups basmati rice, 1 cup mixed vegetables (carrot, beans, peas), 1 onion, 1 tsp cumin seeds, 2 tbsp ghee, 4 cups water, salt, 1/2 tsp turmeric, whole spices (bay leaf, cloves, cardamom)'
            ],
            instructions: [
                'Heat ghee, sauté cumin seeds and onions until golden.',
                'Add vegetables, turmeric, sauté 2-3 min.',
                'Add rice and water, cover, simmer 15-20 min until rice is cooked.',
                'Fluff with fork, serve hot.'
            ],
            tips: 'Rinse rice thoroughly to prevent stickiness.'
        },
        {
            id: 'up-bedmi-puri',
            name: 'Bedmi Puri with Aloo Sabzi',
            image: 'https://tse1.mm.bing.net/th/id/OIP.nepHdiOZQL32NiPGc6PLOAHaLG?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '45 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Deep-fried lentil-stuffed puris served with spicy potato curry, popular in Uttar Pradesh.',
            ingredients: [
                '1 cup wheat flour, 1/2 cup urad dal soaked and ground, salt, 1 tsp chili powder, oil for frying, 3 potatoes boiled and mashed, 1 onion chopped, 1 tsp cumin seeds, 1 tsp turmeric, 1 tsp coriander powder'
            ],
            instructions: [
                'Prepare dough with wheat flour and water.',
                'Mix urad dal paste with spices for stuffing, fill dough balls, roll into puris.',
                'Deep fry until golden brown.',
                'Prepare potato sabzi with onions, spices, mashed potatoes, serve hot with puris.'
            ],
            tips: 'Keep oil medium-hot to cook puris evenly; serve immediately for best taste.'
        },
        {
            id: 'up-kulfi',
            name: 'Malai Kulfi',
            image: 'https://tse2.mm.bing.net/th/id/OIP.uxoMiqWhmGAWuT3LLUAo-gHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '6 hr (including freezing)',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Creamy traditional Indian ice cream flavored with cardamom and saffron.',
            ingredients: [
                '1 liter full-fat milk, 1/2 cup sugar, 1/4 tsp cardamom powder, a few strands saffron, chopped nuts (almonds, pistachios)'
            ],
            instructions: [
                'Boil milk, simmer on low heat, stirring frequently until reduced to half.',
                'Add sugar, cardamom, saffron, simmer 5 min.',
                'Pour into molds, sprinkle nuts, freeze at least 5-6 hours.',
                'Serve chilled.'
            ],
            tips: 'Stir milk continuously to avoid burning; use full-fat milk for creamy texture.'
        },
        {
            id: 'up-kebabs-veg',
            name: 'Paneer Tikka',
            image: 'https://tse1.mm.bing.net/th/id/OIP.YMUBgbQa3yM-XWiBe7fYtQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Marinated cottage cheese cubes grilled to perfection.',
            ingredients: [
                '200g paneer, 2 tbsp yogurt, 1 tsp chili powder, 1 tsp turmeric, 1 tsp garam masala, 1 tsp ginger-garlic paste, 1 tbsp oil, salt'
            ],
            instructions: [
                'Mix yogurt and spices to make marinade, coat paneer cubes, refrigerate 15-20 min.',
                'Skewer paneer, brush with oil, grill or pan-fry 10-12 min until golden.',
                'Serve hot with mint chutney.'
            ],
            tips: 'Use firm paneer to prevent crumbling; grill on medium heat.'
        },
        {
            id: 'up-kheer',
            name: 'Seviyan Kheer',
            image: 'https://i0.wp.com/www.lifeisforfood.com/wp-content/uploads/2021/04/Seviyan-Kheer.jpg?w=1080&ssl=1',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Sweet vermicelli pudding cooked in milk with sugar and nuts.',
            ingredients: [
                '50g seviyan (vermicelli), 500ml milk, 1/4 cup sugar, 2 tbsp ghee, chopped nuts, cardamom powder'
            ],
            instructions: [
                'Roast vermicelli in ghee until light golden.',
                'Boil milk, add vermicelli, cook until soft.',
                'Add sugar, cardamom, nuts, simmer 5 min, serve warm or chilled.'
            ],
            tips: 'Stir continuously to prevent sticking; add nuts at end for crunch.'
        },
        {
            id: 'up-mutton-curry',
            name: 'Mutton Curry',
            image: 'https://tse3.mm.bing.net/th/id/OIP.YJBy1NvjmTOJbC4hZ9KNawHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '1 hr 15 min',
            difficulty: 'Hard',
            servings: '4 people',
            description: 'Spicy, aromatic North Indian mutton curry perfect with rice or roti.',
            ingredients: [
                '500g mutton, 2 onions chopped, 2 tomatoes chopped, 1 tsp ginger-garlic paste, 1 tsp turmeric, 1 tsp chili powder, 1 tsp coriander powder, 2 tbsp oil, salt, 1 cup water'
            ],
            instructions: [
                'Heat oil, sauté onions until golden, add ginger-garlic paste, cook 2 min.',
                'Add tomatoes and spices, cook 5-6 min.',
                'Add mutton, water, cover, simmer 50-60 min until tender.',
                'Serve hot with rice or rotis.'
            ],
            tips: 'Cook on low flame for tender meat; adjust spices for desired heat.'
        }
    ]
},
'West-Bengal': {
    title: 'West Bengal Recipes',
    subtitle: 'Classic Bengali cuisine, rich in fish, sweets, and vegetarian dishes',
    recipes: [
        {
            id: 'wb-machher-jhol',
            name: 'Machher Jhol (Bengali Fish Curry)',
            image: 'https://www.spicypunch.com/wp-content/uploads/2021/08/katla-macher-jhol-recipe-1.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'A light and flavorful fish curry with potatoes and aromatic spices, quintessential to Bengali cuisine.',
            ingredients: [
                '500g fresh Rohu or Catla fish, cut into pieces',
                '2 medium potatoes, cubed',
                '1 large onion, finely chopped',
                '1 medium tomato, chopped',
                '2 green chilies, slit',
                '1/2 tsp turmeric powder',
                '1 tsp red chili powder',
                '2 tbsp mustard oil',
                'Salt to taste',
                '2 cups water',
                'Fresh coriander for garnish'
            ],
            instructions: [
                'Heat mustard oil in a pan until it reaches smoking point to remove raw flavor.',
                'Add fish pieces and lightly fry on both sides until golden. Remove and set aside.',
                'In the same oil, sauté onions and green chilies until soft and aromatic.',
                'Add chopped tomatoes, turmeric, chili powder, and salt. Cook 5-7 minutes until tomatoes break down.',
                'Add water and cubed potatoes. Bring to a boil and simmer until potatoes are tender.',
                'Gently add the fried fish pieces and simmer 5-7 minutes, ensuring fish absorbs the flavors.',
                'Garnish with fresh coriander and serve hot with steamed rice.'
            ],
            tips: 'Use fresh fish; do not overcook to keep fish pieces intact and juicy.'
        },
        {
            id: 'wb-chingri-malai-curry',
            name: 'Chingri Malai Curry (Prawn Coconut Curry)',
            image: 'https://www.krumpli.co.uk/wp-content/uploads/2019/11/Quick-Indian-Prawn-Curry-5.jpg',
            time: '45 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Rich and creamy Bengali prawn curry cooked in coconut milk with subtle spices.',
            ingredients: [
                '300g fresh prawns, cleaned and deveined',
                '1 large onion, finely chopped',
                '1 tsp ginger-garlic paste',
                '1/2 tsp turmeric powder',
                '1 tsp red chili powder',
                '1 cup thick coconut milk',
                '2 tbsp mustard oil',
                'Salt to taste',
                '1-2 green chilies, slit',
                'Fresh coriander for garnish'
            ],
            instructions: [
                'Heat mustard oil in a pan and sauté chopped onions until soft and lightly golden.',
                'Add ginger-garlic paste and cook 2 minutes to release aroma.',
                'Add turmeric and red chili powder, stir briefly.',
                'Add prawns and cook for 4-5 minutes until they start turning pink.',
                'Pour in coconut milk and gently simmer for 10 minutes, stirring occasionally. Do not boil vigorously to prevent coconut milk from curdling.',
                'Add slit green chilies, adjust salt, and cook 2-3 minutes.',
                'Garnish with coriander leaves and serve with steamed rice.'
            ],
            tips: 'Simmer gently; boiling coconut milk can curdle the curry.'
        },
        {
            id: 'wb-macher-paturi',
            name: 'Macher Paturi (Steamed Fish in Banana Leaf)',
            image: 'https://c8.alamy.com/comp/CY1J22/kerala-steamed-fish-in-banana-leaf-CY1J22.jpg',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Bengali delicacy where fish is marinated with mustard paste, wrapped in banana leaves, and steamed for a delicate flavor.',
            ingredients: [
                '500g fish fillets (Rohu or Bhetki)',
                '2 tbsp mustard seeds paste',
                '1 tbsp poppy seed paste',
                '1 tsp turmeric powder',
                '2 green chilies, chopped',
                '2 tbsp mustard oil',
                'Salt to taste',
                'Banana leaves for wrapping'
            ],
            instructions: [
                'Mix mustard paste, poppy seed paste, turmeric, chopped green chilies, salt, and mustard oil to make a smooth marinade.',
                'Apply the marinade evenly on fish fillets and let them rest 15-20 minutes.',
                'Cut banana leaves into large pieces, place fish on them, fold, and secure with kitchen string or toothpicks.',
                'Steam the wrapped fish for 15-20 minutes on medium heat until cooked.',
                'Carefully unwrap the banana leaves and serve hot with rice.'
            ],
            tips: 'Ensure banana leaves are soft and pliable (blanched if needed) to prevent tearing during steaming.'
        },
        {
            id: 'wb-shutki-bharta',
            name: 'Shutki Bharta (Mashed Dried Fish)',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinBkctYY8bjr26_DEP86S-9c4JuCXKkjSBqdM8aU6AY0-kfOtzV9zrHvGgQ_beI7TQ3fCsOJER5E2-EKvd5KCxPxFAulKlBkagyvAlccZHSSW6VIy55_Tz1WIrFJacz_In9d0bfIFKgrA/s1600/IMG_5326.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Traditional Bengali preparation of dried fish mashed with mustard and spices, usually served as a side dish.',
            ingredients: [
                '100g dried fish, soaked briefly in warm water',
                '1 medium onion, finely chopped',
                '2 green chilies, chopped',
                '1 tsp mustard seeds',
                '2 tbsp mustard oil',
                'Salt to taste'
            ],
            instructions: [
                'Steam the soaked dried fish for 5-10 minutes until tender.',
                'Mash the fish into a coarse paste with mustard and green chilies.',
                'Heat mustard oil in a pan, sauté onions until golden.',
                'Add the mashed fish and mix thoroughly, cook 5-7 minutes until well combined.',
                'Serve hot with plain steamed rice.'
            ],
            tips: 'Use light heat to avoid bitter taste; serve immediately for best flavor.'
        },
        {
            id: 'wb-cholar-dal',
            name: 'Cholar Dal (Bengal Gram Lentils)',
            image: 'https://holycowvegan.net/wp-content/uploads/2014/06/bengali-cholar-dal-recipe.jpg',
            time: '40 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Bengali style Bengal gram lentils tempered with whole spices, often served during festivals or breakfast with luchi.',
            ingredients: [
                '1 cup chana dal (Bengal gram), soaked 30 minutes',
                '1 large onion, sliced',
                '2 green chilies, slit',
                '1 tsp ginger paste',
                '1/2 tsp turmeric powder',
                '1/2 tsp cumin seeds',
                '1 tsp ghee or mustard oil',
                'Salt to taste',
                '2 cups water'
            ],
            instructions: [
                'Boil soaked chana dal in water with turmeric until tender but not mushy.',
                'Heat ghee or mustard oil in a pan, sauté onions and green chilies until golden.',
                'Add ginger paste, sauté 2 minutes, then add boiled dal and simmer 5-7 minutes.',
                'Adjust consistency with water if needed, and add salt to taste.',
                'Serve warm with rice or luchi.'
            ],
            tips: 'Do not overcook dal; it should retain shape and texture.'
        },
        {
            id: 'wb-vegetable-torkari',
            name: 'Shukto (Mixed Vegetable Curry)',
            image: 'https://tse3.mm.bing.net/th/id/OIP.wFZrjOJqhRGcuduv9yIb1AHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
            time: '50 min',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'A bitter-sweet Bengali vegetable stew made with a variety of seasonal vegetables and a touch of mustard.',
            ingredients: [
                '1/2 cup bitter gourd, 1/2 cup raw banana, 1/2 cup drumsticks, 1/2 cup eggplant, 1 medium potato, 1/2 tsp turmeric, 1 tsp mustard seeds, 2 tbsp mustard oil, 1 tsp poppy seed paste, 1 tsp sugar, salt to taste, 3 cups water'
            ],
            instructions: [
                'Cut all vegetables into uniform pieces, lightly fry in mustard oil for 3-4 minutes.',
                'Add turmeric, water, and simmer until vegetables are tender.',
                'Add poppy seed paste, sugar, and salt; cook 5-7 minutes, allowing flavors to blend.',
                'Serve warm as a side dish with steamed rice.'
            ],
            tips: 'Balance bitter vegetables with a touch of sugar to achieve authentic Shukto flavor.'
        },
        {
            id: 'wb-rosogolla',
            name: 'Rasgulla',
            image: 'https://recipes.net/wp-content/uploads/2022/07/rasgulla.jpg',
            time: '1 hr',
            difficulty: 'Medium',
            servings: '4 people',
            description: 'Soft, spongy Bengali sweet made from chhena and soaked in light sugar syrup.',
            ingredients: [
                '1 liter full-fat milk',
                '2 tbsp lemon juice',
                '1 cup sugar',
                '2 cups water',
                '2-3 cardamom pods'
            ],
            instructions: [
                'Boil milk and curdle with lemon juice, strain through muslin to obtain chhena (paneer).',
                'Knead chhena until smooth, shape into small balls.',
                'Boil sugar and water with cardamom to make syrup.',
                'Gently add chhena balls to boiling syrup, simmer 10-12 minutes.',
                'Cool to room temperature before serving.'
            ],
            tips: 'Knead chhena properly for smooth, spongy texture; do not overcook in syrup.'
        },
        {
            id: 'wb-misti-doi',
            name: 'Mishti Doi (Sweet Yogurt)',
            image: 'https://thumbs.dreamstime.com/z/mishti-doi-traditional-bengali-food-sweet-creamy-yogurt-dessert-caramelized-sugar-clay-pots-generative-ai-illustration-311463570.jpg?w=768',
            time: '30 min',
            difficulty: 'Easy',
            servings: '4 people',
            description: 'Traditional Bengali dessert made by sweetening and fermenting thick yogurt in earthen pots.',
            ingredients: [
                '1 liter full-fat milk',
                '1/2 cup jaggery or sugar',
                '2 tbsp yogurt (for culture)',
                'Cardamom powder (optional)'
            ],
            instructions: [
                'Boil milk and simmer until slightly thickened.',
                'Add jaggery or sugar and stir until dissolved completely.',
                'Cool milk to lukewarm, mix in yogurt culture thoroughly.',
                'Pour into clay pots or bowls, cover, and keep in warm place for 4-5 hours to set.',
                'Chill before serving, sprinkle cardamom powder if desired.'
            ],
            tips: 'Use full-fat milk and allow gentle fermentation for authentic creamy taste.'
        },
        {
            id: 'wb-chingri-bhapa',
            name: 'Chingri Bhapa (steemed Prawns)',
            image: 'https://4.bp.blogspot.com/-btsWpR5K5sM/WfxjTOINriI/AAAAAAAAfSQ/vHiKwFfyPX8KS4elH83I8vSwuYtmtLmnQCLcBGAs/s1600/Steamed%2BGarlic%2BPrawns%2Bwith%2BVermicelli%2BNoodles01.jpg',
            time: '35 min',
            difficulty: 'Medium',
            servings: '3-4 people',
            description: 'Steamed prawns marinated in mustard paste and coconut, a delicate Bengali specialty.',
            ingredients: [
                '300g prawns, cleaned',
                '2 tbsp mustard paste',
                '2 tbsp grated coconut',
                '1 tsp green chili paste',
                '1 tsp mustard oil',
                'Salt to taste',
                'Banana leaves or aluminum foil for steaming'
            ],
            instructions: [
                'Mix mustard paste, grated coconut, green chili paste, mustard oil, and salt to make marinade.',
                'Coat prawns evenly with marinade, set aside 10-15 minutes.',
                'Wrap prawns in banana leaves or foil and steam for 12-15 minutes.',
                'Serve hot with steamed rice.'
            ],
            tips: 'Do not over-steam; prawns cook quickly and remain juicy and flavorful.'
        }
    ]
}

      // Add more states as needed
    };
    // ========== STATE RECIPES DATA END ==========
    // Function to show state recipes
    function showStateRecipes(state) {
      if (!stateRecipes[state]) {
        alert('Recipes for this state are not available yet.');
        return;
      }

      const stateData = stateRecipes[state];

      // Update state recipes page title and subtitle
      document.getElementById('state-recipes-title').textContent = stateData.title;
      document.getElementById('state-recipes-subtitle').textContent = stateData.subtitle;

      // Populate recipes container
      const recipesContainer = document.getElementById('state-recipes-container');
      recipesContainer.innerHTML = '';

      stateData.recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe-item';
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <div class="recipe-item-content">
                <h3>${recipe.name}</h3>
                <div class="recipe-meta">
                    <span><i class="fas fa-clock me-1"></i>${recipe.time}</span>
                    <span><i class="fas fa-chart-line me-1"></i>${recipe.difficulty}</span>
                    <span><i class="fas fa-users me-1"></i>${recipe.servings}</span>
                </div>
                <p>${recipe.description.substring(0, 100)}...</p>
                <button class="btn btn-primary btn-sm" onclick="showRecipeDetail('${state}', '${recipe.id}')">
                    View Recipe
                </button>
                <button class="btn btn-outline-secondary btn-sm ms-2" onclick="addToWishlist('${recipe.name}')">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        `;
        recipesContainer.appendChild(recipeElement);
      });

      // Show the state recipes page
      showPage('state-recipes-page');
    }

    // Function to show recipe detail
    function showRecipeDetail(state, recipeId) {
      const stateData = stateRecipes[state];
      const recipe = stateData.recipes.find(r => r.id === recipeId);

      if (!recipe) {
        alert('Recipe not found!');
        return;
      }

      // Populate recipe detail page
      document.getElementById('detail-recipe-image').src = recipe.image;
      document.getElementById('detail-recipe-image').alt = recipe.name;
      document.getElementById('detail-recipe-title').textContent = recipe.name;
      document.getElementById('detail-recipe-time').innerHTML = `<i class="fas fa-clock me-1"></i>${recipe.time}`;
      document.getElementById('detail-recipe-difficulty').innerHTML = `<i class="fas fa-chart-line me-1"></i>${recipe.difficulty}`;
      document.getElementById('detail-recipe-servings').innerHTML = `<i class="fas fa-users me-1"></i>${recipe.servings}`;
      document.getElementById('detail-recipe-description').textContent = recipe.description;
      document.getElementById('detail-recipe-tips').textContent = recipe.tips;

      // Populate ingredients
      const ingredientsList = document.getElementById('detail-recipe-ingredients');
      ingredientsList.innerHTML = '';
      recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      // Populate instructions
      const instructionsList = document.getElementById('detail-recipe-instructions');
      instructionsList.innerHTML = '';
      recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
      });

      // Show the recipe detail page
      showPage('recipe-detail-page');
    }

    // Function to add to wishlist from detail page
    function addToWishlistFromDetail() {
      const recipeName = document.getElementById('detail-recipe-title').textContent;
      addToWishlist(recipeName);
    }

    // Function to print recipe
    function printRecipe() {
      window.print();
    }
// Function to show specific page and hide others
function showPage(pageId) {
  // Hide all pages
  const pages = ['home-page', 'about-page', 'user-dashboard', 'state-recipes-page', 'recipe-detail-page'];
  pages.forEach(page => {
    document.getElementById(page).style.display = 'none';
  });

  // Show the selected page
  document.getElementById(pageId).style.display = 'block';

  // Update active nav link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Check if this link corresponds to the current page
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
      link.classList.add('active');
    }
  });
  
  // Close search results when navigating
  document.getElementById('searchResults').classList.remove('active');
}
    // Function to show specific dashboard tab
    function showDashboardTab(tabId) {
      const tab = document.getElementById(`${tabId}-tab`);
      if (tab) {
        tab.click();
      }
    }

    // Login functionality
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Simple validation (in a real app, this would connect to a backend)
      if (email && password) {
        currentUser = {
          name: email.split('@')[0],
          email: email
        };

        // Update UI for logged in user
        document.getElementById('guest-actions').style.display = 'none';
        document.getElementById('user-menu').style.display = 'flex';
        document.getElementById('username').textContent = currentUser.name;

        // Close modal
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        loginModal.hide();

        // Show success message
        alert('Login successful! Welcome to Swad Bharat.');
      } else {
        alert('Please enter both email and password.');
      }
    });

    // Register functionality
    document.getElementById('registerForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('registerConfirmPassword').value;

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      if (name && email && password) {
        currentUser = {
          name: name,
          email: email
        };

        // Update UI for logged in user
        document.getElementById('guest-actions').style.display = 'none';
        document.getElementById('user-menu').style.display = 'flex';
        document.getElementById('username').textContent = currentUser.name;

        // Close modal
        const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        registerModal.hide();

        // Show success message
        alert('Registration successful! Welcome to Swad Bharat.');
      } else {
        alert('Please fill in all fields.');
      }
    });
    // Add to wishlist functionality
function addToWishlist(recipeName) {
  if (!currentUser) {
    alert('Please login to add recipes to your wishlist.');
    return;
  }

  if (!wishlist.includes(recipeName)) {
    wishlist.push(recipeName);
    updateWishlistDisplay();
    
    // Update wishlist buttons to red
    updateWishlistButtons(recipeName);
    
    alert(`${recipeName} added to your wishlist!`);
  } else {
    alert(`${recipeName} is already in your wishlist.`);
  }
}

// Function to update wishlist buttons to red
function updateWishlistButtons(recipeName) {
  // Update buttons on recipe detail page
  const wishlistBtn = document.querySelector('.btn-primary[onclick="addToWishlistFromDetail()"]');
  if (wishlistBtn && document.getElementById('detail-recipe-title').textContent === recipeName) {
    wishlistBtn.classList.add('btn-danger');
    wishlistBtn.classList.remove('btn-primary');
  }
  
  // Update buttons on state recipes page
  const recipeItems = document.querySelectorAll('.recipe-item');
  recipeItems.forEach(item => {
    const title = item.querySelector('h3').textContent;
    const wishlistBtn = item.querySelector('.btn-outline-secondary');
    if (title === recipeName && wishlistBtn) {
      wishlistBtn.classList.add('btn-danger');
      wishlistBtn.classList.remove('btn-outline-secondary');
    }
  });
}

   // Update wishlist display
function updateWishlistDisplay() {
  const wishlistContainer = document.getElementById('wishlist-items');
  wishlistContainer.innerHTML = '';

  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p>Your wishlist is empty. Add some recipes!</p>';
    return;
  }

  wishlist.forEach(recipe => {
    // Find the recipe image from state recipes data
    let recipeImage = 'https://source.unsplash.com/100x100/?food,indian'; // default image
    
    // Search for recipe in state data to get the actual image
    for (const state in stateRecipes) {
      const foundRecipe = stateRecipes[state].recipes.find(r => r.name === recipe);
      if (foundRecipe) {
        recipeImage = foundRecipe.image;
        break;
      }
    }

    const item = document.createElement('div');
    item.className = 'wishlist-item';
    item.innerHTML = `
      <img src="${recipeImage}" alt="${recipe}" style="width: 80px; height: 80px; object-fit: cover;">
      <div class="flex-grow-1">
        <h5>${recipe}</h5>
        <p class="mb-0">Added on ${new Date().toLocaleDateString()}</p>
      </div>
      <button class="btn btn-sm btn-outline-danger" onclick="removeFromWishlist('${recipe}')">
        <i class="fas fa-trash"></i>
      </button>
    `;
    wishlistContainer.appendChild(item);
  });
}

   // Remove from wishlist
function removeFromWishlist(recipeName) {
  wishlist = wishlist.filter(item => item !== recipeName);
  updateWishlistDisplay();
  
  // Reset wishlist buttons to original state
  resetWishlistButtons(recipeName);
}

// Function to reset wishlist buttons
function resetWishlistButtons(recipeName) {
  const recipeItems = document.querySelectorAll('.recipe-item');
  recipeItems.forEach(item => {
    const title = item.querySelector('h3').textContent;
    const wishlistBtn = item.querySelector('.btn-danger');
    if (title === recipeName && wishlistBtn) {
      wishlistBtn.classList.add('btn-outline-secondary');
      wishlistBtn.classList.remove('btn-danger');
    }
  });
}
// Function to initialize wishlist buttons
function initializeWishlistButtons() {
  wishlist.forEach(recipeName => {
    updateWishlistButtons(recipeName);
  });
}

    // Add contact functionality
    document.getElementById('addContactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const phone = document.getElementById('contactPhone').value;
      const relation = document.getElementById('contactRelation').value;

      const contact = {
        id: Date.now(),
        name,
        email,
        phone,
        relation,
        dateAdded: new Date().toLocaleDateString()
      };

      contacts.push(contact);
      updateContactsDisplay();

      // Close modal and reset form
      const addContactModal = bootstrap.Modal.getInstance(document.getElementById('addContactModal'));
      addContactModal.hide();
      document.getElementById('addContactForm').reset();

      alert('Contact saved successfully!');
    });

    // Update contacts display
    function updateContactsDisplay() {
      const contactsContainer = document.getElementById('contact-items');
      contactsContainer.innerHTML = '';

      if (contacts.length === 0) {
        contactsContainer.innerHTML = '<p>No contacts saved yet.</p>';
        return;
      }

      contacts.forEach(contact => {
        const item = document.createElement('div');
        item.className = 'contact-item';
        item.innerHTML = `
          <img src="https://source.unsplash.com/100x100/?portrait" alt="${contact.name}">
          <div class="flex-grow-1">
            <h5>${contact.name}</h5>
            <p class="mb-1">${contact.relation}</p>
            <p class="mb-0 small text-muted">
              ${contact.email ? Email : '${contact.email} : '} 
              ${contact.phone ? ` | Phone: ${contact.phone}` : ''}
            </p>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="removeContact(${contact.id})">
            <i class="fas fa-trash"></i>
          </button>
        `;
        contactsContainer.appendChild(item);
      });
    }


    // Add contact functionality
    document.getElementById('addContactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const phone = document.getElementById('contactPhone').value;
      const relation = document.getElementById('contactRelation').value;

      const contact = {
        id: Date.now(),
        name,
        email,
        phone,
        relation,
        dateAdded: new Date().toLocaleDateString()
      };

      contacts.push(contact);
      updateContactsDisplay();

      // Close modal and reset form
      const addContactModal = bootstrap.Modal.getInstance(document.getElementById('addContactModal'));
      addContactModal.hide();
      document.getElementById('addContactForm').reset();

      alert('Contact saved successfully!');
    });

    // Update contacts display
    function updateContactsDisplay() {
      const contactsContainer = document.getElementById('contact-items');
      contactsContainer.innerHTML = '';

      if (contacts.length === 0) {
        contactsContainer.innerHTML = '<p>No contacts saved yet.</p>';
        return;
      }

      contacts.forEach(contact => {
        const item = document.createElement('div');
        item.className = 'contact-item';
        item.innerHTML = `
          <img src="https://source.unsplash.com/100x100/?portrait" alt="${contact.name}">
          <div class="flex-grow-1">
            <h5>${contact.name}</h5>
            <p class="mb-1">${contact.relation}</p>
            <p class="mb-0 small text-muted">
              ${contact.email ? Email : '${contact.email} : '} 
              ${contact.phone ? ` | Phone: ${contact.phone}` : ''}
            </p>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="removeContact(${contact.id})">
            <i class="fas fa-trash"></i>
          </button>
        `;
        contactsContainer.appendChild(item);
      });
    }

    // Remove contact
    function removeContact(contactId) {
      contacts = contacts.filter(contact => contact.id !== contactId);
      updateContactsDisplay();
    }

    // Add recipe functionality
    document.getElementById('recipeForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('recipeName').value;
      const category = document.getElementById('recipeCategory').value;
      const ingredients = document.getElementById('recipeIngredients').value;
      const instructions = document.getElementById('recipeInstructions').value;
      const image = document.getElementById('recipeImage').value;

      const recipe = {
        id: Date.now(),
        name,
        category,
        ingredients,
        instructions,
        image: image || 'https://source.unsplash.com/400x300/?food,indian',
        dateAdded: new Date().toLocaleDateString(),
        author: currentUser.name
      };

      userRecipes.push(recipe);

      // Reset form
      document.getElementById('recipeForm').reset();

      alert('Recipe submitted successfully! It will be reviewed before publishing.');
    });

    // User dropdown toggle
    document.getElementById('user-toggle').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('user-dropdown').classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.user-menu')) {
        document.getElementById('user-dropdown').classList.remove('show');
      }
    });

    // Logout functionality
    function logout() {
      currentUser = null;
      document.getElementById('guest-actions').style.display = 'flex';
      document.getElementById('user-menu').style.display = 'none';
      document.getElementById('user-dropdown').classList.remove('show');
      showPage('home-page');
      alert('You have been logged out successfully.');
    }
    // Search functionality
function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResults = document.getElementById('searchResults');
  
  if (searchTerm.length < 2) {
    searchResults.classList.remove('active');
    return;
  }
  
  // Clear previous results
  searchResults.innerHTML = '';
  
  // Search through state recipes
  let results = [];
  
  for (const state in stateRecipes) {
    stateRecipes[state].recipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(searchTerm) || 
          recipe.description.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))) {
        results.push({
          state: state,
          recipe: recipe
        });
      }
    });
  }
  
  // Display results
  if (results.length > 0) {
    results.slice(0, 10).forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      resultItem.innerHTML = `
        <h6>${result.recipe.name}</h6>
        <p>${stateRecipes[result.state].title} • ${result.recipe.time}</p>
      `;
      resultItem.addEventListener('click', () => {
        showRecipeDetail(result.state, result.recipe.id);
        searchResults.classList.remove('active');
        document.getElementById('searchInput').value = '';
      });
      searchResults.appendChild(resultItem);
    });
    
    searchResults.classList.add('active');
  } else {
    const noResults = document.createElement('div');
    noResults.className = 'search-result-item';
    noResults.innerHTML = '<p class="text-muted">No recipes found</p>';
    searchResults.appendChild(noResults);
    searchResults.classList.add('active');
  }
}

// Close search results when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-container')) {
    document.getElementById('searchResults').classList.remove('active');
  }
});

// Search on Enter key
document.getElementById('searchInput').addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

// Search as you type (with debounce)
let searchTimeout;
document.getElementById('searchInput').addEventListener('input', function() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(performSearch, 300);
});

    // Initialize the page - show home page by default
    window.onload = function () {
      showPage('home-page');
      updateWishlistDisplay();
      updateContactsDisplay();
       initializeWishlistButtons(); 
    };