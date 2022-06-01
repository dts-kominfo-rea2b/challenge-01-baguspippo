// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// variabel tambahan firstUser
const educationFirstUser = [
    {
        name: 'SD 01',
        city: 'Jakarta',
        graduate: 2016
    },
    {
        name: 'SMP 02',
        city: 'Jakarta',
        graduate: 2019
    },
    {
        name: 'SMA 03',
        city: 'Tangerang'
    },
];

colorFirstUser = new Set([
  "Yellow",
   "Pink",
    "White",
     "Purple"
    ]);

const favoriteRestaurantFirstUser = new Set([
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
]);

//variabel tambahan SecondUser
const educationSecondUser = [
  {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
  },
  {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
  },
  {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
  },
  {
    name: "Universitas Maju",
    city: "Tangerang",
  },
];

colorSecondUser = new Set([
  "Blue",
   "Black",
    "Grey"
  ]);

const favoriteRestaurantSecondUser = new Set([
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]);

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: Array.from(colorFirstUser),
  isHavePet: true,
  education: educationFirstUser,
  favoriteRestaurant: Array.from(favoriteRestaurantFirstUser)
};

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: Array.from(colorSecondUser),
  isHavePet: false,
  education: educationSecondUser,
  favoriteRestaurant: Array.from(favoriteRestaurantSecondUser),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
