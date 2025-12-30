import React from 'react'
import InfluencerCard from './InfluencerCard'

const InfluencerGrid = () => {
    // const userData = [
    //     {
    //         username: "camcamcam",
    //         fullName: "Cameron Schmidt",
    //         profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    //         bio: "Lifestyle coach and photographer delivering best images online.",
    //         isFavorite: true,
    //         isVerified: true,
    //         gallery: [
    //             "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
    //             "",
    //             ""
    //         ],
    //         stats: {
    //             media: "1.2k",
    //             followers: "489.2k",
    //             following: "987"
    //         }
    //     },

    // ];
    const userData = [
  {
    username: "camcamcam",
    fullName: "Cameron Schmidt",
    profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    bio: "Lifestyle coach and photographer delivering best images online.",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60", 
      "https://images.unsplash.com/photo-1621317911160-70ee9c68750d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=60"  
    ],
    stats: {
      media: "1.2k",
      followers: "489.2k",
      following: "987"
    }
  },
  {
    username: "sarah_travels",
    fullName: "Sarah Jenkins",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    bio: "Exploring the world one city at a time. 🌍✈️",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "450",
      followers: "120k",
      following: "200"
    }
  },
  {
    username: "tech_guru",
    fullName: "Aarav Patel",
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    bio: "Tech reviewer | Gadget lover | Code enthusiast 💻",
    isFavorite: true,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "890",
      followers: "1.5M",
      following: "50"
    }
  },
  {
    username: "foodie_dimple",
    fullName: "Dimple Kapadia",
    profileImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    bio: "Taste tester based in Mumbai. 🍕🍔",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "2.1k",
      followers: "67k",
      following: "400"
    }
  },
  {
    username: "fitness_freak",
    fullName: "John Doe",
    profileImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60",
    bio: "Your daily dose of motivation. Gym is life. 💪",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "300",
      followers: "900k",
      following: "120"
    }
  },
  {
    username: "art_by_anna",
    fullName: "Anna Marie",
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    bio: "Abstract artist. Painting my dreams. 🎨",
    isFavorite: false,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=500&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1736708464394-d4525e642295?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    stats: {
      media: "150",
      followers: "10k",
      following: "89"
    }
  },
  {
    username: "urban_clicks",
    fullName: "Mike Ross",
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    bio: "Street photographer. Capturing the unseen. 📸",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://plus.unsplash.com/premium_photo-1736708464422-8a272b1ce656?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "5k",
      followers: "2.3M",
      following: "10"
    }
  },
  {
    username: "music_vibes",
    fullName: "Emily Blunt",
    profileImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    bio: "Singer/Songwriter. New album out now! 🎵",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "80",
      followers: "500k",
      following: "300"
    }
  },
  {
    username: "code_ninja",
    fullName: "David Kim",
    profileImg: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
    bio: "Full Stack Dev. Coffee addict. ☕💻",
    isFavorite: true,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "40",
      followers: "5k",
      following: "120"
    }
  },
  {
    username: "nature_lover",
    fullName: "Lily Green",
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    bio: "Plant mom. Hiking enthusiast. 🌿",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60"
    ],
    stats: {
      media: "900",
      followers: "89k",
      following: "600"
    }
  },
  {
    username: "style_icon",
    fullName: "Chloe Deja",
    profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    bio: "Fashion is freedom. 👗",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "1.1k", followers: "300k", following: "450" }
  },
  {
    username: "gamer_pro",
    fullName: "Alex Rider",
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    bio: "Streaming daily at 8 PM. 🎮",
    isFavorite: false,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "400", followers: "90k", following: "10" }
  },
  {
    username: "wanderlust_king",
    fullName: "Rohan Das",
    profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    bio: "Lost in the right direction. 🏔️",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "340", followers: "1.1M", following: "220" }
  },
  {
    username: "baker_life",
    fullName: "Sophie Turner",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    bio: "Sugar, spice, and everything nice. 🍰",
    isFavorite: true,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1640257258998-477ddf108381?q=80&w=340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621409949869-254b76a7921f?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    stats: { media: "600", followers: "45k", following: "800" }
  },
  {
    username: "crypto_whale",
    fullName: "Ben Ten",
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    bio: "Blockchain enthusiast. To the moon! 🚀",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "100", followers: "20k", following: "5" }
  },
  {
    username: "dance_diva",
    fullName: "Mia Rodriguez",
    profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    bio: "Express yourself through movement. 💃",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "320", followers: "400k", following: "500" }
  },
  {
    username: "minimal_guy",
    fullName: "Chris Evans",
    profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    bio: "Less is more. ⚪",
    isFavorite: false,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "120", followers: "15k", following: "20" }
  },
  {
    username: "pet_palace",
    fullName: "Jessica & Milo",
    profileImg: "https://images.unsplash.com/photo-1517423568366-697553f1e316?w=500&auto=format&fit=crop&q=60",
    bio: "Dog mom. Fur baby lover. 🐶",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "1.5k", followers: "2M", following: "100" }
  },
  {
    username: "book_worm",
    fullName: "Hermione G.",
    profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    bio: "So many books, so little time. 📚",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "450", followers: "80k", following: "600" }
  },
  {
    username: "skater_boy",
    fullName: "Tony Hawk",
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    bio: "Skate or die. 🛹",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://plus.unsplash.com/premium_photo-1669740215572-5e49b2d7eee0?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "800", followers: "12M", following: "20" }
  },
  {
    username: "yoga_zen",
    fullName: "Priya Sharma",
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    bio: "Finding peace within. 🧘‍♀️",
    isFavorite: true,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "220", followers: "56k", following: "150" }
  },
  {
    username: "car_freak",
    fullName: "Dom Toretto",
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    bio: "Living life a quarter mile at a time. 🏎️",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "1.2k", followers: "3M", following: "12" }
  },
  {
    username: "diy_queen",
    fullName: "Martha S.",
    profileImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60",
    bio: "Crafting magic out of nothing. ✂️",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    stats: { media: "670", followers: "200k", following: "400" }
  },
  {
    username: "coffee_holic",
    fullName: "Jim Halpert",
    profileImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
    bio: "Powered by caffeine. ☕",
    isFavorite: false,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "150", followers: "12k", following: "80" }
  },
  {
    username: "film_critic",
    fullName: "Roger E.",
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    bio: "Movies are dreams we watch awake. 🎬",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1683740129124-0b4aac921cc1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    stats: { media: "890", followers: "75k", following: "300" }
  },
  {
    username: "beach_bum",
    fullName: "Moana Waialiki",
    profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60",
    bio: "The ocean chose me. 🌊",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
      "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "400", followers: "1.2M", following: "450" }
  },
  {
    username: "science_nerd",
    fullName: "Sheldon Cooper",
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    bio: "Bazinga! Physics is fun. ⚛️",
    isFavorite: false,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "50", followers: "5k", following: "10" }
  },
  {
    username: "vintage_soul",
    fullName: "Lana Ray",
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60",
    bio: "Old soul in a modern world. 🕰️",
    isFavorite: true,
    isVerified: false,
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "330", followers: "45k", following: "110" }
  },
  {
    username: "sneaker_head",
    fullName: "Mike Jordan",
    profileImg: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
    bio: "Got kicks? 👟",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "600", followers: "100k", following: "80" }
  },
  {
    username: "last_samurai",
    fullName: "Kenji Moto",
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60",
    bio: "Discipline equals freedom. ⚔️",
    isFavorite: true,
    isVerified: true,
    gallery: [
      "https://plus.unsplash.com/premium_photo-1668480230060-98f6800c1da2?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664304810616-d1ad33171b48?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop&q=60"
    ],
    stats: { media: "120", followers: "30k", following: "10" }
  }
];

    return (
        <section className='h-fit pb-6 pt-36 flex flex-wrap items-center justify-center gap-7 w-full bg-gray-300 '>
            {
                userData.map(function (elem) {
                    return <InfluencerCard gallery={elem.gallery} username={elem.username} fullName={elem.fullName} profileImg={elem.profileImg} bio={elem.bio} isFavorite={elem.isFavorite} isVerified={elem.isVerified} stats={elem.stats} />
                })
            }
        </section>
    )
}

export default InfluencerGrid