const animeData = [
  {
    "id": 1,
    "title": "Naruto",
    "synopsis": "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
    "poster": "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    "episodes": 220,
    "year": 2002,
    "status": "Finished Airing",
    "aired": [
      "03-10-2002",
      "08-02-2007"
    ],
    "anime_type": "Shonen",
    "popularity": 1727877,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Super Power",
      "Martial Arts",
    ],
    "rating": 7.9,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/70205012",
      "Crunchyroll": "https://www.crunchyroll.com/series/GR79MM93Y/naruto",
      "Hulu": "https://www.hulu.com/series/naruto-6ff9a8a2-0f95-4b2a-9f6b-2a5b5e5b5e5b"
    }
  },
  {
    "id": 2,
    "title": "Naruto: Shippuden",
    "synopsis": "After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has gained many rivals.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/17407.jpg",
    "episodes": 500,
    "year": 2007,
    "status": "Finished Airing",
    "aired": [
      "15-02-2007",
      "23-03-2017"
    ],
    "anime_type": "Shonen",
    "popularity": 2456789,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Super Power",
      "Martial Arts",
    ],
    "rating": 8.2,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/70205012",
      "Crunchyroll": "https://www.crunchyroll.com/series/GR79MM93Y/naruto",
      "Hulu": "https://www.hulu.com/series/naruto-shippuden-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 3,
    "title": "Dragon Ball",
    "synopsis": "Follows the adventures of an extraordinarily strong young boy named Goku as he searches for the seven magic Dragon Balls.",
    "poster": "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
    "episodes": 153,
    "year": 1986,
    "status": "Finished Airing",
    "aired": [
      "26-02-1986",
      "12-04-1989"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Martial Arts",
      "Super Power"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZR/dragon-ball",
      "Funimation": "https://www.funimation.com/shows/dragon-ball/"
    }
  },
  {
    "id": 4,
    "title": "Dragon Ball Z",
    "synopsis": "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
    "poster": "https://i.ebayimg.com/images/g/~XsAAOSwUjhmrTn6/s-l1600.webp",
    "episodes": 291,
    "year": 1989,
    "status": "Finished Airing",
    "aired": [
      "26-04-1989",
      "31-01-1996"
    ],
    "anime_type": "Shonen",
    "popularity": 15432101,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Martial Arts",
      "Super Power"
    ],
    "rating": 8.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZR/dragon-ball",
      "Funimation": "https://www.funimation.com/shows/dragon-ball-z/"
    }
  },
  {
    "id": 5,
    "title": "Dragon Ball Super",
    "synopsis": "After waking up from decades of slumber, Beerus, the god of destruction, wants to defeat the legendary Super Saiyan God. To protect the Earth, Goku transforms into the Super Saiyan God to fight Beerus.",
    "poster": "https://cdn.myanimelist.net/images/anime/7/74606.jpg",
    "episodes": 131,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "05-07-2015",
      "25-03-2018"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Martial Arts",
      "Super Power"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZR/dragon-ball",
      "Funimation": "https://www.funimation.com/shows/dragon-ball-super/"
    }
  },
  {
    "id": 6,
    "title": "One Piece",
    "synopsis": "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
    "poster": "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    "episodes": 1100,
    "year": 1999,
    "status": "Currently Airing",
    "aired": [
      "20-10-1999",
      null
    ],
    "anime_type": "Shonen",
    "popularity": 3456789,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZY/one-piece",
      "Funimation": "https://www.funimation.com/shows/one-piece/",
      "Netflix": "https://www.netflix.com/title/80217863"
    }
  },
  {
    "id": 7,
    "title": "Bleach",
    "synopsis": "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls.",
    "poster": "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    "episodes": 366,
    "year": 2004,
    "status": "Finished Airing",
    "aired": [
      "05-10-2004",
      "27-03-2012"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Super Power",
      "Supernatural",
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/bleach",
      "Hulu": "https://www.hulu.com/series/bleach-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/70204970"
    }
  },
  {
    "id": 8,
    "title": "Bleach: Thousand-Year Blood War",
    "synopsis": "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it.",
    "poster": "https://cdn.myanimelist.net/images/anime/1908/135431.jpg",
    "episodes": 52,
    "year": 2022,
    "status": "Currently Airing",
    "aired": [
      "10-10-2022",
      null
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Super Power",
      "Supernatural",
    ],
    "rating": 9.1,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/bleach-thousand-year-blood-war-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Disney+": "https://www.disneyplus.com/series/bleach-thousand-year-blood-war/9a9a9a9a9a9a"
    }
  },
  {
    "id": 9,
    "title": "Attack on Titan Season 1",
    "synopsis": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    "poster": "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    "episodes": 25,
    "year": 2013,
    "status": "Finished Airing",
    "aired": [
      "07-04-2013",
      "29-09-2013"
    ],
    "anime_type": "Seinen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Military",
      "Mystery",
      "Super Power"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
      "Funimation": "https://www.funimation.com/shows/attack-on-titan/",
      "Hulu": "https://www.hulu.com/series/attack-on-titan-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 10,
    "title": "Attack on Titan Season 2",
    "synopsis": "As Eren and others push deeper into Titan territory, they encounter a terrifying new threat none of them could have prepared for.",
    "poster": "https://cdn.myanimelist.net/images/anime/4/84177.jpg",
    "episodes": 12,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "01-04-2017",
      "17-06-2017"
    ],
    "anime_type": "Seinen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Military",
      "Mystery",
      "Super Power"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
      "Funimation": "https://www.funimation.com/shows/attack-on-titan/",
      "Hulu": "https://www.hulu.com/series/attack-on-titan-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
    {
    "id": 11,
    "title": "Attack on Titan Season 3",
    "synopsis": "The truth about the Titans begins to be revealed as the battle for humanity's survival grows even more dire.",
    "poster": "https://cdn.myanimelist.net/images/anime/1173/92110.jpg",
    "episodes": 22,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "23-07-2018",
      "01-07-2019"
    ],
    "anime_type": "Seinen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Military",
      "Mystery",
      "Super Power"
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
      "Funimation": "https://www.funimation.com/shows/attack-on-titan/",
      "Hulu": "https://www.hulu.com/series/attack-on-titan-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 12,
    "title": "Attack on Titan: The Final Season",
    "synopsis": "The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. The fate of the world hangs in the balance as Eren pushes forward with his plan.",
    "poster": "https://resizing.flixster.com/iMbGOzJyGds7V4srafzG_1DNeSs=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19149543_b_v8_aa.jpg",
    "episodes": 28,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "07-12-2020",
      "04-04-2021"
    ],
    "anime_type": "Seinen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Military",
      "Mystery",
      "Super Power"
    ],
    "rating": 9.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
      "Funimation": "https://www.funimation.com/shows/attack-on-titan/",
      "Hulu": "https://www.hulu.com/series/attack-on-titan-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 13,
    "title": "Attack on Titan: The Final Season Part 2",
    "synopsis": "As the war rages on, Eren and his allies must find a way to end the cycle of hatred that has plagued their world for centuries.",
    "poster": "https://www.therampage.net/wp-content/uploads/2022/05/dac363972d628a7009e04fdeb9d7104a1641869274_main-600x900.jpg",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "10-01-2022",
      "04-04-2022"
    ],
    "anime_type": "Seinen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Military",
      "Mystery",
      "Super Power"
    ],
    "rating": 9.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
      "Funimation": "https://www.funimation.com/shows/attack-on-titan/",
      "Hulu": "https://www.hulu.com/series/attack-on-titan-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 14,
    "title": "Vinland Saga Season 1",
    "synopsis": "Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland.",
    "poster": "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    "episodes": 24,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "07-07-2019",
      "29-12-2019"
    ],
    "anime_type": "Seinen",
    "popularity": 345678,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Historical"
    ],
    "rating": 8.7,
    "available_on": {
      "Amazon Prime": "https://www.amazon.com/Vinland-Saga-Season-1/dp/B07VGRJDFY",
      "Netflix": "https://www.netflix.com/title/81249833"
    }
  },
  {
    "id": 15,
    "title": "Vinland Saga Season 2",
    "synopsis": "After the death of his father, Thorfinn must find a new purpose in life as he struggles to come to terms with his past actions.",
    "poster": "https://resizing.flixster.com/EmiL5n9DJpdBeJD1V4_7C0p8tk4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23821994_b_v8_ab.jpg",
    "episodes": 24,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "10-01-2023",
      "20-06-2023"
    ],
    "anime_type": "Seinen",
    "popularity": 456789,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Historical"
    ],
    "rating": 9.1,
    "available_on": {
      "Amazon Prime": "https://www.amazon.com/Vinland-Saga-Season-2/dp/B0BRNXF6XJ",
      "Netflix": "https://www.netflix.com/title/81249833"
    }
  },
  {
    "id": 16,
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "synopsis": "After his family is brutally slaughtered and his sister turned into a demon, Tanjiro Kamado embarks on a perilous journey to find a cure and avenge his family.",
    "poster": "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    "episodes": 26,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "06-04-2019",
      "28-09-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Adventure",
      "Demons",
      "Historical",
      "Supernatural"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
      "Funimation": "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/",
      "Netflix": "https://www.netflix.com/title/81091393",
      "Hulu": "https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 17,
    "title": "Demon Slayer: Kimetsu no Yaiba - Entertainment District Arc",
    "synopsis": "Tanjiro and his comrades accompany the Sound Hashira Tengen Uzui to an entertainment district where Tengen's female ninja agents were gathering information on a demon.",
    "poster": "https://cdn.myanimelist.net/images/anime/1908/120036.jpg",
    "episodes": 11,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "05-12-2021",
      "13-02-2022"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Adventure",
      "Demons",
      "Historical",
      "Supernatural"
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
      "Funimation": "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/",
      "Hulu": "https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 18,
    "title": "Demon Slayer: Kimetsu no Yaiba - Swordsmith Village Arc",
    "synopsis": "Tanjiro journeys to a village of swordsmiths and has to face a new threat from the demons while trying to get his sword repaired.",
    "poster": "https://resizing.flixster.com/liHd9G3_yFzdjdYGbpy1-ehOy1c=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMWQ4YWVmYzgtYzUzMS00YzJlLTllMjctMTgxYjNkZjJjZWY2LmpwZw==",
    "episodes": 11,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "09-04-2023",
      "18-06-2023"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Adventure",
      "Demons",
      "Historical",
      "Supernatural"
    ],
    "rating": 8.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
      "Funimation": "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/",
      "Hulu": "https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 19,
    "title": "Jujutsu Kaisen",
    "synopsis": "Yuuji Itadori, a boy with tremendous physical strength, gains cursed energy after swallowing a cursed object to save his friends.",
    "poster": "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    "episodes": 24,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "03-10-2020",
      "27-03-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Demons",
      "Horror",
      "Supernatural",
      "School",
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
      "Hulu": "https://www.hulu.com/series/jujutsu-kaisen-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/81278456"
    }
  },
  {
    "id": 20,
    "title": "Jujutsu Kaisen Season 2",
    "synopsis": "The past comes to light as Gojo and Geto's friendship is tested during their time at Jujutsu High.",
    "poster": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    "episodes": 23,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "06-07-2023",
      "28-12-2023"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Demons",
      "Horror",
      "Supernatural",
      "School",
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
      "Hulu": "https://www.hulu.com/series/jujutsu-kaisen-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 21,
    "title": "Hunter x Hunter (2011)",
    "synopsis": "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks out his father, who left him when he was younger.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/33657.jpg",
    "episodes": 148,
    "year": 2011,
    "status": "Finished Airing",
    "aired": [
      "02-10-2011",
      "24-09-2014"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
    ],
    "rating": 9.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/hunter-x-hunter",
      "Netflix": "https://www.netflix.com/title/70204970",
      "Hulu": "https://www.hulu.com/series/hunter-x-hunter-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 22,
    "title": "My Hero Academia Season 1",
    "synopsis": "In a world where 80% of the population has superpowers, Izuku Midoriya is one of the rare few born without any. Despite this, he dreams of becoming a superhero.",
    "poster": "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    "episodes": 13,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "03-04-2016",
      "26-06-2016"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 23,
    "title": "My Hero Academia Season 2",
    "synopsis": "UA Academy's Class 1-A has been the focus of a substantial amount of public attention due to the multiple villain attacks they've faced.",
    "poster": "https://cdn.myanimelist.net/images/anime/12/85221.jpg",
    "episodes": 25,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "01-04-2017",
      "30-09-2017"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 24,
    "title": "My Hero Academia Season 3",
    "synopsis": "The students of Class 1-A are now in their second year at UA Academy and must face new challenges as they continue their journey to become professional heroes.",
    "poster": "https://cdn.myanimelist.net/images/anime/1319/92084.jpg",
    "episodes": 25,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "07-04-2018",
      "29-09-2018"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 25,
    "title": "My Hero Academia Season 4",
    "synopsis": "With All Might now retired, the world looks to the next generation of heroes to step up and protect society from the growing threat of villains.",
    "poster": "https://cdn.myanimelist.net/images/anime/1295/106541.jpg",
    "episodes": 25,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "12-10-2019",
      "04-04-2020"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 26,
    "title": "My Hero Academia Season 5",
    "synopsis": "Class 1-A faces off against Class 1-B in a joint training exercise, while the League of Villains continues to grow in power.",
    "poster": "https://cdn.myanimelist.net/images/anime/1335/111246.jpg",
    "episodes": 25,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "27-03-2021",
      "25-09-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 27,
    "title": "My Hero Academia Season 6",
    "synopsis": "The heroes launch an all-out assault on the Paranormal Liberation Front, leading to the most intense battle the series has seen yet.",
    "poster": "https://cdn.myanimelist.net/images/anime/1448/128729.jpg",
    "episodes": 25,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "01-10-2022",
      "25-03-2023"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Comedy",
      "School",
      "Super Power"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
      "Funimation": "https://www.funimation.com/shows/my-hero-academia/",
      "Hulu": "https://www.hulu.com/series/my-hero-academia-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 28,
    "title": "Death Note",
    "synopsis": "Light Yagami finds a supernatural notebook that grants him the power to kill anyone whose name he writes in it.",
    "poster": "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    "episodes": 37,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "04-10-2006",
      "27-06-2007"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "rating": 8.6,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/70204970",
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/death-note",
      "Hulu": "https://www.hulu.com/series/death-note-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 29,
    "title": "Fullmetal Alchemist: Brotherhood",
    "synopsis": "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    "poster": "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    "episodes": 64,
    "year": 2009,
    "status": "Finished Airing",
    "aired": [
      "05-04-2009",
      "04-07-2010"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Magic",
      "Military",
    ],
    "rating": 9.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
      "Funimation": "https://www.funimation.com/shows/fullmetal-alchemist-brotherhood/",
      "Hulu": "https://www.hulu.com/series/fullmetal-alchemist-brotherhood-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/70204981"
    }
  },
  {
    "id": 30,
    "title": "Tokyo Revengers",
    "synopsis": "Takemichi Hanagaki discovers he can time-leap to his middle school years and tries to prevent the death of his ex-girlfriend.",
    "poster": "https://resizing.flixster.com/T8TKw5IcwpCoY4bX86hgLSUe2XY=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20081301_b_v8_aa.jpg",
    "episodes": 24,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "11-04-2021",
      "19-09-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Drama",
      "Supernatural"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/tokyo-revengers",
      "Hulu": "https://www.hulu.com/series/tokyo-revengers-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 31,
    "title": "Tokyo Revengers: Christmas Showdown",
    "synopsis": "Takemichi continues his efforts to change the future by preventing the bloody Christmas conflict between Tokyo Manji Gang and Moebius.",
    "poster": "https://i.ebayimg.com/images/g/fWIAAOSwG0hkXzwD/s-l400.jpg",
    "episodes": 13,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "08-01-2023",
      "02-04-2023"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Drama",
      "Supernatural"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/tokyo-revengers",
      "Hulu": "https://www.hulu.com/series/tokyo-revengers-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 32,
    "title": "Chainsaw Man",
    "synopsis": "Denji is a teenage boy living with a Chainsaw Devil named Pochita. He becomes a Devil Hunter to pay off his debts.",
    "poster": "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "12-10-2022",
      "28-12-2022"
    ],
    "anime_type": "Shonen",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Horror",
      "Supernatural"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/chainsaw-man",
      "Hulu": "https://www.hulu.com/series/chainsaw-man-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 33,
    "title": "Black Clover",
    "synopsis": "Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised to compete against each other to see who would become the next Emperor Magus.",
    "poster": "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    "episodes": 170,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "03-10-2017",
      "30-03-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Magic",
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/black-clover",
      "Funimation": "https://www.funimation.com/shows/black-clover/",
      "Hulu": "https://www.hulu.com/series/black-clover-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 34,
    "title": "Fairy Tail",
    "synopsis": "Lucy is a 17-year-old girl who wants to be a full-fledged mage. One day she meets Natsu, a young man who gets sick easily by any type of transportation.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/18179.jpg",
    "episodes": 328,
    "year": 2009,
    "status": "Finished Airing",
    "aired": [
      "12-10-2009",
      "29-03-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Magic",
    ],
    "rating": 7.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/fairy-tail",
      "Funimation": "https://www.funimation.com/shows/fairy-tail/",
      "Hulu": "https://www.hulu.com/series/fairy-tail-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 35,
    "title": "Sword Art Online",
    "synopsis": "In the year 2022, thousands of people get trapped in a new virtual MMORPG and the legendary game creator tells them the only way to escape is to beat the game.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
    "episodes": 25,
    "year": 2012,
    "status": "Finished Airing",
    "aired": [
      "08-07-2012",
      "23-12-2012"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game",
      "Romance"
    ],
    "rating": 7.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/sword-art-online",
      "Netflix": "https://www.netflix.com/title/80050063",
      "Hulu": "https://www.hulu.com/series/sword-art-online-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 36,
    "title": "Sword Art Online II",
    "synopsis": "A new Death Gun appears in Gun Gale Online, killing people in the real world by shooting their avatar in the game.",
    "poster": "https://cdn.myanimelist.net/images/anime/1223/121999.jpg",
    "episodes": 24,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "05-07-2014",
      "20-12-2014"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game",
      "Romance"
    ],
    "rating": 7.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/sword-art-online",
      "Netflix": "https://www.netflix.com/title/80050063",
      "Hulu": "https://www.hulu.com/series/sword-art-online-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 37,
    "title": "Sword Art Online: Alicization",
    "synopsis": "Kirito awakens in a mysterious virtual world with no memory of how he got there. He must uncover the secrets of this new world to find his way home.",
    "poster": "https://cdn.myanimelist.net/images/anime/1764/93210.jpg",
    "episodes": 47,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "07-10-2018",
      "20-09-2020"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game",
      "Romance"
    ],
    "rating": 7.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/sword-art-online",
      "Hulu": "https://www.hulu.com/series/sword-art-online-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 38,
    "title": "Steins;Gate",
    "synopsis": "After discovering time travel, a university student and his friends must find a way to prevent a dystopian future.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
    "episodes": 24,
    "year": 2011,
    "status": "Finished Airing",
    "aired": [
      "06-04-2011",
      "14-09-2011"
    ],
    "anime_type": "Seinen",
    "popularity": 987654,
    "genres": [
      "Sci-Fi",
      "Psychological",
      "Thriller"
    ],
    "rating": 9.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/steinsgate",
      "Funimation": "https://www.funimation.com/shows/steinsgate/",
      "Hulu": "https://www.hulu.com/series/steinsgate-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 39,
    "title": "Steins;Gate 0",
    "synopsis": "A continuation of Steins;Gate exploring the events following Okabe's failure to save Kurisu.",
    "poster": "https://resizing.flixster.com/Dbvd-lowK28RbuHIo32Zakt0rak=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10853751_b_v8_ab.jpg",
    "episodes": 23,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "12-04-2018",
      "27-09-2018"
    ],
    "anime_type": "Seinen",
    "popularity": 876543,
    "genres": [
      "Sci-Fi",
      "Psychological",
      "Thriller"
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/steinsgate",
      "Funimation": "https://www.funimation.com/shows/steinsgate/",
      "Hulu": "https://www.hulu.com/series/steinsgate-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 40,
    "title": "Re:Zero - Starting Life in Another World Season 1",
    "synopsis": "Subaru Natsuki is transported to another world where he gains the ability to return from death, but must endure the pain of his repeated deaths.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/79410.jpg",
    "episodes": 25,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "04-04-2016",
      "19-09-2016"
    ],
    "anime_type": "Light Novel",
    "popularity": 1234567,
    "genres": [
      "Drama",
      "Fantasy",
      "Psychological",
      "Thriller"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/rezero-starting-life-in-another-world",
      "Hulu": "https://www.hulu.com/series/rezero-starting-life-in-another-world-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 41,
    "title": "Re:Zero - Starting Life in Another World Season 2",
    "synopsis": "Subaru continues his struggle in the other world, facing new challenges and uncovering more secrets about his ability.",
    "poster": "https://cdn.myanimelist.net/images/anime/1444/108005.jpg",
    "episodes": 25,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "08-07-2020",
      "24-03-2021"
    ],
    "anime_type": "Light Novel",
    "popularity": 1234567,
    "genres": [
      "Drama",
      "Fantasy",
      "Psychological",
      "Thriller"
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/rezero-starting-life-in-another-world",
      "Hulu": "https://www.hulu.com/series/rezero-starting-life-in-another-world-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 42,
    "title": "The Rising of the Shield Hero Season 1",
    "synopsis": "Naofumi Iwatani is summoned to another world to become one of its four legendary heroes, but is betrayed and must rise from his disgrace.",
    "poster": "https://cdn.myanimelist.net/images/anime/1490/101365.jpg",
    "episodes": 25,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "09-01-2019",
      "26-06-2019"
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/the-rising-of-the-shield-hero",
      "Funimation": "https://www.funimation.com/shows/the-rising-of-the-shield-hero/"
    }
  },
  {
    "id": 43,
    "title": "The Rising of the Shield Hero Season 2",
    "synopsis": "Naofumi and his companions face new threats as they continue their journey to protect the world from the Waves of Catastrophe.",
    "poster": "https://cdn.myanimelist.net/images/anime/1116/120089.jpg",
    "episodes": 13,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "06-04-2022",
      "29-06-2022"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 7.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/the-rising-of-the-shield-hero",
      "Funimation": "https://www.funimation.com/shows/the-rising-of-the-shield-hero/"
    }
  },
  {
    "id": 44,
    "title": "The Rising of the Shield Hero Season 3",
    "synopsis": "Naofumi and his party travel to a new continent where they encounter new allies and enemies.",
    "poster": "https://cdn.myanimelist.net/images/anime/1704/134364.jpg",
    "episodes": 12,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "06-10-2023",
      "22-12-2023"
    ],
    "anime_type": "Light Novel",
    "popularity": 765432,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 7.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/the-rising-of-the-shield-hero",
      "Funimation": "https://www.funimation.com/shows/the-rising-of-the-shield-hero/"
    }
  },
  {
    "id": 45,
    "title": "Mushoku Tensei: Jobless Reincarnation Season 1",
    "synopsis": "A 34-year-old NEET is reincarnated into a fantasy world where he resolves to live his new life without regrets.",
    "poster": "https://cdn.myanimelist.net/images/anime/1592/119600.jpg",
    "episodes": 23,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "11-01-2021",
      "20-12-2021"
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Ecchi"
    ],
    "rating": 8.4,
    "available_on": {
      "Funimation": "https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation/",
      "Hulu": "https://www.hulu.com/series/mushoku-tensei-jobless-reincarnation-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 46,
    "title": "Mushoku Tensei: Jobless Reincarnation Season 2",
    "synopsis": "Rudeus continues his journey in the fantasy world, facing new challenges and meeting new companions.",
    "poster": "https://anibase.net/files/0ddb8057201f8739038434c0ecdbed9b",
    "episodes": 25,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "03-07-2023",
      "18-12-2023"
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Ecchi"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/mushoku-tensei-jobless-reincarnation",
      "Hulu": "https://www.hulu.com/series/mushoku-tensei-jobless-reincarnation-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 47,
    "title": "That Time I Got Reincarnated as a Slime Season 1",
    "synopsis": "A man is killed and reincarnated in another world as a slime with unique powers and gathers allies to build his own nation of monsters.",
    "poster": "https://cdn.myanimelist.net/images/anime/1694/93337.jpg",
    "episodes": 24,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "02-10-2018",
      "19-03-2019"
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/that-time-i-got-reincarnated-as-a-slime",
      "Funimation": "https://www.funimation.com/shows/that-time-i-got-reincarnated-as-a-slime/",
      "Hulu": "https://www.hulu.com/series/that-time-i-got-reincarnated-as-a-slime-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 48,
    "title": "That Time I Got Reincarnated as a Slime Season 2",
    "synopsis": "Rimuru continues to build his nation while facing threats from human kingdoms and other demon lords.",
    "poster": "https://cdn.myanimelist.net/images/anime/1535/111957.jpg",
    "episodes": 24,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "12-01-2021",
      "21-09-2021"
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/that-time-i-got-reincarnated-as-a-slime",
      "Funimation": "https://www.funimation.com/shows/that-time-i-got-reincarnated-as-a-slime/",
      "Hulu": "https://www.hulu.com/series/that-time-i-got-reincarnated-as-a-slime-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 49,
    "title": "That Time I Got Reincarnated as a Slime Season 3",
    "synopsis": "Rimuru faces new challenges as his nation grows in power and influence in the fantasy world.",
    "poster": "https://cdn.myanimelist.net/images/anime/1973/136628.jpg",
    "episodes": 24,
    "year": 2024,
    "status": "Currently Airing",
    "aired": [
      "05-04-2024",
      null
    ],
    "anime_type": "Light Novel",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": null,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/that-time-i-got-reincarnated-as-a-slime",
      "Hulu": "https://www.hulu.com/series/that-time-i-got-reincarnated-as-a-slime-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 50,
    "title": "Overlord Season 1",
    "synopsis": "A player finds himself trapped in a virtual MMORPG world where he assumes the role of his character, the powerful skeletal mage Ainz Ooal Gown.",
    "poster": "https://cdn.myanimelist.net/images/anime/7/88019.jpg",
    "episodes": 13,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "07-07-2015",
      "29-09-2015"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/overlord",
      "Funimation": "https://www.funimation.com/shows/overlord/",
      "Hulu": "https://www.hulu.com/series/overlord-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 51,
    "title": "Overlord Season 2",
    "synopsis": "Ainz continues to explore the new world and expand his influence while searching for other players who might have been transported like him.",
    "poster": "https://cdn.myanimelist.net/images/anime/1212/113415.jpg",
    "episodes": 13,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "10-01-2018",
      "04-04-2018"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/overlord",
      "Funimation": "https://www.funimation.com/shows/overlord/",
      "Hulu": "https://www.hulu.com/series/overlord-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 52,
    "title": "Overlord Season 3",
    "synopsis": "Ainz establishes the Sorcerer Kingdom and faces opposition from the human nations that fear his growing power.",
    "poster": "https://cdn.myanimelist.net/images/anime/1375/91741.jpg",
    "episodes": 13,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "11-07-2018",
      "02-10-2018"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/overlord",
      "Funimation": "https://www.funimation.com/shows/overlord/",
      "Hulu": "https://www.hulu.com/series/overlord-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 53,
    "title": "Overlord Season 4",
    "synopsis": "Ainz continues to expand his influence while dealing with internal and external threats to his newly established kingdom.",
    "poster": "https://cdn.myanimelist.net/images/anime/1448/122620.jpg",
    "episodes": 13,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "05-07-2022",
      "27-09-2022"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/overlord",
      "Hulu": "https://www.hulu.com/series/overlord-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a"
    }
  },
  {
    "id": 54,
    "title": "Code Geass: Lelouch of the Rebellion",
    "synopsis": "Lelouch, an exiled prince, gains the power of Geass which allows him to command absolute obedience, and uses it to lead a rebellion against the Holy Britannian Empire.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
    "episodes": 25,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "06-10-2006",
      "29-07-2007"
    ],
    "anime_type": "Original",
    "popularity": 987654,
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Military",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZR/code-geass-lelouch-of-the-rebellion",
      "Funimation": "https://www.funimation.com/shows/code-geass/",
      "Hulu": "https://www.hulu.com/series/code-geass-lelouch-of-the-rebellion-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/80065118"
    }
  },
  {
    "id": 55,
    "title": "Code Geass: Lelouch of the Rebellion R2",
    "synopsis": "Lelouch continues his rebellion against Britannia with new allies and enemies, while his sister Nunnally becomes the new Viceroy of Area 11.",
    "poster": "https://cdn.myanimelist.net/images/anime/4/9391.jpg",
    "episodes": 25,
    "year": 2008,
    "status": "Finished Airing",
    "aired": [
      "06-04-2008",
      "28-09-2008"
    ],
    "anime_type": "Original",
    "popularity": 987654,
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Military",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRMG8ZQZR/code-geass-lelouch-of-the-rebellion",
      "Funimation": "https://www.funimation.com/shows/code-geass/",
      "Hulu": "https://www.hulu.com/series/code-geass-lelouch-of-the-rebellion-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/80065118"
    }
  },
  {
    "id": 56,
    "title": "Cowboy Bebop",
    "synopsis": "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners.",
    "poster": "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    "episodes": 26,
    "year": 1998,
    "status": "Finished Airing",
    "aired": [
      "03-04-1998",
      "24-04-1999"
    ],
    "anime_type": "Original",
    "popularity": 876543,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Sci-Fi",
      "Space"
    ],
    "rating": 8.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRQNVGK3Y/cowboy-bebop",
      "Funimation": "https://www.funimation.com/shows/cowboy-bebop/",
      "Hulu": "https://www.hulu.com/series/cowboy-bebop-9a9a9a9a-9a9a-9a9a-9a9a-9a9a9a9a9a9a",
      "Netflix": "https://www.netflix.com/title/80001345"
    }
  },
  {
    "id": 57,
    "title": "Neon Genesis Evangelion",
    "synopsis": "In 2015, 14-year-old Shinji Ikari is recruited by his father to the shadowy organization Nerv to pilot a giant bio-machine mecha called an Evangelion to fight beings called Angels.",
    "poster": "https://cdn.myanimelist.net/images/anime/12/21418.jpg",
    "episodes": 26,
    "year": 1995,
    "status": "Finished Airing",
    "aired": [
      "04-10-1995",
      "27-03-1996"
    ],
    "anime_type": "Original",
    "popularity": 987654,
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.3,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/81033445"
    }
  },
  {
    "id": 58,
    "title": "Neon Genesis Evangelion: The End of Evangelion",
    "synopsis": "The controversial finale to the Neon Genesis Evangelion series that provides an alternate ending to the TV series.",
    "poster": "https://cdn.myanimelist.net/images/anime/1404/98182.jpg",
    "episodes": 1,
    "year": 1997,
    "status": "Finished Airing",
    "aired": [
      "19-07-1997",
      "19-07-1997"
    ],
    "anime_type": "Movie",
    "popularity": 876543,
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/81033445"
    }
  },
  {
    "id": 59,
    "title": "Berserk",
    "synopsis": "Guts, a wandering mercenary, joins the Band of the Hawk, a group of elite mercenaries led by the charismatic Griffith.",
    "poster": "https://resizing.flixster.com/0GwCm0mvAu-WFoM8wlQxvjLZ2dI=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15040263_b_v8_aa.jpg",
    "episodes": 25,
    "year": 1997,
    "status": "Finished Airing",
    "aired": [
      "08-10-1997",
      "01-04-1998"
    ],
    "anime_type": "Seinen",
    "popularity": 765432,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Military",
      "Supernatural"
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/berserk"
    }
  },
  {
    "id": 60,
    "title": "Berserk",
    "synopsis": "A continuation of the Berserk story following the events of the Golden Age arc.",
    "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pvsDccDbXDr7u-VRzttdJQl2jIzo-lJV-Q&s",
    "episodes": 12,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "01-07-2016",
      "16-09-2016"
    ],
    "anime_type": "Seinen",
    "popularity": 654321,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Military",
      "Supernatural"
    ],
    "rating": 6.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/berserk"
    }
  },
  {
    "id": 61,
    "title": "Berserk",
    "synopsis": "Continuation of the 2016 Berserk series, following Guts as he continues his journey with new companions.",
    "poster": "https://m.media-amazon.com/images/M/MV5BOTY0ZGMwZmEtNDVmMy00OWJmLWFlNjEtMGZkNTdlN2EzOWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "episodes": 12,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "07-04-2017",
      "23-06-2017"
    ],
    "anime_type": "Seinen",
    "popularity": 654321,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Military",
      "Supernatural"
    ],
    "rating": 6.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/berserk"
    }
  },
  {
    "id": 62,
    "title": "JoJo's Bizarre Adventure",
    "synopsis": "The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives.",
    "poster": "https://cdn.myanimelist.net/images/anime/3/40409.jpg",
    "episodes": 26,
    "year": 2012,
    "status": "Finished Airing",
    "aired": [
      "06-10-2012",
      "06-04-2013"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRQNVGK3Y/jojos-bizarre-adventure",
      "Netflix": "https://www.netflix.com/title/80179831"
    }
  },
  {
    "id": 63,
    "title": "JoJo's Bizarre Adventure: Stardust Crusaders",
    "synopsis": "Jotaro Kujo and his friends embark on a journey to Egypt to save his mother's life by defeating the vampire Dio.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/55267.jpg",
    "episodes": 48,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "05-04-2014",
      "20-06-2015"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR19VEX06/jojos-bizarre-adventure-stardust-crusaders",
      "Netflix": "https://www.netflix.com/title/80179831"
    }
  },
  {
    "id": 64,
    "title": "JoJo's Bizarre Adventure: Diamond Is Unbreakable",
    "synopsis": "In the town of Morioh, Josuke Higashikata and his friends must protect their home from supernatural threats.",
    "poster": "https://cdn.myanimelist.net/images/anime/10/79345.jpg",
    "episodes": 39,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "02-04-2016",
      "24-12-2016"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR19VEX06/jojos-bizarre-adventure-diamond-is-unbreakable",
      "Netflix": "https://www.netflix.com/title/80179831"
    }
  },
  {
    "id": 65,
    "title": "JoJo's Bizarre Adventure: Golden Wind",
    "synopsis": "Giorno Giovanna joins the mafia in order to become a gangster and reform the organization from within.",
    "poster": "https://cdn.myanimelist.net/images/anime/1796/95090.jpg",
    "episodes": 39,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "06-10-2018",
      "28-07-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR19VEX06/jojos-bizarre-adventure-golden-wind",
      "Netflix": "https://www.netflix.com/title/80179831"
    }
  },
  {
    "id": 66,
    "title": "JoJo's Bizarre Adventure: Stone Ocean",
    "synopsis": "Jolyne Cujoh, daughter of Jotaro Kujo, is wrongfully accused of a crime and sent to prison, where she must fight to clear her name.",
    "poster": "https://cdn.myanimelist.net/images/anime/1792/138022.jpg",
    "episodes": 38,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "01-12-2021",
      "01-12-2022"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.5,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/80179831"
    }
  },
  {
    "id": 67,
    "title": "Haikyuu!!",
    "synopsis": "Shouyou Hinata, a short middle school student, gains a sudden love of volleyball after seeing a national championship match on TV.",
    "poster": "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    "episodes": 25,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "06-04-2014",
      "21-09-2014"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Sports",
      "Comedy",
      "Drama",
      "School"
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/haikyu",
      "Netflix": "https://www.netflix.com/title/80090673"
    }
  },{
    "id": 68,
    "title": "Haikyuu!! Second Season",
    "synopsis": "Hinata and Kageyama continue to develop as players as they aim for the national tournament with their team.",
    "poster": "https://cdn.myanimelist.net/images/anime/9/76662.jpg",
    "episodes": 25,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "04-10-2015",
      "27-03-2016"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Sports",
      "Comedy",
      "Drama",
      "School"
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/haikyu",
      "Netflix": "https://www.netflix.com/title/80090674"
    }
  },
  {
    "id": 69,
    "title": "Haikyuu!! Third Season",
    "synopsis": "Karasuno faces off against Shiratorizawa in the finals of the Miyagi Prefecture qualifiers.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Haikyu_season_3_DVD_cover.jpg/250px-Haikyu_season_3_DVD_cover.jpg",
    "episodes": 10,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "08-10-2016",
      "10-12-2016"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Sports",
      "Comedy",
      "Drama",
      "School"
    ],
    "rating": 8.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/haikyu",
      "Netflix": "https://www.netflix.com/title/80186926"
    }
  },
  {
    "id": 70,
    "title": "Haikyuu!! To the Top",
    "synopsis": "The Karasuno volleyball team competes in the national tournament against the strongest teams in Japan.",
    "poster": "https://resizing.flixster.com/o3m2TcedBbTYsDUhhHZys_6h0Vo=/fit-in/705x460/v2/https://resizing.flixster.com/kNPxYHQEMaD6yrGWg1RKiLZKYSo=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRNVUxUSVVTRTIyMzMzNzAud2VicA==",
    "episodes": 25,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "10-01-2020",
      "04-10-2020"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Sports",
      "Comedy",
      "Drama",
      "School"
    ],
    "rating": 8.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GR751KNZY/haikyu",
      "Netflix": "https://www.netflix.com/title/81037582"
    }
  },
  {
    "id": 71,
    "title": "Kuroko's Basketball",
    "synopsis": "The Teiko Middle School basketball team was known for its legendary generation of players called 'The Generation of Miracles'.",
    "poster": "https://m.media-amazon.com/images/M/MV5BYmI3NDAyZGUtYWZiZC00YWIwLTgyNDQtYjZmOGFmNTkzODYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "episodes": 25,
    "year": 2012,
    "status": "Finished Airing",
    "aired": [
      "08-04-2012",
      "23-09-2012"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Sports",
      "Comedy",
      "School",
    ],
    "rating": 8.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY8VM8WGY/kurokos-basketball",
      "Netflix": "https://www.netflix.com/title/70299043"
    }
  },
  {
    "id": 72,
    "title": "Kuroko's Basketball 2",
    "synopsis": "Seirin High continues to compete in the Winter Cup tournament, facing off against the other members of the Generation of Miracles.",
    "poster": "https://m.media-amazon.com/images/I/81V-zYhKeML._AC_UF1000,1000_QL80_.jpg",
    "episodes": 25,
    "year": 2013,
    "status": "Finished Airing",
    "aired": [
      "06-10-2013",
      "30-03-2014"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Sports",
      "Comedy",
      "School",
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY8VM8WGY/kurokos-basketball",
      "Netflix": "https://www.netflix.com/title/70301896"
    }
  },
  {
    "id": 73,
    "title": "Kuroko's Basketball 3",
    "synopsis": "The Winter Cup reaches its climax as Seirin faces off against Rakuzan, the strongest team in Japan.",
    "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18845286_v_v9_ad.jpg",
    "episodes": 25,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "11-01-2015",
      "29-06-2015"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Sports",
      "Comedy",
      "School",
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY8VM8WGY/kurokos-basketball",
      "Netflix": "https://www.netflix.com/title/80050063"
    }
  },
  {
    "id": 74,
    "title": "Blue Lock",
    "synopsis": "After Japan's poor performance in the 2018 World Cup, the Japan Football Union decides to hire the enigmatic Jinpachi Ego to lead a project designed to create the world's greatest egotist striker.",
    "poster": "https://resizing.flixster.com/2SYq8c9RfXlSJlox_RU4_tjPIbw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23128919_b_v9_aa.jpg",
    "episodes": 24,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "09-10-2022",
      "26-03-2023"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Sports",
      "Action",
      "Psychological"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G4PH0WXVJ/blue-lock"
    }
  },
  {
    "id": 75,
    "title": "Dr. Stone",
    "synopsis": "After waking up in a world where humanity has been petrified, scientific genius Senku and his friends work to rebuild civilization.",
    "poster": "https://cdn.myanimelist.net/images/anime/1613/102576.jpg",
    "episodes": 24,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "05-07-2019",
      "13-12-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Adventure",
      "Comedy",
      "Sci-Fi",
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/dr-stone",
      "Funimation": "https://www.funimation.com/shows/dr-stone/"
    }
  }, {
    "id": 76,
    "title": "Spy x Family",
    "synopsis": "A spy forms a fake family to complete a mission, unaware that his adopted daughter is a telepath and his wife is an assassin.",
    "poster": "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
    "episodes": 25,
    "year": 2022,
    "status": "Currently Airing",
    "aired": [
      "09-04-2022",
      null
    ],
    "anime_type": "Shonen",
    "popularity": 1456789,
    "genres": [
      "Action",
      "Comedy",
      "Slice of Life"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G4PH0WQ4Y/spy-x-family",
      "Hulu": "https://www.hulu.com/series/spy-x-family-df383b0a-1c3e-4e2b-9f0a-7a0b5e8b0b1a"
    }
  },
  {
    "id": 77,
    "title": "Mob Psycho 100",
    "synopsis": "A psychic middle school boy tries to live a normal life and keep his growing powers under control.",
    "poster": "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
    "episodes": 12,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "12-07-2016",
      "27-09-2016"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRG51K806/mob-psycho-100",
      "Funimation": "https://www.funimation.com/shows/mob-psycho-100/"
    }
  },
  {
    "id": 78,
    "title": "Mob Psycho 100 II",
    "synopsis": "Mob continues to mature as he faces new challenges and more powerful espers.",
    "poster": "https://resizing.flixster.com/dBnP-BRe-1zzo7LwR1TAUv3fJFI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16444906_b_v8_aa.jpg",
    "episodes": 13,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "07-01-2019",
      "01-04-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 8.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRG51K806/mob-psycho-100",
      "Funimation": "https://www.funimation.com/shows/mob-psycho-100/"
    }
  },
  {
    "id": 79,
    "title": "Mob Psycho 100 III",
    "synopsis": "The final season where Mob faces his greatest challenges yet.",
    "poster": "https://resizing.flixster.com/J2W6Ffsqv8ih-cVZh0hpp3TtvhU=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23126667_b_v8_aa.jpg",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "06-10-2022",
      "22-12-2022"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Action",
      "Comedy",
      "Supernatural"
    ],
    "rating": 9.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRG51K806/mob-psycho-100"
    }
  },
  {
    "id": 80,
    "title": "The Promised Neverland",
    "synopsis": "Orphans discover their idyllic home is actually a farm where they're raised as food for demons.",
    "poster": "https://m.media-amazon.com/images/I/81R7eWbLF3L._AC_UF1000,1000_QL80_.jpg",
    "episodes": 12,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "10-01-2019",
      "29-03-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Mystery",
      "Horror",
      "Psychological",
      "Thriller"
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-promised-neverland",
      "Hulu": "https://www.hulu.com/series/the-promised-neverland-5c3c3e3a-9b3a-4b3a-8b3a-3b3a3b3a3b3a"
    }
  }, {
    "id": 81,
    "title": "The Promised Neverland Season 2",
    "synopsis": "Emma and the other children escape the farm and search for a way to survive in the demon world.",
    "poster": "https://image.tmdb.org/t/p/original/2heYIrkdNpcQoAitgmot4Q3lFBt.jpg",
    "episodes": 11,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "08-01-2021",
      "26-03-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Mystery",
      "Horror",
      "Psychological",
      "Thriller"
    ],
    "rating": 6.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GRDV0019R/the-promised-neverland",
      "Hulu": "https://www.hulu.com/series/the-promised-neverland-2c64a7e4-2f0b-4b5c-9b9a-0b9b9b9b9b9b"
    }
  },
  {
    "id": 82,
    "title": "Fire Force",
    "synopsis": "Special firefighters fight infernals and investigate a mysterious phenomenon turning people into living flames.",
    "poster": "https://cdn.myanimelist.net/images/anime/1256/103005.jpg",
    "episodes": 24,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "06-07-2019",
      "28-12-2019"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Supernatural"
    ],
    "rating": 7.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/fire-force",
      "Funimation": "https://www.funimation.com/shows/fire-force/"
    }
  },
  {
    "id": 83,
    "title": "Fire Force Season 2",
    "synopsis": "Shinra continues to investigate the mysteries of spontaneous human combustion while facing new enemies.",
    "poster": "https://cdn.myanimelist.net/images/anime/1504/106751.jpg",
    "episodes": 24,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "04-07-2020",
      "12-12-2020"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Supernatural"
    ],
    "rating": 8.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/fire-force",
      "Funimation": "https://www.funimation.com/shows/fire-force/"
    }
  },
  {
    "id": 84,
    "title": "Soul Eater",
    "synopsis": "Students at the Death Weapon Meister Academy train to become weapons and the wielders who use them.",
    "poster": "https://cdn.myanimelist.net/images/anime/9/7804.jpg",
    "episodes": 51,
    "year": 2008,
    "status": "Finished Airing",
    "aired": [
      "07-04-2008",
      "30-03-2009"
    ],
    "anime_type": "Shonen",
    "popularity": 765432,
    "genres": [
      "Action",
      "Comedy",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Funimation": "https://www.funimation.com/shows/soul-eater/",
      "Hulu": "https://www.hulu.com/series/soul-eater-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 85,
    "title": "Noragami",
    "synopsis": "A minor deity seeks to gain worshipers and build his reputation while helping a girl whose soul frequently leaves her body.",
    "poster": "https://cdn.myanimelist.net/images/anime/1889/132244.jpg",
    "episodes": 12,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "05-01-2014",
      "23-03-2014"
    ],
    "anime_type": "Shonen",
    "popularity": 654321,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6X3JVD0Y/noragami",
      "Hulu": "https://www.hulu.com/series/noragami-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 86,
    "title": "Noragami Aragoto",
    "synopsis": "Yato faces his dark past when a god from his history returns to exact revenge.",
    "poster": "https://cdn.myanimelist.net/images/anime/6/76493.jpg",
    "episodes": 13,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "03-10-2015",
      "26-12-2015"
    ],
    "anime_type": "Shonen",
    "popularity": 654321,
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6X3JVD0Y/noragami",
      "Hulu": "https://www.hulu.com/series/noragami-aragoto-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 87,
    "title": "Parasyte: The Maxim",
    "synopsis": "A high school boy becomes partially infected by an alien parasite that failed to take over his brain.",
    "poster": "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    "episodes": 24,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "09-10-2014",
      "26-03-2015"
    ],
    "anime_type": "Seinen",
    "popularity": 876543,
    "genres": [
      "Action",
      "Horror",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/parasyte-the-maxim",
      "Hulu": "https://www.hulu.com/series/parasyte-the-maxim-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 88,
    "title": "Psycho-Pass",
    "synopsis": "In a dystopian future, inspectors enforce the law based on a system that measures people's mental states for criminal intent.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/43399.jpg",
    "episodes": 22,
    "year": 2012,
    "status": "Finished Airing",
    "aired": [
      "12-10-2012",
      "22-03-2013"
    ],
    "anime_type": "Seinen",
    "popularity": 765432,
    "genres": [
      "Action",
      "Mystery",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/psycho-pass",
      "Funimation": "https://www.funimation.com/shows/psycho-pass/"
    }
  },
  {
    "id": 89,
    "title": "Psycho-Pass 2",
    "synopsis": "New cases challenge Akane's faith in the Sibyl System as more flaws in the perfect society are revealed.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/67733.jpg",
    "episodes": 11,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "10-10-2014",
      "19-12-2014"
    ],
    "anime_type": "Seinen",
    "popularity": 654321,
    "genres": [
      "Action",
      "Mystery",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 7.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/psycho-pass",
      "Funimation": "https://www.funimation.com/shows/psycho-pass/"
    }
  },
  {
    "id": 90,
    "title": "Psycho-Pass 3",
    "synopsis": "New inspectors Arata Shindo and Kei Mikhail Ignatov investigate cases in a world where the Sibyl System's authority is being questioned.",
    "poster": "https://cdn.myanimelist.net/images/anime/1075/103420.jpg",
    "episodes": 8,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "25-10-2019",
      "13-12-2019"
    ],
    "anime_type": "Seinen",
    "popularity": 543210,
    "genres": [
      "Action",
      "Mystery",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 7.9,
    "available_on": {
      "Amazon Prime": "https://www.amazon.com/Psycho-Pass-3-Season-1/dp/B07ZQZQZQZ"
    }
  },
  {
    "id": 91,
    "title": "Erased",
    "synopsis": "A man gains the ability to travel back in time moments before a life-threatening incident occurs.",
    "poster": "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@._V1_.jpg",
    "episodes": 12,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "08-01-2016",
      "25-03-2016"
    ],
    "anime_type": "Seinen",
    "popularity": 876543,
    "genres": [
      "Mystery",
      "Psychological",
      "Supernatural"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/erased",
      "Hulu": "https://www.hulu.com/series/erased-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 92,
    "title": "Made in Abyss",
    "synopsis": "An orphan girl explores a massive abyss filled with ancient relics and dangerous creatures.",
    "poster": "https://cdn.myanimelist.net/images/anime/6/86733.jpg",
    "episodes": 13,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "07-07-2017",
      "29-09-2017"
    ],
    "anime_type": "Seinen",
    "popularity": 765432,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "available_on": {
      "Amazon Prime": "https://www.amazon.com/Made-in-Abyss-Season-1/dp/B07ZQZQZQZ",
      "HIDIVE": "https://www.hidive.com/tv/made-in-abyss"
    }
  },
  {
    "id": 93,
    "title": "Made in Abyss: Dawn of the Deep Soul",
    "synopsis": "Riko and Reg venture deeper into the Abyss where they encounter Bondrewd, a legendary White Whistle.",
    "poster": "https://resizing.flixster.com/ZlwSciYuJzqyfOIAx_oJ3pFaZ4Y=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18029358_p_v8_aa.jpg",
    "episodes": 1,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "17-01-2020",
      "17-01-2020"
    ],
    "anime_type": "Movie",
    "popularity": 654321,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 9.0,
    "available_on": {
      "Amazon Prime": "https://www.amazon.com/Made-in-Abyss-Dawn-of-the-Deep-Soul/dp/B07ZQZQZQZ"
    }
  },
  {
    "id": 94,
    "title": "Made in Abyss: The Golden City of the Scorching Sun",
    "synopsis": "Riko and Reg reach the sixth layer of the Abyss where they encounter a mysterious village.",
    "poster": "https://resizing.flixster.com/5Lu1K1V1QkYjVpz2ScCnHQXjRKM=/206x305/v2/https://resizing.flixster.com/9NMpDJXQieCrUFgdl1as8LgtiqM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2RkMzhhNmM3LTIzZjMtNDg5NC1hYTdlLWI1Yjc0Y2MxNDVjNS53ZWJw",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "06-07-2022",
      "28-09-2022"
    ],
    "anime_type": "Seinen",
    "popularity": 765432,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 9.1,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/made-in-abyss-the-golden-city-of-the-scorching-sun"
    }
  },
  {
    "id": 95,
    "title": "The Devil Is a Part-Timer!",
    "synopsis": "The Devil King is forced to work at a fast food restaurant after being transported to modern Tokyo.",
    "poster": "https://cdn.myanimelist.net/images/anime/3/50177.jpg",
    "episodes": 13,
    "year": 2013,
    "status": "Finished Airing",
    "aired": [
      "04-04-2013",
      "27-06-2013"
    ],
    "anime_type": "Light Novel",
    "popularity": 654321,
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-devil-is-a-part-timer",
      "Funimation": "https://www.funimation.com/shows/the-devil-is-a-part-timer/"
    }
  },
  {
    "id": 96,
    "title": "The Devil Is a Part-Timer! Season 2",
    "synopsis": "Maou and his demon generals continue their lives in Tokyo while facing new threats from their old world.",
    "poster": "https://cdn.myanimelist.net/images/anime/1018/122531.jpg",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "14-07-2022",
      "29-09-2022"
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "rating": 7.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-devil-is-a-part-timer"
    }
  },
  {
    "id": 97,
    "title": "No Game No Life",
    "synopsis": "Two genius siblings are transported to a world where all conflicts are resolved through games.",
    "poster": "https://cdn.myanimelist.net/images/anime/1074/111944.jpg",
    "episodes": 12,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "09-04-2014",
      "25-06-2014"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Adventure",
      "Comedy",
      "Ecchi",
      "Fantasy"
    ],
    "rating": 8.1,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/no-game-no-life"
    }
  },
  {
    "id": 98,
    "title": "No Game No Life: Zero",
    "synopsis": "A prequel movie set 6,000 years before the main series, during the Great War between the races.",
    "poster": "https://cdn.myanimelist.net/images/anime/1084/92307.jpg",
    "episodes": 1,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "15-07-2017",
      "15-07-2017"
    ],
    "anime_type": "Movie",
    "popularity": 765432,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "rating": 8.4,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/movies/no-game-no-life-zero"
    }
  },
  {
    "id": 99,
    "title": "Konosuba: God's Blessing on This Wonderful World!",
    "synopsis": "After dying in a humiliating accident, Kazuma is sent to a fantasy world where he forms a dysfunctional party with a goddess, a mage, and a crusader.",
    "poster": "https://cdn.myanimelist.net/images/anime/8/77831.jpg",
    "episodes": 10,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "14-01-2016",
      "17-03-2016"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Parody"
    ],
    "rating": 8.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/konosuba-gods-blessing-on-this-wonderful-world"
    }
  },
  {
    "id": 100,
    "title": "Konosuba: God's Blessing on This Wonderful World! 2",
    "synopsis": "Kazuma and his party continue their misadventures in the fantasy world, facing new challenges and enemies.",
    "poster": "https://cdn.myanimelist.net/images/anime/4/85249.jpg",
    "episodes": 10,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "12-01-2017",
      "16-03-2017"
    ],
    "anime_type": "Light Novel",
    "popularity": 876543,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Parody"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/konosuba-gods-blessing-on-this-wonderful-world"
    }
  },
  {
    "id": 101,
    "title": "Konosuba: Legend of Crimson",
    "synopsis": "Kazuma and his party travel to Megumin's hometown where they get involved in a crisis involving the Crimson Demon clan.",
    "poster": "https://cdn.myanimelist.net/images/anime/1595/103418.jpg",
    "episodes": 1,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "30-08-2019",
      "30-08-2019"
    ],
    "anime_type": "Movie",
    "popularity": 765432,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Parody"
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/movies/konosuba-legend-of-crimson"
    }
  },
  {
    "id": 102,
    "title": "Konosuba: An Explosion on This Wonderful World!",
    "synopsis": "A spin-off focusing on Megumin's past and her journey to become an explosion magic specialist.",
    "poster": "https://cdn.myanimelist.net/images/anime/1986/136628.jpg",
    "episodes": 12,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "06-04-2023",
      "22-06-2023"
    ],
    "anime_type": "Light Novel",
    "popularity": 654321,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/konosuba-an-explosion-on-this-wonderful-world"
    }
  },
  {
    "id": 103,
    "title": "The Saga of Tanya the Evil",
    "synopsis": "A ruthless salaryman is reincarnated as a little girl in an alternate world's military during wartime.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/82890.jpg",
    "episodes": 12,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "06-01-2017",
      "31-03-2017"
    ],
    "anime_type": "Light Novel",
    "popularity": 654321,
    "genres": [
      "Action",
      "Fantasy",
      "Military"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-saga-of-tanya-the-evil"
    }
  },
  {
    "id": 104,
    "title": "The Saga of Tanya the Evil: The Movie",
    "synopsis": "Tanya faces her greatest challenge yet as the war escalates to new heights.",
    "poster": "https://cdn.myanimelist.net/images/anime/1003/103420.jpg",
    "episodes": 1,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "08-02-2019",
      "08-02-2019"
    ],
    "anime_type": "Movie",
    "popularity": 543210,
    "genres": [
      "Action",
      "Fantasy",
      "Military"
    ],
    "rating": 8.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/movies/the-saga-of-tanya-the-evil-the-movie"
    }
  },
  {
    "id": 105,
    "title": "Reincarnated as a Sword",
    "synopsis": "A man reincarnates as a sentient sword and becomes the weapon of a young catgirl warrior.",
    "poster": "https://cdn.myanimelist.net/images/anime/1813/136628.jpg",
    "episodes": 12,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "05-10-2022",
      "21-12-2022"
    ],
    "anime_type": "Light Novel",
    "popularity": 432109,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 7.6,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/reincarnated-as-a-sword"
    }
  },
  {
    "id": 106,
    "title": "The Eminence in Shadow",
    "synopsis": "A boy obsessed with becoming a shadowy mastermind behind the scenes gets reincarnated into a fantasy world.",
    "poster": "https://cdn.myanimelist.net/images/anime/1986/136628.jpg",
    "episodes": 20,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "05-10-2022",
      "15-02-2023"
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Action",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.2,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/the-eminence-in-shadow"
    }
  },
  {
    "id": 107,
    "title": "Log Horizon",
    "synopsis": "Thousands of players are trapped in the MMORPG Elder Tale and must learn to live in this new world.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/84017.jpg",
    "episodes": 25,
    "year": 2013,
    "status": "Finished Airing",
    "aired": [
      "05-10-2013",
      "22-03-2014"
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/log-horizon"
    }
  },
  {
    "id": 108,
    "title": "Log Horizon 2",
    "synopsis": "Shiroe and his allies continue to build their society in the game world while facing new threats.",
    "poster": "https://cdn.myanimelist.net/images/anime/12/68771.jpg",
    "episodes": 25,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "04-10-2014",
      "28-03-2015"
    ],
    "anime_type": "Light Novel",
    "popularity": 432109,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game"
    ],
    "rating": 7.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/log-horizon"
    }
  },
  {
    "id": 109,
    "title": "Log Horizon: Destruction of the Round Table",
    "synopsis": "The third season where tensions rise among the adventurers as new conflicts emerge.",
    "poster": "https://cdn.myanimelist.net/images/anime/1045/111348.jpg",
    "episodes": 12,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "13-01-2021",
      "31-03-2021"
    ],
    "anime_type": "Light Novel",
    "popularity": 321098,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Game"
    ],
    "rating": 7.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/log-horizon"
    }
  },
  {
    "id": 110,
    "title": "The Irregular at Magic High School",
    "synopsis": "In a world where magic is treated as a technology, a brother and sister enroll at a prestigious magic high school.",
    "poster": "https://cdn.myanimelist.net/images/anime/11/61039.jpg",
    "episodes": 26,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "06-04-2014",
      "28-09-2014"
    ],
    "anime_type": "Light Novel",
    "popularity": 654321,
    "genres": [
      "Action",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 7.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-irregular-at-magic-high-school",
      "Funimation": "https://www.funimation.com/shows/the-irregular-at-magic-high-school/"
    }
  },
  {
    "id": 111,
    "title": "The Irregular at Magic High School: Visitor Arc",
    "synopsis": "Tatsuya and Miyuki face new challenges when foreign magicians visit their school.",
    "poster": "https://cdn.myanimelist.net/images/anime/1604/106541.jpg",
    "episodes": 13,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "04-10-2020",
      "27-12-2020"
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Action",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 7.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-irregular-at-magic-high-school"
    }
  },
  {
    "id": 112,
    "title": "The Irregular at Magic High School: Reminiscence Arc",
    "synopsis": "A flashback to Tatsuya and Miyuki's past before enrolling at First High School.",
    "poster": "https://cdn.myanimelist.net/images/anime/1986/136628.jpg",
    "episodes": 1,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "31-12-2021",
      "31-12-2021"
    ],
    "anime_type": "Special",
    "popularity": 432109,
    "genres": [
      "Action",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 7.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-irregular-at-magic-high-school"
    }
  },
  {
    "id": 113,
    "title": "Classroom of the Elite",
    "synopsis": "Students in a prestigious academy compete in a ruthless ranking system where only the best survive.",
    "poster": "https://cdn.myanimelist.net/images/anime/5/86830.jpg",
    "episodes": 12,
    "year": 2017,
    "status": "Finished Airing",
    "aired": [
      "12-07-2017",
      "27-09-2017"
    ],
    "anime_type": "Light Novel",
    "popularity": 765432,
    "genres": [
      "Drama",
      "Psychological"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/classroom-of-the-elite"
    }
  },
  {
    "id": 114,
    "title": "Classroom of the Elite II",
    "synopsis": "Ayanokouji continues to manipulate events behind the scenes as the competition between classes intensifies.",
    "poster": "https://cdn.myanimelist.net/images/anime/1448/122620.jpg",
    "episodes": 13,
    "year": 2022,
    "status": "Finished Airing",
    "aired": [
      "04-07-2022",
      "26-09-2022"
    ],
    "anime_type": "Light Novel",
    "popularity": 654321,
    "genres": [
      "Drama",
      "Psychological"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/classroom-of-the-elite"
    }
  },
  {
    "id": 115,
    "title": "Classroom of the Elite III",
    "synopsis": "The third season continues Ayanokouji's machinations as the school year approaches its climax.",
    "poster": "https://cdn.myanimelist.net/images/anime/1986/136628.jpg",
    "episodes": 13,
    "year": 2024,
    "status": "Currently Airing",
    "aired": [
      "03-01-2024",
      null
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Drama",
      "Psychological"
    ],
    "rating": null,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/classroom-of-the-elite"
    }
  },
  {
    "id": 116,
    "title": "The Misfit of Demon King Academy",
    "synopsis": "The demon king reincarnates 2,000 years later to find the world has changed and magic has declined.",
    "poster": "https://cdn.myanimelist.net/images/anime/1813/136628.jpg",
    "episodes": 13,
    "year": 2020,
    "status": "Finished Airing",
    "aired": [
      "04-07-2020",
      "26-09-2020"
    ],
    "anime_type": "Light Novel",
    "popularity": 543210,
    "genres": [
      "Action",
      "Fantasy"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-misfit-of-demon-king-academy"
    }
  },
  {
    "id": 117,
    "title": "The Misfit of Demon King Academy II",
    "synopsis": "Anos continues his education while uncovering more secrets about the world's changed state.",
    "poster": "https://cdn.myanimelist.net/images/anime/1986/136628.jpg",
    "episodes": 12,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "08-01-2023",
      "02-04-2023"
    ],
    "anime_type": "Light Novel",
    "popularity": 432109,
    "genres": [
      "Action",
      "Fantasy"
    ],
    "rating": 8.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-misfit-of-demon-king-academy"
    }
  },
  {
    "id": 118,
    "title": "Horimiya",
    "synopsis": "Two high school students with contrasting personalities form an unlikely friendship that blossoms into romance.",
    "poster": "https://cdn.myanimelist.net/images/anime/1208/110189.jpg",
    "episodes": 13,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "10-01-2021",
      "04-04-2021"
    ],
    "anime_type": "Shonen",
    "popularity": 876543,
    "genres": [
      "Comedy",
      "Romance",
      "Slice of Life"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/horimiya",
      "Funimation": "https://www.funimation.com/shows/horimiya/"
    }
  },
  {
    "id": 119,
    "title": "Your Lie in April",
    "synopsis": "A piano prodigy rediscovers his passion for music with the help of a free-spirited violinist.",
    "poster": "https://cdn.myanimelist.net/images/anime/3/67177.jpg",
    "episodes": 22,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "10-10-2014",
      "20-03-2015"
    ],
    "anime_type": "Shonen",
    "popularity": 987654,
    "genres": [
      "Drama",
      "Music",
      "Romance"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/your-lie-in-april",
      "Netflix": "https://www.netflix.com/title/80050063"
    }
  },
  {
    "id": 120,
    "title": "Dragon Ball Daima",
    "synopsis": "Goku and his friends who are unexpectedly turned into children due to a conspiracy, prompting them to embark on a journey to a new world to reverse the change.",
    "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUfFNHMdJpLaTcx04EGLkdWWAs4wTSEsA3g&s",
    "episodes": 20,
    "year": 2024,
    "status": "Finished Airing",
    "aired": [
      "11-10-2024",
      "28-02-2025"
    ],
    "anime_type": "Shonen",
    "popularity": 932109,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Martial Arts",
      "Super Power"
    ],
    "rating": 7.9,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/dragon-ball-daima",
      "Netflix": "https://www.netflix.com/title/81280917",
      "Amazon Prime": "https://www.amazon.com/Dragon-Ball-Daima-Season-1/dp/B0CQZQZQZQ"
    }
  },
  {
    "id": 121,
    "title": "Solo Leveling",
    "synopsis": "In a world where hunters battle monsters, the weakest hunter gains a mysterious power to level up.",
    "poster": "https://resizing.flixster.com/C0HOwECqfpe-PBQf99_DmA_p3ow=/206x305/v2/https://resizing.flixster.com/WvUR0LcCwPkfo07dl1CChnL1f6o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzRlNmFmN2MtNjA2Mi00MTUwLTg2MGYtOGZlN2M5OGRjZWUzLnBuZw==",
    "episodes": 12,
    "year": 2024,
    "status": "Currently Airing",
    "aired": [
      "06-01-2024",
      null
    ],
    "anime_type": "Webtoon",
    "popularity": 987654,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/solo-leveling"
    }
  },
  {
    "id": 122,
    "title": "Demon Slayer: Kimetsu no Yaiba - Hashira Training Arc",
    "synopsis": "Tanjiro and his fellow Demon Slayers undergo rigorous training under the Hashira to prepare for the impending battle against Muzan Kibutsuji and the Upper Rank demons.",
    "poster": "https://resizing.flixster.com/Q-uuodw0ztqEgHE0Bv8h096usi8=/206x305/v2/https://resizing.flixster.com/zJeaLFLdWMkNbjB0e-oBfmb-xtU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMzA1MjgxZDgtZWVmYS00NzM3LTgzMDUtZmU4NWExNjY4YzY5LmpwZw==",
    "episodes": 8,
    "year": 2024,
    "status": "Currently Airing",
    "aired": [
      "12-05-2024",
      "TBA"
    ],
    "anime_type": "Shonen",
    "popularity": 3456789,
    "genres": [
      "Action",
      "Adventure",
      "Demons",
      "Historical",
      "Supernatural"
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
      "Netflix": "https://www.netflix.com/title/81091393",
      "Hulu": "https://www.hulu.com/series/demon-slayer-kimetsu-no-yaiba-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 123,
    "title": "Fullmetal Alchemist",
    "synopsis": "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    "poster": "https://resizing.flixster.com/LNUikWA_t7MRKq799X0kYujaDTM=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9064332_b_v8_ab.jpg",
    "episodes": 51,
    "year": 2003,
    "status": "Finished Airing",
    "aired": [
      "04-10-2003",
      "02-10-2004"
    ],
    "anime_type": "Shonen",
    "popularity": 1500000,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
    ],
    "rating": 8.6,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/fullmetal-alchemist",
      "Funimation": "https://www.funimation.com/shows/fullmetal-alchemist/",
      "Hulu": "https://www.hulu.com/series/fullmetal-alchemist-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 124,
    "title": "Monster",
    "synopsis": "A brilliant neurosurgeon finds his life ruined after saving a young boy who grows up to be a monstrous serial killer.",
    "poster": "https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/monster.jpg",
    "episodes": 74,
    "year": 2004,
    "status": "Finished Airing",
    "aired": [
      "07-04-2004",
      "28-09-2005"
    ],
    "anime_type": "Seinen",
    "popularity": 800000,
    "genres": [
      "Drama",
      "Mystery",
      "Horror",
      "Psychological",
      "Thriller",
      "Seinen"
    ],
    "rating": 8.9,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/70204970"
    }
  },
  {
    "id": 125,
    "title": "Gintama",
    "synopsis": "In an alternate Edo period where aliens have taken over, a samurai works odd jobs to pay the rent while dreaming of better days.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg",
    "episodes": 367,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "04-04-2006",
      "08-10-2018"
    ],
    "anime_type": "Shonen",
    "popularity": 1200000,
    "genres": [
      "Action",
      "Comedy",
      "Historical",
      "Parody",
      "Samurai",
      "Sci-Fi",
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/gintama",
      "Hulu": "https://www.hulu.com/series/gintama-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b"
    }
  },
  {
    "id": 126,
    "title": "Hajime no Ippo",
    "synopsis": "A shy high school student discovers boxing and begins his journey to become a professional boxer.",
    "poster": "https://m.media-amazon.com/images/M/MV5BOWE2OTJkNzAtZWU1NC00YmQyLTk5ZWMtNzQ4MjQyZTI5YjhlXkEyXkFqcGc@._V1_.jpg",
    "episodes": 75,
    "year": 2000,
    "status": "Finished Airing",
    "aired": [
      "04-10-2000",
      "27-03-2002"
    ],
    "anime_type": "Shonen",
    "popularity": 700000,
    "genres": [
      "Action",
      "Comedy",
      "Drama",
      "Sports",
    ],
    "rating": 8.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/hajime-no-ippo"
    }
  },
  {
    "id": 127,
    "title": "Dandadan",
    "synopsis": "A supernatural adventure following a boy who believes in ghosts but not aliens and a girl who believes in aliens but not ghosts as they encounter bizarre phenomena.",
    "poster": "https://resizing.flixster.com/o5ExOWzWkPD70Y4qUULB-6D3kV0=/206x305/v2/https://resizing.flixster.com/fcnIJcDFPsDt_HZTJkf01ZjSZKE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzc0NDQ5NjAtYmIyNi00ZGIyLWEyNWEtODcwNjg3M2Q5MTk2LmpwZw==",
    "episodes": 12,
    "year": 2024,
    "status": "Currently Airing",
    "aired": [
      "2024-04-10",
      "Ongoing"
    ],
    "anime_type": "Shonen",
    "popularity": 1234567,
    "genres": [
      "Action",
      "Supernatural",
      "Comedy",
      "Romance"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/dandadan"
    }
  },
  {
    "id": 128,
    "title": "Frieren: Beyond Journey's End - Season 1",
    "synopsis": "An elf mage reflects on her past adventures with her now-aging companions as she continues her journey to understand humanity.",
    "poster": "https://resizing.flixster.com/V9lyiq7YDwi5MxtlrBw-6rae8hI=/206x305/v2/https://resizing.flixster.com/WCvQ0FSHU7L3i-Ih80VftiQrpQU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZjQxNTViYTMtMDViMi00OWUzLTliMGEtZjRlMjU4OTkzMWIxLnBuZw==",
    "episodes": 28,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "2023-09-29",
      "2024-03-22"
    ],
    "anime_type": "Fantasy",
    "popularity": 1897654,
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/frieren-beyond-journeys-end"
    }
  },
  {
    "id": 129,
    "title": "Trigun Stampede",
    "synopsis": "A reboot of the classic series following Vash the Stampede, a gunman with a huge bounty on his head, as he travels through a sci-fi western landscape.",
    "poster": "https://resizing.flixster.com/0rv9NttTGcC5AMMVIpGC0SW1D9Q=/206x305/v2/https://resizing.flixster.com/m65fhrvaBTjOPHsdE7ng112shM0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjA0M2UwZWEtZTM0MS00ZTg3LTg5OTEtMjY2OTc5NzM4OGY3LnBuZw==",
    "episodes": 12,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "2023-01-07",
      "2023-03-25"
    ],
    "anime_type": "Action",
    "popularity": 987654,
    "genres": [
      "Action",
      "Sci-Fi",
      "Western"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/trigun-stampede"
    }
  },
  {
    "id": 130,
    "title": "One Punch Man - Season 1",
    "synopsis": "Saitama is a hero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.",
    "poster": "https://resizing.flixster.com/ukrknG3fNOblQMwdEZ0IxSYGOyg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12998544_b_v8_ab.jpg",
    "episodes": 12,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "2015-10-05",
      "2015-12-21"
    ],
    "anime_type": "Action",
    "popularity": 4567890,
    "genres": [
      "Action",
      "Comedy",
      "Parody",
      "Superhero",
      "Superpower"
    ],
    "rating": 8.7,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/one-punch-man-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b",
      "Netflix": "https://www.netflix.com/title/80097571",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/one-punch-man"
    }
  },
  {
    "id": 131,
    "title": "One Punch Man - Season 2",
    "synopsis": "Saitama continues his hero work while new threats emerge and the Hero Association faces internal challenges.",
    "poster": "https://resizing.flixster.com/Nupc-YWYdhXJ8hjNraLHC-HQWBo=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16802360_b_v8_ac.jpg",
    "episodes": 12,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "2019-04-09",
      "2019-07-02"
    ],
    "anime_type": "Action",
    "popularity": 3456789,
    "genres": [
      "Action",
      "Comedy",
      "Parody",
      "Superhero",
      "Superpower"
    ],
    "rating": 7.9,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/one-punch-man-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/one-punch-man"
    }
  },
  {
    "id": 132,
    "title": "Kaiju No. 8",
    "synopsis": "A man gains the ability to transform into a kaiju and joins a defense force that protects Japan from monster attacks.",
    "poster": "https://resizing.flixster.com/LXGemG_3RKyT0KSnvksk-Gkjqvw=/206x305/v2/https://resizing.flixster.com/Y1U_XNfR_CgGyTRGyuLov8AcqZw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNTFlZTRkMWEtMTNmNC00N2NhLTljNDctZWJlZDRkOTJhMmQzLnBuZw==",
    "episodes": 12,
    "year": 2024,
    "status": "Finished Airing",
    "aired": [
      "2024-04-13",
      "2024-06-29"
    ],
    "anime_type": "Action",
    "popularity": 2345678,
    "genres": [
      "Action",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/kaiju-no-8"
    }
  },
  {
    "id": 133,
    "title": "Pokemon - Season 1: Indigo League",
    "synopsis": "Ash Ketchum begins his journey to become a Pokémon Master with his first partner Pikachu in the Kanto region.",
    "poster": "https://resizing.flixster.com/DrshzSuxdyVb1SpZJmKE4rZLLTk=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8943978_b_v8_ab.jpg",
    "episodes": 82,
    "year": 1997,
    "status": "Finished Airing",
    "aired": [
      "1997-04-01",
      "1998-01-21"
    ],
    "anime_type": "Adventure",
    "popularity": 5678901,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 7.5,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/70204970",
      "Pokémon TV": "https://www.pokemon.com/us/pokemon-episodes/"
    }
  },
  {
    "id": 134,
    "title": "Tokyo Ghoul - Season 1",
    "synopsis": "Ken Kaneki, a college student, becomes a half-ghoul after an encounter with one. He must navigate the dangerous world of ghouls and humans while struggling with his new identity.",
    "poster": "https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_.jpg",
    "episodes": 12,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "2014-07-04",
      "2014-09-19"
    ],
    "anime_type": "Action",
    "popularity": 4500000,
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Psychological",
      "Supernatural"
    ],
    "rating": 8.0,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/tokyo-ghoul-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/tokyo-ghoul",
      "Funimation": "https://www.funimation.com/shows/tokyo-ghoul/"
    }
  },
  {
    "id": 135,
    "title": "Tokyo Ghoul √A - Season 2",
    "synopsis": "Kaneki joins the terrorist group Aogiri Tree to gain strength and protect his friends, leading to violent conflicts between ghouls and investigators.",
    "poster": "https://i.pinimg.com/736x/41/49/a5/4149a5ea483bb6c672ebf6eb9f74c49d.jpg",
    "episodes": 12,
    "year": 2015,
    "status": "Finished Airing",
    "aired": [
      "2015-01-09",
      "2015-03-27"
    ],
    "anime_type": "Action",
    "popularity": 3800000,
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Psychological",
      "Supernatural"
    ],
    "rating": 7.5,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/tokyo-ghoul-5b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/tokyo-ghoul",
      "Funimation": "https://www.funimation.com/shows/tokyo-ghoul/"
    }
  },
  {
    "id": 136,
    "title": "Tokyo Ghoul:re - Season 3",
    "synopsis": "Two years after the events of √A, Haise Sasaki leads the CCG's Quinx Squad, unaware of his past as Kaneki. His memories resurface as new threats emerge.",
    "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOybNiDF7halU0kP-3brV2Dmib6RRCVWKqiQ&s",
    "episodes": 12,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "2018-04-03",
      "2018-06-19"
    ],
    "anime_type": "Action",
    "popularity": 3200000,
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Psychological",
      "Supernatural"
    ],
    "rating": 7.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/tokyo-ghoulre",
      "Funimation": "https://www.funimation.com/shows/tokyo-ghoulre/"
    }
  },
  {
    "id": 137,
    "title": "The Seven Deadly Sins - Season 1",
    "synopsis": "Princess Elizabeth seeks the help of the disbanded Seven Deadly Sins to reclaim her kingdom from the Holy Knights who staged a coup.",
    "poster": "https://i.pinimg.com/736x/ef/89/3b/ef893b2bd99a8984a67bb22f360c1123.jpg",
    "episodes": 24,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "2014-10-05",
      "2015-03-29"
    ],
    "anime_type": "Adventure",
    "popularity": 5000000,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 8.1,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/80050063",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-seven-deadly-sins"
    }
  },
  {
    "id": 138,
    "title": "The Seven Deadly Sins: Revival of the Commandments - Season 2",
    "synopsis": "The Seven Deadly Sins face the Ten Commandments, a group of powerful demons seeking to revive their leader and plunge the world into darkness.",
    "poster": "https://upload.wikimedia.org/wikipedia/en/9/9c/The_Seven_Deadly_Sins-_Revival_of_The_Commandments.jpg",
    "episodes": 24,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "2018-01-13",
      "2018-06-30"
    ],
    "anime_type": "Adventure",
    "popularity": 4200000,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Netflix": "https://www.netflix.com/title/80050063",
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/the-seven-deadly-sins"
    }
  },
  {
    "id": 139,
    "title": "Magi: The Labyrinth of Magic - Season 1",
    "synopsis": "Aladdin, a young magician, embarks on a journey with Alibaba to explore dungeons and uncover the mysteries of the world.",
    "poster": "https://i.pinimg.com/236x/ea/48/88/ea4888420452ec337fd3bc1dbcbb89bd.jpg",
    "episodes": 25,
    "year": 2012,
    "status": "Finished Airing",
    "aired": [
      "2012-10-07",
      "2013-03-31"
    ],
    "anime_type": "Adventure",
    "popularity": 3500000,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Shounen"
    ],
    "rating": 8.2,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/magi-the-labyrinth-of-magic",
      "Netflix": "https://www.netflix.com/title/70204970"
    }
  },
  {
    "id": 140,
    "title": "Magi: The Kingdom of Magic - Season 2",
    "synopsis": "Aladdin and his friends travel to the magical kingdom of Magnostadt, where they uncover political intrigue and dark secrets.",
    "poster": "https://images.justwatch.com/poster/46421652/s718/season-2.jpg",
    "episodes": 25,
    "year": 2013,
    "status": "Finished Airing",
    "aired": [
      "2013-10-06",
      "2014-03-30"
    ],
    "anime_type": "Adventure",
    "popularity": 3200000,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Shounen"
    ],
    "rating": 8.3,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/magi-the-labyrinth-of-magic",
      "Netflix": "https://www.netflix.com/title/70204970"
    }
  },
  {
    "id": 141,
    "title": "D.Gray-man - Season 1",
    "synopsis": "Allen Walker, an exorcist, fights against the Millennium Earl and his Akuma to prevent the destruction of humanity.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjQ5MTI1NF5BMl5BanBnXkFtZTcwNjUwMjYzMQ@@._V1_.jpg",
    "episodes": 103,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "2006-10-03",
      "2008-09-30"
    ],
    "anime_type": "Action",
    "popularity": 2800000,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Shounen",
      "Supernatural"
    ],
    "rating": 8.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GY5P48XEY/dgray-man",
      "Funimation": "https://www.funimation.com/shows/dgray-man/"
    }
  },{
    "id": 141,
    "title": "D.Gray-man - Season 1",
    "synopsis": "Allen Walker, an exorcist, fights against the Millennium Earl and his Akuma to prevent the destruction of humanity.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjQ5MTI1NF5BMl5BanBnXkFtZTcwNjUwMjYzMQ@@._V1_.jpg",
    "episodes": 103,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "2006-10-03",
      "2008-09-30"
    ],
    "anime_type": "Action",
    "popularity": 2800000,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Shounen",
      "Supernatural"
    ],
    "rating": 8.0,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GYQ4MWDGY/dgray-man",
      "Funimation": "https://www.funimation.com/shows/dgray-man/"
    }
  },
  {
    "id": 142,
    "title": "D.Gray-man Hallow - Season 2",
    "synopsis": "Allen and the Exorcists continue their battle against the Noah Family, uncovering dark truths about their own organization.",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjMwNjk0ODMtNWE2MC00NzgwLWI5YjEtODU5ZjJjYmU0YmIyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "episodes": 13,
    "year": 2016,
    "status": "Finished Airing",
    "aired": [
      "2016-07-05",
      "2016-09-27"
    ],
    "anime_type": "Action",
    "popularity": 2000000,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Shounen",
      "Supernatural"
    ],
    "rating": 7.8,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/GYQ4MWDGY/dgray-man",
      "Funimation": "https://www.funimation.com/shows/dgray-man-hallow/"
    }
  },
  {
    "id": 143,
    "title": "Akame ga Kill! - Season 1",
    "synopsis": "Tatsumi joins the assassin group Night Raid to fight against the corrupt Empire, but the line between justice and evil blurs.",
    "poster": "https://m.media-amazon.com/images/M/MV5BZDg2MDJiODAtNTRkNC00MjgyLTgxYmUtZjJhYjVhMTJjZWUzXkEyXkFqcGc@._V1_.jpg",
    "episodes": 24,
    "year": 2014,
    "status": "Finished Airing",
    "aired": [
      "2014-07-07",
      "2014-12-15"
    ],
    "anime_type": "Action",
    "popularity": 4000000,
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 7.7,
    "available_on": {
      "Hulu": "https://www.hulu.com/series/akame-ga-kill-8e7f5a1d-9f3e-4c8e-9b5a-9e9f9b9f9b9f",
      "Crunchyroll": "https://www.crunchyroll.com/series/G6X3D5VZ6/akame-ga-kill"
    }
  },
  {
    "id": 144,
    "title": "Higurashi no Naku Koro ni - Season 1",
    "synopsis": "Keiichi Maebara moves to Hinamizawa, where he uncovers a series of gruesome murders linked to a local festival curse.",
    "poster": "https://m.media-amazon.com/images/M/MV5BZDBkMjNkNTEtZTEyMi00MWVkLThhMmYtZjIwYTZhZjhmOTgwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "episodes": 26,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "2006-04-05",
      "2006-09-27"
    ],
    "anime_type": "Horror",
    "popularity": 2500000,
    "genres": [
      "Horror",
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "rating": 8.1,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/higurashi-when-they-cry",
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/higurashi-when-they-cry"
    }
  },
  {
    "id": 145,
    "title": "Higurashi no Naku Koro ni Kai - Season 2",
    "synopsis": "The mysteries of Hinamizawa deepen as Rika Furude tries to break the cycle of tragedy and uncover the truth behind the curse.",
    "poster": "https://i.pinimg.com/474x/a0/bd/d3/a0bdd3ab1ec64cb54c3d36f4a6307b0c.jpg",
    "episodes": 24,
    "year": 2007,
    "status": "Finished Airing",
    "aired": [
      "2007-07-06",
      "2007-12-21"
    ],
    "anime_type": "Horror",
    "popularity": 2200000,
    "genres": [
      "Horror",
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "rating": 8.4,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/higurashi-when-they-cry-kai",
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/higurashi-when-they-cry"
    }
  },
  {
    "id": 146,
    "title": "Paranoia Agent",
    "synopsis": "Detectives investigate a series of attacks by a mysterious assailant known as Lil' Slugger, whose victims are linked by hidden traumas.",
    "poster": "https://m.media-amazon.com/images/M/MV5BZWI0OTc4MGUtYTQ4ZS00MzBmLTg5NjktNzFmMzNkNzgzMzQzXkEyXkFqcGc@._V1_.jpg",
    "episodes": 13,
    "year": 2004,
    "status": "Finished Airing",
    "aired": [
      "2004-02-03",
      "2004-05-18"
    ],
    "anime_type": "Psychological",
    "popularity": 1800000,
    "genres": [
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "rating": 8.2,
    "available_on": {
      "Funimation": "https://www.funimation.com/shows/paranoia-agent/"
    }
  },
  {
    "id": 147,
    "title": "Texhnolyze",
    "synopsis": "In the dystopian city of Lux, Ichise becomes embroiled in a power struggle after losing an arm and a leg, gaining texhnolyzed prosthetics.",
    "poster": "https://cdn.cinematerial.com/p/297x/uvzswuxz/texhnolyze-australian-movie-cover-md.jpg?v=1456043113",
    "episodes": 22,
    "year": 2003,
    "status": "Finished Airing",
    "aired": [
      "2003-04-17",
      "2003-10-02"
    ],
    "anime_type": "Sci-Fi",
    "popularity": 900000,
    "genres": [
      "Action",
      "Drama",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.0,
    "available_on": {
      "Funimation": "https://www.funimation.com/shows/texhnolyze/"
    }
  },
  {
    "id": 148,
    "title": "Nana",
    "synopsis": "Two young women named Nana, with contrasting personalities, become roommates in Tokyo and navigate love, friendship, and dreams.",
    "poster": "https://m.media-amazon.com/images/I/71fHXDpCydL._AC_UF1000,1000_QL80_.jpg",
    "episodes": 47,
    "year": 2006,
    "status": "Finished Airing",
    "aired": [
      "2006-04-05",
      "2007-03-28"
    ],
    "anime_type": "Drama",
    "popularity": 3000000,
    "genres": [
      "Drama",
      "Josei",
      "Music",
      "Romance"
    ],
    "rating": 8.5,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/nana",
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/nana"
    }
  },
  {
    "id": 149,
    "title": "Oshi no Ko - Season 1",
    "synopsis": "A doctor is reincarnated as the son of a famous idol, uncovering the dark side of the entertainment industry.",
    "poster": "https://images.justwatch.com/poster/305371448/s718/season-1.jpg",
    "episodes": 11,
    "year": 2023,
    "status": "Finished Airing",
    "aired": [
      "2023-04-12",
      "2023-06-28"
    ],
    "anime_type": "Drama",
    "popularity": 5000000,
    "genres": [
      "Drama",
      "Supernatural"
    ],
    "rating": 8.8,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/oshi-no-ko",
      "Crunchyroll": "https://www.crunchyroll.com/series/G4PH0WKEJ/oshi-no-ko"
    }
  },
  {
    "id": 150,
    "title": "Ranking of Kings - Season 1",
    "synopsis": "Bojji, a deaf and powerless prince, strives to become a great king despite being ridiculed by his kingdom.",
    "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ziX92cLzvJvGIyxvemhWT_51Lny5HFjl7Q&s",
    "episodes": 23,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "2021-10-15",
      "2022-03-25"
    ],
    "anime_type": "Adventure",
    "popularity": 4500000,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.7,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G4PH0WKEJ/ranking-of-kings",
      "Funimation": "https://www.funimation.com/shows/ranking-of-kings/"
    }
  },
  {
    "id": 151,
    "title": "Clannad: After Story - Season 2",
    "synopsis": "Tomoya and Nagisa face the challenges of adulthood, parenthood, and loss in this emotional continuation of Clannad.",
    "poster": "https://m.media-amazon.com/images/I/51LxZHW7cUL._AC_UF1000,1000_QL80_.jpg",
    "episodes": 24,
    "year": 2008,
    "status": "Finished Airing",
    "aired": [
      "2008-10-03",
      "2009-03-27"
    ],
    "anime_type": "Drama",
    "popularity": 3500000,
    "genres": [
      "Drama",
      "Romance",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 9.0,
    "available_on": {
      "HIDIVE": "https://www.hidive.com/tv/clannad-after-story",
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/clannad-after-story"
    }
  },
  {
    "id": 152,
    "title": "Fruits Basket (2019) - Season 1",
    "synopsis": "Tohru Honda discovers the Sohma family's curse: they transform into animals of the zodiac when hugged by the opposite sex.",
    "poster": "https://m.media-amazon.com/images/I/61uN2jh5hZL._AC_UF894,1000_QL80_.jpg",
    "episodes": 25,
    "year": 2019,
    "status": "Finished Airing",
    "aired": [
      "2019-04-06",
      "2019-09-21"
    ],
    "anime_type": "Drama",
    "popularity": 4000000,
    "genres": [
      "Comedy",
      "Drama",
      "Romance",
      "Shoujo",
      "Supernatural"
    ],
    "rating": 8.5,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/fruits-basket-1st-season",
      "Funimation": "https://www.funimation.com/shows/fruits-basket/"
    }
  },
  {
    "id": 153,
    "title": "Fruits Basket: The Final - Season 3",
    "synopsis": "The Sohma family's curse reaches its climax as Tohru helps them confront their past and break free from their bonds.",
    "poster": "https://i.imgur.com/ATDHEUb.jpeg",
    "episodes": 13,
    "year": 2021,
    "status": "Finished Airing",
    "aired": [
      "2021-04-06",
      "2021-06-29"
    ],
    "anime_type": "Drama",
    "popularity": 3800000,
    "genres": [
      "Drama",
      "Romance",
      "Shoujo",
      "Supernatural"
    ],
    "rating": 9.1,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/fruits-basket-the-final-season",
      "Funimation": "https://www.funimation.com/shows/fruits-basket-the-final-season/"
    }
  },
  {
    "id": 154,
    "title": "Anohana: The Flower We Saw That Day",
    "synopsis": "A group of childhood friends reunites to fulfill the wish of their deceased friend, Menma, whose ghost appears to one of them.",
    "poster": "https://m.media-amazon.com/images/I/71e9P-jGHYS._AC_UF894,1000_QL80_.jpg",
    "episodes": 11,
    "year": 2011,
    "status": "Finished Airing",
    "aired": [
      "2011-04-15",
      "2011-06-24"
    ],
    "anime_type": "Drama",
    "popularity": 3000000,
    "genres": [
      "Drama",
      "Supernatural"
    ],
    "rating": 8.4,
    "available_on": {
      "Crunchyroll": "https://www.crunchyroll.com/series/G6NQ3DW06/anohana-the-flower-we-saw-that-day",
      "Netflix": "https://www.netflix.com/title/70262856"
    }
  },
  {
    "id": 155,
    "title": "Violet Evergarden",
    "synopsis": "Violet, a former soldier, becomes an Auto Memory Doll, writing letters to help others express their feelings while searching for the meaning of love.",
    "poster": "https://m.media-amazon.com/images/I/91HWo5sXyGS.jpg",
    "episodes": 13,
    "year": 2018,
    "status": "Finished Airing",
    "aired": [
      "2018-01-11",
      "2018-04-05"
    ],
    "anime_type": "Drama",
    "popularity": 4200000,
    "genres": [
      "Drama",
      "Fantasy",
      "Slice of Life"
    ],
    "rating": 8.9,
    "available_on": {
      "Netflix": "https://www.netflix.com/in/title/80182123"
    }
  }
];